import MainSearch from "@/components/Search/MainSearch";
import { mount } from '@vue/test-utils';

describe('MainSearch', () => {
  it('emits an event when submit search', () => {
    const wrapper = mount(MainSearch);
    const input = wrapper.find('[data-testid="main-search-input"]');

    input.setValue('Frank Ocean');
    input.trigger('keyup', {key: 'Enter'});

    const formSubmittedCalls = wrapper.emitted('search-query');
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = 'Frank Ocean';
    expect(wrapper.emitted('search-query')[0][0]).toMatch(expectedPayload);
  });
});
