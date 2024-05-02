'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'

interface props {
  iconSize: number
}

export default function Search({ iconSize }: props) {
  const [value, setvalue] = useState<string>("")

  return (
    <>
      <Input value={value}

        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setvalue(e.currentTarget.value)
        }
        placeholder='Buscar'
        className='h-full           bg-[#1A1B1F]'

      />

      <Link href={`/search/${value}`} className='h-full'>
        <Button variant='default' size='icon' className='h-full'>
          <SearchIcon size={iconSize} />
        </Button>
      </Link>







    </>

  )
}
