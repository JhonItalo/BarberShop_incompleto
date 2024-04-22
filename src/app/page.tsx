import Header from "@/layout/header/header";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import Search from "./(home)/_components/search/search";
import Agendamentos from "@/components/agendamentos/agendamentos";
import Indicados from "./(home)/_components/indicados/indicados";

import { db } from '@/lib/prisma';
import { Barbershop } from "@prisma/client";
import Footer from "@/layout/footer/footer";

export default async function Home() {

  const barbershopRecomendados: Barbershop[] = await db.barbershop.findMany({})

  return (
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

    </main>
  );
}
