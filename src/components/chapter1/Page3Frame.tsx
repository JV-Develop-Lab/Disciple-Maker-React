import {useRecoilState} from "recoil";
import {Chapter1PageState} from "../../state";
import {useState} from "react";

function Page3Frame() {
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
        <div className={`${(nowPage === 2) ? "" : "hidden"} overflow-scroll-y`}>
            <div className={"text-xl font-bold mb-2"}>
                2. 사람의 불행이 어디에서 왔을까요?
            </div>
            <div className={"mb-2 font-semibold"}>
                <div>사단의 유혹으로</div>
                <div className={"flex"}>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value}
                        onChange={typingText}/>
                    <div> 가</div>
                </div>
                <div>시작되었습니다.</div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>창세기 3: 1~4</div>
                    <div>
                        1 그런데 뱀은 여호와 하나님이 지으신 들짐승 중에 가장 간교하니라 뱀이 여자에게 물어 이르되 하나님이 참으로 너희에게 동산 모든 나무의 열매를 먹지 말라 하시더냐
                    </div>
                    <div>2 여자가 뱀에게 말하되 동산 나무의 열매를 우리가 먹을 수 있으나</div>
                    <div>3 동산 중앙에 있는 나무의 열매는 하나님의 말씀에 너희는 먹지도 말고 만지지도 말라 너희가 죽을까 하노라 하셨느니라</div>
                    <div>4 뱀이 여자에게 이르되 너희가 결코 죽지 아니하 리라</div>
                </div>
                <div>
                    하나님은 에덴동산을 만드시고 모든 동물과 식물을 사람이 다스릴 수 있도록 하셨습니다. 다만 동산 중앙에 있는 선악과만은 절대 먹지 말라고 하셨습니다. 사단은 하와를 유혹하여 선악과를 따먹게 하고 하나님의 명령을 지키지 못하게 만들었습니다.
                    결국 하나님께 불순종하였던 아담과 하와는 하나님과 함께하던 에덴동산에서 쫓겨나게 되었고 고통스런 죄의 문제가 시작되었습니다.
                </div>
            </div>
            <div className={"mb-2 font-semibold"}>
                <div className={"flex"}>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value2}
                        onChange={typingText2}/>
                    <div>가 멀어질 때</div>
                </div>
                <div>인간의 불행이 시작됩니다.</div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>[로마서 3: 23]</div>
                    <div>23 모든 사람이 죄를 범하였 으매 하나님의 영광에 이르지 못하더니</div>
                </div>
                <div>
                    사람은 하나님과 함께 행복하게 살도록 창조되었습니다.
                    그러나 죄를 지은 인간이 거룩하신 하나님과 함께 하지 못하게 되었고 하나님의 축복과 행복한 삶에서 멀어지게 되었습니다.
                    성경은 죄의 결과는 죽음이라고 이야기 합니다. 죽음 이후에는 반드시 심판이 있는데 이로 인해 두려움과 질병, 부끄러움, 우울증 등 여러 고통과 불행이 시작되었습니다.
                    하나님은 사람이 불행해지는 것을 너무 마음 아파하셨습니다. 그래서 죄의 문제로 고통 속에 있던 사람을 다시 회복시킬 수 있는 길을 만들어 주셨습니다.
                </div>
            </div>
            <button
                className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                onClick={() => {
                    if (value2.includes("하나님")&&value2.includes("관계")) {
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

export default Page3Frame;