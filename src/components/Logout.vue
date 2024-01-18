<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const isAuthenticated = computed(() => store.getters.isAuthenticated);
const currentUser = computed(() => store.getters.currentUser);

function logout() {
  console.log("logout");
  store.dispatch("logout", { accessToken: currentUser.value.accessToken });
}

watchEffect(() => {
  if (!isAuthenticated.value) {
    router.push("/");
  }
});
</script>

<template>
  <nord-dropdown-item @click="logout">
    Sign out
    <nord-icon slot="end" name="interface-logout"></nord-icon>
  </nord-dropdown-item>
</template>
