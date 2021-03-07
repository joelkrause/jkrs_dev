<template>
  <div>
    <GlobalHeader />
    <Nuxt />
  </div>
</template>

<style>
.default-enter-active,
.default-leave-active {
	transition-duration: 150ms;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.default-enter,
.default-leave-to {
	filter: blur(10px);
	opacity: 0;
	transform: translateY(10px);
}
</style>
