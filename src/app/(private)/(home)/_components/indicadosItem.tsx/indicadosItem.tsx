'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { Barbershop } from "@prisma/client";
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';
import Link from 'next/link'


interface ItemPropsIndicadosItem {
    barbershop: Barbershop;
}

export default function IndicadosItem({ barbershop }: ItemPropsIndicadosItem) {

    const router = useRouter();

    const handleClickAgendamento = () => {
        router.push(`/barbershops/${barbershop.id}`);
    };

    return (
        <Card className="w-[167px] rounded-2xl flex-none
         lg:w-[180px]
         xl:w-[208px]
         1xl:w-[220px]
         
         ">
            <CardContent className='flex flex-col p-1' >

                <div className="w-full h-[159px] relative
                 lg:h-[160px] lg:p-1
                 xl:h-[163px]">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                            <StarIcon size={12} className="fill-primary text-primary" />
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        alt={barbershop.name}
                        src={barbershop.imageUrl}
                        style={{
                            objectFit: "cover",
                        }}
                        fill
                        className="rounded-2xl"
                    />

                </div>

                <div className="px-2 pb-3 lg:p-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap lg:mt-0">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap lg:mt-2">{barbershop.address}</p>
                    <Link href={`/barbershops/${barbershop.id}`}>
                        <Button className="w-full mt-3 lg:text-sm lg:font-bold" variant="secondary">
                            Reservar
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
