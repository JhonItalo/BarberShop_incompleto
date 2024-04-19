import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'



export default function Header() {
    return (
        <header>
            <Card>
                <CardContent className='py-6 px-5 flex justify-between items-center'>
                    <Image src={logo} alt='Barber shop' />
                    <Button className='w-8 h-8' variant="outline" size='icon'>
                        <MenuIcon size={18} />
                    </Button>
                </CardContent>

            </Card>

        </header >
    )
}
