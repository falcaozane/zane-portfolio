'use client';

import React from "react";
import { IconPalette } from "@tabler/icons-react";
import { useThemeContext } from "@/context/theme-data-provider";
import { ThemeColors } from "@/types/theme-types";

export default function ThemeModeToggle() {
  const { setTheme } = useThemeContext();

  const themes = [
    "Morning Bliss",
    "Afternoon Glow",
    "Evening Twilight",
    "Night Serenity",
  ];

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn text-sys-primary bg-sys-card rounded-full p-3 border-0 hover:bg-sys-primary hover:text-sys-primary-foreground shadow-md transition-colors"
      >
        <IconPalette size={20} />
      </label>

      <ul className="dropdown-content menu p-2 shadow-xl border border-sys-border bg-sys-popover rounded-box w-52 text-sys-primary z-[100] mt-2">
        {themes.map((t) => (
          <li key={t}>
            <button 
              className="hover:bg-sys-primary hover:text-sys-primary-foreground transition-colors rounded-lg"
              onClick={() => setTheme(t as ThemeColors)}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}