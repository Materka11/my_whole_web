import { useState } from "react";
import { AboutMe } from "./screens/AboutMe/AboutMe";
import { Form } from "./screens/Form/Form";
import { Header } from "./screens/Header/Header";
import { Work } from "./screens/Work/Work";
import { Footer } from "./screens/Footer";

const App2D = () => {
  const [classNoScroll, setClassNoScroll] = useState("");

  return (
    <main className={`app ${classNoScroll}`}>
      <Header setClassNoScroll={setClassNoScroll} />
      <AboutMe />
      <Work />
      <Form />
      <Footer />
    </main>
  );
};

export default App2D;
