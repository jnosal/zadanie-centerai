import shortenedLink from "@/components/shortened-link/shortened-link.vue";
import shortenedLinksList from "@/components/shortened-links-list/shortened-links-list.vue";
import zButton from "@/components/generic/z-button/z-button.vue";
import zInput from "@/components/generic/z-input/z-input.vue";

export default {
  components: {
    shortenedLink,
    shortenedLinksList,
    zButton,
    zInput,
  },
  data() {
    return {
      result: null,
      fields: {
        link: null,
      },
    };
  },
  computed: {
    isValid() {
      return !!this.fields.link;
    },
  },
  methods: {
    shortenLink() {
      this.result = "http:/www.google.com";
    },
  },
};
