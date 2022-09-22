import {useRecoilState} from "recoil";
import {Chapter1PageState} from "../../state";
import {useState} from "react";

function Page5Frame() {
    const [nowPage, setNowPage] = useRecoilState(Chapter1PageState);
    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    
    const typingText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    
    const typingText2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(event.target.value);
    }
    
    return (
        <div className={`${(nowPage === 4) ? "" : "hidden"} overflow-scroll-y flex flex-col justify-start items-center`}>
            <div className={"mb-40"}>
                <div className={"text-xl font-bold mb-2"}>
                    함께 나누어 보세요!
                </div>
                <div className={"mb-2 font-semibold"}>
                    <div>1. 오늘 제자양육을 통해 새롭게 깨달은 것들을 기록하고 나누어 보세요</div>
                    <div className={"flex"}>
                        <input
                            className={`w-full h-[30px] border-b-2 mx-2`}
                            value={value}
                            onChange={typingText}/>
                    </div>
                </div>
                <div className={"mb-2 font-semibold"}>
                    <div>2. 오늘 배운 내용을 누구에게 다시 전달해주고 싶나요?</div>
                    <div className={"flex"}>
                        <input
                            className={`w-full h-[30px] border-b-2 mx-2`}
                            value={value2}
                            onChange={typingText2}/>
                    </div>
                </div>
            </div>
            <div className={"text-3xl font-bold text-orange-500 mb-20"}>Let there be light!!!</div>
            <button
                className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                onClick={() => {
                    setNowPage(0);
                    window.scrollTo(0, 0);
                }}>
                처음으로
            </button>
            <button
                className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                onClick={() => {
                    setNowPage(prev => prev - 1);
                    window.scrollTo(0, 0);
                }}>
                이전 장으로 돌아가기
            </button>
        </div>
    )
}

export default Page5Frame;