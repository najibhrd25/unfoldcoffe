/**
 * Composable for generating WhatsApp order URLs.
 * Encapsulates message encoding and URL construction.
 */

const WHATSAPP_NUMBER = '6281234567890' // Replace with actual business number

export function useWhatsApp() {
  /**
   * Generates a WhatsApp deep link with a pre-filled order message.
   * @param {string} itemName - The name of the menu item to order.
   * @returns {string} Full WhatsApp URL ready to open.
   */
  function getOrderUrl(itemName) {
    const message = `Halo, saya ingin memesan: ${itemName}`
    const encoded = encodeURIComponent(message)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
  }

  /**
   * Opens WhatsApp in a new tab with the order message.
   * @param {string} itemName - The menu item name.
   */
  function openOrder(itemName) {
    window.open(getOrderUrl(itemName), '_blank', 'noopener,noreferrer')
  }

  return {
    getOrderUrl,
    openOrder,
  }
}
