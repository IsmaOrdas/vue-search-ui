<template>
  <div class="search flex flex--center-x">
    <form data-testid="search-form" class="search__form" action="" v-on:submit.prevent.enter="submitSearch">
      <div class="search__input-wrap">
        <button class="search__btn" aria-label="Click to search" title="Search">
          <img src="@/assets/search.svg" alt="search icon" width="20px" height="20px">
        </button>
        <input
          aria-label="Search input"
          aria-required="true"
          data-testid="search-input"
          id="search-input"
          class="search__input input input--icon-left"
          type="text"
          placeholder="Search by artist, album or track"
          v-model="query"
          tabindex="0">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    submitSearch() {
      if (!this.query.length) {
        return false;
      }
      this.$emit('search-query', this.query);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/_variables.scss';

.search {
  width: 100%;

  &__form {
    font-size: 1rem;
    flex: 1;
  }

  &__input-wrap {
    position: relative;
    width: 100%;
  }

  &__btn {
    appearance: none;
    background-color: transparent;
    border: 0;
    bottom: 6px;
    cursor: pointer;
    position: absolute;
    left: 0px;
  }

  &__input {
    border-bottom: 2px solid $medium-gray;
    font-size: 0.8em;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
}
</style>
