import {
  ReactDark,
  Nextjs,
  Typescript,
  Javascript,
  Redux,
  TailwindcssDark,
  FileTypeScss2,
  Css3,
  Html5,
  ZustandIcon,
  Bootstrap,
  ReactQueryIcon,
  ReactHookFormIcon,
  Styledcomponents,
  Vuejs,
  Firebase,
  Storybook,
  SitecoreIcon,
} from "../assets/icons/icons";

interface ISkills {
  frontend: ISkill[];
  backend: ISkill[];
  tools: ISkill[];
}

interface ISkill {
  label: string;
  Icon: React.ElementType;
}

export const SKILLS: ISkills = {
  frontend: [
    { label: "React.js", Icon: ReactDark },
    { label: "Next.js", Icon: Nextjs },
    { label: "Typescript", Icon: Typescript },
    { label: "Javascript", Icon: Javascript },
    { label: "Redux", Icon: Redux },
    { label: "Tailwind", Icon: TailwindcssDark },
    { label: "SCSS", Icon: FileTypeScss2 },
    { label: "CSS3", Icon: Css3 },
    { label: "HTML5", Icon: Html5 },
    { label: "React Native", Icon: ReactDark },
    { label: "Zustand", Icon: ZustandIcon },
    { label: "Bootstrap", Icon: Bootstrap },
    { label: "React Query", Icon: ReactQueryIcon },
    { label: "React Hook Form", Icon: ReactHookFormIcon },
    { label: "Styled Components", Icon: Styledcomponents },
    { label: "Vue.js", Icon: Vuejs },
    { label: "Firebase", Icon: Firebase },
    { label: "Storybook", Icon: Storybook },
    { label: "Sitecore", Icon: SitecoreIcon },
  ],
  backend: [],
  tools: [],
};
