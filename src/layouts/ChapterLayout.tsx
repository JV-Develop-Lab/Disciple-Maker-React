import React from "react";
import { HtmlHTMLAttributes } from "react";

type ChapterLayoutProps = HtmlHTMLAttributes<HTMLDivElement> & {
  chapterTitle: string;
};

function ChapterLayout({ children, chapterTitle }: ChapterLayoutProps) {
  return (
    <div className={`w-screen h-full overflow-y-scroll p-6 bg-gray-50`}>
      <div>{chapterTitle}</div>
      <div className="h-full">{children}</div>
      <div>셀그룹 제자양육 기초용</div>
    </div>
  );
}

export default ChapterLayout;
