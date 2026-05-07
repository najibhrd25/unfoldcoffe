<script setup>
import AppButton from '@/components/ui/Button.vue'
</script>

<template>
  <section class="px-4 pt-8 pb-4 reveal">
    <div
      class="relative w-full h-[420px] md:h-[480px] lg:h-[540px] bg-primary-container rounded-xl overflow-hidden flex flex-col justify-end p-8 md:p-12 group"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 opacity-40 mix-blend-overlay">
        <img
          alt="Suasana kedai Unfold Coffee"
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XE2nsPmiftX2UfHWmLrqSgJrMQ9H0dCgIoIXOIKYMNcnVM69WhhaHzEh8U7u7GjbIN7iFAH0lsMOlJPkZUCw3PdJlV5meHPjH5_d9aBO67MiGhFIJ_Y5jVRb-jlDAQvktxyLcEqrakMPOqzV2UZ2EGjLsOP1U-i0kyHP5LvcSmUsJvtQWmGsjS5O_ME7NybJvi7L_b14AgcfTEo7uZRTX-J1VthpStq81qKP9iZh5-DAwsDJS2ZVcc_bPu2IjRD9wreZQj7sDzc"
          loading="eager"
        />
      </div>

      <!-- Content -->
      <div class="relative z-10 space-y-6">
        <h1
          class="font-headline text-4xl md:text-5xl lg:text-6xl text-on-primary leading-tight max-w-lg"
        >
          Setiap tegukan punya cerita.
        </h1>
        <RouterLink to="/menu">
          <AppButton>START AN ORDER</AppButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
