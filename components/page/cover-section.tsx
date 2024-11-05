import { PageBlocksCoverSection } from "@/tina/__generated__/types"

export function CoverSection(props: PageBlocksCoverSection) {
  return (
    <section className="relative overflow-hidden">
      <code>{JSON.stringify(props)}</code>
    </section>
  )
}
