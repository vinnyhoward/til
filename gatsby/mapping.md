# Mapping node types

Gatsby includes an advanced feature that lets you create “mappings” between node types.

For instance, imagine you have a multi-author markdown blog where you want to “link” from each blog post to the author information stored in a yaml file named `author.yaml`:

```
---
title: A blog post
author: Kyle Mathews
---

A treatise on the efficacy of bezoar for treating agricultural pesticide poisoning.
```

```yaml
Copyauthor.yaml: copy code to clipboard
- id: Kyle Mathews
  bio: Founder @ GatsbyJS. Likes tech, reading/writing, founding things. Blogs at bricolage.io.
  twitter: "@kylemathews"
```

You can map between the `author` field in `frontmatter` to the id in the `author.yaml` objects by adding to your `gatsby-config.js`:

```js
module.exports = {
  plugins: [...],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
}
```

You may need to install the appropriate file transformer (in this case `YAML`) and set up `gatsby-source-filesystem` properly for Gatsby to pick up the mapping files. This applies to other file types later mentioned in this segment as well.

Gatsby then uses this mapping when creating the GraphQL schema to enable you to query data from both sources:

```graphql
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    fields {
      slug
    }
    frontmatter {
      title
      author {
        # This now links to the author object
        id
        bio
        twitter
      }
    }
  }
}
```

Mapping can also be used to map an array of ids to any other collection of data. For example, if you have two JSON files `experience.json` and `tech.json` as follows:

```json
[
  {
    "id": "companyA",
    "company": "Company A",
    "position": "Unicorn Developer",
    "from": "Dec 2016",
    "to": "Present",
    "items": [
      {
        "label": "Responsibility",
        "description": "Being an unicorn"
      },
      {
        "label": "Hands on",
        "tech": ["REACT", "NODE"]
      }
    ]
  }
]
```

```json
[
  {
    "id": "REACT",
    "icon": "facebook",
    "color": "teal",
    "label": "React"
  },
  {
    "id": "NODE",
    "icon": "server",
    "color": "green",
    "label": "NodeJS"
  }
]
```

And then add the following rule to your `gatsby-config.js`:

```js
module.exports = {
  plugins: [...],
  mapping: {
    'ExperienceJson.items.tech': `TechJson`
  },
}
```

You can query the `tech` object via the referred ids in `experience`:

```graphql
query {
  experience: allExperienceJson {
    edges {
      node {
        company
        position
        from
        to
        items {
          label
          description
          link
          tech {
            label
            color
            icon
          }
        }
      }
    }
  }
}
```

Mapping also works between Markdown files. For example, instead of having all authors in a YAML file, you could have info about each author in a separate Markdown file:

```md
---
author_id: Kyle Mathews
twitter: '@kylemathews'
---

Founder @ GatsbyJS. Likes tech, reading/writing, founding things. Blogs at bricolage.io.
```

And then add the following rule to your `gatsby-config.js`:

```js
module.exports = {
  plugins: [...],
  mapping: {
    'MarkdownRemark.frontmatter.author': `MarkdownRemark.frontmatter.author_id`
  },
}
```
