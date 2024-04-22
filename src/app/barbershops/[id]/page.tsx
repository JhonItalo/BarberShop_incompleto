import React from 'react'
import { db } from '@/lib/prisma';
import BarberShopInfo from './_components/barberShopInfo/barberShopInfo';
import BarberShopServices from './_components/barberShopsServices/barberShopServices';

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}


export default async function BarbershopDetailsPage({ params }: BarbershopDetailsPageProps) {

    if (!params.id) {
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            service: true
        },
    });

    if (!barbershop) {
        return null;
    }
    console.log(barbershop.service)
    return (
        <>
            <BarberShopInfo barbershop={barbershop}></BarberShopInfo>
            <div className="px-5 flex flex-col gap-4 py-6">

                {barbershop.service.map((service) => (
                    <BarberShopServices key={service.id} service={service} />
                ))}
            </div>

        </>
    )
}
