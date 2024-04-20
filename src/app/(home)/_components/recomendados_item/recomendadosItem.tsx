import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

import { Barbershop } from "@prisma/client";
import { Button } from '@/components/ui/button';


interface BarbershopItemProps {
    barbershop: Barbershop;
}

export default function RecomendadosItem({ barbershop }: BarbershopItemProps) {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className=' flex flex-col p-1' >
                <div className="w-full h-[159px] relative">
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
                    <Button className="w-full mt-3" variant="secondary">
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
