// src/store/index.js

import { createStore } from 'vuex';
import window from './modules/window';
import game from "@/store/modules/game";

export default createStore({
  modules: {
    window,
    game
  }
});
