import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    currentIndex: 1,
    selectedClothing: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getSelectedClothing: (state) => state.selectedClothing,
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_SELECTED_CLOTHING: (state, selectedClothing) => {
      state.selectedClothing = selectedClothing;
    },
    INCREMENT_INDEX: (state) => {
      state.currentIndex = (state.currentIndex % 20) + 1;
    },
  },
  actions: {
    fetchProducts: ({ commit, state }) => {
      axios
        .get(`https://fakestoreapi.com/products/${state.currentIndex}`)
        .then((response) => {
          const category = response.data.category;

          if (
            category === "men's clothing" ||
            category === "women's clothing"
          ) {
            commit("SET_SELECTED_CLOTHING", response.data);
          } else {
            commit("SET_SELECTED_CLOTHING", null);
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    incrementIndex: ({ commit }) => {
      commit("INCREMENT_INDEX");
    },
  },

  modules: {},
});
