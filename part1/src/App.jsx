import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mlukkai">mlukkai</a>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const now = new Date();
  const a = 10,
    b = 20;
  const friends = ["peter", "john"];
  console.log(now, a + b);

  return (
    <>
      <p>Hello world, it is now {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>{friends}</p>
      <Footer />
    </>
  );
}

export default App;
