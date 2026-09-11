declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackInitiateCheckout() {
  window.fbq?.("track", "InitiateCheckout");
}
