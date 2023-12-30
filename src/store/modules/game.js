export default {
  state: {
    score: 0, // Очки пользователя
    clickPower: 1, // Сила клика (количество очков за один клик)
    cases:[
      {id: 1,img:'src/assets/cases/case1.png',clickPower:1, price:30},
      {id: 2,img:'src/assets/cases/case2.png',clickPower:2, price:90},
      {id: 3,img:'src/assets/cases/case3.png',clickPower:3, price:180},
      {id: 4,img:'src/assets/cases/case4.png',clickPower:4, price:270},
      {id: 5,img:'src/assets/cases/case5.png',clickPower:5, price:360},
      {id: 6,img:'src/assets/cases/case6.png',clickPower:6, price:540},
      {id: 7,img:'src/assets/cases/case7.png',clickPower:7, price:700},
      {id: 8,img:'src/assets/cases/case8.png',clickPower:8, price:900},
      {id: 9,img:'src/assets/cases/case9.png',clickPower:9, price:1200},
      {id: 10,img:'src/assets/cases/case10.png',clickPower:10, price:1500},
      {id: 11,img:'src/assets/cases/case11.png',clickPower:11, price:1600},
      {id: 12,img:'src/assets/cases/case12.png',clickPower:12, price:1800},
      {id: 13,img:'src/assets/cases/case13.png',clickPower:13, price:2000},
      {id: 14,img:'src/assets/cases/case14.png',clickPower:14, price:2200},
      {id: 15,img:'src/assets/cases/case15.png',clickPower:15, price:2500},
    ],
    purchaseHistory: [
      {id: 1,img:'src/assets/cases/case1.png',clickPower:1, price:30},
    ],
  },

  mutations: {
    INCREMENT_SCORE(state, amount) {
      state.score += amount;
    },
    INCREASE_CLICK_POWER(state, increment) {
      state.clickPower += increment;
    },
    PURCHASE_CASE(state, caseId) {
      const caseItem = state.cases.find(c => c.id === caseId);
      if (caseItem && state.score >= caseItem.price) {
        state.score -= caseItem.price;
        state.clickPower += caseItem.clickPower;
      }
    },
    ADD_TO_PURCHASE_HISTORY(state, caseItem) {
      state.purchaseHistory.push(caseItem);
    },
    // Добавьте мутацию для сохранения данных в локальное хранилище
    SAVE_STATE(state) {
      localStorage.setItem('gameState', JSON.stringify(state));
    },
    // Добавьте мутацию для загрузки данных из локального хранилища
    LOAD_STATE(state) {
      const savedState = localStorage.getItem('gameState');
      if (savedState) {
        Object.assign(state, JSON.parse(savedState));
      }
    },
  },
  actions: {
    click({ commit, state }) {
      // Увеличиваем счёт на величину clickPower
      commit('INCREMENT_SCORE', state.clickPower);
      // Вызываем мутацию для сохранения данных в локальное хранилище после каждого изменения
      commit('SAVE_STATE');
    },
    purchaseCase({ commit, state }, caseId) {
      const caseItem = state.cases.find((c) => c.id === caseId);
      if (caseItem && state.score >= caseItem.price) {
        state.score -= caseItem.price;
        state.clickPower += caseItem.clickPower;
        commit('ADD_TO_PURCHASE_HISTORY', caseItem);
        commit('SAVE_STATE');
      }
    },
    upgradeClickPower({ commit }) {
      commit('INCREASE_CLICK_POWER', 1);
      commit('SAVE_STATE');
    },
    // Добавьте действие для сохранения данных в локальное хранилище
    saveGameState({ commit }) {
      commit('SAVE_STATE');
    },
    // Добавьте действие для загрузки данных из локального хранилища
    loadGameState({ commit }) {
      commit('LOAD_STATE');
    },
  },
  getters: {
    score(state) {
      // Геттер для получения текущего счёта
      return state.score;
    },
    clickPower(state) {
      // Геттер для получения текущей силы клика
      return state.clickPower;
    },
    cases: state => state.cases,
    getCaseById: (state) => (id) => {
      return state.cases.find(c => c.id === id);
    },
    purchaseHistory(state) {
      // Геттер для получения истории покупок
      return state.purchaseHistory;
    },
  },
};
