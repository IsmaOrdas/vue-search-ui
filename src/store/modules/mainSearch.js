/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { search } from '@/api/search.api';

const state = {
  searchResults: null,
  showResults: false,
};

const getters = {
  searchResults: (state) => state.searchResults,
  showResults: (state) => state.showResults,
};

const actions = {
  async searchAll({ commit }, query) {
    try {
      const results = await search(query);
      console.log(results);
      commit('SET_SEARCH_RESULTS', results.data);
    } catch (error) {
      console.error(error);
    }
  },
  toggleShowResults({ commit }) {
    commit('TOGGLE_SHOW_RESULTS');
  },
};

const mutations = {
  SET_SEARCH_RESULTS: (state, data) => {
    state.searchResults = data;
  },
  TOGGLE_SHOW_RESULTS: (state) => {
    state.showResults = !state.showResults;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};