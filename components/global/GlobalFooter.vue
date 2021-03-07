<template>
  <div class="footer p-8">
    <div class="container">
      <div class="grid grid-cols-2">
        <div class="col-span-1">
          <div class="logo">
            <nuxt-link to="/">
              &copy; Joel Krause
            </nuxt-link>
          </div>
        </div>
        <div class="col-span-1">
          <div class="nav">
            <ul class="flex justify-end">
              <li
                v-for="nav in social"
                :key="nav.index"
                class="ml-8"
              >
                <a
                  :href="nav.link.url"
                  target="_blank"
                  v-html="nav.title"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['social']
}
</script>
