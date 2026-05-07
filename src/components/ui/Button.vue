<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  href: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center font-label font-bold tracking-widest uppercase rounded-full transition-all duration-200 active:scale-95 cursor-pointer select-none"
    :class="[
      /* Variant */
      variant === 'primary' &&
        'bg-surface-container-lowest text-primary-container hover:bg-surface-bright shadow-sm',
      variant === 'outline' &&
        'border border-white/40 text-white hover:bg-white/10',
      variant === 'ghost' &&
        'text-primary hover:bg-surface-container-high',

      /* Size */
      size === 'sm' && 'px-5 py-2 text-[10px]',
      size === 'md' && 'px-8 py-3 text-xs',
      size === 'lg' && 'px-10 py-3.5 text-sm',
    ]"
  >
    <slot />
  </component>
</template>
