import Image from "next/image";
import { Inter } from "next/font/google";
import { DropDownMenuContent, DropdownMenu, DropdownMenuTrigger } from "../components/dropdown";
import { ChevronDown } from "lucide-react" ;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="container-xl h-screen  flex flex-row items-center justify-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger> Teste </DropdownMenuTrigger>
          <DropDownMenuContent>
            Item
          </DropDownMenuContent>
        </DropdownMenu>
    </section>
  );
}
