export type ThemeColors = "Morning Bliss" | "Afternoon Glow" | "Evening Twilight" | "Night Serenity";

const themes = {
  // ═══════════════════════════════════════════════════════════════════
  // 🌅 MORNING BLISS — Bright Sail Canvas, Deep Forest, Terracotta Rust
  // ═══════════════════════════════════════════════════════════════════
  "Morning Bliss": {
    light: {
      background: "200 10% 96%",        // #F4F6F7 (Canvas Bright)
      foreground: "201 37% 11%",        // #111E25 (Deep Ocean Shadow)
      card: "198 41% 88%",              // #D2E4EC (Canvas Mist)
      cardForeground: "201 37% 11%",
      popover: "198 41% 88%",
      popoverForeground: "201 37% 11%",
      primary: "149 37% 24%",           // #26533C (Deep Forest Green)
      primaryForeground: "200 10% 96%",
      secondary: "17 55% 47%",          // #B85B36 (Terracotta Rust)
      secondaryForeground: "200 10% 96%",
      muted: "198 41% 88%",             // #D2E4EC (Canvas Mist)
      mutedForeground: "196 6% 38%",    // #5C6467 (Text Muted)
      accent: "17 55% 47%",             // #B85B36 (Terracotta Rust)
      accentForeground: "200 10% 96%",
      destructive: "0 84% 60%",
      destructiveForeground: "0 0% 100%",
      border: "198 41% 88%",            // #D2E4EC (Canvas Mist)
      input: "198 41% 88%",
      ring: "149 37% 24%",              // #26533C (Deep Forest Green)
      radius: "0.5rem",
    },
    dark: {
      background: "201 37% 11%",        // #111E25 (Deep Ocean Shadow)
      foreground: "200 10% 96%",        // #F4F6F7 (Canvas Bright)
      card: "201 37% 15%",              // Darker elevated mist
      cardForeground: "200 10% 96%",
      popover: "201 37% 15%",
      popoverForeground: "200 10% 96%",
      primary: "149 37% 40%",           // Lighter Forest Green
      primaryForeground: "201 37% 11%",
      secondary: "17 55% 47%",          // #B85B36 (Terracotta Rust)
      secondaryForeground: "200 10% 96%",
      muted: "201 37% 18%",
      mutedForeground: "198 41% 88%",   // #D2E4EC
      accent: "17 55% 47%",             // #B85B36 (Terracotta Rust)
      accentForeground: "200 10% 96%",
      destructive: "0 63% 31%",
      destructiveForeground: "200 10% 96%",
      border: "201 37% 18%",
      input: "201 37% 18%",
      ring: "149 37% 40%",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 🏜️ AFTERNOON GLOW — Original orange/amber (the hardcoded colors)
  // ═══════════════════════════════════════════════════════════════════
  "Afternoon Glow": {
    light: {
      background: "220 14% 96%",        // gray-100
      foreground: "217 19% 27%",        // gray-800
      card: "0 0% 100%",               // white
      cardForeground: "217 19% 27%",
      popover: "0 0% 100%",
      popoverForeground: "217 19% 27%",
      primary: "25 95% 53%",            // orange-500
      primaryForeground: "0 0% 100%",
      secondary: "38 92% 50%",          // amber-500
      secondaryForeground: "0 0% 100%",
      muted: "220 14% 96%",             // gray-100
      mutedForeground: "215 14% 34%",   // gray-600
      accent: "33 100% 96%",            // orange-50
      accentForeground: "25 95% 40%",
      destructive: "0 84% 60%",
      destructiveForeground: "0 0% 100%",
      border: "25 95% 53%",             // orange-500 (original border was orange)
      input: "220 13% 91%",
      ring: "25 95% 53%",
      radius: "0.5rem",
    },
    dark: {
      background: "20 14% 4%",          // stone-950
      foreground: "60 9% 98%",          // stone-50
      card: "24 10% 10%",
      cardForeground: "60 9% 98%",
      popover: "24 10% 10%",
      popoverForeground: "60 9% 98%",
      primary: "21 90% 48%",            // orange-600
      primaryForeground: "60 9% 98%",
      secondary: "38 92% 50%",          // amber-500
      secondaryForeground: "20 14% 4%",
      muted: "12 7% 15%",
      mutedForeground: "24 5% 64%",
      accent: "12 7% 15%",
      accentForeground: "60 9% 98%",
      destructive: "0 63% 31%",
      destructiveForeground: "60 9% 98%",
      border: "12 7% 15%",
      input: "12 7% 15%",
      ring: "21 90% 48%",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 🌇 EVENING TWILIGHT — Warm Sand, Deep Maroon, Sunset Glow
  // ═══════════════════════════════════════════════════════════════════
  "Evening Twilight": {
    light: {
      background: "25 31% 86%",         // #E6D9D0 (Twilight Sand)
      foreground: "346 26% 19%",        // #3C2329 (Main Wine/Dark Shadow)
      card: "21 21% 79%",               // #D4C5BD (Twilight Shadow)
      cardForeground: "346 26% 19%",
      popover: "21 21% 79%",
      popoverForeground: "346 26% 19%",
      primary: "346 49% 24%",           // #5B1F2D (Accent Maroon)
      primaryForeground: "25 31% 86%",
      secondary: "5 86% 66%",           // #F36B5E (Sunset Glow)
      secondaryForeground: "346 26% 19%",
      muted: "21 21% 79%",              // #D4C5BD
      mutedForeground: "349 7% 43%",    // #756568 (Muted Dusk)
      accent: "5 86% 66%",              // #F36B5E (Sunset Glow)
      accentForeground: "346 26% 19%",
      destructive: "0 84% 60%",
      destructiveForeground: "25 31% 86%",
      border: "21 21% 79%",             // #D4C5BD
      input: "21 21% 79%",
      ring: "346 49% 24%",              // #5B1F2D (Accent Maroon)
      radius: "0.5rem",
    },
    dark: {
      background: "346 26% 15%",        // Deep Wine Canvas
      foreground: "25 31% 86%",         // #E6D9D0 (Twilight Sand)
      card: "346 26% 19%",              // #3C2329 (Main Wine Surface)
      cardForeground: "25 31% 86%",
      popover: "346 26% 19%",
      popoverForeground: "25 31% 86%",
      primary: "5 86% 66%",             // #F36B5E (Sunset Glow pops on dark)
      primaryForeground: "346 26% 15%",
      secondary: "346 49% 40%",         // Lighter Maroon
      secondaryForeground: "25 31% 86%",
      muted: "346 26% 23%",
      mutedForeground: "21 21% 79%",    // #D4C5BD (Twilight Shadow)
      accent: "5 86% 66%",              // #F36B5E
      accentForeground: "346 26% 15%",
      destructive: "0 63% 31%",
      destructiveForeground: "25 31% 86%",
      border: "346 26% 23%",
      input: "346 26% 23%",
      ring: "5 86% 66%",                // Sunset Glow Focus
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 🌌 NIGHT SERENITY — Deep Night Canvas, Glow, Burgundy Accent
  // ═══════════════════════════════════════════════════════════════════
  "Night Serenity": {
    light: {
      background: "214 32% 91%",        // #E2E8F0 (Soft White Canvas)
      foreground: "216 28% 7%",         // #0D1117 (Deep Night)
      card: "0 0% 100%",                // White
      cardForeground: "216 28% 7%",
      popover: "0 0% 100%",
      popoverForeground: "216 28% 7%",
      primary: "322 63% 33%",           // #8A1F62 (Burgundy Polo)
      primaryForeground: "214 32% 91%",
      secondary: "45 88% 60%",          // #F3C641 (Fairy Light Gold)
      secondaryForeground: "216 28% 7%",
      muted: "216 15% 52%",             // #718096 (Muted text used as border/muted base)
      mutedForeground: "216 28% 7%",
      accent: "322 63% 33%",            // #8A1F62
      accentForeground: "214 32% 91%",
      destructive: "0 84% 60%",
      destructiveForeground: "0 0% 100%",
      border: "216 15% 52%",
      input: "216 15% 52%",
      ring: "322 63% 33%",
      radius: "0.5rem",
    },
    dark: {
      background: "216 28% 7%",         // #0D1117 (Deep Night Canvas)
      foreground: "214 32% 91%",        // #E2E8F0 (Soft White)
      card: "220 26% 14%",              // #1A202C (Hoodie Charcoal)
      cardForeground: "214 32% 91%",
      popover: "220 26% 14%",
      popoverForeground: "214 32% 91%",
      primary: "45 88% 60%",            // #F3C641 (Fairy Light Gold Glow)
      primaryForeground: "216 28% 7%",
      secondary: "322 63% 33%",         // #8A1F62 (Burgundy Polo)
      secondaryForeground: "214 32% 91%",
      muted: "220 26% 18%",
      mutedForeground: "216 15% 52%",   // #718096 (Dimmed text)
      accent: "45 88% 60%",             // Fairy Light Gold Glow
      accentForeground: "216 28% 7%",
      destructive: "0 63% 31%",
      destructiveForeground: "214 32% 91%",
      border: "220 26% 18%",            // Just above Charcoal surface
      input: "220 26% 18%",
      ring: "45 88% 60%",               // Fairy Light Gold Focus
    },
  },
};

export default function setGlobalColorTheme(
    themeMode: "light" | "dark",
    color: ThemeColors,
){
    const theme = themes[color][themeMode] as {
        [key: string]: string;
    };

    for (const key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
}