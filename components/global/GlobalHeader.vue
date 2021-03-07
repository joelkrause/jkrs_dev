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
            <li class="mr-8">
              <nuxt-link to="/posts">
                Posts
              </nuxt-link>
            </li>
            <li class="mr-8">
              <nuxt-link to="/about">
                About
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
