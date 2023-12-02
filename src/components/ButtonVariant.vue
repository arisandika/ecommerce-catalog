<template>
  <button @click="handleClick" :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonVariant",
  props: {
    clickHandler: {
      type: Function,
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
    },
    text: {
      type: String,
      default: "Click me",
    },
    category: String,
  },
  computed: {
    buttonClass() {
      const isMenSection = this.category === "men's clothing";
      const isWomenSection = this.category === "women's clothing";

      return {
        "button-primary": this.variant === "primary",
        "button-secondary": this.variant === "secondary",
        "button-unavailable": this.variant === "unavailable",
        "men-color": isMenSection,
        "women-color": isWomenSection,
      };
    },
    buttonText() {
      return this.text;
    },
  },
  methods: {
    handleClick() {
      this.clickHandler();
    },
  },
};
</script>

<style scoped>
.button-primary {
  font-weight: 600;
  width: 12rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: #ffffff;
  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.button-primary:hover {
  color: var(--primary-color);
  background-color: transparent;
  border: 2px solid var(--primary-color);
}

.button-secondary {
  font-weight: 600;
  width: 12rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: var(--primary-color);
  background-color: white;
  border: 2px solid var(--primary-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.button-secondary:hover {
  color: white;
  background-color: var(--primary-color);
}

.button-unavailable {
  font-weight: 600;
  width: 12rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.button-unavailable:hover {
  color: white;
  background-color: black;
}
</style>
