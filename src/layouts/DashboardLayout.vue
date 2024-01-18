<script setup lang="ts">
import Logout from "@/components/Logout.vue";
import Profile from "@/components/Profile.vue";
</script>

<template>
  <nord-layout>
    <nord-navigation slot="nav">
      <nord-dropdown slot="header" expand>
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" name="Bath Clinic" variant="square"
            >B</nord-avatar
          >
          Bath Clinic
        </nord-button>
        <nord-dropdown-group heading="laura.williams@nordhealth.com">
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Bath Clinic"
              size="s"
              variant="square"
              >B</nord-avatar
            >
            Bath Clinic
            <nord-icon slot="end" name="interface-checked"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Ocean Beach Clinic"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-success)"
            >
              O
            </nord-avatar>
            Ocean Beach Clinic
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Park Animal Hospital"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-highlight)"
            >
              P
            </nord-avatar>
            Park Animal Hospital
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Balboa Pet Hospital"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-danger)"
            >
              B
            </nord-avatar>
            Balboa Pet Hospital
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Add another clinic</nord-dropdown-item>
          <nord-dropdown-item>Customize style</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
      </nord-dropdown>
      <nord-nav-group heading="Workspace">
        <router-link to="/dashboard">
          <nord-nav-item
            :active="$route.path === '/dashboard'"
            icon="navigation-dashboard"
          >
            Dashboard
          </nord-nav-item>
        </router-link>

        <router-link to="/products">
          <nord-nav-item
            :active="$route.path === '/products'"
            icon="navigation-payments"
          >
            Products
          </nord-nav-item>
        </router-link>
      </nord-nav-group>
      <nord-dropdown expand slot="footer">
        <!-- Required Components -->
        <nord-button slot="toggle" expand>
          <Profile />
        </nord-button>
        <Logout />
      </nord-dropdown>
    </nord-navigation>
    <nord-header slot="header">
      <h1 class="n-typescale-l">Dashboard</h1>
      <nord-button variant="primary" slot="end">
        <nord-icon slot="start" name="interface-add-small"></nord-icon>
        Create new
      </nord-button>
      <nord-tooltip id="export" position="block-end">
        Export data as Spreadsheet
      </nord-tooltip>
    </nord-header>
    <nord-stack gap="l">
      <nord-card>
        <h2 slot="header">Card heading</h2>

        <slot></slot>
      </nord-card>
    </nord-stack>
  </nord-layout>
  <nord-command-menu></nord-command-menu>
</template>