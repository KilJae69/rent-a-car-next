export const BASE_URL = "http://localhost:3000";

export const mainNavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Vehicles",
    href: "/fleet?category=1",
    subItems: [
      { title: "All Vehicles", href: "/fleet?category=1" },
      { title: "City", href: "/fleet?category=2" },
      { title: "Compact", href: "/fleet?category=3" },
      {
        title: "Luxury",
        href: "/fleet?category=7",
        subItems: [{ title: "Submenu 1", href: "#" }],
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog/",
    subItems: [
      { title: "Article Example", href: "/blog/single-blog" },
      { title: "Article Example", href: "/blog/single-blog" },
      { title: "Article Example", href: "/blog/single-blog" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export const secondaryNavLinks = [
  {
    title: "EUR",

    items: [{ title: "USD" }, { title: "HRK" }],
  },
  {
    items: [
      { title: "Croatian", url: "hr" },
      { title: "English", url: "en" },
    ],
  },
];

export const currencyItems = [
  { id: 1, title: "EUR", icon: "€" },
  { id: 2, title: "USD", icon: "$" },
];
export const langItems = [
  { code: "hr", title: "Croatian", url: "hr", icon: "/icons/ico_hr.svg" },
  { code: "en", title: "English", url: "en", icon: "/icons/ico_us.svg" },
];