export type Community = {
  id: string;
  name: string;
  href: string;
  image: string;
  description: string;
  vrchatGroupCode?: string;
};

//https://vrc.group/




export const communities: Community[] = [
  {
    id: "walkies",
    name: "Walkies",
    href: "/communities/walkies",
    image: "/communities/Walkies_Logo.png",
    description: "Virtual walking community",
    vrchatGroupCode: "Walkies.0659",
  },
  {
    id: "rhythm",
    name: "Rhythm",
    href: "/communities/rhythm",
    image: "/communities/rhythm_logo.png",
    description: "A VRChat Rave Venue",
    vrchatGroupCode: "RHYTHM.5592",
  },
  {
    id: "udonvr",
    name: "UdonVR",
    href: "/communities/udonvr",
    image: "/communities/UdonVR_Logo.jpg",
    description: "A VRChat Creators Community",
    vrchatGroupCode: "UVR.3493",
  },
];
