import { Card, CardContent } from '@/components/ui/card'
import { MapPinIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


interface barbershopInfoDesktopProps {
  barbershop: any
}
export default function BarberShopInfoDesktop({ barbershop }: barbershopInfoDesktopProps) {
  return (
    <>
      <div className='w-full rounded-2xl h-[485px] relative
            xl:h-[430px]
            1xl:h-[485px]
            overflow-hidden
            '>
        <Image
          alt={barbershop.name}
          src={barbershop.imageUrl}
          style={{
            objectFit: "cover",
          }}
          fill
          className="rounded-xl"
        />
      </div>

      <div className='flex justify-between items-stretch'>
        <div className='flex flex-col gap-3 '>
          <h2 className='font-bold text-3xl capitalize'>{barbershop.name}</h2>
          <div className="flex items-center gap-2 ">
            <MapPinIcon className="text-primary" size={16} />
            <p className="text-sm">{barbershop.address}</p>
          </div>
        </div>

        <Card>
          <CardContent className='py-2.5 px-5 flex flex-col '>
            <div className="flex justify-center items-center gap-2">
              <StarIcon className="text-primary" size={20} />
              <p className='text-xl'>5.0</p>
            </div>
            <p className='text-xs'>889 avaliações</p>
          </CardContent>
        </Card>

      </div>

    </>
  )
}
