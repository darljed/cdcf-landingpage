import Hero from "@/components/Hero"
import MissionVision from "@/components/MissionVision"
import LocationVisit from "@/components/LocationVisit"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MissionVision />
      <LocationVisit />
      <Footer />
    </div>
  )
}