import Button from "@/components/Buttons/Button";
import HeroButton from "@/components/Buttons/HeroButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Junge,Lato,Kalam } from 'next/font/google';
import Line from "../components/Line";
import Section from "@/components/Section";
const lato = Lato({ 
  subsets: ['latin'],
  weight:["400"],
  variable: '--font-lato',
});
const junge = Junge({ 
  subsets: ['latin'],
  weight:["400"],
  variable: '--font-junge',
});
export default function Home() {
  return (
    <main className={`${lato.variable} ${junge.variable}`}>
   <div >
      
      <Navbar />
    
    <HeroButton/>
    <Button/>
    <Line />
    <Footer/>
    <Section heading={"About"} description={"Bro hello we are optimize solution who works with web development hello we are optimize solution who works with web development in exxelent way "} />
    </div>
    </main>
  )
}
