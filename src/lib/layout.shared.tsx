
import { BookOpen, Users, HeartHandshake, Code } from "lucide-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavbarMenu, NavbarMenuTrigger, NavbarMenuContent, NavbarMenuLink } from 'fumadocs-ui/layouts/home/navbar';
import Image from "next/image";

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
          <div className="flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="Duinrahaic"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-lg font-semibold">Duinrahaic</span>
          </div>
      ),
    },
    themeSwitch : {
      enabled: false
    },
    links: [
      {
        type: 'custom',
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>
              <Code className="w-4 h-4 mr-2" />
              Projects
            </NavbarMenuTrigger>
            <NavbarMenuContent>
              <NavbarMenuLink href="/dollymanager">
                <div className="flex items-center gap-2">
                    <Image
                        src="/docs/dollymanager/DollyManagerLogo.png"
                        alt="DollyManager"
                        width={36}
                        height={36}
                    />
                    <div>
                        <div className="font-semibold">DollyManager</div>
                        <div className="text-xs text-muted-foreground">VRChat Dolly Management Tool</div>
                    </div>
                </div>
              </NavbarMenuLink>
              <NavbarMenuLink href="/fitosc">
                <div className="flex items-center gap-2">
                    <Image
                        src="/docs/fitosc/FitOSCLogo.png"
                        alt="FitOSC"
                        width={36}
                        height={36}
                    />
                    <div>
                    <div className="font-semibold">FitOSC</div>
                    <div className="text-xs text-muted-foreground">Connect your treadmill to VRChat</div>
                  </div>
                </div>
              </NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      }
    ],
  };
}

