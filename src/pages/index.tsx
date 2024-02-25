import Image from "next/image";
import { Inter } from "next/font/google";
import { DropDownMenuContent, DropdowMenuSubTrigger, DropdownMenu, DropdownMenuCheckbox, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuTrigger } from "../components/dropdown";
import { CalendarDays, ChevronDown, Settings2 } from "lucide-react" ;
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectViewPort } from "../components/select";
import { Panel, PanelGroup, PanelHandler } from "../components/resizable-panels";
import { Checkbox } from "../components/checkbox";
import { toast, Toaster } from "../components/toast";
import { Button } from "../components/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/tooltip";
import { Switch, SwitchThumb } from "../components/switch";
import { AlertAction, AlertCancel, AlertContent, AlertDescription, AlertDialog, AlertTitle, AlertTrigger } from "../components/alert-dialog";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../components/dialog";
import { Calendar } from "../components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/popover";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/carousel";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [checked, setChecked] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

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

            

            
          </section>

          <section className="flex flex-col items-center justify-center gap-3">
            <Button variant={"primary"} size={"primary"} onClick={() => toast.success("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"primary"} size={"secondary"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"primary"} size={"sm"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"primary"} size={"xs"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>
          </section>

          <section className="flex flex-col items-center justify-center gap-3">
            <Button variant={"destructive"} size={"primary"} onClick={() => toast.info("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"destructive"} size={"secondary"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"destructive"} size={"sm"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"destructive"} size={"xs"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>
          </section>

          <section className="flex flex-col items-center justify-center gap-3">
            <Button variant={"ghost"} size={"primary"} onClick={() => toast.error("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"ghost"} size={"secondary"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"ghost"} size={"sm"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"ghost"} size={"xs"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>
          </section>

          <section className="flex flex-col items-center justify-center gap-3">
            <TooltipProvider>
              <Tooltip>
              <TooltipTrigger>
                <Button variant={"outline"} size={"primary"} onClick={() => toast.warning("Mensagem teste", {
                  description: "Teste teste teste",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo")
                  }
                })} > Teste </Button>
              </TooltipTrigger>
              <TooltipContent>
                Botão Primário
              </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant={"outline"} size={"secondary"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"outline"} size={"sm"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>

            <Button variant={"outline"} size={"xs"} onClick={() => toast("Mensagem teste", {
              description: "Teste teste teste",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo")
              }
            })} > Teste </Button>
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
            <Panel defaultSize={60} className=" h-[20rem] flex items-center justify-center gap-5"> 
            <TooltipProvider>
                <Tooltip delayDuration={200} >
                  <TooltipTrigger asChild >
                    <section>
                    <Button onClick={() => (alert("test"))} size={'primary'}> Teste </Button>
                    </section>
                  </TooltipTrigger>
                <TooltipContent side="top">
                  Botão Primário
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>



            <Switch>
              <SwitchThumb/>
            </Switch>

            <Calendar mode="single" selected={date} onSelect={setDate}/>

            <Popover>
              <PopoverTrigger asChild>
                <section>
                  <Button variant={"outline"} size={"icon"}> <CalendarDays/> </Button>
                </section>
              </PopoverTrigger>
              <PopoverContent className="bg-transparent p-0 rounded-xl" side="bottom" hasArrow={false}>
                <Calendar/>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <section>
                  <Button variant={"outline"} size={"icon"}> <Settings2/> </Button>
                </section>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                Um popover teste
              </PopoverContent>
            </Popover>

          </Panel>
            <PanelHandler withHandle/>
            <Panel defaultSize={20} className="h-[20rem] relative flex items-center justify-center gap-5">
              <AlertDialog >
                <AlertTrigger asChild> 
                  <section>
                    <Button variant={"destructive"} > Alert </Button>
                  </section>
                </AlertTrigger>
                <AlertContent>
                    <section className="texts p-3">
                      <AlertTitle> Um título teste </AlertTitle>
                      <AlertDescription> Uma descrição teste para um alerta teste</AlertDescription>
                    </section>
                    <section className="actions border-t border-neutral-800 w-full h-full grid grid-rows-2 divide-y divide-neutral-800  ">
                      <AlertCancel> Cancelar </AlertCancel>
                      <AlertAction> Ação </AlertAction>
                    </section>
                </AlertContent>
              </AlertDialog>
              <Dialog >
                <DialogTrigger asChild> 
                  <section>
                  <Button> Dialog</Button>
                  </section>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle> Um título para um modal teste </DialogTitle>
                  <DialogDescription> Uma descrição para um modal aleatório </DialogDescription>
                  <Button variant={"outline"} size={"secondary"} > Salvar</Button>
                  <DialogClose/>
                </DialogContent>
              </Dialog>
            </Panel>
            <PanelHandler withHandle/>
            <Panel defaultSize={10} className="bg-transparent">
              <PanelGroup direction="vertical"   >
                <Panel defaultSize={50} className="flex items-center justify-center p-1">
                  <Carousel className="w-full max-w-[500px]" >
                    <CarouselContent className="w-full" >
                      {Array.from({length: 5}).map((_, index) => (
                        <CarouselItem className="basis-1/3 max-w-[100px] min-w-[80px]">
                          <div className=" h-6 flex items-center justify-center rounded-full border-2 border-neutral-700">
                            <span> {index+1}</span>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                  </Carousel>
                </Panel>
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
