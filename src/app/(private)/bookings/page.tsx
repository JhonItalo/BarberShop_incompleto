import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import { db } from '@/lib/prisma';
import BookingsItem from '@/components/bookingsItem/bookingsItem';
import BookingsDesktop from './_components/bookingsDesktop/bookingsDesktop';

export default async function BookingsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const [confirmedBookings, finishedBookings] = await Promise.all([
    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          gte: new Date(),
        },
      },
      include: {
        service: true,
        barbershop: true,
      },
    }),
    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          lt: new Date(),
        },
      },
      include: {
        service: true,
        barbershop: true,
      },
    }),
  ]);

  return (

    <main>
      <div className='w-[70%] py-10 mx-auto lg:block hidden max-w-[calc(1440px*0.64)]
      xl:w-[64%]'>
        <BookingsDesktop confirmed={confirmedBookings} finished={finishedBookings} />

      </div>

      <div className="px-5 py-6 lg:hidden">
        <h1 className="text-xl font-bold mb-6">Agendamentos</h1>
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="text-gray-400 uppercase font-bold text-sm mb-3">Confirmados</h2>
            <div className="flex flex-col gap-3">
              {confirmedBookings.map((booking) => (
                <BookingsItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
        {finishedBookings.length > 0 && (
          <>
            <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">Finalizados</h2>
            <div className="flex flex-col gap-3">
              {finishedBookings.map((booking) => (
                <BookingsItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>

  )
}
