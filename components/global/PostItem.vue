<template>
  <nuxt-link
    :to="`/posts/${post.slug}`"
    class="post_item flex items-center p-3 mb-5 rounded-md hover:bg-gray-700"
  >
    <img
      :src="post.content.post_icon"
      class="max-w-icon h-auto mr-8 pointer-events-none"
    >
    <div class="post_item-meta flex justify-between flex-1 pointer-events-none">
      <div>
        <h6 v-html="post.name" />
        <ul class="categories flex items-center mt-4">
          <li
            v-for="category in post.content.categories"
            :key="category.index"
            :class="`text-xs text-${category.content.color_scheme} border border-${category.content.color_scheme} py-1 px-3 rounded-full mr-4`"
            v-html="category.name"
          />
          <PostLikes :likes="post.content.likes" />
        </ul>
      </div>
      <p
        class="text-gray-300 m-0"
        v-html="$dateFns.format(post.published_at)"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['post']
}
</script>
