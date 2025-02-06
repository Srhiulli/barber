"use client";

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast, Toaster } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    toast.success("Copiado para o clipboard");
    navigator.clipboard.writeText(phone);
  };

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Toaster />
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
