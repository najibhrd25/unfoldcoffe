<script setup>
import { Coffee, MapPin, ExternalLink } from 'lucide-vue-next'
import AppButton from '@/components/ui/Button.vue'

const MAPS_URL = 'https://maps.app.goo.gl/mcZRqksCmGob5LQJ7'
</script>

<template>
  <section class="px-4 py-8 reveal">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 rounded-2xl overflow-hidden shadow-sm md:shadow-none border border-outline-variant/10 md:border-none"
    >
      <!-- Left: Map Visualization -->
      <div class="relative h-[300px] md:h-[450px] bg-surface-container-high overflow-hidden group">
        <img
          alt="Peta lokasi Unfold Coffee di Trenggalek"
          class="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          src="/map-screenshot.png"
          loading="lazy"
        />
        <!-- Gradient Overlay for better contrast -->
        <div class="absolute inset-0 bg-linear-to-t from-surface/40 to-transparent"></div>

        <!-- Custom Coffee Pin -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div class="relative">
            <div class="absolute inset-0 animate-ping rounded-full bg-primary-container/30 scale-150"></div>
            <div class="relative bg-primary-container text-on-primary p-3.5 rounded-full shadow-xl">
              <Coffee :size="24" fill="currentColor" />
            </div>
          </div>
          <div class="w-1 h-6 bg-primary-container rounded-full mt-[-2px] shadow-sm"></div>
        </div>

        <!-- Location Label -->
        <div class="absolute bottom-6 left-6 right-6">
          <div class="bg-surface/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
              <MapPin :size="20" class="text-primary-container" />
            </div>
            <div>
              <p class="font-label text-[10px] font-bold text-outline uppercase tracking-widest">Lokasi Kami</p>
              <p class="font-headline text-sm text-on-surface">Trenggalek, Jawa Timur</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Content & CTA -->
      <div class="bg-secondary md:h-full flex flex-col justify-center items-start p-10 md:p-16 space-y-8">
        <div class="space-y-4">
          <span class="font-label text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Visit Us</span>
          <h2 class="font-headline text-3xl md:text-4xl text-white leading-tight">
            Temukan suasana terbaik untuk bercerita.
          </h2>
          <p class="font-label text-sm text-white/70 leading-relaxed max-w-sm">
            Datang dan rasakan langsung kehangatan Unfold Coffee. Lokasi strategis dengan suasana yang tenang dan inspiratif.
          </p>
        </div>

        <AppButton
          :href="MAPS_URL"
          variant="outline"
          class="group"
        >
          PETUNJUK ARAH
          <ExternalLink :size="14" class="ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
        </AppButton>
      </div>
    </div>
  </section>
</template>
