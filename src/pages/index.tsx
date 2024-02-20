import Image from "next/image";
import { Inter } from "next/font/google";
import { DropDownMenuContent, DropdowMenuSubTrigger, DropdownMenu, DropdownMenuCheckbox, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuTrigger } from "../components/dropdown";
import { ChevronDown } from "lucide-react" ;
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectViewPort } from "../components/select";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [checked, setChecked] = useState(false)
  function handleChecked() {
    checked? setChecked(false) : setChecked(true);
  }
  return (
    <section className="container-xl h-screen  flex flex-row items-center justify-center gap-5">
        <DropdownMenu>
          
          <DropdownMenuTrigger> Default </DropdownMenuTrigger>
          <DropDownMenuContent align="end" side="bottom">
            <DropdownMenuLabel> Label </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem> Item </DropdownMenuItem>
            <DropdownMenuItem disabled> Desabilitado </DropdownMenuItem>
            <DropdownMenuCheckbox checked={checked} onClick={handleChecked}> Checkbox </DropdownMenuCheckbox>
            <DropdownMenuRadioGroup value="radio"> 
              <DropdownMenuRadioItem value="radio"> Radio</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSub>
              <DropdowMenuSubTrigger> Sub section </DropdowMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={10}>
                <DropdownMenuItem> Teste </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropDownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          
          <DropdownMenuTrigger variant={"ghost"}> Ghost </DropdownMenuTrigger>
          <DropDownMenuContent align="end" side="bottom">
            <DropdownMenuLabel> Label </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem> Item </DropdownMenuItem>
            <DropdownMenuItem disabled> Desabilitado </DropdownMenuItem>
            <DropdownMenuCheckbox checked={checked} onClick={handleChecked}> Checkbox </DropdownMenuCheckbox>
            <DropdownMenuRadioGroup value="radio"> 
              <DropdownMenuRadioItem value="radio"> Radio</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSub>
              <DropdowMenuSubTrigger> Sub section </DropdowMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={10}>
                <DropdownMenuItem> Teste </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropDownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          
          <DropdownMenuTrigger variant={"outline"}> Outline </DropdownMenuTrigger>
          <DropDownMenuContent align="end" side="bottom">
            <DropdownMenuLabel> Label </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem> Item </DropdownMenuItem>
            <DropdownMenuItem disabled> Desabilitado </DropdownMenuItem>
            <DropdownMenuCheckbox checked={checked} onClick={handleChecked}> Checkbox </DropdownMenuCheckbox>
            <DropdownMenuRadioGroup value="radio"> 
              <DropdownMenuRadioItem value="radio"> Radio</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSub>
              <DropdowMenuSubTrigger> Sub section </DropdowMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={10}>
                <DropdownMenuItem> Teste </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropDownMenuContent>
        </DropdownMenu>

        
        <DropdownMenu>
          
          <DropdownMenuTrigger variant={"ghost"} size={"icon"}> <ChevronDown className="h-4 aspect-square"/> </DropdownMenuTrigger>
          <DropDownMenuContent align="end" side="bottom">
            <DropdownMenuLabel> Label </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem> Item </DropdownMenuItem>
            <DropdownMenuItem disabled> Desabilitado </DropdownMenuItem>
            <DropdownMenuCheckbox checked={checked} onClick={handleChecked}> Checkbox </DropdownMenuCheckbox>
            <DropdownMenuRadioGroup value="radio"> 
              <DropdownMenuRadioItem value="radio"> Radio</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSub>
              <DropdowMenuSubTrigger> Sub section </DropdowMenuSubTrigger>
              <DropdownMenuSubContent sideOffset={10}>
                <DropdownMenuItem> Teste </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropDownMenuContent>
        </DropdownMenu>

        <Select>
          <SelectTrigger variant={"outline"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
          <SelectContent side="bottom">
            <SelectGroup>
            <SelectLabel> Label </SelectLabel>
            <SelectSeparator/>
            <SelectItem value="item1"> Item 1 </SelectItem>
            <SelectItem value="item2"> Item 2 </SelectItem>
            <SelectItem value="item3"> Item 3</SelectItem>
            <SelectItem value="item4"> Item 4 </SelectItem>
            <SelectItem value="item5"> Item 5</SelectItem>
            <SelectItem value="item6"> Item 6</SelectItem>
            <SelectItem value="item7"> Item 7</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
    </section>
  );
}
