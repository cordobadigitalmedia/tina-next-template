import Link from "next/link"
import { PageBlocksWelcomeHero } from "@/tina/__generated__/types"
import { ArrowRight } from "lucide-react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"
import { IconList } from "@/components/icons"

export function WelcomeHero(props: PageBlocksWelcomeHero) {
  const backgroundColor = props.backgroundColor || "#ffffff"
  return (
    <section className={`relative overflow-hidden`}>
      <div
        data-tina-field={tinaField(props, "backgroundColor")}
        className={`relative flex flex-col items-center gap-2 py-24`}
        style={{ backgroundColor }}
      >
        <div
          className="px-4 py-8 text-center"
          data-tina-field={tinaField(props, "message")}
        >
          <TinaMarkdown
            content={props.message}
            components={{
              h1: (props) => (
                <h1
                  className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-300 to-pink-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground"
                  {...props}
                />
              ),
            }}
          />
        </div>
        <div className="flex gap-5 py-12">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "button": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"a"}
                    href={link.link || ""}
                  >
                    <Button size="lg">{link.label}</Button>
                  </Link>
                )
              }
              case "simple": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"b"}
                    href={link?.link || ""}
                  >
                    <Button size="lg" variant={"ghost"}>
                      Learn More
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                )
              }
            }
          })}
        </div>
      </div>
    </section>
  )
}
