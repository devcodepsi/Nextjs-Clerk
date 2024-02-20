import { currentUser } from "@clerk/nextjs";

export async function getUserInfo() {
    const user = await currentUser();
    if(!user) {
        return null;
    } 
    return user;
}
