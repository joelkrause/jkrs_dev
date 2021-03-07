<template>
  <div class="page">
    <div class="page_hero py-16">
      <div class="container grid grid-cols-3 gap-8">
        <div class="col-span-1">
          <img :src="page.HomeItem.content.hero_image.filename">
        </div>
        <div class="col-span-2">
          <div v-html="page.HomeItem.content.hero_content" />
        </div>
      </div>
    </div>
    <div class="latest_posts">
      <div class="container">
        <div class="latest_posts-header flex items-center justify-between">
          <h2>
            Latest Posts
          </h2>
          <nuxt-link to="/posts">
            All Posts
          </nuxt-link>
        </div>
        <PostItem
          v-for="(post,index) in page.PostItems.items"
          :key="index"
          :post="post"
        />
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
            hero_image {
              filename
            }
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
