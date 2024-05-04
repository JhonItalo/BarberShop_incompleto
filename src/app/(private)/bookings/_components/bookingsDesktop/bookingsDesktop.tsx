"use client"


import { cancelBooking } from '@/actions/cancelBooking';
import BookingsItem from '@/components/bookingsItem/bookingsItem'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Prisma, } from '@prisma/client'
import { format, isFuture } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';



interface BookingsDesktopProps {
  confirmed: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>[];
  finished: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>[];
}


export default function BookingsDesktop({ confirmed, finished }: BookingsDesktopProps) {

  const [bookingSelect, setBookingSelect] = useState<Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }> | null>(null)

  useEffect(() => {
    const ServiceDefault = () => {
      if (confirmed.length > 0) {
        setBookingSelect(confirmed[0])
        return
      }
      if (finished.length > 0) {
        setBookingSelect(finished[0])
        return
      }
    };

    ServiceDefault();
  }, [confirmed, finished]);

  const handleCancelClick = async () => {
    if (bookingSelect) {
      try {
        await cancelBooking(bookingSelect.id);
        toast.success("Reserva cancelada com sucesso!");
      } catch (error) {
        console.error(error);
      }

    }
  }
  const handleSelectBookingClick = (booking: any) => {
    setBookingSelect(booking)
  }

  return (
    <>
      <div>
        <h2 className='font-bold text-2xl'>Agendamentos</h2>

        <div className='mt-5 flex gap-4
        xl:gap-6
        1xl:gap-10 '>

          <div className='grow'>

            <h3 className="text-gray-400 uppercase font-bold text-sm ">Confirmados</h3>

            {confirmed.length > 0 && (
              <div className="mt-2.5 flex flex-col gap-4 relative">
                {confirmed.map((booking) => (
                  <div key={booking.id} className='relative'>
                    <BookingsItem booking={booking} />
                    <div className='w-full h-full absolute top-0 lef-0' onClick={() => handleSelectBookingClick(booking)} />
                  </div>
                ))}
              </div>

            )}

            <h3 className="mt-5 text-gray-400 uppercase font-bold text-sm ">finalizados</h3>

            {finished.length > 0 && (
              <div className="mt-2.5 flex flex-col gap-3">
                {finished.map((booking) => (
                  <div key={booking.id} className='relative'>
                    <BookingsItem booking={booking} />
                    <div className='w-full h-full absolute top-0 lef-0' onClick={() => handleSelectBookingClick(booking)} />
                  </div>
                ))}
              </div>

            )}


          </div>


          <div className='w-[320px]
          xl:w-[400px]
          1xl:w-[440px]'>
            <h3 className="uppercase font-bold text-sm invisible"> l</h3>

            {bookingSelect &&
              (<Card className='mt-2.5 p-3
                            xl:p-5'>
                <CardContent className='p-0 flex flex-col gap-5'>

                  <div className="w-full h-[180px] relative">
                    <Image src="/barbershop-map.png" fill alt={bookingSelect.barbershop.name} />

                    <div className="w-full flex justify-center absolute bottom-4 left-0">
                      <Card className='w-fit px-8 py-3 '>
                        <CardContent className="p-0 flex items-center gap-3">
                          <Avatar className='w-[48px] h-[48px]' >
                            <AvatarImage src={bookingSelect.barbershop.imageUrl} />
                          </Avatar>

                          <div>
                            <h4 className="font-bold text-base">{bookingSelect.barbershop.name}</h4>
                            <h4 className="text-sm overflow-hidden text-nowrap text-ellipsis
                                      ">{confirmed[0].barbershop.address}</h4>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2.5'>
                    <h3 className='font-bold text-sm uppercase'>sobre nós</h3>
                    <p className='text-sm text-[#838896]'>
                      Bem-vindo à {bookingSelect.barbershop.name}, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.
                    </p>
                  </div>

                  <hr />

                  <div className='flex flex-col gap-2.5'>
                    <div className='flex justify-between items-center '>
                      <div className='flex items-center gap-2.5'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 2.00012H7C5.89543 2.00012 5 2.89555 5 4.00012V20.0001C5 21.1047 5.89543 22.0001 7 22.0001H17C18.1046 22.0001 19 21.1047 19 20.0001V4.00012C19 2.89555 18.1046 2.00012 17 2.00012Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 18.0001H12.01" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-sm'>(11) 98204-5108</p>


                      </div>
                      <Button variant="secondary">Copiar</Button>

                    </div>

                    <div className='flex justify-between items-center '>
                      <div className='flex items-center gap-2.5'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 2.00012H7C5.89543 2.00012 5 2.89555 5 4.00012V20.0001C5 21.1047 5.89543 22.0001 7 22.0001H17C18.1046 22.0001 19 21.1047 19 20.0001V4.00012C19 2.89555 18.1046 2.00012 17 2.00012Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 18.0001H12.01" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-sm'>(11) 99503-2351</p>


                      </div>
                      <Button variant="secondary">Copiar</Button>

                    </div>
                  </div>

                  <hr />

                  <div className='flex flex-col gap-2.5'>

                    <Badge variant={isFuture(bookingSelect.date) ? "default" : "secondary"} className="w-fit px-2 py-[2px]">
                      {isFuture(bookingSelect.date) ? "Confirmado" : "Finalizado"}
                    </Badge>


                    <Card className="">
                      <CardContent className='p-3 gap-3 flex flex-col'>
                        <div className="flex justify-between">
                          <p className="font-bold">{bookingSelect.service.name}</p>
                          <p className="font-bold text-sm">
                            {" "}
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(bookingSelect.service.price))}
                          </p>
                        </div>


                        <div className="flex justify-between">
                          <h3 className="text-gray-400 text-sm">Data</h3>
                          <h4 className="text-sm">
                            {format(bookingSelect.date, "dd 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </h4>
                        </div>

                        <div className="flex justify-between">
                          <h3 className="text-gray-400 text-sm">Horário</h3>
                          <h4 className="text-sm">{format(bookingSelect.date, "hh:mm")}</h4>
                        </div>

                        <div className="flex justify-between">
                          <h3 className="text-gray-400 text-sm">Barbearia</h3>
                          <h4 className="text-sm">{bookingSelect.barbershop.name}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" disabled={!isFuture(bookingSelect.date)}>
                        Cancelar Reserva
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className='text-center'>Deseja mesmo cancelar essa reserva?</AlertDialogTitle>
                        <AlertDialogDescription className='text-center'>
                          Uma vez cancelada, não será possível reverter essa ação.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mt-2 flex-row gap-3">
                        <AlertDialogCancel className="w-full mt-0">Voltar</AlertDialogCancel>
                        <AlertDialogAction className="w-full" onClick={handleCancelClick}>
                          Confirmar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                </CardContent>
              </Card>

              )}


          </div>
        </div>


      </div >

    </>
  )
}
