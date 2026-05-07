<script setup>
import { ref, computed } from 'vue'
import Card from '@/components/ui/Card.vue'
import { menuItems, categories } from '@/data/menu'
import { useReveal } from '@/composables/useReveal'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { X, MessageCircle } from 'lucide-vue-next'

useReveal()
const { openOrder } = useWhatsApp()

const activeCategory = ref('all')
const isLoading = ref(true)
const selectedItem = ref(null)

function openModal(item) {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedItem.value = null
  document.body.style.overflow = ''
}

// Simulate initial load for skeleton demo
setTimeout(() => {
  isLoading.value = false
}, 600)

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return menuItems
  return menuItems.filter((item) => item.category === activeCategory.value)
})

const groupedItems = computed(() => {
  if (activeCategory.value !== 'all') return null
  const groups = []
  categories.forEach(cat => {
    if (cat.id !== 'all') {
      const items = menuItems.filter(item => item.category === cat.id)
      if (items.length > 0) {
        groups.push({ category: cat, items })
      }
    }
  })
  return groups
})

function setCategory(id) {
  activeCategory.value = id
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="px-6 pt-8 pb-4 max-w-6xl mx-auto reveal">
      <h1 class="font-headline font-bold text-3xl md:text-4xl text-on-primary-fixed tracking-tight">
        Menu Kami
      </h1>
      <p class="font-label text-sm text-outline mt-2">
        Temukan minuman dan camilan favorit yang dibuat dengan penuh cinta.
      </p>
    </section>

    <!-- Category Filters -->
    <section
      class="px-6 overflow-x-auto no-scrollbar flex gap-3 py-4 sticky top-[64px] bg-surface/80 backdrop-blur-md z-30 max-w-6xl mx-auto"
    >
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="flex-none px-5 py-2 rounded-full font-label text-xs font-bold tracking-widest uppercase transition-all duration-200"
        :class="[
          activeCategory === cat.id
            ? 'bg-primary-container text-on-primary shadow-sm'
            : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest',
        ]"
        @click="setCategory(cat.id)"
      >
        {{ cat.label }}
      </button>
    </section>

    <!-- Loading Skeleton -->
    <section v-if="isLoading" class="px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-6 pb-16">
      <div v-for="n in 6" :key="n" class="flex flex-col gap-3">
        <div class="aspect-square rounded-xl skeleton"></div>
        <div class="h-4 w-3/4 rounded skeleton"></div>
        <div class="h-3 w-1/2 rounded skeleton"></div>
      </div>
    </section>

    <!-- Product Grid / List -->
    <section v-else-if="filteredItems.length > 0" class="px-6 max-w-6xl mx-auto mt-6 pb-16 reveal">
      
      <!-- 'All' View Grouped -->
      <template v-if="activeCategory === 'all'">
        <div v-for="group in groupedItems" :key="group.category.id" class="mb-10">
          <h2 class="font-headline text-xl font-bold mb-4 text-on-surface">{{ group.category.label }}</h2>
          
          <!-- Mobile List -->
          <div class="flex flex-col md:hidden">
            <Card
              v-for="item in group.items"
              :key="item.id"
              :item="item"
              layout="list"
              @click="openModal(item)"
            />
          </div>
          
          <!-- Desktop Grid -->
          <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            <Card
              v-for="item in group.items"
              :key="item.id"
              :item="item"
              layout="grid"
              @click="openModal(item)"
            />
          </div>
        </div>
      </template>

      <!-- Filtered Category View -->
      <template v-else>
        <!-- Mobile List -->
        <div class="flex flex-col md:hidden">
          <Card
            v-for="item in filteredItems"
            :key="item.id"
            :item="item"
            layout="list"
            @click="openModal(item)"
          />
        </div>
        
        <!-- Desktop Grid -->
        <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          <Card
            v-for="item in filteredItems"
            :key="item.id"
            :item="item"
            layout="grid"
            @click="openModal(item)"
          />
        </div>
      </template>
    </section>

    <!-- Empty State -->
    <section v-else class="px-6 max-w-6xl mx-auto flex flex-col items-center justify-center py-24 text-center">
      <div class="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
        <span class="text-4xl">☕</span>
      </div>
      <h3 class="font-headline text-xl text-on-surface mb-2">Belum ada menu</h3>
      <p class="font-label text-sm text-outline max-w-xs">
        Kategori ini masih kosong. Coba pilih kategori lain atau lihat semua menu.
      </p>
      <button
        class="mt-6 px-6 py-2 rounded-full bg-primary-container text-on-primary font-label text-xs font-bold tracking-widest uppercase"
        @click="setCategory('all')"
      >
        LIHAT SEMUA
      </button>
    </section>

    <!-- Item Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedItem"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          @click="closeModal"
        >
          <div
            class="bg-surface rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative"
            @click.stop
          >
            <!-- Close Button -->
            <button
              class="absolute top-3 right-3 z-10 p-2 bg-black/40 text-white rounded-full backdrop-blur-md transition-transform active:scale-90"
              @click="closeModal"
            >
              <X :size="20" />
            </button>
            
            <img :src="selectedItem.image" :alt="selectedItem.name" class="w-full aspect-[4/3] object-cover bg-surface-container-low" />
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-headline text-2xl font-bold text-on-surface">{{ selectedItem.name }}</h3>
              </div>
              <p class="font-label font-bold text-primary mb-4">{{ selectedItem.price }}</p>
              <p class="font-label text-sm text-on-surface-variant mb-6">{{ selectedItem.description }}</p>
              
              <button
                class="w-full py-3 bg-primary text-on-primary rounded-xl font-label font-bold tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                @click="openOrder(selectedItem.name)"
              >
                <MessageCircle :size="20" />
                PESAN SEKARANG
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active > div {
  transition: all 0.2s ease-in;
}

.modal-enter-from > div {
  transform: translateY(20px) scale(0.95);
  opacity: 0;
}

.modal-leave-to > div {
  transform: translateY(10px) scale(0.95);
  opacity: 0;
}
</style>
