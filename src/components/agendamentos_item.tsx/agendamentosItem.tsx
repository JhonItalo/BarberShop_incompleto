import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Avatar, AvatarImage } from '../ui/avatar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';


export default function AgendamentosItem() {
    const isBookingConfirmed = true
    const book = { service: "corte de cabelo" }
    const barber = { name: "vintage baber", imageUrl: "ttt" }
    const bookingDate = new Date()
    return (
        <Card>
            <CardContent className='flex p-0' >
                <div className="p-3 flex flex-col flex-[3] gap-3 ">
                    <Badge variant={isBookingConfirmed ? "default" : "secondary"} className="w-fit">
                        {isBookingConfirmed ? "Confirmado" : "Finalizado"}
                    </Badge>
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-base font-bold capitalize">{book.service}</h2>

                        <div className='flex gap-2 items-center'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src='https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png' />
                            </Avatar>

                            <h3 className='text-sm capitalize'>{barber.name}</h3>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center flex-1 border-l border-solid border-secondary">
                    <p className="text-sm capitalize">
                        {format(bookingDate, "MMMM", {
                            locale: ptBR,
                        })}
                    </p>
                    <p className="text-2xl">{format(bookingDate, "dd")}</p>
                    <p className="text-sm">{format(bookingDate, "hh:mm")}</p>
                </div>
            </CardContent>
        </Card>
    )
}
