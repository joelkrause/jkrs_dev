<template>
  <div class="post_date text-gray-300 mb-6 flex">
    <!-- Published -->
    <div v-if="comparisonHours < 1">
      Published under an hour ago
    </div>
    <div v-else-if="comparisonHours < 23">
      Published {{ comparisonHours }} {{ comparisonHours === 1 ? 'hour' : 'hours' }} ago
    </div>
    <div v-else-if="comparisonDays < 31">
      Published {{ comparisonDays }} {{ comparisonDays === 1 ? 'day' : 'days' }} ago
    </div>
    <div v-if="comparisonMonths > 0">
      Published {{ comparisonMonths }} {{ comparisonMonths === 1 ? 'month' : 'months' }} ago
    </div>
    <!-- Updated -->
    <div v-if="updatedComparisonHours < 1">
      <span class="px-2">
        &mdash;
      </span>Last updated under an hour ago
    </div>
    <div v-else-if="updatedComparisonHours < 23 && updatedComparisonHours !== comparisonHours">
      <span class="px-2">
        &mdash;
      </span>Last Updated {{ updatedComparisonHours }} {{ updatedComparisonHours >= 1 ? 'hour' : 'hours' }} ago
    </div>
    <div v-else-if="updatedComparisonDays < 31 && updatedComparisonDays !== comparisonDays">
      <span class="px-2">
        &mdash;
      </span>Last Updated {{ updatedComparisonDays }} {{ updatedComparisonDays >= 1 ? 'day' : 'days' }} ago
    </div>
    <div v-if="updatedComparisonMonths > 0 && updatedComparisonMonths !== comparisonMonths">
      <span class="px-2">
        &mdash;
      </span>Last Updated {{ updatedComparisonMonths }} {{ updatedComparisonMonths > 1 ? 'month' : 'months' }} ago
    </div>
  </div>
</template>

<script>
export default {
  props: ['date', 'updated'],
  computed: {
    comparisonMonths () {
      return this.$dateFns.differenceInMonths(new Date(), new Date(this.date))
    },
    comparisonDays () {
      return this.$dateFns.differenceInDays(new Date(), new Date(this.date))
    },
    comparisonHours () {
      return this.$dateFns.differenceInHours(new Date(), new Date(this.date))
    },
    updatedComparisonMonths () {
      return this.$dateFns.differenceInMonths(new Date(), new Date(this.updated))
    },
    updatedComparisonDays () {
      return this.$dateFns.differenceInDays(new Date(), new Date(this.updated))
    },
    updatedComparisonHours () {
      return this.$dateFns.differenceInHours(new Date(), new Date(this.updated))
    }
  }
}
</script>
