"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Barbershop, Booking, Service } from '@prisma/client';
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';
import { generateDayTimeList } from '../../_helpers/timeList';
import { addDays, format, setHours, setMinutes } from "date-fns";
import { Button } from '@/components/ui/button';

interface ItemPropsBarberShopServices {
  barbershop: Barbershop;
  service: Service;
  isAuthenticated: boolean;
}


export default function BarberShopServicesItem({ barbershop, service, isAuthenticated }: ItemPropsBarberShopServices) {

  const router = useRouter();

  const { data } = useSession();


  const [date, setDate] = useState<Date | undefined>(undefined);

  const [hour, setHour] = useState<string | undefined>();


  const [dayBookings, setDayBookings] = useState<Booking[]>([]);


  const handleClickDate = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  };



  const handleClickHour = (time: string) => {
    setHour(time);
  };


  const handleClickAgendamentos = () => {
    if (!isAuthenticated) {
      return signIn("google");
    }
  };

  const timeList = useMemo(() => {
    if (!date) {
      return [];
    }

    return generateDayTimeList(date).filter((time) => {

      const timeHour = Number(time.split(":")[0]);
      const timeMinutes = Number(time.split(":")[1]);

      const booking = dayBookings.find((booking) => {
        const bookingHour = booking.date.getHours();
        const bookingMinutes = booking.date.getMinutes();

        return bookingHour === timeHour && bookingMinutes === timeMinutes;
      });

      if (!booking) {
        return true;
      }

      return false;
    });
  }, [date, dayBookings]);

  return (
    <Card>
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              className="rounded-lg"
              src={service.imageUrl}
              fill
              style={{ objectFit: "contain" }}
              alt={service.name}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>

              <Sheet >
                <SheetTrigger asChild>
                  <Button variant="secondary" onClick={handleClickAgendamentos} >
                    Reservar
                  </Button>
                </SheetTrigger>

                <SheetContent className="p-0 pb-4">
                  <SheetHeader className="text-left px-5 py-6 border-b border-solid border-secondary">
                    <SheetTitle>Fazer Reserva</SheetTitle>
                  </SheetHeader>

                  <div className="py-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleClickDate}
                      locale={ptBR}
                      fromDate={addDays(new Date(), 1)}
                      styles={{
                        head: {
                          overflow: "hidden"
                        },
                        head_cell: {
                          width: "100%",
                          textTransform: "capitalize",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                        caption: {
                          textTransform: "capitalize",
                        },
                      }}
                    />
                  </div>


                  {date && (
                    <div className="flex gap-3 overflow-x-auto py-6 px-5 border-t border-solid border-secondary [&::-webkit-scrollbar]:hidden">
                      {timeList.map((time) => (
                        <Button
                          onClick={() => handleClickHour(time)}
                          variant={hour === time ? "default" : "outline"}
                          className="rounded-full flex-none"
                          key={time}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  )}


                  <div className="py-6 px-5 border-t border-solid border-secondary">
                    <Card>
                      <CardContent className="p-3 gap-3 flex flex-col">
                        <div className="flex justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <h3 className="font-bold text-sm">
                            {" "}
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(service.price))}
                          </h3>
                        </div>

                        {date && (
                          <>
                            <div className="flex justify-between">
                              <h3 className="text-gray-400 text-sm">Data</h3>
                              <h4 className="text-sm">
                                {format(date, "dd 'de' MMMM", {
                                  locale: ptBR,
                                })}
                              </h4>
                            </div>
                          </>
                        )}
                        {hour && (
                          <div className="flex justify-between">
                            <h3 className="text-gray-400 text-sm">Horário</h3>
                            <h4 className="text-sm">{hour}</h4>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <h3 className="text-gray-400 text-sm">Barbearia</h3>
                          <h4 className="text-sm">{barbershop.name}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>


                  <SheetFooter className="px-5">
                    <Button disabled={!hour || !date}>
                      Confirma reserva
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card >
  )
}
