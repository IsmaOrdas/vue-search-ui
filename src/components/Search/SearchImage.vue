<template>
  <img v-if="img" role="presentation" class="search-results__img" :src="img" alt="">
  <div v-else class="search-results__img--empty"></div>
</template>

<script>
export default {
  name: 'SearchImage',
  props: {
    img: {
      type: String,
    },
  },
};
</script>
