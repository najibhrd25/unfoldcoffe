import { onMounted, onUnmounted } from 'vue'

/**
 * Composable that uses IntersectionObserver to add entrance animations.
 * Adds the 'visible' class to elements with the 'reveal' class when they enter the viewport.
 * Uses MutationObserver to handle dynamic content.
 */
export function useReveal() {
  let observer = null
  let mutationObserver = null

  const observeElements = (container = document) => {
    container.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    // Initial observation with a small delay to ensure DOM is ready
    setTimeout(() => {
      observeElements()
    }, 100)

    // Watch for new elements added to the DOM
    mutationObserver = new MutationObserver((mutations) => {
      let shouldCheck = false
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length || mutation.type === 'childList') {
          shouldCheck = true
        }
      })
      if (shouldCheck) {
        observeElements()
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })
}
