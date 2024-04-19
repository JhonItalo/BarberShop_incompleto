import Header from "@/layout/header/header";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-6 px-5">
        <h2 className="text-xl ">Olá, user</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>


    </main>
  );
}
