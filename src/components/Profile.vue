<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const currentUser = store.getters.currentUser;
</script>

<template>
  <nord-avatar
    slot="start"
    aria-hidden="true"
    name="Laura Williams"
  ></nord-avatar>
  {{ currentUser?.username }}
</template>
