export type Project = {
  id: string;
  name: string;
  href: string;
  image: string;
  description: string;
  role: 'developer' | 'contributor';
  contributions?: string;
};

export const projects: Project[] = [
  {
    id: "dollymanager",
    name: "DollyManager",
    href: "/dollymanager",
    image: "/docs/dollymanager/DollyManagerLogo.png",
    description: "VRChat Dolly Management Tool",
    role: "developer",
  },
  {
    id: "fitosc",
    name: "FitOSC",
    href: "/fitosc",
    image: "/docs/fitosc/FitOSCLogo.png",
    description: "Connect your treadmill to VRChat",
    role: "developer",
  },
  {
    id: "disbridge",
    name: "Disbridge",
    href: "https://github.com/UdonVR/DisBridge",
    image: "/docs/contributions/disbridge_icon.png",
    description: "Discord bridge & permission system for VRChat by UdonVR",
    role: "contributor",
    contributions: "Project management & consultation",
  },
  {
    id: "xsoverlay",
    name: "XSOverlay",
    href: "https://store.steampowered.com/app/1173510/XSOverlay/",
    image: "/docs/contributions/XSOverlay_Icon.png",
    description: "A Desktop Overlay application for OpenVR",
    role: "contributor",
    contributions: "Bugfixes, support & documentation",
  },
];

// Helper function to group projects by role
export function getProjectsByRole() {
  return {
    developer: projects.filter(p => p.role === 'developer'),
    contributor: projects.filter(p => p.role === 'contributor'),
  };
}
