const unsplashUrl = (id, width, ratio, quality = 60) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${Math.round(width / ratio)}&q=${quality}`;

const image = ({ id, ratio, widths, sizes, alt }) => {
  const largest = widths[widths.length - 1];
  return {
    src: unsplashUrl(id, widths[1] ?? largest, ratio),
    srcSet: widths.map((w) => `${unsplashUrl(id, w, ratio)} ${w}w`).join(", "),
    sizes,
    alt,
    width: largest,
    height: Math.round(largest / ratio),
  };
};

export const HERO_IMAGE = image({
  id: "1503387762-592deb58ef4e",
  ratio: 16 / 9,
  widths: [480, 720, 920],
  sizes: "(max-width: 511px) 90vw, 460px",
  alt: "Engineer marking up construction drawings with a scale ruler",
});

export const ABOUT_IMAGE = image({
  id: "1541888946425-d81bb19240f5",
  ratio: 3 / 2,
  widths: [480, 720, 960, 1280],
  sizes: "(max-width: 900px) 90vw, 45vw",
  alt: "Construction crew in hard hats and high-visibility vests on a large concrete slab",
});

const projectImage = (id, alt) =>
  image({
    id,
    ratio: 4 / 3,
    widths: [400, 640, 860],
    sizes: "(max-width: 760px) 90vw, (max-width: 1160px) 45vw, 420px",
    alt,
  });

const teamImage = (id, alt) =>
  image({
    id,
    ratio: 4 / 5,
    widths: [300, 450, 600],
    sizes: "(max-width: 620px) 90vw, (max-width: 1200px) 45vw, 270px",
    alt,
  });

export const PROJECT_IMAGES = {
  residentialEstate: projectImage(
    "1600585154340-be6161a56a0c",
    "Modern timber-clad house with large glass walls and a lawn at dusk",
  ),
  officeBlock: projectImage(
    "1486325212027-8081e485255e",
    "City skyline of high-rise commercial buildings at night",
  ),
  familyHome: projectImage(
    "1564013799919-ab600027ffc6",
    "White two-storey family home with a balcony and swimming pool",
  ),
  warehouse: projectImage(
    "1565793298595-6a879b1d9492",
    "Aerial view of trucks parked in rows at an industrial yard",
  ),
  paving: projectImage(
    "1503387837-b154d5074bd2",
    "Close-up of a hand drawing site plans with a scale ruler",
  ),
  villa: projectImage(
    "1600596542815-ffad4c1539a9",
    "Contemporary white villa with terraces and a swimming pool",
  ),
};

export const TEAM_IMAGES = {
  managingDirector: teamImage(
    "1560250097-0b93528c311a",
    "Portrait of Eng. T. Mugomba, Managing Director",
  ),
  civilEngineer: teamImage(
    "1573496359142-b8d87734a5a2",
    "Portrait of Eng. P. Chideme, Senior Civil Engineer",
  ),
  siteForeman: teamImage(
    "1519085360753-af0119f7cbe7",
    "Portrait of Mr. K. Sibanda, Site Foreman",
  ),
  quantitySurveyor: teamImage(
    "1580489944761-15a19d654956",
    "Portrait of Ms. R. Moyo, Quantity Surveyor",
  ),
};
