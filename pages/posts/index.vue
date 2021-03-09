<template>
  <div class="posts">
    <div class="page_hero pt-8 pb-16">
      <div class="container flex flex-col">
        <h1 class="mb-8">
          All Posts
        </h1>
        <div class="categories flex flex-wrap items-center">
          <span class="text-sm mr-4 text-gray-400 w-full lg:w-auto mb-5 lg:mb-0">Filter Categories</span>
          <button
            v-for="(button,index) in posts.CategoryItems.items"
            :key="button.index"
            :class="`text-xs border border-gray-400 py-1 px-3 mb-3 lg:mb-0 rounded-full mr-4 whitespace-no-wrap ${selectedCategories.findIndex(e => e.slug === button.slug) !== -1 ? 'bg-gray-400 text-black' : 'text-gray-400'}`"
            @click="addCategory(button,index)"
          >
            {{ button.name }}
          </button>
        </div>
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
      groupedPosts: [],
      selectedCategories: []
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
  },
  methods: {
    addCategory (category) {
      const index = this.selectedCategories.findIndex(e => e.slug === category.slug)

      if (index > -1) {
        this.selectedCategories.splice(index, 1)
      } else {
        this.selectedCategories.push(category)
      }
    }
  }
}
</script>

<style>
select {
	appearance: none;
}
</style>
