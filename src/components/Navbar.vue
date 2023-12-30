<template>
  <v-bottom-navigation v-model="Window">
    <v-btn value="game" @click="updateCurrentWindow('Game')">
      <v-icon>mdi-controller-classic-outline</v-icon>
      <span>Game</span>
    </v-btn>

    <v-btn value="upgrades" @click="updateCurrentWindow('Upgrade')">
      <v-icon>mdi-tray-plus</v-icon>
      <span>Upgrade</span>
    </v-btn>

    <v-btn value="me" @click="updateCurrentWindow('Me')">
      <v-icon>mdi-account</v-icon>
      <span>Me</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      Window: ''
    };
  },
  methods: {
    updateCurrentWindow(window) {
      this.$store.dispatch('setWindow', window);
    }
  }
};
</script>

<style lang="scss" scoped>
/* Ваши стили здесь */
</style>
