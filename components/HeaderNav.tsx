'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
    const pathname = usePathname();
    const getFirstPathname = () => pathname.split('/')[1];

    const menuList = [
        {id: 1, url: '/about', title:'About'},
        {id: 2, url: '/community', title:'Community'},
    ]

    return (
        <menu className="flex gap-8">
            {menuList.map( menu => (
                <Link 
                    key={menu.id} href={menu.url} 
                    className={getFirstPathname() === menu.title.toLowerCase() ? 'text-blue-500' : 'text-gray-300'}
                >{menu.title}</Link>
            ) )}
        </menu>
    )
}