<template>
  <div class="post">
    <div class="post_hero py-32">
      <div class="container">
        <img
          :src="post.PostItem.content.post_icon"
          class="max-w-iconLarge"
        >

        <h1
          class="mt-12 mb-6"
          v-html="post.PostItem.name"
        />
        <PostDate
          :date="post.PostItem.first_published_at"
          :updated="post.PostItem.published_at"
        />

        <ul class="categories flex whitespace-no-wrap">
          <li
            v-for="category in post.PostItem.content.categories"
            :key="category.index"
            :class="`text-xs text-${category.content.color_scheme} border border-${category.content.color_scheme} py-1 px-3 rounded-full mr-4`"
            v-html="category.name"
          />
          <PostLikes
            :likes="post.PostItem.content.likes"
            :post="post.PostItem"
          />
        </ul>

        <img
          v-if="post.PostItem.content.post_hero"
          :src="post.PostItem.content.post_hero"
          class="mt-16"
        >
      </div>
    </div>
    <div
      class="post_content container"
      v-html="$storyapi.richTextResolver.render(post.PostItem.content.body)"
    />
    <RelatedPosts
      :id="post.PostItem.id"
      :categories="categories"
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
          first_published_at
          published_at
          slug      
          id
          content {
            post_hero
            post_icon
            body
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
    `

    const post = await $graphql.default.request(query)
    return { post }
  },
  computed: {
    categories () {
      const cats = this.post.PostItem.content.categories
      const catsArray = []
      cats.forEach((el) => {
        catsArray.push(el.uuid)
      })
      const item = catsArray[Math.floor(Math.random() * catsArray.length)]
      return item
    }
  }
}
</script>
