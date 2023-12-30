<template>
  <div class="container">
    <p>Score: {{ score }}</p>
    <p>Hit: {{ clickPower }}</p>

    <img :src="lastPurchasedCase.img" :alt="`Last Purchased Case`" @click="clickHandler" >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['click']),
    clickHandler() {
      this.click();
    }
  },
  computed: {
    ...mapGetters(['score', 'clickPower','purchaseHistory']),
    lastPurchasedCase() {
      return this.purchaseHistory[this.purchaseHistory.length-1];
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
  min-height: 100vh;
}

.image-button {
  border: none;
  background: none;
  padding: 0;
}

.image-button img {
  width: 100px; // Ширина изображения
  height: auto; // Высота будет автоматически подстроена
}
</style>
