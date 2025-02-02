import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import BarberShopItem from "./_components/barberShop-item";
import { db } from "./_lib/prisma";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, Sarinha</h2>
        <p>Domingo, 02 de fevereiro</p>
        <div className="flex items-center gap-2 mt-8">
          <Input placeholder="Faça a sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6 ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="banner"
          />
        </div>
        <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
          {" "}
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 p-5 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/barba.svg" />
                </Avatar>
                <p className="text-sm">Barbearia 2.0</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm"> Fevereiro</p>
              <p className="text-2xl font-semibold"> 02</p>
              <p className="text-sm"> 20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="uppercase font-bold text-xs text-gray-400 mt-6 mb-3">
          {" "}
          Recomendados
        </h2>
        <div className=" flex gap-4">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
