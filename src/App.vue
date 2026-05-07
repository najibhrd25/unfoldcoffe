<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <Navbar />

    <!-- Spacer for fixed navbar -->
    <div class="h-16 md:h-16"></div>

    <!-- Route Content -->
    <main class="flex-1 pb-20 md:pb-0">
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
