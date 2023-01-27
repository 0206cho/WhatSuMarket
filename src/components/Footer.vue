<template>
  <v-footer>
    <v-spacer/>
    <span class="font-weight-light copyright">
            &copy;
            {{(new Date()).getFullYear() }}
        </span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>