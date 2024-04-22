import Header from "@/layout/header/header";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import Search from "./_components/search/search";
import Agendamentos from "@/components/agendamentos/agendamentos";
import Indicados from "./_components/indicados/indicados";
import { db } from '@/lib/prisma';
import { Barbershop } from "@prisma/client";


export default async function Home() {

  const barbershopRecomendados: Barbershop[] = await db.barbershop.findMany({})

  return (
    <>
      <Header />
      <main className="pb-10">
        <div className="py-6 px-5">
          <h2 className="text-xl ">Olá, user</h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE',' dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>
        <Search />
        <Agendamentos />
        <Indicados name="recomendados" listBarberShop={barbershopRecomendados} />
        <Indicados name="populares" listBarberShop={barbershopRecomendados} />
      </main >
    </>



  );
}
