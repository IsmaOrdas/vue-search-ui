import Vue from 'vue';
import Vuex from 'vuex';
import mainSearch from '@/store/modules/mainSearch';
import axios from 'axios';
import httpClient from '@/api/http-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiTokenSearch: null,
  },
  getters: {
    apiTokenSearch: (state) => state.apiTokenSearch,
  },
  mutations: {
    SET_API_TOKEN_SEARCH: (state, token) => {
      state.apiTokenSearch = token;
    },
  },
  actions: {
    saveApiTokenSearch: ({ commit }) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      axios.post(
        process.env.VUE_APP_TOKEN_URL,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: process.env.VUE_APP_TOKEN_REQUEST,
          },
        },
      ).then((res) => {
        console.log('then requestToken');
        const token = res.data.access_token;
        httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        commit('SET_API_TOKEN_SEARCH', token);
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  modules: {
    mainSearch,
  },
});
