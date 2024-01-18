<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";

const toastGroup = ref(null);
const props = defineProps(["message"]);

const addToast = () => {
  toastGroup.value.addToast(props.message);
};

const cleanupToasts = () => {
  toastGroup.value.addEventListener("dismiss", (e) => e.target.remove());
};

onUpdated(() => {
  addToast();
});

onMounted(() => {
  cleanupToasts();
});
</script>

<template>
  <div class="toast">
    <nord-toast-group ref="toastGroup">
      <nord-toast auto-dismiss="3000000">{{ props.message }}</nord-toast>
    </nord-toast-group>
  </div>
</template>

<style scoped>
:deep(nord-toast) {
  margin: auto;
}
</style>
