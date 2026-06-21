type ThemeColors = "Morning Bliss" | "Afternoon Glow" | "Evening Twilight" | "Night Serenity";

interface ThemeColorStateParams {
    theme: ThemeColors;
    setTheme: React.Dispatch<React.SetStateAction<ThemeColors>>;
    
}