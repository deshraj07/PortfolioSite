import { useScrollSpy } from "@/lib/use-scroll-spy";
import Hero from "./hero";

export default function HomePage() {
   useScrollSpy()
  return (
    <>
      <Hero />
    </>
  )
}
