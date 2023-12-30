<template>
  <div class="container">
    <h1>Pause</h1>
    <v-btn prepend-icon="mdi-controller-classic-outline" variant="tonal" @click="updateCurrentWindow('Game')" >
      Start
    </v-btn>
  </div>
</template>
<script>
export default {
  methods:{
    updateCurrentWindow(window) {
      this.$store.dispatch('setWindow', window);
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Высота контейнера равна высоте видимой части окна браузера
}
</style>
