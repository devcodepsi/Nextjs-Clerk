import { SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import { getUserInfo } from "@/lib/user";
import HeaderNav from "./HeaderNav";
 
export default async function Header() {
    const getUser = await getUserInfo();
    const userName = getUser?.username;
    return (
      <header className="flex justify-between p-5 bg-gray-100 mb-5">
        <h1>My App</h1>
        <HeaderNav />
        <div>
          <SignedIn>
              <div className="flex items-center gap-2">
                  <UserButton />
                  <p>{userName}</p>
              </div>
          </SignedIn>
          <SignedOut>
            <SignInButton redirectUrl="/sign-in">로그인</SignInButton>
          </SignedOut>
        </div>
      </header>
    );
  }