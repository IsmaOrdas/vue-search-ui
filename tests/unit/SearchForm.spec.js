import SearchForm from '@/components/Search/SearchForm';
import { mount } from '@vue/test-utils';

describe('SearchForm', () => {
  test('Form input should be visible', () => {
    const wrapper = mount(SearchForm);
    expect(wrapper.find('input[type="text"]').isVisible()).toBe(true);
  });

  test('Set input value', async () => {
    const wrapper = mount(SearchForm);
    const input = wrapper.find('[data-test-id="search-input"]');

    await input.setValue('Frank Ocean');
    expect(input.element.value).toBe('Frank Ocean');
  });

  test('Should not emit event if input is empty', async () => {
    const wrapper = mount(SearchForm);
    await wrapper.find('[data-test-id="search-form"]').trigger('submit');
    wrapper.setData({ query: '' });
    expect(wrapper.emitted('search-query')).toBeFalsy();
  });

  test('Trigger submit form with query string', async () => {
    const wrapper = mount(SearchForm);
    const input = wrapper.find('[data-test-id="search-input"]');

    await input.setValue('Frank Ocean');
    await wrapper.find('[data-test-id="search-form"]').trigger('submit');
    expect(wrapper.emitted('search-query')).toBeTruthy();
  });
});
