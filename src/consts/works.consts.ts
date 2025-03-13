interface WorkType {
  id: number;
  title: string;
  description: string;
  date: string;
  isCodeOrWork: "work" | "code";
  link: string;
  isActive?: boolean;
}

export const works: WorkType[] = [
  {
    id: 1,
    title: "Raport Game",
    description:
      "A game of choosing whether the suspect is guilty or not. Created in pure JavaScript. It only works on the PC",
    date: "January 2021",
    isCodeOrWork: "work",
    link: "https://materka11.github.io/Raport-Game/game.html",
  },
  {
    id: 2,
    title: "Clothing Store",
    description: "Online store designed done with React.",
    date: "June 2022",
    isCodeOrWork: "code",
    link: "https://github.com/Materka11/ClothingStore",
  },
  {
    id: 3,
    title: "This Website",
    description: "View the code of this website",
    date: "October 2022",
    isCodeOrWork: "code",
    link: "https://materka11.github.io/MyWholeWeb/",
  },
  {
    id: 4,
    title: "Onkoskaner",
    description:
      "Search engine for the shortest queues for NFZ tests done with Next.js",
    date: "July 2023",
    isCodeOrWork: "work",
    link: "https://onkoskaner.pl/",
  },
  {
    id: 5,
    title: "Onkosnajper",
    description: "Cancer search engine done with Next.js",
    date: "July 2023",
    isCodeOrWork: "work",
    link: "https://onkosnajper.pl/",
  },
  {
    id: 6,
    title: "Onkomapa",
    description: "Website for rating doctors and facilities done with Next.js",
    date: "July 2023",
    isCodeOrWork: "work",
    link: "https://onkomapa.pl/",
  },
  {
    id: 7,
    title: "Oncoindex",
    description: "Website for rating doctors and facilities done with Next.js",
    date: "July 2023",
    isCodeOrWork: "work",
    link: "https://oncoindex.org/",
  },
  {
    id: 8,
    title: "Moja Alivia",
    description: "Website to support people with cancer done with Next.js",
    date: "March 2024",
    isCodeOrWork: "work",
    link: "https://moja.alivia.org.pl/",
  },
  {
    id: 9,
    title: "Drinks UPC API",
    description: "RESTful API that manages drink-related information",
    date: "October 2024",
    isCodeOrWork: "code",
    link: "https://github.com/Materka11/drinks_UPC_api",
  },
  {
    id: 10,
    title: "Memory Game",
    description: "Memory game writing in React and Zustand",
    date: "October 2024",
    isCodeOrWork: "code",
    link: "https://gitlab.com/materka111/memory-game",
  },
  {
    id: 11,
    title: "King Abdulaziz International Airport",
    description: "Website for airport done with Next.js and Sitecore",
    date: "January 2025",
    isCodeOrWork: "work",
    link: "https://www.kaia.sa/",
  },
  {
    id: 12,
    title: "Jadoo Landing Page",
    description: "Landing page for Jadoo",
    date: "January 2025",
    isCodeOrWork: "work",
    link: "https://materka11.github.io/jadoo_landing_page/",
  },
];
