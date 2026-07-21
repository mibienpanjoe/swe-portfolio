"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { ThemeProvider } from "next-themes";
import type { Locale } from "@/lib/content";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

const STORAGE_KEY = "locale";
// localStorage only notifies other tabs, so same-tab writes announce themselves
const LOCALE_EVENT = "localechange";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LOCALE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LOCALE_EVENT, onStoreChange);
  };
}

function getSnapshot(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {
    // localStorage can throw when the browser blocks storage access
  }
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

// the markup is prerendered in English; the client swaps after hydration
function getServerSnapshot(): Locale {
  return "en";
}

function setLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // preference just won't persist
  }
  window.dispatchEvent(new Event(LOCALE_EVENT));
}

export function Providers({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}
