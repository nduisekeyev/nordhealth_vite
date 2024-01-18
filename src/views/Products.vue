<script setup lang="ts">
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import ProductService from "@/services/product-service";
import { Product } from "@/types";
import { onMounted, ref } from "vue";

const isLoading = ref(true);
const products = ref<Product[]>([]);

onMounted(async () => {
  try {
    const fetchedProducts = await ProductService.fetchProducts();
    products.value = fetchedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <DashboardLayout>
    <h1 class="n-margin-be-l">Products Component</h1>

    <nord-spinner v-if="isLoading" size="xl"></nord-spinner>
    <nord-stack v-if="!isLoading">
      <nord-table>
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Short Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.title.substring(0, 65) }}</td>
              <td>{{ `$${product.price.toFixed(2)}` }}</td>
              <td>{{ product.category }}</td>
              <td>
                <img :src="product.image" :alt="product.title" />
              </td>
              <td>{{ product.description.substring(0, 100) }}...</td>
            </tr>
          </tbody>
        </table>
      </nord-table>
    </nord-stack>
  </DashboardLayout>
</template>

<style scoped>
nord-table :is(td, th):first-child {
  width: 2.625rem;
}

nord-table table thead tr th {
  text-align: left;
}

nord-table img {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
}
</style>
