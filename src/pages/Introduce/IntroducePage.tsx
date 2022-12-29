import React from "react";
import ChapterLayout from "../../layouts/ChapterLayout";
import content from "../../data/contents.json";

function IntroducePage() {
  const introduction = content.pages.introduction;
  return (
    <ChapterLayout chapterTitle={introduction.chapterTitle}>
      <div className={"text-2xl font-bold mb-4"}>
        {introduction.chapterTitle}
      </div>
      <div className={"mb-4"}>
        <div className={`text-red-500 mb-2`}>
          {introduction.chapterWord.location}
        </div>
        {introduction.chapterWord.word.map((word, index) => {
          return (
            <div key={word} className={`text-red-500`}>
              {word}
            </div>
          );
        })}
      </div>
      <div className={"mb-4"}>{introduction.content}</div>
      <div className={"text-xl font-semibold mb-4"}>
        {introduction.conclusion}
      </div>
      <button
        type="button"
        className={
          "w-full h-[40px] text-xl font-semibold text-White bg-amber-300 border rounded-2xl"
        }
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        다음 장으로 넘어가기
      </button>
    </ChapterLayout>
  );
}

export default IntroducePage;
