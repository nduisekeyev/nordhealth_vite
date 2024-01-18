<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav> -->
  <main>
    <router-view />
  </main>
</template>

<style>
@import "./assets/base.css";

.stack {
  inline-size: 90%;
  max-inline-size: 340px;
  margin: var(--n-space-xl) auto;
}
</style>
