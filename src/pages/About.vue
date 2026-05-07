<script setup>
import { Coffee, Heart, MapPin, Clock } from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'

useReveal()

const values = [
  {
    icon: Coffee,
    title: 'Kopi Artisan',
    description: 'Biji kopi pilihan dari perkebunan lokal Trenggalek, diroasting dengan presisi.',
  },
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta',
    description: 'Setiap cangkir diseduh manual oleh barista berpengalaman kami.',
  },
  {
    icon: MapPin,
    title: 'Lokal & Berkelanjutan',
    description: 'Mendukung petani kopi lokal dan praktik pertanian berkelanjutan.',
  },
  {
    icon: Clock,
    title: 'Freshly Brewed',
    description: 'Kopi diseduh segar setiap kali dipesan, bukan batch brewing.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="px-4 pt-8 pb-6 reveal">
      <div
        class="relative w-full h-[320px] md:h-[400px] bg-primary-container rounded-xl overflow-hidden flex items-end p-8 md:p-12"
      >
        <div class="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            alt="Interior Unfold Coffee"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XE2nsPmiftX2UfHWmLrqSgJrMQ9H0dCgIoIXOIKYMNcnVM69WhhaHzEh8U7u7GjbIN7iFAH0lsMOlJPkZUCw3PdJlV5meHPjH5_d9aBO67MiGhFIJ_Y5jVRb-jlDAQvktxyLcEqrakMPOqzV2UZ2EGjLsOP1U-i0kyHP5LvcSmUsJvtQWmGsjS5O_ME7NybJvi7L_b14AgcfTEo7uZRTX-J1VthpStq81qKP9iZh5-DAwsDJS2ZVcc_bPu2IjRD9wreZQj7sDzc"
            loading="eager"
          />
        </div>
        <div class="relative z-10">
          <h1 class="font-headline text-3xl md:text-5xl text-on-primary leading-tight">
            Tentang Unfold
          </h1>
          <p class="font-label text-sm md:text-base text-on-primary/80 mt-3 max-w-md">
            Lebih dari sekadar kopi — ini tentang momen, cerita, dan koneksi.
          </p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="px-6 py-12 max-w-3xl mx-auto reveal">
      <span class="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase">
        Cerita Kami
      </span>
      <h2 class="font-headline text-2xl md:text-3xl text-on-surface mt-2 mb-6">
        Dari Trenggalek untuk Dunia
      </h2>
      <div class="space-y-4 font-body text-on-surface-variant leading-relaxed">
        <p>
          Unfold lahir dari kecintaan kami terhadap kopi dan kampung halaman. Bermula dari
          keinginan sederhana untuk menghadirkan pengalaman ngopi yang berbeda — yang tidak
          hanya soal rasa, tapi juga tentang ruang, suasana, dan cerita di balik setiap cangkir.
        </p>
        <p>
          Kami bekerja langsung dengan petani kopi lokal di Trenggalek, memastikan setiap biji
          yang kami gunakan ditanam dan dipanen dengan penuh perhatian. Proses roasting dilakukan
          secara cermat untuk menghasilkan profil rasa yang khas dan autentik.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="px-6 py-12 bg-surface-container-low reveal">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-10">
          <span class="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase">
            Nilai Kami
          </span>
          <h2 class="font-headline text-2xl md:text-3xl text-on-surface mt-2">
            Apa yang Membuat Kami Berbeda
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(val, i) in values"
            :key="i"
            class="bg-surface p-6 rounded-xl space-y-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center">
              <component :is="val.icon" :size="22" class="text-primary-container" />
            </div>
            <h3 class="font-label font-bold text-on-surface">{{ val.title }}</h3>
            <p class="font-label text-sm text-outline leading-relaxed">{{ val.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 py-16 text-center reveal">
      <div class="max-w-lg mx-auto space-y-6">
        <h2 class="font-headline text-2xl md:text-3xl text-on-surface">
          Siap untuk menikmati kopi terbaik?
        </h2>
        <p class="font-label text-sm text-outline">
          Kunjungi kedai kami atau pesan langsung via WhatsApp.
        </p>
        <RouterLink
          to="/menu"
          class="inline-block px-8 py-3 bg-primary-container text-on-primary rounded-full font-label text-xs font-bold tracking-widest uppercase hover:shadow-lg transition-all active:scale-95"
        >
          LIHAT MENU
        </RouterLink>
      </div>
    </section>
  </div>
</template>
