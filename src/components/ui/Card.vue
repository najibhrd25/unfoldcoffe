<script setup>
import { MessageCircle } from 'lucide-vue-next'
import { useWhatsApp } from '@/composables/useWhatsApp'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  layout: {
    type: String,
    default: 'grid',
    validator: (v) => ['grid', 'carousel', 'list'].includes(v),
  },
})

const emit = defineEmits(['click'])
const { openOrder } = useWhatsApp()

function handleImageError(e, item) {
  const localImg = `/${item.id}.png`
  const placeholder = `https://placehold.co/600x600/f3ede8/5c4033?text=${encodeURIComponent(item.name)}`
  
  if (e.target.src.includes('placehold.co')) return
  
  if (!e.target.dataset.triedLocal) {
    e.target.dataset.triedLocal = 'true'
    e.target.src = localImg
  } else {
    e.target.src = placeholder
  }
}
</script>

<template>
  <article
    v-if="layout === 'list'"
    class="flex items-center gap-4 py-3 border-b border-outline-variant/30 active:bg-surface-container-low transition-colors cursor-pointer"
    @click="emit('click')"
  >
    <img 
      :src="item.image" 
      :alt="item.name" 
      class="w-16 h-16 rounded-xl object-cover flex-none bg-surface-container-low" 
      loading="lazy" 
      @error="handleImageError($event, item)"
    />
    <div class="flex-1 min-w-0 flex flex-col gap-0.5">
      <h3 class="font-label font-bold text-sm text-on-surface truncate">{{ item.name }}</h3>
      <p class="font-label text-xs text-on-surface-variant font-medium">{{ item.price }}</p>
    </div>
  </article>

  <article
    v-else
    class="group flex flex-col gap-3 cursor-pointer"
    :class="layout === 'carousel' ? 'flex-none w-72' : ''"
    @click="emit('click')"
  >
    <!-- Image Container -->
    <div
      class="relative overflow-hidden rounded-xl bg-surface-container-low"
      :class="layout === 'carousel' ? 'aspect-[3/4]' : 'aspect-square'"
    >
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        @error="handleImageError($event, item)"
      />

      <!-- Badge -->
      <div
        v-if="item.badge"
        class="absolute top-3 right-3 backdrop-blur-md px-3 py-1 rounded-full"
        :class="[
          item.badge === 'SIGNATURE'
            ? 'bg-tertiary-fixed text-on-tertiary-fixed'
            : 'bg-white/80 text-primary-container',
        ]"
      >
        <span class="font-label text-[10px] font-extrabold tracking-tighter uppercase">
          {{ item.badge }}
        </span>
      </div>

      <!-- WhatsApp Order Button -->
      <button
        class="absolute bottom-3 right-3 bg-primary-container text-on-primary p-2 rounded-lg shadow-lg transition-all duration-200 active:scale-90 hover:shadow-xl opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
        :aria-label="`Pesan ${item.name} via WhatsApp`"
        @click.stop="openOrder(item.name)"
      >
        <MessageCircle :size="16" />
      </button>
    </div>

    <!-- Info -->
    <div class="flex flex-col gap-0.5">
      <h3
        class="font-label font-bold text-on-surface"
        :class="layout === 'carousel' ? 'font-headline text-xl' : 'text-sm'"
      >
        {{ item.name }}
      </h3>
      <p class="font-label text-xs text-on-surface-variant font-medium">
        {{ item.price }}
      </p>
      <p v-if="layout === 'carousel'" class="font-label text-sm text-outline mt-1">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>
