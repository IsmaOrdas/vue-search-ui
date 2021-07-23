<template>
<div>
	<p class="search-results__title">{{ title }}</p>
	<ul data-test-id="albums-list" class="search-results__list" v-if="hasResults">
		<template v-for="(item, index) in resultsList">
			<li class="search-results__item flex flex--center-y" :key="index">
				<div class="search-results__img-wrap">
					<search-image :img="imageSrc(item)"></search-image>
				</div>
				<span>{{ item.name }}</span>
				<time v-if="item.duration_ms" class="search-results__track-duration" :datetime="formatTime(item.duration_ms)"> {{ formatTime(item.duration_ms) }}</time>
			</li>
		</template>
	</ul>
</div>
</template>

<script>
import { millisToMinutesAndSeconds } from '@/utils';
import SearchImage from '@/components/Search/SearchImage.vue';

export default {
  name: 'SearchResultsList',
  components: {
    SearchImage,
  },
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
		font-size: 0.9em;
		font-weight: $bold-font;
		margin: 0 0 0.9em 0;
		text-align: left;
	}

	&__list {
		text-align: left;
		margin-bottom: 1em;
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
		width: 32px;
	}

	&__img--empty {
		background-color: $light-gray;
		border-radius: 4px;
		height: 32px;
		margin-right: 8px;
		width: 32px;
	}

	&__track-duration {
		color: $medium-gray;
		font-size: 0.8em;
		padding-left: 4px;
	}
}
</style>
