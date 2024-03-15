import zButton from "@/components/generic/z-button/z-button.vue";
import zInput from "@/components/generic/z-input/z-input.vue";

export default {
  components: {
    zButton,
    zInput,
  },
  data() {
    return {
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
};
