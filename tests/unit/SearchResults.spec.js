import SearchResults from '@/components/Search/SearchResults';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchResults', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      showResults: () => true,
      searchResults: () => null,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  test('Show results if there is data', () => {
    const wrapper = shallowMount(SearchResults, { store, localVue });
    const searchResults = wrapper.find('[data-testid="search-results"]');
    expect(searchResults.isVisible()).toBe(getters.showResults());
  });
});
