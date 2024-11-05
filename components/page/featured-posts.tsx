import { PageBlocksFeaturedPosts } from "@/tina/__generated__/types"

export function FeaturedPosts(props: PageBlocksFeaturedPosts) {
  return (
    <section className="relative overflow-hidden">
      <code>{JSON.stringify(props)}</code>
    </section>
  )
}
