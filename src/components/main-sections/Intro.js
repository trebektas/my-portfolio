import "./intro.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Intro = () => {
  return (
    <section className="sections intro">
      <div className="container-intro">
        <h1>HI, I'M ENSAR</h1>
        <p>Web Developer & Business Analyst</p>
        <a href="#about">
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Intro;
