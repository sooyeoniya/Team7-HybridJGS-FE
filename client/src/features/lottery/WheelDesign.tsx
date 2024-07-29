import Description from "./Description";
import Section from "./Section";

export default function WheelDesign() {
    return (
        <Section>
            <div className="w-[1200px] flex flex-col items-end">
                <Description
                    label={
                        <>
                            2가지
                            <br />휠 디자인
                        </>
                    }
                    title={<>알로이 휠에도 픽셀이 형상화되어 있어요</>}
                    description={
                        <>
                            흔히 보던 평범한 휠의 모습이 아니예요! 가볍고 강도가 좋은 알로이 휠과
                            타이어는
                            <br />
                            17인치와 15인치 모두 픽셀을 활용한 각각의 매력을 자랑해요.
                        </>
                    }
                />

                <div className="mt-[98px] flex gap-700">
                    <img
                        alt="휠 디자인 첫번째 이미지"
                        src="/assets/lottery/wheel-design-1.jpg"
                        className="w-[588px] object-cover rounded-300"
                    />
                    <img
                        alt="휠 디자인 두번째 이미지"
                        src="/assets/lottery/wheel-design-2.jpg"
                        className="w-[588px] object-cover rounded-300"
                    />
                </div>
            </div>
        </Section>
    );
}
