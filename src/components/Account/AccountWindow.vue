<template>
  <div class="container">
    <h1>Purchase History</h1>
    <div v-if="purchaseHistory.length === 0">
      <p>No purchases yet.</p>
    </div>
    <div v-else class="cases">

      <div v-for="(purchase, index) in purchaseHistory" :key="index" class="purchase">
        <img :src="purchase.img" :alt="`Purchased Case ${purchase.id}`">
        <p>Click Power: {{ purchase.clickPower }}</p>
        <p>Price: {{ purchase.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['purchaseHistory']),
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.cases {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.purchase {
  margin: 10px;
  text-align: center;
}

.purchase img {
  width: 100px;
  height: auto;
}
</style>
