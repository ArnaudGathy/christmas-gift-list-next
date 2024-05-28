export const items = [
  {
    name: "Écharpe cashmire confortable",
    addedBy: "Maman",
    selectedBy: "Arnaud",
    link: "https://www.google.be",
    owner: "Maman",
  },
  {
    name: "Kit de soins de spa de luxe",
    addedBy: "Maman",
    selectedBy: "Arnaud",
    owner: "Maman",
  },
  {
    name: "Kit de cuisine gourmande",
    addedBy: "Sarah",
    selectedBy: "Arnaud",
    owner: "Maman",
  },
];

export const personnalItems = [
  {
    name: "Ours en peluche chaleureux",
    link: "https://www.google.be",
    owner: "Arnaud",
  },
  {
    name: "Matériel de camping de plein air",
    selectedBy: "Test",
    owner: "Arnaud",
  },
  {
    name: "Matériel de camping",
    addedBy: "Magaly",
    selectedBy: "Test",
    owner: "Arnaud",
  },
];

export const otherPersonnalItems = [
  {
    name: "housse pour Kindle Paperwhite écran 6,8 pouces",
    addedBy: "Arnaud",
    selectedBy: "Magaly",
    owner: "Anne",
  },
  {
    name: "Écharpe cashmèree confortable",
    link: "https://www.google.be",
    addedBy: "Arnaud",
    selectedBy: "Test",
    owner: "Marie",
  },
];

export const itemsByTarget = {
  Arnaud: personnalItems,
  Magaly: [
    {
      name: "Écharpe cashmère confortable",
      addedBy: "Jean",
      link: "https://www.google.be",
      owner: "Magaly",
    },
    { name: "Des foulards pour renouveler mon stock", owner: "Magaly" },
    {
      name: "conformateur d'archéologie en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      link: "https://www.google.be",
      owner: "Magaly",
    },
    { name: "Kit de cuisine gourmande", owner: "Magaly" },
    {
      name: "conformateur d'archéologi en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      selectedBy: "Ingrid",
      owner: "Magaly",
    },
    {
      name: "Ours en peluche chaleureux",
      addedBy: "Isabella",
      selectedBy: "Manon",
      owner: "Magaly",
    },
    ...otherPersonnalItems,
  ],
  Papa: [
    { name: "Ours en peluche chaleureux" },
    {
      name: "Matériel de camping de plein air",
      link: "https://www.google.be",
      addedBy: "Michael",
      selectedBy: "Arnaud",
      owner: "Papa",
    },
  ],
  Maman: items,
};
