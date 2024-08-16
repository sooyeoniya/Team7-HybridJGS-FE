import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthAPI } from "@/apis/authAPI";
import Footer from "@/components/Footer";
import Notice from "@/components/Notice";
import { LOTTERY_SECTIONS } from "@/constants/PageSections/sections.ts";
import { COOKIE_KEY } from "@/constants/cookie";
import {
    CustomDesign,
    HeadLamp,
    Headline,
    Intro,
    NewColor,
    PixelDesign,
    ShortCut,
    SmileBadge,
    WheelDesign,
} from "@/features/Lottery";
import useFetch from "@/hooks/useFetch";
import useHeaderStyleObserver from "@/hooks/useHeaderStyleObserver.ts";
import usePhoneNumberDispatchContext from "@/hooks/usePhoneNumberDispatchContext";
import usePhoneNumberStateContext from "@/hooks/usePhoneNumberStateContext";
import usePopup from "@/hooks/usePopup";
import useScrollToTarget from "@/hooks/useScrollToTarget";
import useScrollTop from "@/hooks/useScrollTop";
import useToast from "@/hooks/useToast";
import { PostAuthResponse } from "@/types/authApi";
import { GetLotteryResponse } from "@/types/lotteryApi";
import { PHONE_NUMBER_ACTION } from "@/types/phoneNumber";
import { getMsTime } from "@/utils/getMsTime";

export default function Lottery() {
    useScrollTop();

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const inviteUser = queryParams.get(COOKIE_KEY.INVITE_USER);

    const lotteryData = useLoaderData() as GetLotteryResponse;

    const containerRef = useHeaderStyleObserver({
        darkSections: [LOTTERY_SECTIONS.HEADLINE, LOTTERY_SECTIONS.SHORT_CUT],
    });
    const [_cookies, setCookie] = useCookies([COOKIE_KEY.ACCESS_TOKEN, COOKIE_KEY.INVITE_USER]);

    const { targetRef, handleScrollToTarget } = useScrollToTarget<HTMLDivElement>();

    const {
        data: authToken,
        isSuccess: isSuccessGetAuthToken,
        fetchData: getAuthToken,
    } = useFetch<PostAuthResponse, string>((val: string) =>
        AuthAPI.getAuthToken({ phoneNumber: val })
    );

    const { phoneNumber } = usePhoneNumberStateContext();
    const dispatch = usePhoneNumberDispatchContext();

    const [phoneNumberState, setPhoneNumberState] = useState(phoneNumber);

    useEffect(() => {
        if (inviteUser) {
            setCookie(COOKIE_KEY.INVITE_USER, inviteUser);
        }
    }, [inviteUser]);
    useEffect(() => {
        if (authToken && isSuccessGetAuthToken) {
            setCookie(COOKIE_KEY.ACCESS_TOKEN, authToken.accessToken);
            dispatch({ type: PHONE_NUMBER_ACTION.SET_PHONE_NUMBER, payload: phoneNumberState });
            navigate("/lottery/custom");
        }
    }, [authToken, isSuccessGetAuthToken]);

    const handlePhoneNumberChange = (val: string) => {
        setPhoneNumberState(val);
    };

    const handlePhoneNumberConfirm = async (val: string) => {
        await getAuthToken(val);
    };

    const { handleOpenPopup, PopupComponent } = usePopup({
        phoneNumber: phoneNumberState,
        handlePhoneNumberChange,
        handlePhoneNumberConfirm,
    });
    const { showToast, ToastComponent } = useToast("이벤트 기간이 아닙니다");

    const handleClickShortCut = useCallback(() => {
        const startDate = getMsTime(lotteryData.eventStartDate);
        const endDate = getMsTime(lotteryData.eventEndDate);
        const currentDate = new Date().getTime();

        const isEventPeriod = currentDate >= startDate && currentDate <= endDate;

        if (isEventPeriod) {
            handleOpenPopup();
        } else {
            showToast();
        }
    }, [lotteryData]);

    return (
        <div ref={containerRef} className="h-screen overflow-x-hidden snap-y snap-mandatory">
            <Headline
                id={LOTTERY_SECTIONS.HEADLINE}
                handleClickShortCutButton={handleClickShortCut}
                handleClickScroll={handleScrollToTarget}
            />
            <Intro ref={targetRef} id={LOTTERY_SECTIONS.INTRO} />
            <HeadLamp id={LOTTERY_SECTIONS.HEADLAMP} />
            <PixelDesign id={LOTTERY_SECTIONS.PIXEL_DESIGN} />
            <WheelDesign id={LOTTERY_SECTIONS.WHEEL_DESIGN} />
            <CustomDesign id={LOTTERY_SECTIONS.CUSTOM_DESIGN} />
            <NewColor id={LOTTERY_SECTIONS.NEW_COLOR} />
            <SmileBadge id={LOTTERY_SECTIONS.SMILE_BADGE} />
            <ShortCut
                id={LOTTERY_SECTIONS.SHORT_CUT}
                handleClickShortCutButton={handleClickShortCut}
            />
            <Notice />
            <Footer />

            {PopupComponent}
            {ToastComponent}
        </div>
    );
}
