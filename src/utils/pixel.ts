declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const WHATSAPP_PHONE = "5587920015610";
export const DEFAULT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export function getWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) return DEFAULT_WHATSAPP_URL;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(customMessage)}`;
}

export function trackWhatsAppPixel(context: string = 'WhatsApp CTA', customData?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      // Track Contact event
      window.fbq('track', 'Contact', {
        content_name: context,
        content_category: 'Solar Lead WhatsApp',
        ...customData,
      });

      // Track Lead event
      window.fbq('track', 'Lead', {
        content_name: context,
        value: customData?.estimatedSavings || 0,
        currency: 'BRL',
        ...customData,
      });
    }
  } catch (error) {
    console.debug('Meta Pixel tracking error:', error);
  }
}
