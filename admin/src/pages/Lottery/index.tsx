import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LotteryAPI } from "@/apis/lotteryAPI";
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import TabHeader from "@/components/TabHeader";
import Table from "@/components/Table";
import TimePicker from "@/components/TimePicker";
import { STATUS_MAP } from "@/constants/common";
import { LOTTERY_HEADER } from "@/constants/lottery";
import useFetch from "@/hooks/useFetch";
import { LotteryEventType } from "@/types/lottery";
import { PostLotteryResponse } from "@/types/lotteryApi";
import { getDateDifference } from "@/utils/getDateDifference";

export default function Lottery() {
    const navigate = useNavigate();

    const lotteryData = useLoaderData() as LotteryEventType[];
    const [lottery, setLottery] = useState<LotteryEventType>({} as LotteryEventType);

    const { isSuccess: isSuccessPostLottery, fetchData: postLottery } =
        useFetch<PostLotteryResponse>(() =>
            LotteryAPI.postLottery({
                startDateTime: `${lottery.startDate} ${lottery.startTime}`,
                endDateTime: `${lottery.endDate} ${lottery.endTime}`,
                winnerCount: lottery.winnerCount,
            })
        );

    useEffect(() => {
        if (lotteryData.length !== 0) {
            setLottery(lotteryData[0]);
        }
    }, []);
    useEffect(() => {
        if (isSuccessPostLottery) {
            // TODO: toast 메시지
        }
    }, [isSuccessPostLottery]);

    const handleChangeItem = (key: string, text: string | number) => {
        setLottery({ ...lottery, [key]: text });
    };

    const getLotteryData = () => {
        return [
            [
                <DatePicker
                    date={lottery.startDate}
                    onChangeDate={(date) => handleChangeItem("startDate", date)}
                />,
                <TimePicker
                    time={lottery.startTime}
                    onChangeTime={(time) => handleChangeItem("startTime", time)}
                />,
                <DatePicker
                    date={lottery.endDate}
                    onChangeDate={(date) => handleChangeItem("endDate", date)}
                />,
                <TimePicker
                    time={lottery.endTime}
                    onChangeTime={(time) => handleChangeItem("endTime", time)}
                />,
                getDateDifference(lottery.startDate, lottery.endDate),
                <div className="border-b flex w-full">
                    <input
                        value={lottery.winnerCount}
                        onChange={(e) =>
                            handleChangeItem("winnerCount", parseInt(e.target.value) || 0)
                        }
                    />
                </div>,
                STATUS_MAP[lottery.status],
            ],
        ];
    };

    const handleUpdate = () => {
        postLottery();
    };

    return (
        <div className="flex flex-col items-center h-screen">
            <TabHeader />

            <div className="flex flex-col h-full items-center justify-center gap-8 pb-40">
                <Table headers={LOTTERY_HEADER} data={getLotteryData()} height="auto" />

                <div className="self-end flex gap-4">
                    <Button buttonSize="sm" onClick={() => navigate("/lottery/participant-list")}>
                        참여자 리스트 보러가기
                    </Button>
                    <Button buttonSize="sm" onClick={() => navigate("/lottery/winner-list")}>
                        당첨자 보러가기
                    </Button>
                </div>

                <Button buttonSize="lg" onClick={handleUpdate}>
                    수정사항 업데이트
                </Button>
            </div>
        </div>
    );
}
