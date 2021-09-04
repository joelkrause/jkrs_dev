<template>
  <div class="page">
    <div class="page_hero pt-24 pb-40">
      <div class="container grid grid-cols-12 gap-16">
        <div class="col-span-12 lg:col-span-5">
          <img
            class="w-full"
            :src="page.HomeItem.content.hero_image.filename"
          >
        </div>
        <div class="col-span-12 lg:col-span-7 flex items-center">
          <div
            class="text-xl"
            v-html="$storyapi.richTextResolver.render(page.HomeItem.content.hero_content)"
          />
        </div>
      </div>
    </div>
    <div class="popular_posts mb-16">
      <div class="container">
        <div class="latest_posts-header flex items-center justify-between mb-16">
          <h2>
            Popular Posts
          </h2>
          <nuxt-link
            to="/posts"
            class="text-color-white border border-gray-100 py-2 px-4 rounded-full"
          >
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
    <div class="latest_posts">
      <div class="container">
        <div class="latest_posts-header flex items-center justify-between mb-16">
          <h2>
            Latest Posts
          </h2>
          <nuxt-link
            to="/posts"
            class="text-color-white border border-gray-100 py-2 px-4 rounded-full"
          >
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
              likes
              categories {
                name
                slug
                content
              }              
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
