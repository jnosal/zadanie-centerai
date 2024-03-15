export default {
  props: {
    source: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.url);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
