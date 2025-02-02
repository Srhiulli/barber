import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex items-center gap-2 p-3 ">
          <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-3">
            {/* {service.map => (service => )} */}
            <h3 className="font-semibold text-sm">{service.name}</h3>
            <p className="text-gray-400 text-sm ">{service.description}</p>

            <div className=" flex items-center justify-between w-full">
              <p className="font-bold text-sm text-primary">
                {" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Button variant="secondary" size="sm">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default ServiceItem;
