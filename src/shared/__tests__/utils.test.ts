import { liveId } from "../utils";

test('should generate liveID',()=>{
    let id=liveId();
    expect(id).not.toBeNull();
    console.log(id);
})
