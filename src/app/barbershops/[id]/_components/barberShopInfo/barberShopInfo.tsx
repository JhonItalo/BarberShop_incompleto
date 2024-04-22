"use client"
import React from 'react'
import Image from 'next/image'
import { Barbershop } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ItemPropsBarberShopInfo {
    barbershop: Barbershop;
}

export default function BarberShopInfo({ barbershop }: ItemPropsBarberShopInfo) {

    const router = useRouter();

    const handleBackClick = () => {
        router.replace("/");
    };

    return (
        <header>
            <div className='w-full h-[250px] relative'>
                <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                    <ChevronLeftIcon />
                </Button>
                <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                    <MenuIcon />
                </Button>
                <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{ objectFit: "cover" }}
                    className="opacity-75" />
            </div>

            <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18} />
                    <p className="text-sm">5,0 (899 avaliações)</p>
                </div>
            </div>
        </header>
    )
}