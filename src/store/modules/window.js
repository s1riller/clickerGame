export default {
  state: {
    window: null // состояние для модуля пользователей
  },
  mutations: {
    SET_WINDOW(state, window) {
      state.window = window;
    }
  },
  actions: {
    setWindow({ commit }, window) {
      commit('SET_WINDOW', window);
    }
  },
  getters: {
    currentWindow(state)
      {
        return state.window
      }
  }
};
