import React from 'react';
import { Barbershop } from "@prisma/client";
import IndicadosItem from '../indicadosItem.tsx/indicadosItem';

interface ItemPropsIndicados {
    name: string
    listBarberShop: Barbershop[];
}

export default async function Indicados({ name, listBarberShop }: ItemPropsIndicados) {
    return (
        <>
            {listBarberShop.length > 0 && (
                <div className='py-4 px-5 flex flex-col gap-3  '>
                    <h2 className="text-xs uppercase text-gray-400 font-bold">{name}</h2>
                    <div className='flex gap-4  overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                        {listBarberShop.map((item) => (
                            <IndicadosItem key={item.id} barbershop={item} />
                        ))}
                    </div>

                </div>
            )}
        </>
    );
}
