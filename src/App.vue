<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div>
    <nav>
      <RouterLink to="/">Items</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>
