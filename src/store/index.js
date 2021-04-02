import Vue from 'vue';
import Vuex from 'vuex';
import mainSearch from '@/store/modules/mainSearch';
import axios from 'axios';
import httpClient from '@/api/http-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiTokenSearch: null,
    apiTokenRequest: 'Basic MmJiM2M3MjI4MGUzNGEyZGE2MWI0N2M1Y2M4N2MxOWY6YmIyNDk3MWJmNmM5NDc1YWI2MjFjZTE2ODQzZDNjYmM=',
  },
  getters: {
    apiTokenSearch: (state) => state.apiTokenSearch,
    apiTokenRequest: (state) => state.apiTokenRequest,
  },
  mutations: {
    SET_API_TOKEN_SEARCH: (state, token) => {
      state.apiTokenSearch = token;
    },
  },
  actions: {
    saveApiTokenSearch: ({ commit, state }) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      axios.post(
        process.env.VUE_APP_TOKEN_URL,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: state.apiTokenRequest,
          },
        },
      ).then((res) => {
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
