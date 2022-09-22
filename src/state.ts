import {atom} from "recoil";
import {Chapter1PageList} from "./values";

export const Chapter1PageState = atom<number>({
    key: "chapter1PageState",
    default: 0
})