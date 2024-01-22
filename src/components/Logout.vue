<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isAuthenticated = computed(() => store.getters.isAuthenticated);
const currentUser = computed(() => store.getters.currentUser);

function logout() {
  store.dispatch("logout", { accessToken: currentUser.value.accessToken });
}

watchEffect(() => {
  if (!isAuthenticated.value) {
    // Redirect to the home page when not authenticated
    window.location.href = "/";
  }
});
</script>

<template>
  <nord-dropdown-item @click="logout">
    Sign out
    <nord-icon slot="end" name="interface-logout"></nord-icon>
  </nord-dropdown-item>
</template>
