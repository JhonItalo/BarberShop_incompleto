import React from 'react'
import { db } from '@/lib/prisma';
import BarberShopInfo from './_components/barberShopInfo/barberShopInfo';
import BarberShopServices from './_components/barberShopServices/barberShopServices';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Header from '@/layout/header/header.';
import BarberShopInfoDesktop from './_components/barberShopInfoDesktop/barberShopInfoDesktop';


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
        <div className='hidden w-[82%] mx-auto py-10 lg:flex gap-[3%]
         xl:py-8 xl:gap-[2%]
         1xl:max-w-[calc(1440px*0.82)]'>

          <div className='grow flex flex-col'>
            <div className='flex flex-col gap-5 '>
              <BarberShopInfoDesktop barbershop={barbershop} />
            </div>

            <div className='mt-10 flex flex-col gap-3 text-[#838896]'>
              <p className='text-sm font-bold uppercase'>Serviços</p>

              <div className="w-full flex flex-col flex-wrap justify-between
              xl:flex-row 
              ">
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
