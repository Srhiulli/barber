import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
// import { Sheet, SheetTrigger } from "./ui/sheet"
// import SidebarSheet from "./sidebar-sheet"
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>

        {/* <Sheet>
          <SheetTrigger asChild>
           
          </SheetTrigger>
          <SidebarSheet />
        </Sheet> */}
      </CardContent>
    </Card>
  );
};

export default Header;
