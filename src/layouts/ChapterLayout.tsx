import {HtmlHTMLAttributes, useEffect} from "react";

type ChapterLayoutProps = HtmlHTMLAttributes<HTMLDivElement>

function ChapterLayout(props: ChapterLayoutProps){
    
    return(
        <div className={`w-screen h-full overscroll-none p-6`}>
            {props.children}
        </div>
    )
};

export default ChapterLayout;