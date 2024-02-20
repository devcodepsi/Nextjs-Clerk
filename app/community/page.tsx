import { getUserInfo } from "@/lib/user";
import Image from "next/image";

export default async function CommunityPage() {
    const getUser = await getUserInfo();
    const userName = getUser?.username;
    const userImage = getUser?.imageUrl;
    return (
        <>
            <p>comm</p>
            <p>{userName}</p>
            <div className="w-[30px] h-[30px]">
                <Image
                    src={userImage as string}
                    alt={userName as string}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    fill
                    className="object-contain"
                />
            </div>
        </>
    );
}
