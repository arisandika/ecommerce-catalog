<template>
  <div :class="sectionClass">
    <BgShape />
    <div class="product-section">
      <div v-if="isLoading" class="loader-skeleton">
        <SkeletonLoader />
      </div>
      <div v-else-if="selectedClothing">
        <div class="product-container">
          <div class="product-image" v-if="selectedClothing">
            <img :src="selectedClothing.image" alt="Product Image" />
          </div>
          <div class="product-column" v-if="selectedClothing">
            <div class="product-details">
              <div
                class="product-title"
                v-if="selectedClothing"
                :class="{
                  'men-text': isMenSection,
                  'women-text': isWomenSection,
                }"
              >
                {{ selectedClothing.title }}
              </div>
              <div
                class="category-rating-wrapper"
                v-if="selectedClothing.category || selectedClothing.rating"
              >
                <div class="product-category" v-if="selectedClothing.category">
                  {{ selectedClothing.category }}
                </div>
                <div class="product-rating" v-if="selectedClothing.rating">
                  <p>{{ selectedClothing.rating.rate }}</p>
                  <div
                    v-for="(star, index) in Array(
                      Math.floor(selectedClothing.rating.rate)
                    )"
                    :key="index"
                  >
                    <span
                      :class="{
                        'stars-men': isMenSection,
                        'stars-women': isWomenSection,
                      }"
                      >&#9733;</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="product-description"
                v-if="selectedClothing.description"
              >
                {{ selectedClothing.description }}
              </div>
              <div
                class="product-price"
                v-if="selectedClothing"
                :class="{
                  'men-text': isMenSection,
                  'women-text': isWomenSection,
                }"
              >
                ${{ selectedClothing.price }}
              </div>
              <div class="button-wrapper">
                <ButtonVariant
                  :clickHandler="buyNow"
                  variant="primary"
                  text="Buy Now"
                />
                <ButtonVariant
                  :clickHandler="getNextProduct"
                  variant="secondary"
                  text="Next Product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="unavailable-container">
        <BgSad />
        <div class="unavailable-details">
          <p>This product is unavailable to show</p>
          <ButtonVariant
            :clickHandler="getNextProduct"
            variant="unavailable"
            text="Next Product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import ButtonVariant from "@/components/ButtonVariant.vue";
import BgShape from "@/components/BgShape.vue";
import BgSad from "@/components/BgSad.vue";

export default {
  props: {
    isLoading: Boolean,
    selectedClothing: Object,
    isMenSection: Boolean,
    isWomenSection: Boolean,
    isUnavailableProduct: Boolean,
    sectionClass: Object,
    getNextProduct: Function,
  },
  components: {
    SkeletonLoader,
    ButtonVariant,
    BgShape,
    BgSad,
  },
};
</script>

<style scoped>
.product-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.product-container {
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 958px;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.unavailable-container {
  background-color: white;
  padding-top: 3rem;
  width: 958px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.unavailable-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  width: 13.5rem;
}

.product-column {
  grid-column: span 2 / span 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.product-details {
  padding-right: 2rem;
}

.product-title {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
}

.category-rating-wrapper {
  color: var(--secondary-text);
  width: 100%;
  border-bottom: 1px solid;
  border-color: #a4a4a4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: capitalize;
}

.product-rating {
  display: flex;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
}

.product-rating p {
  margin-right: 0.5rem;
  border-right: 1px solid;
  padding-right: 10px;
  border-color: #a4a4a4;
}

.stars-men {
  color: var(--primary-men);
  font-size: 1.25rem;
}

.stars-women {
  color: var(--primary-women);
  font-size: 1.25rem;
}

.product-description {
  color: var(--primary-text);
  margin-top: 1rem;
}

.product-price {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.button-wrapper {
  display: flex;
  gap: 0.75rem;
}

.men-text {
  color: var(--primary-men);
}

.women-text {
  color: var(--primary-women);
}
</style>
