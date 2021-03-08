<template>
  <div class="container">
    <div class="post_pagination border-t border-gray-800 py-8 mt-32 flex justify-between">
      <nuxt-link
        to="/posts"
        class="flex items-center text-gray-400 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="25"
          class="mr-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Prev
      </nuxt-link>
      <nuxt-link
        to="/posts"
        class="flex items-center text-gray-400 hover:text-white"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="25"
          class="ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
