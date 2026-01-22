"use client";

import { useEffect, useRef } from "react";
import { getWebInstrumentations, initializeFaro, Faro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

export function FaroInitializer() {
  const faroInstance = useRef<Faro | null>(null);

  useEffect(() => {
    // Only initialize if not already initialized and if the URL is provided
    if (!faroInstance.current && process.env.NEXT_PUBLIC_FARO_URL && typeof window !== 'undefined') {
      try {
        faroInstance.current = initializeFaro({
          url: process.env.NEXT_PUBLIC_FARO_URL,
          app: {
            name: process.env.NEXT_PUBLIC_FARO_APP_NAME || "ia-portfolio-web",
            version: process.env.NEXT_PUBLIC_FARO_APP_VERSION || "1.0.0",
            environment: process.env.NODE_ENV,
          },
          instrumentations: [
            ...getWebInstrumentations(),
            new TracingInstrumentation(),
          ],
        });
      } catch (e) {
        console.error("Faro initialization failed", e);
      }
    }
  }, []);

  return null;
}
