import { getUserInfo } from '@/lib/user';
import { redirect } from 'next/navigation';

export default async function Home() {
  const getUser = await getUserInfo();

  if(getUser) {
    redirect('/community');
  } else {
    redirect('/sign-in');
  }
}