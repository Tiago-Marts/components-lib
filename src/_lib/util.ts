//Usado para construir strings condicionalmente
import {type ClassValue, clsx} from "clsx"

//Usado para mesclar classes tailwind sem conflitos
import { twMerge } from "tailwind-merge"

//Recebe classes e mescla elas de forma correta
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}