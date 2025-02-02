import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <>
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
    </>
  );
};
export default BookingItem;
