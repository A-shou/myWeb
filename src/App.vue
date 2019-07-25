<template>
  <v-app>
    <index></index>

    <v-alert-block v-if="!$store.state.userInfo.logSatet"></v-alert-block>
    <v-loading v-if="$store.state.loadingShow"></v-loading>
    <v-alter-confirm></v-alter-confirm>
  </v-app>
</template>

<script>
import index from './components/index'

export default {
  name: 'App',
  components: {
    index
  },
  data: () => ({
    //
  }),
};
</script>
