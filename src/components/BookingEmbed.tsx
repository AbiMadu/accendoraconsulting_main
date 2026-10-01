"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { cal } from "@/lib/site";

/**
 * Cal.com inline booking embed.
 *
 * Every Cal.com value (username, event slug, namespace) lives in `cal` in
 * src/lib/site.ts — never hardcoded here. Brand colours are passed through so the
 * scheduler reads as part of the site rather than a third-party widget.
 */
export function BookingEmbed({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const api = await getCalApi({ namespace: cal.namespace });
      if (cancelled) return;

      api("ui", {
        theme: "light",
        // The site has a single light palette; Cal requires both themes to be given.
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#b9813c",
            "cal-text": "#0a1a28",
            "cal-text-emphasis": "#0a1a28",
            "cal-bg": "#fbf9f6",
            "cal-bg-emphasis": "#f2ede5",
            "cal-border": "#e2dbd0",
            "cal-border-emphasis": "#d9ab6c",
          },
          dark: {
            "cal-brand": "#b9813c",
            "cal-text": "#0a1a28",
            "cal-text-emphasis": "#0a1a28",
            "cal-bg": "#fbf9f6",
            "cal-bg-emphasis": "#f2ede5",
            "cal-border": "#e2dbd0",
            "cal-border-emphasis": "#d9ab6c",
          },
        },
        hideEventTypeDetails: false,
        layout: cal.layout,
      });

      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`relative min-h-[32rem] bg-paper ${className}`}>
      {!ready && (
        <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">
          Loading the calendar…
        </p>
      )}
      <Cal
        namespace={cal.namespace}
        calLink={cal.calLink}
        config={{ layout: cal.layout, theme: "light" }}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />
      <noscript>
        <p className="p-8 text-sm leading-relaxed text-slate">
          The booking calendar needs JavaScript. You can{" "}
          <a className="text-accent underline" href={cal.bookingUrl}>
            open it in a new tab
          </a>{" "}
          instead.
        </p>
      </noscript>
    </div>
  );
}
