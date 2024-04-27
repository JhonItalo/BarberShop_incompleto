import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import Search from "./_components/search/search";
import Indicados from "./_components/indicados/indicados";
import { db } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BookingsItem from "@/components/bookingsItem/bookingsItem";
import styles from "./styles.module.scss"
import IndicadosItem from "./_components/indicadosItem.tsx/indicadosItem";



export default async function HomePage() {

  const session = await getServerSession(authOptions);

  const [recommendedBarbershops, barbershopsPopulars, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({}),
    db.barbershop.findMany({
      orderBy: {
        id: "asc",
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
      <main className="pb-2 lg:pb-24">

        <div className={`w-full ${styles.banner_main}`}>

          <div className=" w-[82%]  mx-auto py-16 flex justify-between items-stretch   " >

            <div className={`w-[440px] flex flex-col ${confirmedBookings?.length > 0 ? "justify-between" : "gap-11"}
            xl:w-[400px]
            `}>

              <div className="">
                <h2 className="text-2xl capitalize">
                  {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Olá! Vamos agendar um corte hoje?"}
                </h2>
                <p className="mt-1 capitalize text-sm">
                  {format(new Date(), "EEEE',' dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </p>
              </div>

              <div className="flex items-center gap-2" >
                <Search iconSize={20} />
              </div>


              <div className="flex flex-col gap-5 ">
                {confirmedBookings?.length > 0 && (
                  <>
                    <h2 className="text-sm uppercase text-gray-400 font-bold">Agendamentos</h2>
                    <div className={`h-[140px] flex flex-col gap-3 overflow-y-auto
                    xl:h-[135px]
                  ${styles.booking_items}`}>
                      {confirmedBookings.map((booking) => (
                        <BookingsItem key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </>
                )}
              </div>


            </div>

            <div className="w-[624px] flex flex-2 flex-col gap-5
            xl:w-[580px]
            
            ">
              <h2 className="text-sm uppercase text-gray-400 font-bold">Recomendados</h2>
              <div className='w-full flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden
              xl:gap-3
              '>
                {recommendedBarbershops.map((item) => (
                  <IndicadosItem key={item.id} barbershop={item} />
                ))}
              </div>
            </div>

          </div >
        </div >


        <div className="w-[82%] mx-auto pt-10">
          <h2 className="text-xl text-white font-bold capitalize">Populares</h2>
          <div className='w-full mt-5 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
            {barbershopsPopulars.map((item) => (
              <IndicadosItem key={item.id} barbershop={item} />
            ))}
          </div>

        </div>


        <div className="w-[82%] mx-auto pt-10">
          <h2 className="text-xl text-white font-bold capitalize">Mais visitados</h2>
          <div className='w-full mt-5 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
            {barbershopsPopulars.map((item) => (
              <IndicadosItem key={item.id} barbershop={item} />
            ))}
          </div>

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

        <div className='px-5 flex items-center gap-2 
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
