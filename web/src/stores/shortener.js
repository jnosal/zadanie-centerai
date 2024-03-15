import { defineStore } from "pinia";

export const useShortenerStore = defineStore("shortener", {
  state: () => ({
    historyLinks: [],
  }),
  actions: {},
});
