import {Chapter1PageList} from "../../values";
import ChapterLayout from "../../layouts/ChapterLayout";
import {useRecoilState} from "recoil";
import {Chapter1PageState} from "../../state";

function Page1Frame() {
    const [nowPage, setNowPage] = useRecoilState(Chapter1PageState);
    
    return (
            <div className={`${(nowPage === 0) ? "" : "hidden"} overflow-scroll-y`}>
                <div className={"text-2xl font-bold mb-4"}>1. 나는 어디에서 와서 어디로 가는 인생일까요?</div>
                <div className={"mb-4"}>
                    <div className={`text-red-500 mb-2`}>[이사야 43: 1~3]</div>
                    <div className={`text-red-500`}>1 야곱아 너를 창조하신 여호와께서 지금 말씀하시느니라 이스라엘아 너를 지으신 이가 말씀하시느니라 너는 두려워하지 말라 내가 너를
                        구속하였고, 내가 너를 지명하여 불렀나니 너는 내 것이라
                    </div>
                    <div className={`text-red-500`}>2 네가 물 가운데로 지날 때에 내가 너와 함께 할 것이라 강을 건널 때에 물이 너를 침몰하지 못할 것이며 네가 불 가운데로 지날
                        때에 타지도 아니할 것이요 불꼿이 너를 사르지도 못하리니
                    </div>
                    <div className={`text-red-500`}>3 대저 나는 여호와 네 하나님이요 이스라넬의 거룩한 이요 네 구원자임이라 내가 애굽을 너의 속량물로, 구스와 스바를 너를
                        대신하여 주었노라
                    </div>
                </div>
                <div className={"mb-4"}>
                    <div>
                        유명한 승려들이 이 세상을 떠나며 남기는 한마디를 열반송이라고 합니다. 원효대사 이후에 불교의 최고승이라고 말하는 성철 스님도 마지막 죽을 떄 열반송을 남겼습니다. 한자성어로
                        기록된 그 내용을 풀이하면 다음과 같습니다. "한 평생 남녀의 무리를 속여서 하늘에 가득한 죄업이 수미산보다 더 크구나. 산 채로 무간지옥에 떨어지니 내 한이 만 갈래나 되도다.
                        태양이 붉은 빛을 토하면서 푸른 산에 걸렸구나." 참으로 충격적으로 안타까운 고백입니다. 성철 스님은 생전에 수많은 사람들을 감동시키는 분이셨지만 정작 자신이 누구인지를 몰랐기에
                        겪는 비극이었습니다.
                    </div>
                    <div>
                        "나는 어디에서 와서 어디로 가는 인생일까요?" 소크라테스 이후 온 인류에게 계속 되어온 질문이지만, 아직도 풀리지 않는 질문입니다. 그러나 "나는 왜 이 땅에 태어나서 살다가
                        죽어야 하는가? 죽음으로 모든 것이 끝나는 것일까? 아니면 죽음 이후 어떤 세계가 또 있을까?" 등의 질문에 대해 분명한 해달을 알아야 합니다. 결국 " 나는 누구인가?"를 물어볼
                        대상은 오직 하나님 뿐입니다.
                    </div>
                </div>
                <div className={"text-xl font-semibold mb-4"}>왜냐하면 그 분은 나를 창조하셨고, 나의 모든 과거와 현재와 미래까지 다 알고 계시기 떄문입니다.</div>
                <button
                    className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                    onClick={() => {setNowPage(prev=>prev+1); window.scrollTo(0, 0);}}>
                    다음 장으로 넘어가기
                </button>
            </div>
    )
}

export default Page1Frame;