
import { BookOpen, Users, HeartHandshake, Code } from "lucide-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
          <>
            Duinrahaic
          </>
      ),
    },
    themeSwitch : {
      enabled: false
    },
    links: [
      {
        icon: <Code className="w-4 h-4" />,
        text: "Projects",
        url: "/projects",
        secondary: false,
      },
      {
        icon: <HeartHandshake className="w-4 h-4" />,
        text: "Support",
        url: "/support",
        secondary: false,
      }
    ],
  };
}

