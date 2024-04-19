'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
    return (
        <div className='px-5 flex items-center gap-2'>
            <Input placeholder='Buscar' />
            <Button variant='default' size='icon'>
                <SearchIcon size={20} />
            </Button>

        </div>
    )
}
