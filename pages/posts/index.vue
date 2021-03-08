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
        <div
          v-for="date in groupedPosts"
          :key="date"
          class="mb-8"
        >
          <h4 v-html="date.date" />
          <PostItem
            v-for="(post,index) in date.posts"
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
            first_published_at
            published_at
            slug  
            content {
              post_hero
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

    const posts = await $graphql.default.request(query)
    return { posts }
  },
  data () {
    return {
      groupedPosts: []
    }
  },
  mounted () {
    // this gives an object with dates as keys
    const groups = this.posts.PostItems.items.reduce((groups, game) => {
      const date = this.$dateFns.format(game.first_published_at, 'Y')
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(game)
      return groups
    }, {})

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        posts: groups[date]
      }
    })

    this.groupedPosts = groupArrays.reverse()
  }
}
</script>

<style>
select {
	appearance: none;
}
</style>
