import React from 'react';
import { db } from '@/lib/prisma';
import { Barbershop } from "@prisma/client";
import RecomendadosItem from '../recomendados_item/recomendadosItem';


export default async function Recomendados() {

    const barbershop: Barbershop[] = await db.barbershop.findMany({})

    return (
        <>
            {barbershop.length > 0 && (
                <div className='pt-6 px-5 flex flex-col gap-3'>
                    <h2 className="text-xs uppercase text-gray-400 font-bold">Recomendados</h2>
                    <div className='flex gap-4  overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                        {barbershop.map((item) => (
                            <RecomendadosItem key={item.id} barbershop={item} />
                        ))}
                    </div>

                </div>
            )}
        </>
    );
}
