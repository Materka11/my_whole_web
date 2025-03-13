export enum Category {
  About = "About",
  Portfolio = "Portfolio",
  Contact = "Contact",
}

type CategoryType = keyof typeof Category;

export const CATEGORY: CategoryType[] = ["About", "Portfolio", "Contact"];
