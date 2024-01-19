<script setup lang="ts">
import Toast from "@/components/Toast.vue";
import { validateEmail, validatePassword } from "@/utils/validation";
import type { Input } from "@nordhealth/components";
import { computed, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const isPasswordVisible = ref<boolean>(false);

const isAuthenticated = computed(() => store.getters.isAuthenticated);
const error = computed(() => store.getters.error);

// helper for demo purposes
function useField(initialValue = "") {
  const inputRef = ref<Input>();
  const value = ref(initialValue);
  const error = ref<string>();
  const valid = computed(() => !!value.value);

  // clear error whenever value is valid
  watchEffect(() => {
    if (valid.value) {
      error.value = undefined;
    }
  });

  return reactive({
    value,
    error,
    valid,
    focus: () => inputRef.value?.focus(),
    setRef: (el: Input) => {
      inputRef.value = el;
    },
  });
}

const email = useField();
const password = useField();

function showPassword() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

function handleSubmit() {
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (isValidEmail && isValidPassword && email.valid && password.valid) {
    login(email.value, password.value);
  }
}

function login(email: string, password: string) {
  // Encode the password to base64
  const encodedPassword = btoa(password);

  // Dispatch login action
  store.dispatch("login", {
    email,
    password: encodedPassword,
  });
}

watchEffect(() => {
  if (isAuthenticated.value) {
    // Use router.push for navigation in a Composition API setup
    router.push("/dashboard");
  }
});
</script>

<template>
  <nord-card padding="l">
    <h2 slot="header">Sign in to Nord</h2>
    <form action="#" @submit.prevent="handleSubmit">
      <nord-stack>
        <nord-input
          label="Email"
          expand
          type="email"
          required
          name="email"
          placeholder="Email"
          :ref="email.setRef"
          :error="email.error"
          v-model="email.value"
        />

        <div class="password">
          <nord-input
            label="Password"
            expand
            required
            :type="isPasswordVisible ? 'text' : 'password'"
            name="password"
            placeholder="Password"
            :ref="password.setRef"
            :error="password.error"
            v-model="password.value"
          />
          <a href="#">Forgot password?</a>

          <nord-icon
            v-if="!isPasswordVisible"
            name="interface-edit-off"
            @click="showPassword"
          ></nord-icon>
          <nord-icon
            v-else
            name="interface-edit-on"
            @click="showPassword"
          ></nord-icon>
        </div>

        <div class="checkbox">
          <nord-checkbox label="Updates and Announcements" value="true" />
        </div>

        <nord-button type="submit" expand variant="primary">
          Sign in
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>

  <nord-card class="n-align-center">
    New to Nord? <a href="#">Create an account</a>.
  </nord-card>
  <div v-if="error">
    <Toast :message="error" />
  </div>
</template>

<style scoped>
.password {
  position: relative;
}

nord-icon {
  position: absolute;
  right: 1.25rem; /* 20px / 16px = 1.25rem */
  top: 2.25rem; /* 36px / 16px = 2.25rem */
  z-index: var(
    --n-index-default
  ); /* The default z-index for components and elements inside components. */
  cursor: pointer;
}

.password a {
  text-decoration: none;
  font-size: var(--n-font-size-s);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
}
</style>
