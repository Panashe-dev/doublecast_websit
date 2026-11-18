import { ABOUT_IMAGE, HERO_IMAGE, PROJECT_IMAGES, TEAM_IMAGES } from "./images";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    schemaType: "WebPage",
    title: "Class 1 Builders in Harare, Zimbabwe | Double Cast",
    description:
      "Double Cast Construction & Civil Works are Class 1 builders in Harare, delivering full-scope projects across Zimbabwe, from tendering to handover.",
    preloadImage: HERO_IMAGE,
  },
  {
    path: "/services/",
    name: "Services",
    schemaType: "CollectionPage",
    title: "Construction & Civil Works Services in Harare | Double Cast",
    description:
      "Tendering, excavation, brickwork, roofing, electrical, finishes, renovations, paving and full construction projects from Class 1 builders in Harare.",
  },
  {
    path: "/projects/",
    name: "Projects",
    schemaType: "CollectionPage",
    title: "Construction Projects in Harare & Zimbabwe | Double Cast",
    description:
      "See residential, commercial, civil and refurbishment projects delivered by Double Cast Construction & Civil Works across Harare and beyond.",
    preloadImage: PROJECT_IMAGES.residentialEstate,
  },
  {
    path: "/team/",
    name: "Team",
    schemaType: "WebPage",
    title: "Our Engineers & Construction Team in Harare | Double Cast",
    description:
      "Meet the qualified engineers, quantity surveyor and site leadership behind Double Cast Construction & Civil Works, Class 1 builders in Harare.",
    preloadImage: TEAM_IMAGES.managingDirector,
  },
  {
    path: "/about/",
    name: "About",
    schemaType: "AboutPage",
    title: "About Our Class 1 Construction Company | Double Cast",
    description:
      "Founded in Harare and rooted in the Damafalls community, Double Cast combines qualified engineering and craftsmanship on builds across Zimbabwe.",
    preloadImage: ABOUT_IMAGE,
  },
  {
    path: "/contact/",
    name: "Contact",
    schemaType: "ContactPage",
    title: "Contact Us for a Construction Quote in Harare | Double Cast",
    description:
      "Request a construction quote from Double Cast in Damafalls, Harare. Call +263 77 116 5810 or send your project details for a reply within one working day.",
  },
];

export const NOT_FOUND_ROUTE = {
  path: "/404",
  name: "Page not found",
  title: "Page Not Found | Double Cast",
  description: "The page you are looking for could not be found.",
  noindex: true,
};
