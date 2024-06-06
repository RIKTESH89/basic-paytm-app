import { atom, selector } from "recoil";

export const userNameAtom = atom({
    key : "userNameAtom",
    default : ""
})
export const firstNameAtom = atom({
    key : "firstNameAtom",
    default : ""
})
export const lastNameAtom = atom({
    key : "lastNameAtom",
    default : ""
})
export const passwordAtom = atom({
    key : "passwordAtom",
    default : ""
})