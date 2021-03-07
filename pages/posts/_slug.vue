<template>
  <div class="post">
    <div class="post_hero">
      <div class="container">
        <img
          :src="post.PostItem.content.post_icon"
          class="max-w-icon"
        >

        <h1 v-html="post.PostItem.name" />
        <h6
          class="text-gray-300"
          v-html="$dateFns.format(post.PostItem.published_at)"
        />

        <img :src="post.PostItem.content.post_hero">
      </div>
    </div>
    <div
      class="post_content container"
      v-html="post.PostItem.content.body"
    />
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  async asyncData ({ $graphql, route }) {
    const query = gql`
      query post {
        PostItem(id: "${route.fullPath}") {
            name
            published_at
            slug      
            content {
              post_hero
              post_icon
              body
            }
        }
      }
    `

    const post = await $graphql.default.request(query)
    return { post }
  }
}
</script>
