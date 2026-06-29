import React from "react";

export type ThemeColors = "Morning Bliss" | "Afternoon Glow" | "Evening Twilight" | "Night Serenity";

export interface ThemeColorStateParams {
    theme: ThemeColors;
    setTheme: React.Dispatch<React.SetStateAction<ThemeColors>>;
}