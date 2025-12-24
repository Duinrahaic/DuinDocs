
import { BookOpen, Users, HeartHandshake, Code } from "lucide-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavbarMenu, NavbarMenuTrigger, NavbarMenuContent, NavbarMenuLink } from 'fumadocs-ui/layouts/home/navbar';
import Image from "next/image";
import { communities } from './communities-data';
import { getProjectsByRole } from './projects-data';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  const projectsByRole = getProjectsByRole();

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
        on: 'menu',
        children: (
          <div className="py-2">
            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Code className="w-4 h-4" />
              Projects
            </div>
            <div className="space-y-2 mt-2">
              {projectsByRole.developer.map((project) => (
                <a
                  key={project.id}
                  href={project.href}
                  className="block p-3 mx-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={36}
                      height={36}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm pb-1">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ),
      },
      {
        type: 'custom',
        on: 'menu',
        children: (
          <div className="py-2">
            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              Contributions
            </div>
            <div className="space-y-2 mt-2">
              {projectsByRole.contributor.map((project) => (
                <a
                  key={project.id}
                  href={project.href}
                  className="block p-3 mx-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={36}
                      height={36}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm pb-1">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ),
      },
      {
        type: 'custom',
        on: 'menu',
        children: (
          <div className="py-2">
            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Communities
            </div>
            <div className="space-y-2 mt-2">
              {communities.map((community) => (
                <a
                  key={community.id}
                  href={community.href}
                  className="block p-3 mx-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={community.image}
                      alt={community.name}
                      width={36}
                      height={36}
                      className="rounded"
                    />
                    <div>
                      <div className="font-semibold text-sm">{community.name}</div>
                      <div className="text-xs text-muted-foreground">{community.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ),
      },
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
              {projectsByRole.developer.map((project) => (
                <NavbarMenuLink key={project.id} href={project.href}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={36}
                      height={36}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold pb-1">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.description}</div>
                    </div>
                  </div>
                </NavbarMenuLink>
              ))}
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      },
      {
        type: 'custom',
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>
              <HeartHandshake className="w-4 h-4 mr-2" />
              Contributions
            </NavbarMenuTrigger>
            <NavbarMenuContent>
              {projectsByRole.contributor.map((project) => (
                <NavbarMenuLink key={project.id} href={project.href}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={36}
                      height={36}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold pb-1">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.description}</div>
                    </div>
                  </div>
                </NavbarMenuLink>
              ))}
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      },
      {
        type: 'custom',
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>
              <Users className="w-4 h-4 mr-2" />
              Communities
            </NavbarMenuTrigger>
            <NavbarMenuContent>
              {communities.map((community) => (
                <NavbarMenuLink key={community.id} href={community.href}>
                  <div className="flex items-center gap-2">
                      <Image
                          src={community.image}
                          alt={community.name}
                          width={36}
                          height={36}
                      />
                      <div>
                          <div className="font-semibold">{community.name}</div>
                          <div className="text-xs text-muted-foreground">{community.description}</div>
                      </div>
                  </div>
                </NavbarMenuLink>
              ))}
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      }
    ],
  };
}

