"use client"

import { PageAndNavQuery, PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export function PageComponent(props: {
  data: PageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)

  return (
    <>
      <SiteHeader {...data.nav} />
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <WelcomeHero key={i} {...block} />
          }
          case "PageBlocksFeaturedReading": {
            return <FeaturedReading key={i} {...block} />
          }
        }
      })}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Footer />
    </>
  )
}
