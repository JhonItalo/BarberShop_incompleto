import React from 'react';
import AgendamentosItem from '../agendamentos_item.tsx/agendamentosItem';

export default function Agendamentos() {
    const books = true;
    const agen = [{ id: 12 }, { id: 2 }, { id: 3 }]
    return (
        <>
            {books && (
                <div className='pt-9 px-5 flex flex-col gap-3'>
                    <h2 className="text-xs uppercase text-gray-400 font-bold">Agendamentos</h2>
                    {agen.map((booking) => (
                        <AgendamentosItem key={1} />
                    ))}
                </div>
            )}
        </>
    );
}
