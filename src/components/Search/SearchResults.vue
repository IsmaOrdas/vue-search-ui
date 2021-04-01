<template>
<div data-testid="search-results" class="search-results" v-bind:class="{'is-visible': showResults}">
  <div class="search-results__list-wrap">
    <search-results-list
      title="Albums"
      :hasResults="hasAlbums"
      :resultsList="firstSearchResults('albums')"
      :imageIndex="imageIndex"
    ></search-results-list>
    <search-results-list
        title="Artists"
        :hasResults="hasArtists"
        :resultsList="firstSearchResults('artists')"
        :imageIndex="imageIndex"
    ></search-results-list>
    <search-results-list
        title="Tracks"
        :hasResults="hasTracks"
        :resultsList="firstSearchResults('tracks')"
        :imageIndex="imageIndex"
    ></search-results-list>
  </div>
  <a href="#" class="search-results__see-more margin--none">See more search results</a>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchResultsList from '@/components/Search/SearchResultsList.vue';

export default {
  name: 'SearchResults',
  components: {
    SearchResultsList,
  },
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
      return this.searchResults && this.searchResults.albums ? !!Object.keys(this.searchResults.albums).length : false;
    },
    hasArtists() {
      return this.searchResults && this.searchResults.artists ? !!Object.keys(this.searchResults.artists).length : false;
    },
    hasTracks() {
      return this.searchResults && this.searchResults.tracks ? !!Object.keys(this.searchResults.tracks).length : false;
    },
    imageIndex() {
      return this.windowWidth <= 768 ? 2 : 1;
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
  font-size: 1rem;
  padding: 1rem 1rem 0;
  height: 80vh;
  overflow: scroll;

  @media (min-width: $desktop-bp) {
    height: 50vh;
  }

  &.is-visible {
    display: flex;
    flex-direction: column;
  }

  &__list-wrap {
    height: 82vh;
    overflow: scroll;

    @media (min-width: $desktop-bp) {
      height: 50vh;
    }
  }

  &__see-more {
    color: $medium-gray;
    cursor: pointer;
    display: inline-block;
    font-weight: $bold-font;
    padding: 8px 0;
  }
}
</style>
