<template>
  <li class="likes">
    <button
      type="button"
      class=" text-xs flex items-center"
      @click="updateLike()"
    >
      <svg
        class="mr-2 text-red-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span class="block mt-1">
        {{ likes }}
      </span>
    </button>
  </li>
</template>

<script>
export default {
  props: ['likes', 'post'],
  methods: {
    updateLike () {
      console.log(`updating: ${this.post.id}`)
    }
  }
}
</script>
