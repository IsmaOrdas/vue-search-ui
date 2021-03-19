<template>
<div data-testid="search-results" class="search-results" v-bind:class="{'is-visible': showResults}">
  <div class="search-results__list-wrap">
    <p class="search-results__title">Albums</p>
    <ul data-testid="albums-list" class="search-results__list" v-if="hasAlbums">
      <template v-for="(item, index) in firstSearchResults('albums')">
        <li class="search-results__item flex flex--center-y" :key="index">
          <div class="search-results__img-wrap">
            <img role="presentation" class="search-results__img" :src="imageSrc(item)" alt="album cover">
          </div>
          <span>{{ item.name }}</span>
        </li>
      </template>
    </ul>
    <p class="search-results__title">Artists</p>
    <ul class="search-results__list" v-if="hasArtists">
      <template v-for="(item, index) in firstSearchResults('artists')">
        <li class="search-results__item flex flex--center-y" :key="index">
          <div class="search-results__img-wrap">
            <img role="presentation" class="search-results__img" :src="imageSrc(item)" alt="artist photo">
          </div>
          <span>{{ item.name }}</span>
        </li>
      </template>
    </ul>
    <p class="search-results__title">Tracks</p>
    <ul class="search-results__list" v-if="hasTracks">
      <template v-for="(item, index) in firstSearchResults('tracks')">
        <li class="search-results__item" :key="index">
          <span>{{ item.name }}</span>
          <time class="search-results__track-duration"> {{ formatTime(item.duration_ms) }}</time>
        </li>
      </template>
    </ul>
  </div>
  <a class="search-results__see-more margin--none">See more results</a>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { millisToMinutesAndSeconds } from '@/utils';

export default {
  name: 'SearchResults',
  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    ...mapGetters([
      'searchResults',
      'showResults',
      'firstSearchResults',
    ]),
    hasAlbums() {
      return this.searchResults && this.searchResults.albums ? Object.keys(this.searchResults.albums).length : null;
    },
    hasArtists() {
      return this.searchResults && this.searchResults.artists ? Object.keys(this.searchResults.artists).length : null;
    },
    hasTracks() {
      return this.searchResults && this.searchResults.tracks ? Object.keys(this.searchResults.tracks).length : null;
    },
    imageIndex() {
      return this.windowWidth <= 768 ? 2 : 1;
    },
    formatTime() {
      return (miliseconds) => millisToMinutesAndSeconds(miliseconds);
    },
    imageSrc() {
      return (item) => (item.images && item.images.length && this.imageIndex > 0) ? item.images[this.imageIndex].url : '';
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/variables';

.search-results {
  box-shadow: 0 4px 2px -2px #eaeaea;
  display: none;
  padding: 1rem 1rem 0;
  height: 80vh;
  overflow: scroll;

  @media (min-width: $desktop-small-bp) {
    height: 50vh;
  }

  &.is-visible {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: $medium-gray;
    font-size: 16px;
    font-weight: 800;
    margin: 0 0 4px 0;
    text-align: left;
  }

  &__list-wrap {
    height: 82vh;
    overflow: scroll;

    @media (min-width: $desktop-small-bp) {
      height: 50vh;
    }
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

  &__see-more {
    color: $medium-gray;
    cursor: pointer;
    font-weight: 800;
    padding: 8px 0;
  }

  &__track-duration {
    color: $medium-gray;
    font-size: 14px;
    padding-left: 4px;
  }
}
</style>
