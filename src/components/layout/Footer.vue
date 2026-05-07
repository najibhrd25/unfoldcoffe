<script setup>
import { Coffee, Instagram, MapPin } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-primary-container text-on-primary-container mt-auto pb-24 md:pb-0">
    <div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <Coffee :size="20" class="text-on-primary" />
            <span class="font-headline text-xl font-bold tracking-tighter italic text-on-primary">
              Unfold
            </span>
          </div>
          <p class="font-label text-sm text-on-primary/70 leading-relaxed max-w-xs">
            Setiap tegukan punya cerita. Kopi artisan dari Trenggalek untuk dunia.
          </p>
        </div>

        <!-- Navigation -->
        <div class="space-y-4">
          <h3 class="font-label text-xs font-bold tracking-[0.2em] text-on-primary/50 uppercase">
            Navigasi
          </h3>
          <nav class="flex flex-col gap-2">
            <RouterLink
              to="/"
              class="font-label text-sm text-on-primary/80 hover:text-on-primary transition-colors w-fit"
            >
              Beranda
            </RouterLink>
            <RouterLink
              to="/menu"
              class="font-label text-sm text-on-primary/80 hover:text-on-primary transition-colors w-fit"
            >
              Menu
            </RouterLink>
            <RouterLink
              to="/about"
              class="font-label text-sm text-on-primary/80 hover:text-on-primary transition-colors w-fit"
            >
              Tentang Kami
            </RouterLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="font-label text-xs font-bold tracking-[0.2em] text-on-primary/50 uppercase">
            Temukan Kami
          </h3>
          <div class="space-y-3">
            <a
              href="#"
              class="flex items-center gap-2 font-label text-sm text-on-primary/80 hover:text-on-primary transition-colors"
            >
              <MapPin :size="16" />
              Trenggalek, Jawa Timur
            </a>
            <a
              href="#"
              class="flex items-center gap-2 font-label text-sm text-on-primary/80 hover:text-on-primary transition-colors"
            >
              <Instagram :size="16" />
              @unfoldcoffee
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-6 border-t border-on-primary/10">
        <p class="font-label text-xs text-on-primary/40 text-center">
          &copy; {{ new Date().getFullYear() }} Unfold Coffee. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
