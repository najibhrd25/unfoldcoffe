<script setup>
import Hero from '@/components/sections/Hero.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import MenuList from '@/components/sections/MenuList.vue'
import { useReveal } from '@/composables/useReveal'

useReveal()
</script>

<template>
  <div>
    <Hero />
    <AboutSection />
    <MenuList />
  </div>
</template>
