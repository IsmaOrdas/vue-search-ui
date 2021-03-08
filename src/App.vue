<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script>
import { requestToken } from '@/api/token.api';

export default {
  created() {
    requestToken().then((res) => {
      const token = res.data.access_token;
      localStorage.setItem('token', token);
    }).catch((error) => {
      console.error(error);
    });
  },
};
</script>
