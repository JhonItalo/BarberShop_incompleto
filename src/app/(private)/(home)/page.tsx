import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

import Indicados from "./_components/indicados/indicados";
import { db } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BookingsItem from "@/components/bookingsItem/bookingsItem";
import styles from "./styles.module.scss"
import IndicadosItem from "./_components/indicadosItem.tsx/indicadosItem";
import SlideIndicados from "@/components/slideIndicados/slideIndicados";
import Search from "@/components/search/search";
import Image from "next/image";



export default async function HomePage() {

  const session = await getServerSession(authOptions);

  const [recommendedBarbershops, barbershopsPopulars, barbershopsMostViwwed, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({}),
    db.barbershop.findMany({
      orderBy: {
        id: "asc",
      },
    }),
    db.barbershop.findMany({
      orderBy: {
        id: "desc",
      },
    }),
    session?.user
      ? db.booking.findMany({
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
      })
      : Promise.resolve([]),
  ]);

  return (
    <>
      <main className="pb-2 
      lg:pb-14">

        <div className={`w-full hidden relative lg:block 
         1xl:max-w-[1440px] 1xl:mx-auto`}>

          <Image
            alt="background"
            src="/backgournd-bannermain.jpg"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              opacity: 0.3,
              zIndex: -1
            }}
            fill
            className="rounded-xl"
          />



          <div className=" w-[82%] mx-auto py-16 flex gap-[7%] items-stretch 
          xl:gap-[8%]
          1xl:gap-[10%]  " >

            <div className={`grow flex flex-col ${confirmedBookings?.length > 0 ? "justify-between" : "gap-11"} `}>

              <div className="">
                <h2 className="text-2xl capitalize">
                  {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Olá! Faça seu login"}
                </h2>
                <p className="mt-1 capitalize text-sm">
                  {format(new Date(), "EEEE',' dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </p>
              </div>

              <div className="flex items-center gap-2 h-[36px]" >
                <Search iconSize={20} />
              </div>


              <div className="flex flex-col gap-5 ">
                {confirmedBookings?.length > 0 && (
                  <>
                    <h2 className="text-sm uppercase text-gray-400 font-bold">Agendamentos</h2>
                    <div className={`h-[115px] flex flex-col gap-3 overflow-y-auto
                    xl:h-[130px] pr-1
                  ${styles.booking_items}`}>
                      {confirmedBookings.map((booking) => (
                        <BookingsItem key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </>
                )}
              </div>


            </div>

            <div className="w-[490px] flex flex-2 flex-col gap-3
            xl:w-[580px] xl:gap-5
            1xl:w-[624px]
            ">
              <h2 className="text-sm uppercase text-gray-400 font-bold">Recomendados</h2>

              <SlideIndicados
                buttonPosition="-4%"
                className="w-full flex gap-2 [&::-webkit-scrollbar]:hidden overflow-hidden 
                xl:gap-3
                1xl:gap-4
              ">
                {recommendedBarbershops.map((item) => (
                  <IndicadosItem key={item.id} barbershop={item} />
                ))}
              </SlideIndicados >
            </div>

          </div >
        </div >


        <div className={`w-[82%] mx-auto pt-6 hidden
        lg:block
        xl:pt-10 
        max-w-[calc(1440px*0.82)] 1xl:mx-auto`}
        >
          <h2 className="text-xl text-white font-bold capitalize">Populares</h2>

          <SlideIndicados
            buttonPosition="-2%"
            scrollMove={1}
            className='w-full mt-4 flex gap-2.5 overflow-x-hidden [&::-webkit-scrollbar]:hidden
            xl:mt-5 xl:gap-4
            1xl:gap-5
          '>
            {barbershopsPopulars.map((item) => (
              <IndicadosItem key={item.id} barbershop={item} />
            ))}
          </ SlideIndicados>
        </div>


        <div className="w-[82%]  mx-auto pt-6 hidden
        lg:block
        xl:pt-10 
        max-w-[calc(1440px*0.82)] 1xl:mx-auto ">

          <h2 className="text-xl text-white font-bold capitalize">Mais visitados</h2>

          <SlideIndicados
            buttonPosition="-2%"
            scrollMove={1}
            className='w-full mt-4 flex gap-2.5 overflow-x-hidden [&::-webkit-scrollbar]:hidden
            xl:mt-5 xl:gap-4
            1xl:gap-5
          '>
            {barbershopsMostViwwed.map((item) => (
              <IndicadosItem key={item.id} barbershop={item} />
            ))}
          </SlideIndicados>

        </div>









        <div className="py-6 px-5 lg:hidden">
          <h2 className="text-xl font-bold capitalize">
            {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Olá! Vamos agendar um corte hoje?"}
          </h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE',' dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <div className='px-5 h-[35px] flex items-center gap-2
        lg:hidden' >
          <Search iconSize={20} />
        </div>


        <div className="mt-6 lg:hidden ">
          {confirmedBookings?.length > 0 && (
            <>
              <h2 className="pl-5 text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
              <div className="px-5 mb-4 flex flex-col gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {confirmedBookings.map((booking) => (
                  <BookingsItem key={booking.id} booking={booking} />
                ))}
              </div>
            </>
          )}
        </div>

        <Indicados name="recomendados" listBarberShop={recommendedBarbershops} />
        <Indicados name="populares" listBarberShop={barbershopsPopulars} />
      </main >
    </>



  );
}
