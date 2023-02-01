<template>
  <div id="app">
    <v-app>
      <app-bar />
      <!-- <drawer /> -->
      <core-view />
      <core-footer />
    </v-app>
  </div>
</template>
<style>
@font-face {
  font-family: 'KOTRA_BOLD';
  src: url('../font/KOTRA_BOLD.ttf') format('truetype');
  font-weight: 1000;
}
</style>
<script>
export default {
  components: {
    Drawer: () => import('./components/Drawer'),
    CoreFooter: () => import('./components/Footer'),
    AppBar: () => import('./components/AppBar'),
    CoreView: () => import('./components/CoreView')
  }
}
</script>
