'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

interface props {
    iconSize: number
}

export default function Search({ iconSize }: props) {
    return (
        <>
            <Input placeholder='Buscar' className='bg-[#1A1B1F]' />
            <Button variant='default' size='icon'>
                <SearchIcon size={iconSize} />
            </Button>

        </>

    )
}
