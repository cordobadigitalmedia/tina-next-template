import client from "@/tina/__generated__/client"

import { BlogPageComponent } from "@/components/app/blog-page"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const result = await client.queries.postAndNav({
    relativePath: `${(await params).slug}.md`,
  })
  return <BlogPageComponent {...result} />
}
