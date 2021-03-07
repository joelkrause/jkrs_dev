<template>
  <div class="page">
    <div class="container">
      <h1
        class="pb-8"
        v-html="page.PageItem.name"
      />
      <div
        class="page_body"
        v-html="$storyapi.richTextResolver.render(page.PageItem.content.body)"
      />
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  async asyncData ({ $graphql, params }) {
    const query = gql`
      query page {
        PageItem(id: "${params.slug}") {
          name
          content {
            body
          }   
        }
      }
    `

    const page = await $graphql.default.request(query)
    return { page }
  }
}
</script>
