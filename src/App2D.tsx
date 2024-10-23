import { useState } from "react";
import { AboutMe } from "./screens/AboutMe";
import { Form } from "./screens/Form";
import { Header } from "./screens/Header/Header";
import { Work } from "./screens/Work";
import { Footer } from "./screens/Footer";

const App2D = () => {
  const [classNoScroll, setClassNoScroll] = useState("");

  return (
    <div className={`App ${classNoScroll}`}>
      <Header setClassNoScroll={setClassNoScroll} />
      <AboutMe />
      <Work />
      <Form />
      <Footer />
    </div>
  );
};

export default App2D;
