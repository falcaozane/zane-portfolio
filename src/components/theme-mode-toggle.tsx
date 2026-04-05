'use client';

import React from "react";
import { IconPalette } from "@tabler/icons-react";
import { useThemeContext } from "@/context/theme-data-provider";

export default function ThemeModeToggle() {
  const { theme, setTheme } = useThemeContext();

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
        className="btn text-amber-500 bg-white rounded-full p-3 border-0 hover:bg-amber-600 hover:text-white"
      >
        <IconPalette size={20} />
      </label>

      <ul className="dropdown-content menu p-2 shadow bg-gray-50 rounded-box w-52 text-orange-500">
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => setTheme(t as any)}>
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}