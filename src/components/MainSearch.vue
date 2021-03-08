<template>
  <div class="search flex flex--center-x">
    <form class="search__form" action=""  v-on:submit.prevent.enter="submitSearch">
      <div class="search__input-wrap">
        <button class="search__btn" aria-label="Click to search" title="Search">
          <img src="../assets/search.svg" alt="" width="20px">
        </button>
        <input
          aria-required="true"
          data-testid="main-search-input"
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
  name: 'MainSearch',
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
@import '~@/styles/variables';

.search {
  width: 100%;

  &__form {
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
    border-bottom: 2px solid $light-gray;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
}
</style>
