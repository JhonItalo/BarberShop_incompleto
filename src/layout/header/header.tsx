import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import SideMenu from '../sideMenu/sideMenu'



export default function Header() {
    return (
        <header>
            <Card>
                <CardContent className='py-6 px-5 flex justify-between items-center'>
                    <Link href="/">
                        <Image src={logo} alt='Barber shop' />
                    </Link>


                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon size={16} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>

        </header >
    )
}
