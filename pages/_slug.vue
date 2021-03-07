<template>
  <div class="page">
    <div class="container">
      <h1 v-html="page.PageItem.name" />
    </div>
    <pre>{{ page }}</pre>
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
