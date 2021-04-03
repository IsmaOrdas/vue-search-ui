import SearchForm from '@/components/Search/SearchForm';
import { mount } from '@vue/test-utils';

import searchIcon from '../../src/assets/search.svg';

describe('SearchForm', () => {
    test('Form input should be visible', () => {
        const wrapper = mount(SearchForm);
        expect(wrapper.find('input[type="text"]').isVisible()).toBe(true);
    })

});