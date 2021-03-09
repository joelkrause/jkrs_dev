<template>
  <div class="container">
    <div class="related_posts post_pagination border-t border-gray-800 py-8 mt-32">
      <div class="reated_posts-header flex justify-between items-center mb-6">
        <h4>
          Similar Posts
        </h4>
        <nuxt-link
          to="/posts"
          class="text-color-white border border-gray-100 py-2 px-4 rounded-full"
        >
          All Posts
        </nuxt-link>
      </div>
      <div
        v-if="posts && posts.PostItems && posts.PostItems.items.length > 0"
        class="related_posts-posts"
      >
        <PostItem
          v-for="(post,index) in posts.PostItems.items"
          :key="index"
          :post="post"
        />
      </div>
      <div v-else>
        Loading Posts...
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  props: ['categories', 'id'],
  data () {
    return {
      posts: []
    }
  },
  created () {
    // Get posts
    const query = gql`
      query post {
        PostItems(filter_query_v2: {categories: {in: "${this.categories}"}}, excluding_ids: "${this.id}") {
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
                uuid
                name
                slug
                content               
              }
            }
          }
        }
      }
    `

    this.$graphql.default.request(query).then((res) => {
      this.posts = res
    })
  }
}
</script>
