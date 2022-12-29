import ChapterLayout from "../../layouts/ChapterLayout";
import content from "../../data/contents.json";
import React, { useMemo, useState } from "react";

export default function BodyPage() {
  const [problemNumber, setProblemNumber] = useState(0);

  const body = content.pages.body;

  const answerList = useMemo(() => {
    const sectionContent = body[problemNumber].section[0].sectionContent;
    return sectionContent.map((content) => {
      return content.answer;
    });
  }, [problemNumber]);

  console.log(answerList);

  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");

  const typingText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const typingText2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  return (
    <ChapterLayout chapterTitle={content.pages.introduction.chapterTitle}>
      <div className={"text-xl font-bold mb-2"}>
        {body[problemNumber].section[0].sectionTitle}
      </div>
      <div className={"mb-2 font-semibold"}>
        <div>{body[problemNumber].section[0].sectionContent[0].question}</div>
      </div>
      <div className={"mb-4"}>
        <div className={"bg-red-200 p-2 mb-2"}>
          <div>
            {
              body[problemNumber].section[0].sectionContent[0].sectionWord
                .location
            }
          </div>
          <ul>
            {body[
              problemNumber
            ].section[0].sectionContent[0].sectionWord.word.map((word) => {
              // eslint-disable-next-line react/jsx-key
              return <li>{word}</li>;
            })}
          </ul>
        </div>
        <div>
          {body[problemNumber].section[0].sectionContent[0].sectionContent}
        </div>
      </div>
      <div className={"mb-2 font-semibold"}>
        <div className={"flex"}>
          <input
            className={`w-[200px] h-[30px] border-b-2 mx-2`}
            value={value2}
            onChange={typingText2}
          />
          <div>가 멀어질 때</div>
        </div>
        <div>인간의 불행이 시작됩니다.</div>
      </div>
      <div className={"mb-4"}>
        <div className={"bg-red-200 p-2 mb-2"}>
          <div>[로마서 3: 23]</div>
          <div>
            23 모든 사람이 죄를 범하였 으매 하나님의 영광에 이르지 못하더니
          </div>
        </div>
        <div>
          사람은 하나님과 함께 행복하게 살도록 창조되었습니다. 그러나 죄를 지은
          인간이 거룩하신 하나님과 함께 하지 못하게 되었고 하나님의 축복과
          행복한 삶에서 멀어지게 되었습니다. 성경은 죄의 결과는 죽음이라고
          이야기 합니다. 죽음 이후에는 반드시 심판이 있는데 이로 인해 두려움과
          질병, 부끄러움, 우울증 등 여러 고통과 불행이 시작되었습니다. 하나님은
          사람이 불행해지는 것을 너무 마음 아파하셨습니다. 그래서 죄의 문제로
          고통 속에 있던 사람을 다시 회복시킬 수 있는 길을 만들어 주셨습니다.
        </div>
      </div>
      <button
        className={
          "w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"
        }
        onClick={() => {
          if (value2.includes("하나님")) {
            setProblemNumber((prevState) => prevState + 1);
            window.scrollTo(0, 0);
          } else {
            alert("질문에 답을 작성해주세요.");
          }
        }}
      >
        다음 장으로 넘어가기
      </button>
      <button
        className={
          "w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"
        }
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        이전 장으로 돌아가기
      </button>
    </ChapterLayout>
  );
}
