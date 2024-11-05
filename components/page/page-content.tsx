import { PageBlocksPageContent } from "@/tina/__generated__/types"

export function PageContent(props: PageBlocksPageContent) {
  return (
    <section className="relative overflow-hidden">
      <code>{JSON.stringify(props)}</code>
    </section>
  )
}
