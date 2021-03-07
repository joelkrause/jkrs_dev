<template>
  <nuxt-link
    :to="post.full_slug"
    class="post_item flex items-center py-8"
  >
    <img
      v-if="post.content.post_icon"
      :src="post.content.post_icon"
      class="max-w-icon h-auto mr-8"
    >
    <div class="post_item-meta flex lg:items-center justify-between flex-1">
      <div>
        <h6 v-html="post.name" />
        <ul class="categories flex mt-4">
          <li
            v-for="category in post.content.categories"
            :key="category.index"
            class="text-xs text-gray-100 border border-gray-100 py-1 px-3 rounded-full mr-4"
            v-html="category.name"
          />
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
