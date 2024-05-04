import { db } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'
import IndicadosItem from '../(private)/(home)/_components/indicadosItem.tsx/indicadosItem';
import Header from '@/layout/header/header.';
import styles from "./styles.module.scss"

interface BarbershopsPageProps {
    searchParams: {
        search?: string;
    };
}

export default async function BarberShopPage({ searchParams }: BarbershopsPageProps) {

    if (!searchParams.search) {
        return redirect("/");
    }

    const barbershops = await db.barbershop.findMany({
        where: {
            name: {
                contains: searchParams.search,
                mode: "insensitive",
            },
        },
    });


    return (
        <>
            <div className=''>
                <Header />
            </div>

            <main >
                <div className='mx-auto px-5 py-10 flex flex-col gap-5
                  lg:w-[82%] lg:px-0
                  min-h-[100vh]
                ' >
                    <h2 className='font-bold text-xl'>Resultados para {`"${searchParams.search}"`}</h2>

                    {barbershops.length > 0 ? (
                        <div className={`justify-center lg:justify-normal flex flex-wrap gap-4 ${styles.slide}`}>
                            {barbershops.map((item) => (

                                <IndicadosItem key={item.id} barbershop={item} />


                            ))}
                        </div>) :
                        (
                            <p>Não foram encontrados resultados</p>
                        )}

                </div>

            </main>
        </>

    )
}
