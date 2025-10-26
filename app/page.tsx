import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { Gallery } from "@/components/gallery"
import { Instructors } from "@/components/instructors"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Gallery />
        <Instructors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
