import React from 'react'
import { db } from '@/lib/prisma';
import BarberShopInfo from './_components/barberShopInfo/barberShopInfo';

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
            service: true,
        },
    });

    if (!barbershop) {
        return null;
    }
    return (
        <>
            <BarberShopInfo barbershop={barbershop}></BarberShopInfo>
            teste
        </>
    )
}
