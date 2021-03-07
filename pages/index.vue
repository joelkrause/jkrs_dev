<template>
  <div class="page">
    <div class="page_hero">
      <div class="container">
        <div v-html="page.HomeItem.content.hero_content" />
      </div>
      <div class="latest_posts">
        <div class="container">
          <h2>
            Latest Posts
          </h2>
          <PostItem
            v-for="(post,index) in page.PostItems.items"
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
  async asyncData ({ $graphql }) {
    const query = gql`
      query page {
        HomeItem(id: "home") {
          name
          content {
            hero_content
          }          
        }
        PostItems(per_page: 5) {
          items {
            id
            name
            published_at
            slug      
            content {
              post_icon
            }
          }
        }        
      }
    `

    const page = await $graphql.default.request(query)
    return { page }
  }
}
</script>
