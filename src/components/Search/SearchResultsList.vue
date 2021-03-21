<template>
<div>
  <p class="search-results__title">{{ title }}</p>
  <ul data-testid="albums-list" class="search-results__list" v-if="hasResults">
    <template v-for="(item, index) in resultsList">
      <li class="search-results__item flex flex--center-y" :key="index">
        <div v-if="item.images" class="search-results__img-wrap">
          <img role="presentation" class="search-results__img" :src="imageSrc(item)" alt="album cover">
        </div>
        <span>{{ item.name }}</span>
        <time v-if="item.duration_ms" class="search-results__track-duration"> {{ formatTime(item.duration_ms) }}</time>
      </li>
    </template>
  </ul>
</div>
</template>

<script>
import { millisToMinutesAndSeconds } from '@/utils';

export default {
  name: 'SearchResultsList',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    hasResults: {
      type: Boolean,
      default: false,
    },
    resultsList: {
      type: Array,
      default() {
        return [];
      },
    },
    imageIndex: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    imageSrc() {
      return (item) => (item.images && item.images.length && this.imageIndex > 0) ? item.images[this.imageIndex].url : '';
    },
    formatTime() {
      return (miliseconds) => millisToMinutesAndSeconds(miliseconds);
    },
  },
};

</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.search-results {

  &__title {
    color: $medium-gray;
    font-size: 16px;
    font-weight: 800;
    margin: 0 0 4px 0;
    text-align: left;
  }

  &__list {
    text-align: left;
    margin-bottom: 1rem;
  }

  &__item {
    border-radius: 4px;
    cursor: pointer;
    padding: 4px 0 4px 8px;

    &:hover {
      background-color: $dark-gray;
    }
  }

  &__img-wrap {
    display: inline-block;
    width: 40px;
  }

  &__img {
    border-radius: 4px;
    height: 32px;
    margin-right: 8px;
  }

  &__track-duration {
    color: $medium-gray;
    font-size: 14px;
    padding-left: 4px;
  }
}
</style>
