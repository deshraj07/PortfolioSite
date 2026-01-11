import { useTabChangeStore } from "@/store/tab.store";
import { useEffect } from "react"

const SECTION_IDS = ["home", "about", "education", "skills", "projects", "contact"]

export function useScrollSpy() {
  const { changeTab } = useTabChangeStore();
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            window.history.replaceState(null, "", `#${id}`)
            changeTab('#' + id)
          }
        })
      },
      {
        threshold: 0.6 // 60% visible
      }
    )

    sections.forEach((section) => observer.observe(section!))

    return () => observer.disconnect()
  }, [])
}
