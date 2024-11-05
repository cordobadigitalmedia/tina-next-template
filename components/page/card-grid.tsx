import { PageBlocksCardgrid } from "@/tina/__generated__/types"

export function CardGrid(props: PageBlocksCardgrid) {
  return (
    <section className="relative overflow-hidden">
      <code>{JSON.stringify(props)}</code>
    </section>
  )
}
