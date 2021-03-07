<template>
  <nuxt-link
    :to="`/posts/${post.slug}`"
    class="post_item flex items-start"
  >
    <img
      v-if="post.content.post_icon"
      :src="post.content.post_icon"
      class="max-w-icon h-auto"
    >
    {{ post.name }}
    {{ post.published_at }}
  </nuxt-link>
</template>
<script>
export default {
  props: ['post']
}
</script>
