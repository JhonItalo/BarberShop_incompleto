import React from 'react'
import { db } from '@/lib/prisma';
import BarberShopInfo from './_components/barberShopInfo/barberShopInfo';
import BarberShopServices from './_components/barberShopServices/barberShopServices';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Header from '@/layout/header/header';
import BarberShopInfoDesktop from './_components/barberShopInfoDesktop/barberShopInfoDesktop';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import BarberShopDetails from './_components/barberShopdetails/barberShopDetails';


interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}


export default async function BarbershopDetailsPage({ params }: BarbershopDetailsPageProps) {
    const session = await getServerSession(authOptions);

    if (!params.id) {
        return null;
    }


    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true
        },
    });

    if (!barbershop) {
        return null;
    }
    return (
        <>
            <div className='hidden lg:block'>
                <Header />
            </div>

            <main>
                <div className='hidden w-[90%] mx-auto py-10 lg:flex justify-between
            
                xl:py-8 xl:w-[82%]
                1xl:max-w-[calc(1440px*0.82)]
                
                '>

                    <div className='w-[500px] flex flex-col
                  
                    xl:w-[715px]
                    1xl:w-[760px]
                    '>
                        <div className='flex flex-col gap-5 '>
                            <BarberShopInfoDesktop barbershop={barbershop} />
                        </div>

                        <div className='mt-10 flex flex-col gap-3 text-[#838896]
]'>
                            <p className='text-sm font-bold uppercase'>Serviços</p>

                            <div className="w-full flex flex-wrap justify-between">
                                {barbershop.services.map((service) => (
                                    <BarberShopServices
                                        key={service.id}
                                        barbershop={barbershop}
                                        service={service}
                                        isAuthenticated={!!session?.user} />
                                ))}
                            </div>

                        </div>




                    </div>


                    <BarberShopDetails barbershop={barbershop} />


                </div>



























                <BarberShopInfo barbershop={barbershop} />

                <div className="px-5 flex flex-col gap-4 py-6
                lg:hidden
">
                    {barbershop.services.map((service) => (
                        <BarberShopServices
                            key={service.id}
                            barbershop={barbershop}
                            service={service}
                            isAuthenticated={!!session?.user} />
                    ))}
                </div>

            </main>






























        </>
    )
}
