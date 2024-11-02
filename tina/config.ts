import { defineConfig } from "tinacms"

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "ismael-upgrade",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            return "/"
          },
        },
        fields: [
          {
            name: "title",
            label: "Page title",
            description: "For SEO purposes",
            type: "string",
          },
          {
            name: "blocks",
            label: "Content Blocks",
            description:
              "You can re-order them as needed and have different blocks on each page",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Hero Section",
                fields: [
                  {
                    name: "title",
                    type: "string",
                    label: "Hero Title",
                  },
                  {
                    name: "message",
                    type: "rich-text",
                    label: "Hero Message",
                  },
                  {
                    name: "links",
                    label: "Hero links",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        // Field values are accessed by item?.<Field name>
                        return { label: item?.label }
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "link",
                        label: "Relative or absolute link",
                      },
                      {
                        type: "string",
                        name: "label",
                        label: "Link/Button Text",
                      },
                      {
                        type: "string",
                        name: "style",
                        label: "Link type",
                        options: ["simple", "button"],
                      },
                    ],
                  },
                  {
                    type: "string",
                    name: "backgroundType",
                    label: "Background Type",
                    description: "Only the type specified will be used",
                    options: [
                      { label: "Image", value: "image" },
                      { label: "Color", value: "color" },
                    ],
                  },
                  {
                    name: "backgroundImage",
                    label: "Hero Background Image",
                    type: "image",
                  },
                  {
                    name: "backgroundColor",
                    label: "Hero Background Color",
                    type: "string",
                    ui: {
                      component: "color",
                    },
                  },
                ],
              },
              {
                name: "coverSection",
                label: "Cover Section",
                fields: [
                  {
                    name: "headline",
                    type: "string",
                    label: "Cover Headline",
                  },
                  {
                    name: "content",
                    label: "Cover Content",
                    type: "rich-text",
                  },
                  {
                    name: "backgroundImage",
                    label: "Cover Background Image",
                    type: "image",
                  },
                  {
                    name: "backgroundColor",
                    label: "Background Color",
                    type: "string",
                    ui: {
                      component: "color",
                    },
                  },
                ],
              },
              {
                name: "featuredReading",
                label: "Featured Reading",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string",
                  },
                  {
                    name: "featuredPost",
                    label: "Featured Post",
                    type: "reference",
                    collections: ["post"],
                  },
                ],
              },
              {
                name: "cardgrid",
                label: "Card Grid",
                ui: {
                  itemProps: (item) => {
                    return { label: item.gridTitle }
                  },
                },
                fields: [
                  {
                    name: "cardblock",
                    label: "Card Block",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.headline }
                      },
                    },
                    fields: [
                      {
                        name: "headline",
                        label: "Headline",
                        type: "string",
                      },
                      {
                        name: "coverimage",
                        label: "Cover Image",
                        type: "image",
                      },
                      {
                        name: "content",
                        label: "Content",
                        type: "rich-text",
                      },
                      {
                        name: "links",
                        label: "Links",
                        type: "object",
                        list: true,
                        ui: {
                          itemProps: (item) => {
                            return { label: item.label }
                          },
                        },
                        fields: [
                          {
                            type: "string",
                            name: "link",
                            label: "Relative or absolute link",
                          },
                          {
                            type: "string",
                            name: "label",
                            label: "Button/Link Text",
                          },
                          {
                            type: "string",
                            name: "style",
                            label: "Link Type",
                            options: [
                              { label: "Simple link", value: "simple" },
                              { label: "Clickable Button", value: "button" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "gridTitle",
                    label: "Card Grid Title",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Post",
        path: "content/posts",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ["author"],
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
          {
            name: "description",
            label: "Description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
      {
        name: "author",
        label: "Author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            name: "name",
            label: "Name",
            type: "string",
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
        ],
      },
      {
        name: "nav",
        label: "Nav",
        path: "content/nav",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "links",
            label: "Links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.label }
              },
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "link", label: "Link" },
            ],
          },
        ],
      },
    ],
  },
})
