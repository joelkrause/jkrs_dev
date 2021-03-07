<template>
  <div class="header p-8">
    <div class="grid grid-cols-2">
      <div class="col-span-1">
        <div class="logo">
          <nuxt-link to="/">
            Joel Krause
          </nuxt-link>
        </div>
      </div>
      <div class="col-span-1">
        <div class="nav">
          <ul class="flex justify-end">
            <li
              v-for="nav in navigation"
              :key="nav.index"
              class="ml-8"
            >
              <nuxt-link
                :to="`/${nav.link.cached_url ? nav.link.cached_url : nav.link.url}`"
                v-html="nav.title"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navigation']
}
</script>
