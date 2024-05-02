'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React, { ElementRef, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface props {
  iconSize: number
}

export default function Search({ iconSize }: props) {
  const router = useRouter();
  const inputRef = useRef<ElementRef<"input">>(null)

  const handleSearchClick = () => {
    if (inputRef.current) {
      router.push(`/search/${inputRef.current.value}`);
    }
  }
  
  return (
    <>
      <Input ref={inputRef} name='search' placeholder='Buscar' className='bg-[#1A1B1F]' />
      <Button onClick={handleSearchClick} variant='default' size='icon'>
        <SearchIcon size={iconSize} />
      </Button>




    </>

  )
}
