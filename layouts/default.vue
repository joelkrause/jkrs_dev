<template>
  <div>
    <GlobalHeader :navigation="global.GlobalcontentItem.content.header_nav" />
    <Nuxt />
    <GlobalFooter
      :navigation="global.GlobalcontentItem.content.footer_nav"
      :social="global.GlobalcontentItem.content.social_links"
    />
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
  data () {
    return {
      global: []
    }
  },
  fetchOnServer: true,
  async fetch () {
    const query = gql`
      query global {
		GlobalcontentItem(id: "global-content") {
			content {
				header_nav
				footer_nav
				social_links
			}
		}
      }
    `
    this.global = await this.$graphql.default.request(query)
  }
}
</script>

<style>
.default-enter-active,
.default-leave-active {
	transition-duration: 250ms;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.default-enter,
.default-leave-to {
	filter: blur(20px);
	opacity: 0;
	transform: translateY(15px);
}
</style>
