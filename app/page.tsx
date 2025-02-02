import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
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
      </div>
    </div>
  );
}
