<template>
  <div>
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

