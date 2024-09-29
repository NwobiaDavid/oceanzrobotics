"use client"
import { Inter, Roboto_Mono, Luckiest_Guy, Black_Han_Sans, Lato } from 'next/font/google'
 
export const inter_init = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono_init = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const Luckiest_Guy_init = Luckiest_Guy({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
})

export const Black_Han_Sans_init = Black_Han_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
})

export const Lato_init = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
})


export const roboto_mono = roboto_mono_init.className.toString();
export const luckiest_guy = Luckiest_Guy_init.className;
export const black_han_sans = Black_Han_Sans_init.className;
export const lato = Lato_init.className;