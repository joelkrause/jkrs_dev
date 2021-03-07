<template>
  <div class="posts">
    <div class="page_hero pt-8 pb-16">
      <div class="container flex justify-between items-center">
        <h1>
          Posts - {{ category }}
        </h1>
        <select
          v-model="category"
          class="bg-darkGray text-white"
          @change="changeCategory"
        >
          <option
            selected
            value="all"
          >
            Filter Posts
          </option>
          <option
            v-for="category in posts.CategoryItems.items"
            :key="category.index"
            :value="category.slug"
          >
            {{ category.name }}
          </option>
        </select>
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
            slug  
            content {
              post_hero
              post_icon
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

    const posts = await $graphql.default.request(query)
    return { posts }
  },
  data () {
    return {
      category: 'all'
    }
  },
  methods: {
    async changeCategory () {
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
              slug  
              content {
                post_icon
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

      const posts = await this.$graphql.default.request(query)
      this.$set(this, 'posts', posts)
    }
  }
}
</script>

<style>
select {
	appearance: none;
}
</style>
