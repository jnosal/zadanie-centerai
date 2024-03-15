import shortenedLink from "@/components/shortened-link/shortened-link.vue";

export default {
  components: { shortenedLink },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
