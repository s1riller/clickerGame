<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {

    ...mapActions(['purchaseCase']),

    buyCase(caseId) {
      this.purchaseCase(caseId);
    }
  },
  computed: {
    ...mapGetters(['cases', 'score']),
  }
}
</script>

<template>
  <div class="container">
    <h1>Shop</h1>
    <p>Score: {{ score }}</p>
    <div class="cases">
      <div v-for="caseItem in cases" :key="caseItem.id" class="case">
        <img :src="caseItem.img" :alt="`Case ${caseItem.id}`">
        <p>Click Power: {{ caseItem.clickPower }}</p>
        <p>Price: {{ caseItem.price }}</p>
        <v-btn @click="buyCase(caseItem.id)" :disabled="score < caseItem.price">
          Buy
        </v-btn>
      </div>
    </div>
  </div>
</template>

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

.case {
  margin: 10px;
  text-align: center;
}

.case img {
  width: 100px;
  height: auto;
}
</style>
