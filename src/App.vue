<template>
  <div id="app">
    <v-app>
      <app-bar/>
      <drawer/>
      <core-view/>
      <core-footer/>
    </v-app>
  </div>
</template>

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
