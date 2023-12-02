<template>
  <div class="container">
    <ProductSection
      :isLoading="isLoading"
      :selectedClothing="selectedClothing"
      :isMenSection="isMenSection"
      :isWomenSection="isWomenSection"
      :isUnavailableProduct="isUnavailableProduct"
      :sectionClass="sectionClass"
      :getNextProduct="getNextProduct"
    />
  </div>
</template>

<script>
import ProductSection from "@/components/ProductSection.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  name: "ProductList",
  components: {
    ProductSection,
  },
  computed: {
    selectedClothing() {
      return this.$store.getters.getSelectedClothing || null;
    },
    isMenSection() {
      return (
        this.selectedClothing &&
        this.selectedClothing.category === "men's clothing"
      );
    },
    isWomenSection() {
      return (
        this.selectedClothing &&
        this.selectedClothing.category === "women's clothing"
      );
    },
    isUnavailableProduct() {
      return (
        !this.selectedClothing || (!this.isMenSection && !this.isWomenSection)
      );
    },
    sectionClass() {
      return {
        "page-men": this.isMenSection,
        "page-women": this.isWomenSection,
        "page-unavailable": this.isUnavailableProduct,
        "page-loading": this.isLoading,
      };
    },
  },
  methods: {
    async getNextProduct() {
      this.isLoading = true;

      const previousCategory = this.selectedClothing
        ? this.selectedClothing.category
        : "";

      try {
        await this.$store.dispatch("fetchProducts");
        this.$store.dispatch("incrementIndex");

        const currentCategory = this.selectedClothing
          ? this.selectedClothing.category
          : "";
        if (
          !previousCategory ||
          !this.selectedClothing ||
          (previousCategory !== "men's clothing" &&
            previousCategory !== "women's clothing") ||
          (currentCategory !== "men's clothing" &&
            currentCategory !== "women's clothing")
        ) {
          this.$store.commit("SET_SELECTED_CLOTHING", null);
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getNextProduct();
  },
};
</script>

<style scoped>
.page-men {
  height: 65vh;
  background-color: var(--background-men);
}

.page-women {
  height: 65vh;
  background-color: var(--background-women);
}

.page-unavailable {
  height: 65vh;
  background-color: var(--background-unavailable);
}

.page-loading {
  height: 65vh;
  background-color: white;
}

.product-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120vh;
}

.page-men {
  --primary-color: #002772;
}

.page-women {
  --primary-color: #720060;
}
</style>
