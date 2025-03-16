'use client'

import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import GlobalSearch from './global-search'

function Navbar() {
	return (
		<div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<Logo />
					<div className='flex items-center gap-3 border-l pl-2'>
						{navLinks.map(nav => (
							<Link
								href={`/${nav.route}`}
								key={nav.route}
								className='font-medium transition-all hover:text-blue-500 hover:underline'
							>
								{nav.name}
							</Link>
						))}
					</div>
				</div>

				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-2 border-r pr-3'>
						<GlobalSearch />
						<ModeToggle />
					</div>
					<SignedIn>
						<UserBox />
					</SignedIn>
					<SignedOut>
						<SignInButton mode='modal'>
							<Button variant={'ghost'} size={'lg'} rounded={'full'}>
								Log in
							</Button>
						</SignInButton>
						<SignUpButton mode='modal'>
							<Button size={'lg'} rounded={'full'}>
								Sign Up
							</Button>
						</SignUpButton>
					</SignedOut>
				</div>
			</div>
		</div>
	)
}

export default Navbar
