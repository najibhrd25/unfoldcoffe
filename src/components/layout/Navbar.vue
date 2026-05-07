<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Coffee, Home, Utensils, Info } from 'lucide-vue-next'

const route = useRoute()

const navLinks = [
  { to: '/', label: 'Beranda', icon: Home },
  { to: '/menu', label: 'Menu', icon: Utensils },
  { to: '/about', label: 'Tentang', icon: Info },
]
</script>

<template>
  <!-- Desktop Top Navigation -->
  <header
    class="hidden md:block fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20"
  >
    <div class="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <Coffee
          :size="24"
          class="text-primary-container transition-transform duration-300 group-hover:rotate-12"
        />
        <span class="font-headline text-2xl font-bold tracking-tighter italic text-primary-container">
          Unfold
        </span>
      </RouterLink>

      <!-- Nav Links -->
      <nav class="flex items-center gap-8" aria-label="Navigasi utama">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-label text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
          :class="[
            route.path === link.to
              ? 'text-primary-container'
              : 'text-outline hover:text-on-surface',
          ]"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <!-- Mobile Bottom Navigation -->
  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-6 pb-6 pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
    aria-label="Navigasi mobile"
  >
    <div class="flex items-center justify-around">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex flex-col items-center gap-1 transition-all duration-300"
        :class="[
          route.path === link.to
            ? 'text-primary-container scale-110'
            : 'text-outline',
        ]"
      >
        <div 
          class="p-1 rounded-xl transition-colors duration-300"
          :class="route.path === link.to ? 'bg-primary-container/10' : ''"
        >
          <component :is="link.icon" :size="24" />
        </div>
        <span class="font-label text-[10px] font-bold uppercase tracking-wider">
          {{ link.label }}
        </span>
      </RouterLink>
    </div>
  </nav>

  <!-- Simple Mobile Header (Logo Only) -->
  <header
    class="md:hidden fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 px-6 py-4 flex justify-center"
  >
    <RouterLink to="/" class="flex items-center gap-2">
      <Coffee :size="20" class="text-primary-container" />
      <span class="font-headline text-xl font-bold tracking-tighter italic text-primary-container">
        Unfold
      </span>
    </RouterLink>
  </header>
</template>

<style scoped>
.router-link-active {
  transition: all 0.3s ease;
}
</style>
