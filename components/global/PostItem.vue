<template>
  <nuxt-link
    :to="`/posts/${post.slug}`"
    class="post_item flex items-center py-6 px-3 rounded-md hover:bg-gray-700 border-b border-gray-800"
  >
    <img
      :src="post.content.post_icon"
      class="max-w-icon h-auto mr-8 pointer-events-none"
    >
    <div class="post_item-meta lg:flex justify-between flex-1 pointer-events-none">
      <h6
        class="pr-8"
        v-html="post.name"
      />
      <ul class="categories flex items-start mt-4 lg:mt-0 ">
        <li
          v-for="category in post.content.categories"
          :key="category.index"
          :class="`whitespace-no-wrap text-xs text-${category.content.color_scheme} border border-${category.content.color_scheme} py-1 px-3 rounded-full mr-4 whitespace-no-wrap`"
          v-html="category.name"
        />
        <PostLikes :likes="post.content.likes" />
      </ul>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['post']
}
</script>
