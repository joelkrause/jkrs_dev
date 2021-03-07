<template>
  <div class="posts">
    <div class="page_hero pt-8 pb-16">
      <div class="container">
        <h1>
          Posts
        </h1>
        <ul
          v-for="category in posts.CategoryItems.items"
          :key="category.index"
        >
          <li>
            <button
              type="button"
              @click="changeCategory(category.slug)"
              v-html="category.name"
            />
          </li>
        </ul>
      </div>
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
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  async asyncData ({ $graphql, params }) {
    const query = gql`
      query posts {
        CategoryItems {
          items {
            name
            slug
          }
        }        
        PostItems {
          items {
            id
            name
            published_at
            full_slug      
            content {
              post_hero
              post_icon
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `

    const posts = await $graphql.default.request(query)
    return { posts }
  },
  methods: {
    changeCategory (category) {
      console.log(category)
    }
  }
}
</script>
