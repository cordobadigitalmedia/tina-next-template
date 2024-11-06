import {
  PageBlocksFeaturedPosts,
  PageBlocksFeaturedPostsPosts,
} from "@/tina/__generated__/types"

export function FeaturedPosts({
  key,
  posts,
}: {
  key: number
  posts: PageBlocksFeaturedPostsPosts
}) {
  return (
    <section className="relative overflow-hidden">
      <code>{JSON.stringify(posts)}</code>
    </section>
  )
}
