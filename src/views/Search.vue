<template>
  <section class="search-page">
    <div class="search-page__inner flex flex--col">
      <search-form v-on:search-query="search"></search-form>
      <search-results v-click-outside="hideResults"></search-results>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchForm from '@/components/Search/SearchForm.vue';
import SearchResults from '@/components/Search/SearchResults.vue';

export default {
  name: 'Search',
  components: {
    SearchForm,
    SearchResults,
  },
  computed: {
    ...mapGetters(['showResults']),
  },
  methods: {
    ...mapActions([
      'searchAll',
      'toggleShowResults',
    ]),
    search(query) {
      this.searchAll(query).catch((error) => {
        console.error(error);
      });
    },
    hideResults() {
      if (this.showResults) {
        this.toggleShowResults();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/variables';

.search-page {
  height: 100%;

  @media (min-width: $desktop-bp) {
    padding-top: 1rem;
  }

  &__inner {
    @media (min-width: $desktop-bp) {
      margin: 0 auto;
      max-width: $desktop-bp;
    }
  }
}
</style>
