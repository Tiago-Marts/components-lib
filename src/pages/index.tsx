import Image from "next/image";
import { Inter } from "next/font/google";
import { DropDownMenuContent, DropdowMenuSubTrigger, DropdownMenu, DropdownMenuCheckbox, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuTrigger } from "../components/dropdown";
import { ChevronDown } from "lucide-react" ;
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectViewPort } from "../components/select";
import { Panel, PanelGroup, PanelHandler } from "../components/resizable-panels";
import { Checkbox } from "../components/checkbox";
import { toast, Toaster } from "../components/toast";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [checked, setChecked] = useState(false)
  function handleChecked() {
    checked? setChecked(false) : setChecked(true);
  }
  return (
    <>
      <Toaster/>
      <section className="container-xl h-screen  flex flex-col items-center justify-center gap-5">
        
        <section className="w-full flex flex-row items-center justify-center gap-5">
          <section className="flex flex-col items-center justify-center gap-3">
            <DropdownMenu>
              
              <DropdownMenuTrigger size={"icon"}> <ChevronDown className="h-5"/> </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger size={"sm"}> Default </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger size={"xs"}> Default </DropdownMenuTrigger>
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
          </section>

          <section className="flex flex-col items-center justify-center gap-3">
            <DropdownMenu>
              
              <DropdownMenuTrigger variant={"ghost"} size={"icon"}> <ChevronDown className="h-5"/> </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger variant={"ghost"} > Ghost </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger variant={"ghost"} size={"sm"}> Ghost </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger variant={"ghost"} size={"xs"}> Ghost </DropdownMenuTrigger>
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
          </section>


          <section className="flex flex-col items-center justify-center gap-3">
            <DropdownMenu>
              
              <DropdownMenuTrigger variant={"outline"} size={"icon"} > <ChevronDown className="h-5"/> </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger variant={"outline"} size={"sm"}> Outline </DropdownMenuTrigger>
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
              
              <DropdownMenuTrigger variant={"outline"} size={"xs"}> Outline </DropdownMenuTrigger>
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

            
            <button onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })}> Teste </button>
          </section>


        </section>

        <section className="flex flex-row w-full items-center justify-center gap-5">
          <section className="flex flex-col items-center justify-center gap-3">
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

          <Select>
            <SelectTrigger variant={"outline"} size={"sm"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <Select>
            <SelectTrigger variant={"outline"} size={"xs"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <section className="flex flex-col items-center justify-center gap-3">
          <Select>
            <SelectTrigger variant={"default"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <Select>
            <SelectTrigger variant={"default"} size={"sm"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <Select>
            <SelectTrigger variant={"default"} size={"xs"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <section className="flex flex-col items-center justify-center gap-3">
          <Select>
            <SelectTrigger variant={"ghost"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <Select>
            <SelectTrigger variant={"ghost"} size={"sm"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <Select>
            <SelectTrigger variant={"ghost"} size={"xs"}> <SelectValue placeholder="Clique aqui"/> </SelectTrigger>
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

          <section>
            <Checkbox/> 
          </section>

        </section>

        <section className="w-full">
          <PanelGroup direction="horizontal" >
            <Panel defaultSize={60} className=" h-[20rem]"></Panel>
            <PanelHandler withHandle/>
            <Panel defaultSize={20} className="h-[20rem]"></Panel>
            <PanelHandler withHandle/>
            <Panel defaultSize={10} className="bg-transparent">
              <PanelGroup direction="vertical"   >
                <Panel defaultSize={50} ></Panel>
                <PanelHandler withHandle/>
                <Panel defaultSize={40}></Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </section>

      </section>
    </>
  );
}
