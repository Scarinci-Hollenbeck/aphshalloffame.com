import { Merriweather, Open_Sans } from 'next/font/google'

export const merriWeather = Merriweather({
  weight: ['400', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
