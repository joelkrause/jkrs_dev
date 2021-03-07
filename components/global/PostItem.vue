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
    <div class="post_item-meta lg:flex items-center justify-between flex-1">
      <h6 v-html="post.name" />
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
