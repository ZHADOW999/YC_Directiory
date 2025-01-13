import { auth, signIn, signOut } from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const NavBar = async () => {
    const session = await auth()

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={144} height={30} />
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className='max-sm:hidden'>Create</span >
                                <BadgePlus className='size-6 sm:hidden' />
                            </Link>
                            <form action={(async () => {
                                "use server"
                                await signOut({ redirectTo: "/" });
                            })}>
                                <button type='submit' className=''>
                                    <span className='max-sm:hidden'>Logout</span >
                                    <LogOut className='size-6 sm:hidden text-red-500' />
                                </button>
                            </form>
                            <Link href={`/user/${session?.id}`}>

                                <Avatar className='size-10'>
                                    <AvatarImage src={session?.user?.image || ''} alt={session?.user.name || ''} />
                                    <AvatarFallback >
                                        <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20    20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>


                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        </>

                    ) : (
                        <form action={(async () => {
                            "use server"
                            await signIn('github');
                        })}>
                            <button type='submit' >Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default NavBar