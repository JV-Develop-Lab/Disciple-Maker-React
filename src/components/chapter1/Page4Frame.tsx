import {useRecoilState} from "recoil";
import {Chapter1PageState} from "../../state";
import {useState} from "react";

function Page4Frame() {
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
        <div className={`${(nowPage === 3) ? "" : "hidden"} overflow-scroll-y`}>
            <div className={"text-xl font-bold mb-2"}>
                3. 예수 그리스도를 믿을 때 참 행복이 시작됩니다.
            </div>
            <div className={"mb-2 font-semibold"}>
                <div>예수 그리스도는</div>
                <div className={"flex"}>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value}
                        onChange={typingText}/>
                    <div> 를 위해</div>
                </div>
                <div>십자가에서 죽었습니다.</div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>이사야 53: 3~6</div>
                    <div>3 그는 멸시를 받아 사람들에게 버림 받았으며 간고를 많이 겪었스며 질고를 아는 자라 마치 사람들이 그에게서 얼굴을 가리는 것 같이 멸시를 당하였고 우리도 그를 귀히
                        여기지 아니하였도다
                    </div>
                    <div>4 그는 실로 우리의 질고를 지고 우리의 슬픔을 당하였거늘 우리는 생각하기를 그는 징벌을 받아 하나님께 맞으며 고난을 당한다 하였노라</div>
                    <div>5 그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 나음을 받았도다</div>
                    <div>6 우리는 다 양 같아서 그릇 행하여 각기 제 길로 갔거늘 여호와께서는 우리 모두의 죄악을 그에게 담당시키셨도다</div>
                </div>
                <div>
                    인간의 가장 큰 문제는 돈이 없거나, 직장이 없거나, 결혼을 하지 못하는 것이 아닙니다. 인간의 가장 큰 위기는 죄의 문제가 해결이 되지 않을 때입니다. 인간의 죄의 문제를
                    해결하기 위해서는 반드시 죽음이 필요합니다.
                </div>
                <div>
                    그래서 하나님은 예수 그리스도를 보내 주셔서 나의 죄를 위해 대신 죽게 하시고 나의 죄의 문제를 해결해 주셨습니다. 내가 받아야할 고통과 저주를 나를 대신하여 받으시고, 예수
                    그리스도의 깨끗함과 평안을 값없이 나에게 선물로 주셨습니다.
                </div>
            </div>
            <div className={"mb-2 font-semibold"}>
                <div>하나님과의 관계를 회복하는 유일한 길은</div>
                <div className={"flex"}>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value2}
                        onChange={typingText2}/>
                    <div>를 믿는 것입니다.</div>
                </div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>요한복음 14 : 6</div>
                    <div>6 예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라</div>
                </div>
                <div className={`mb-2`}>
                    당신은 이제 예수 그리스도를 알게 되었습니다. 그러나 예수 그리스도를 아는 것만으로는 부족합니다. 예수 그리스도를 믿지 않고서는 하나님의 평안과 기쁨, 행복을 맛 볼 수 없습니다.
                    죄의 문제를 해결하실 수 있는 분은 오직 예수 그리스도 한분이십니다. 예수님을 내 마음에 모셔 드리고 나의 주님, 나의 하나님으로 모셔드릴 때 하나님과의 관계가 회복되고 하나님이
                    약속하신 축복을 누릴 수 있습니다.
                </div>
            </div>
            <button
                className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                onClick={() => {
                    if (value2.includes("예수 그리스도")) {
                        setNowPage(prev => prev + 1);
                        window.scrollTo(0, 0);
                    } else {
                        alert("질문에 답을 작성해주세요.")
                    }
                }}>
                다음 장으로 넘어가기
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

export default Page4Frame;