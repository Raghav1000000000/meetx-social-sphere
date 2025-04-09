
/**
 * Sonner Toast Component
 * 
 * A customized wrapper around the Sonner toast library that integrates with our
 * application's theme system. This component automatically adapts to the current
 * theme (light/dark) and applies our design system styles to toast notifications.
 * 
 * @see https://sonner.emilkowal.ski/ for original Sonner documentation
 */

import { useTheme } from "@/contexts/ThemeContext";
import { Toaster as Sonner } from "sonner";
import { useEffect } from "react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Toaster component for displaying toast notifications
 * Automatically adapts to the current theme and applies our design system
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();
  
  // Log when the theme changes for debugging purposes
  useEffect(() => {
    console.log("Toast theme updated:", theme);
  }, [theme]);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
