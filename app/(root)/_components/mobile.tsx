import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { AlignCenter } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './global-search'

function Mobile() {
	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader>
					<Logo />
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					{navLinks.map(nav => (
						<Link
							href={`/${nav.route}`}
							key={nav.route}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20'
						>
							<nav.icon className='size-5' />
							<span>{nav.name}</span>
						</Link>
					))}

					<div className='flex items-center justify-center gap-4'>
						<GlobalSearch />
						<ModeToggle />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
