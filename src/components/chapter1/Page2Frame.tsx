import {useRecoilState} from "recoil";
import {Chapter1PageState} from "../../state";
import {useState} from "react";

function Page2Frame() {
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
        <div className={`${(nowPage === 1) ? "" : "hidden"} overflow-scroll-y`}>
            <div className={"mb-6"}>
                <div className={`text-red-500`}>
                    인간은 행복하기를 원합니다. 행복은 어디에서 찾을 수 있을까요? 돈과 명예, 많은 지식은 사람들에게 잠깐의 행복을 줄 수 있지만 영원한 행복을 줄 수는 없습니다. 사람은 인생의
                    가치를 발견하면서 살 때 가장 큰 행복을 느낍니다. 가치 있는 삶을 살기 위해서는 가장 먼저 내가 누구인지 알 때 그 목적대로 살 수 있습니다.
                </div>
            </div>
            <div className={"text-xl font-bold mb-2"}>
                1. 나는 누구일까요?
            </div>
            <div className={"mb-2 font-semibold"}>
                <div className={"flex"}>
                    <div>나는</div>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value}
                        onChange={typingText}/>
                    <div> 대로</div>
                </div>
                <div>창조된 최고의 작품입니다.</div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>창세기 1: 26~27</div>
                    <div>26 하나님이 이르시되 우리의 형상을 따라 우리의 모양대로 우리가 사람을 만들고 그들로 바다의 물보기와 하늘의 새와 가축과 온 땅과 땅에 디는 모든 것을 다스리게 하자
                        하시고
                    </div>
                    <div>27 하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고</div>
                </div>
                <div>
                    하나님은 세상을 만드시고 하늘의 새와 바다의 물고기와 모든 동물을 만드셨습니다. 하나님이 만드신 많은 창조물 중에 가치 있는 삶을 살기를 원하는 존재는 오직 사람 뿐입니다.
                    왜냐하면 사람은 하나님의 형상을 따라 창조되었기 때문입니다. 하나님의 형상을 따라 지음 받은 사람이기에 하나님의 성품과 능력, 사랑, 의지를 가지고 있습니다. 그러므로 나는
                    세상에서 가장 가치 있고 존귀한 사람입니다. 세상에서 가장 아름다운 최고의 작품은 바로"나"입니다.
                </div>
            </div>
            <div className={"mb-2 font-semibold"}>
                <div>나는 하나님이 복 주시기를 원하시는</div>
                <div className={"flex"}>
                    <input
                        className={`w-[200px] h-[30px] border-b-2 mx-2`}
                        value={value2}
                        onChange={typingText2}/>
                    <div>입니다.</div>
                </div>
            </div>
            <div className={"mb-4"}>
                <div className={"bg-red-200 p-2 mb-2"}>
                    <div>민수기 6: 24~26</div>
                    <div>24 여호와는 네게 복을 주시고 너를 지키시기를 원하며</div>
                    <div>25 여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며</div>
                    <div>26 여호와는 그 얼굴을 네게로 향하여 드가 평강 주시기를 원하노라</div>
                </div>
                <div className={`mb-2`}>
                    나는 사랑받기 위해 태어난 사람입니다. 하나님은 끊임없이 복을 주길 원하시며, 나를 지켜주기를 원하십니다. 어떤 어려움이 와도 내가 평안하기를 원하시며 나를 돕기를 원하시는 분이
                    바로 하나님이십니다. 혹시 이해할 수 없는 문제로 어려움을 겪고 계십니까? 남들이 모르는 아픔과 외로움으로 혼자 힘들어 하고 있지는 않나요? 하나님은 언제나 나와 함께하기를
                    원하시고 나를 축복하시는 분임을 기억하세요.
                </div>
                <div className={"text-red-400"}>'너의 하나님 여호와가 너의 가운데에 계시니 그는 구원을 베푸실 전능자이시라 그가 너로 말미암아 기쁨을 이기지 못하시며 너를 잠잠히 사랑하시며 너로 말미암아 즐거이 부르며 기뻐하시리라 하리라' (스바냐 3:17)</div>
            </div>
            <button
                className={"w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"}
                onClick={() => {
                    if (value2.includes("축복")) {
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

export default Page2Frame;