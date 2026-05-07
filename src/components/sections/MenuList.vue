<script setup>
import Card from '@/components/ui/Card.vue'
import { featuredItems } from '@/data/menu'
</script>

<template>
  <section class="py-12 reveal">
    <!-- Section Header -->
    <div class="px-6 mb-8 flex justify-between items-end max-w-6xl mx-auto">
      <div>
        <span class="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase">
          Handcrafted
        </span>
        <h2 class="font-headline text-3xl text-on-surface mt-1">Classic Menu Favorit</h2>
      </div>
      <RouterLink
        to="/menu"
        class="text-primary font-label text-sm font-bold border-b border-outline-variant/30 hover:border-primary transition-all whitespace-nowrap"
      >
        Lihat Semua
      </RouterLink>
    </div>

    <!-- Horizontal Scroll Carousel -->
    <div class="flex overflow-x-auto no-scrollbar gap-6 px-6 pb-4 max-w-6xl mx-auto">
      <Card
        v-for="item in featuredItems"
        :key="item.id"
        :item="item"
        layout="carousel"
      />
    </div>
  </section>
</template>
