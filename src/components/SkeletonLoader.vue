<template>
  <div class="loader-skeleton">
    <div class="skeleton-1" />
    <div class="skeleton-2" />
    <div class="skeleton-3" />
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
};
</script>

<style scoped>
.loader-skeleton {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "skeleton-1 skeleton-2 skeleton-2"
    "skeleton-1 skeleton-3 skeleton-3";
  gap: 1rem;
  background-color: white;
  padding: 3rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.skeleton-1 {
  width: 300px;
  height: 320px;
  background-color: #e5e5e5;
  grid-area: skeleton-1;
}
.skeleton-2 {
  width: 500px;
  height: 150px;
  background-color: #e5e5e5;
  grid-area: skeleton-2;
}
.skeleton-3 {
  width: 500px;
  height: 100%;
  background-color: #e5e5e5;
  grid-area: skeleton-3;
}
</style>
