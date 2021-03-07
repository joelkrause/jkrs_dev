<template>
  <div class="post">
    <div class="post_hero pt-32 pb-16">
      <div class="container">
        <img
          :src="post.PostItem.content.post_icon"
          class="max-w-icon"
        >

        <h1
          class="mt-12 mb-6"
          v-html="post.PostItem.name"
        />
        <h6
          class="text-gray-300 mb-6"
          v-html="$dateFns.format(post.PostItem.published_at)"
        />

        <ul class="categories flex">
          <li
            v-for="category in post.PostItem.content.categories"
            :key="category.index"
            class="text-xs text-gray-100 border border-gray-100 py-1 px-3 rounded-full mr-4"
            v-html="category.name"
          />
        </ul>

        <img
          :src="post.PostItem.content.post_hero"
          class="mt-16"
        >
      </div>
    </div>
    <div
      class="post_content container"
      v-html="post.PostItem.content.body"
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
            published_at
            slug      
            content {
              post_hero
              post_icon
              body
              categories{
                name
                slug
              }
            }
        }
      }
    `

    const post = await $graphql.default.request(query)
    return { post }
  }
}
</script>
