export const WALLPAPER_SECTIONS = [
  { id: "nature", title: "Nature" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  {
    id: "aedrian-salazar",
    category: "nature",
    label: "Aedrian Salazar",
    url: "/wallpapers/aedrian-salazar-PfJzseIWHw0.jpg",
  },
  {
    id: "dino-reichmuth",
    category: "nature",
    label: "Dino Reichmuth",
    url: "/wallpapers/dino-reichmuth-kk3W5-0b6e0.jpg",
  },
  {
    id: "jms",
    category: "nature",
    label: "JMS",
    url: "/wallpapers/jms-kFHz9Xh3PPU.jpg",
  },
  {
    id: "jonatan-pie",
    category: "nature",
    label: "Jonatan Pie",
    url: "/wallpapers/jonatan-pie-3l3RwQdHRHg.jpg",
  },
  {
    id: "radial-blue",
    category: "abstract",
    label: "Radial Blue",
    url: "/wallpapers/radial-blue.jpg",
  },
  {
    id: "radial-green",
    category: "abstract",
    label: "Radial Green",
    url: "/wallpapers/radial-green.jpg",
  },
  {
    id: "radial-purple",
    category: "abstract",
    label: "Radial Purple",
    url: "/wallpapers/radial-purple.jpg",
  },
  {
    id: "radial-yellow",
    category: "abstract",
    label: "Radial Yellow",
    url: "/wallpapers/radial-yellow.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}
