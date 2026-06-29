"use client";

import setGlobalColorTheme from "@/lib/theme-colors";
import { useTheme } from "next-themes";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeColors, ThemeColorStateParams } from "@/types/theme-types";

const ThemeContext = createContext({} as ThemeColorStateParams);

export default function ThemeDataProvider({ children }: { children: React.ReactNode }) {
  const { theme: mode } = useTheme(); // light / dark
  const [themeColor, setThemeColor] = useState<ThemeColors>("Morning Bliss");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("color-theme") as ThemeColors;
    if (saved) setThemeColor(saved);
  }, []);

  // APPLY THEME HERE ✅
  useEffect(() => {
    if (!mode) return;

    setGlobalColorTheme(mode as "light" | "dark", themeColor);
    localStorage.setItem("color-theme", themeColor);
  }, [themeColor, mode]);

  return (
    <ThemeContext.Provider value={{ theme: themeColor, setTheme: setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}