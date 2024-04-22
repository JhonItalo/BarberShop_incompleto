import { Card, CardContent } from '@/components/ui/card';
import { Service } from '@prisma/client';
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ItemPropsBarberShopServices {
    service: Service;
}


export default function BarberShopServicesItem({ service }: ItemPropsBarberShopServices) {
    return (
        <Card>
            <CardContent className="p-3 w-full">
                <div className="flex gap-4 items-center w-full">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image
                            className="rounded-lg"
                            src={service.imageUrl}
                            fill
                            style={{ objectFit: "contain" }}
                            alt={service.name}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-sm text-gray-400">{service.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary text-sm font-bold">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Button variant="secondary" >
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}