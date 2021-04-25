import SearchResultsList from '@/components/Search/SearchResultsList';
import { mount } from '@vue/test-utils';

describe('SearchResultsList', () => {
  test('Default values of props', () => {
    const wrapper = mount(SearchResultsList, {
      propsData: {
        title: '',
        hasResults: false,
        resultsList: [],
        imageIndex: 2,
      },
    });

    expect(wrapper.props().title).toBeFalsy();
    expect(wrapper.props().hasResults).toBeFalsy();
    expect(wrapper.props().resultsList).toEqual([]);
    expect(wrapper.props().imageIndex).toBe(2);
  });

  test('Show template if there are results', async () => {
    const wrapper = mount(SearchResultsList);
    await wrapper.setProps({ hasResults: true });

    const list = wrapper.find('[data-test-id="albums-list"]');
    expect(list.exists()).toBe(true);
  });

  test('Show template if there are no results', async () => {
    const wrapper = mount(SearchResultsList);
    await wrapper.setProps({ hasResults: false });

    const list = wrapper.find('[data-test-id="albums-list"]');
    expect(list.exists()).toBe(false);
  });
});
