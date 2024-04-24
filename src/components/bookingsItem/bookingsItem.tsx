"use client"
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Avatar, AvatarImage } from '../ui/avatar'
import { format, isFuture } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { Prisma } from '@prisma/client'


interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true;
            barbershop: true;
        };
    }>;
}

export default function BookingsItem({ booking }: BookingItemProps) {

    const [isDeleteLoading, setIsDeleteLoading] = useState(false);

    const isBookingConfirmed = isFuture(booking.date);


    return (
        <Card>
            <CardContent className='flex p-0' >
                <div className="p-3 flex flex-col flex-[3] gap-3 ">
                    <Badge variant={isBookingConfirmed ? "default" : "secondary"} className="w-fit">
                        {isBookingConfirmed ? "Confirmado" : "Finalizado"}
                    </Badge>
                    <div className='flex flex-col gap-2'>
                        <h2 className="text-base font-bold capitalize">{booking.service.name}</h2>

                        <div className='flex gap-2 items-center'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src={booking.barbershop.imageUrl} />
                            </Avatar>

                            <h3 className='text-sm capitalize'>{booking.barbershop.name}</h3>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center flex-1 border-l border-solid border-secondary">
                    <p className="text-sm capitalize">
                        {format(booking.date, "MMMM", {
                            locale: ptBR,
                        })}
                    </p>
                    <p className="text-2xl">{format(booking.date, "dd")}</p>
                    <p className="text-sm">{format(booking.date, "hh:mm")}</p>
                </div>
            </CardContent>
        </Card>
    )
}
