<template>
  <v-app>
    <component :is="currentComponent"></component>
    <navbar v-if="currentWindow"/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from "@/components/Navbar.vue";
import GameWindow from "@/components/Game/GameWindow.vue";
import AccountWindow from "@/components/Account/AccountWindow.vue";
import UpgradeWindow from "@/components/Upgrade/UpgradeWindow.vue";
import StartWindow from "@/components/Start/StartWindow.vue";

export default {
  components: {
    Navbar,
    GameWindow,
    AccountWindow,
    UpgradeWindow,
    StartWindow
  },
  computed: {
    ...mapGetters({
      currentWindow: 'currentWindow' // Исправлено
    }),
    currentComponent() {
      switch (this.currentWindow) { // Исправлено
        case 'Game':
          return GameWindow; // Используйте компонент напрямую
        case 'Me':
          return AccountWindow;
        case 'Upgrade':
          return UpgradeWindow;
        default:
          return StartWindow; // или возвращайте компонент по умолчанию
      }
    }
  }
}
</script>
