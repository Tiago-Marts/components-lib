import Image from "next/image";
import { Inter } from "next/font/google";
import { DropDownMenuContent, DropdownMenu, DropdownMenuCheckbox, DropdownMenuItem, DropdownMenuTrigger } from "../components/dropdown";
import { ChevronDown } from "lucide-react" ;
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [checked, setChecked] = useState(false)
  function handleChecked() {
    checked? setChecked(false) : setChecked(true);
  }
  return (
    <section className="container-xl h-screen  flex flex-row items-center justify-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger> Teste </DropdownMenuTrigger>
          <DropDownMenuContent align="end" side="bottom">
            <DropdownMenuItem> Item </DropdownMenuItem>
            <DropdownMenuItem disabled> Desabilitado </DropdownMenuItem>
            <DropdownMenuCheckbox checked={checked} onClick={handleChecked}> Checkbox </DropdownMenuCheckbox>
          </DropDownMenuContent>
        </DropdownMenu>
    </section>
  );
}
