import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import Search from "./_components/search/search";
import Indicados from "./_components/indicados/indicados";
import { db } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import BookingsItem from "@/components/bookingsItem/bookingsItem";


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
      <main className="pb-2">
        <div className="py-6 px-5">
          <h2 className="text-xl ">Olá, user</h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE',' dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <Search />

        <div className="mt-6 ">
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
