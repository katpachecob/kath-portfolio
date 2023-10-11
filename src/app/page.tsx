import Image from 'next/image'
import HeaderSection from './components/HeaderSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className=' container mx-auto px-6 py-20  justify-center'>
<HeaderSection/>
<AboutSection/>
<ContactSection/>
      </div>
    </main>
  )
}
