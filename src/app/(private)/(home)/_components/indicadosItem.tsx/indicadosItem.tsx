'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { Barbershop } from "@prisma/client";
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';


interface ItemPropsIndicadosItem {
    barbershop: Barbershop;
}

export default function IndicadosItem({ barbershop }: ItemPropsIndicadosItem) {

    const router = useRouter();

    const handleClickAgendamento = () => {
        router.push(`/barbershops/${barbershop.id}`);
    };

    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className=' flex flex-col p-1' >
                <div className="w-full h-[159px] relative">
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
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary" onClick={handleClickAgendamento}>
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}