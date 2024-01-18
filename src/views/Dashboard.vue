<script setup lang="ts">
import DashboardLayout from "@/layouts/DashboardLayout.vue";
</script>

<template>
  <DashboardLayout>
    <h1 class="n-margin-be-l">Dashboard Component</h1>

    <nord-banner variant="success">
      Your order has been shipped and will arrive on January 20th.
      <a href="#">Track order</a>.
    </nord-banner>
  </DashboardLayout>
</template>
