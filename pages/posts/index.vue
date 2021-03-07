<template>
  <div class="posts">
    <div class="container">
      <div class="page_hero">
        <h1>
          Posts
        </h1>
      </div>
      <div class="posts">
        <div class="container">
          <PostItem
            v-for="(post,index) in posts.PostItems.items"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  async asyncData ({ $graphql, params }) {
    const query = gql`
      query posts {
        PostItems {
          items {
            id
            name
            published_at
            slug      
            content {
              post_hero
              post_icon
            }
          }
        }
      }
    `

    const posts = await $graphql.default.request(query)
    return { posts }
  }
}
</script>
