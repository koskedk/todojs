import { customAlphabet } from "nanoid"

export const liveId=()=>{
    const nanoid=customAlphabet('0123456789ABCDEFG',5)
    return nanoid();
}