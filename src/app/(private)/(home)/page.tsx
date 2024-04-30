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
      <main className="pb-2 
      lg:pb-14">

        <div className={`w-full hidden lg:block ${styles.banner_main} 1xl:max-w-[1440px] 1xl:mx-auto`}>

          <div className=" w-[90%] mx-auto py-16 flex justify-between items-stretch 
          xl:w-[82%]  " >

            <div className={`w-[350px] flex flex-col ${confirmedBookings?.length > 0 ? "justify-between" : "gap-11"}
            xl:w-[450px]
            1xl:[440px]
            `}>

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

              <div className="flex items-center gap-2" >
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

              <div className="w-full relative">
                <button className="w-[55px] h-[55px] flex justify-center items-center rounded-full absolute top-1/2 right-[-4%] border-2 border-[#26272B]
                translate-y-[-50%]
                 z-10  bg-[#141518]
                 xl:w-[48px] xl:h-[48px]
                 ">
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.00011L12.5 12.0001L1.5 23.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>



                </button>

                <div className='w-full flex gap-2 overflow-hidden
              [&::-webkit-scrollbar]:hidden
              overflow-hidden
              xl:gap-3
              1xl:gap-4
              '>
                  {recommendedBarbershops.map((item) => (
                    <IndicadosItem key={item.id} barbershop={item} />
                  ))}
                </div>
              </div>
            </div>

          </div >
        </div >


        <div className={`w-[90%] mx-auto pt-6 hidden
        lg:block
        xl:pt-10 xl:w-[82%]
        max-w-[calc(1440px*0.82)] 1xl:mx-auto`}
        >
          <h2 className="text-xl text-white font-bold capitalize">Populares</h2>
          <div className='w-full mt-4 flex gap-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden
          xl:mt-5 xl:gap-4
          1xl:gap-5
          '>
            {barbershopsPopulars.map((item) => (
              <IndicadosItem key={item.id} barbershop={item} />
            ))}
          </div>

        </div>


        <div className="w-[90%] mx-auto pt-6 hidden
         lg:block
        xl:pt-10 xl:w-[82%]
        max-w-[calc(1440px*0.82)] 1xl:mx-auto ">
          <h2 className="text-xl text-white font-bold capitalize">Mais visitados</h2>
          <div className='w-full mt-4 flex gap-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden
          xl:mt-5 xl:gap-4
          1xl:gap-5
          '>
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
