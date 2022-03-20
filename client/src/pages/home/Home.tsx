import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import WorkProcess from "./WorkProcess";
import ProductOverview from "./ProductOverview";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { HOME_CONTENT } from "../../development/data";

const Home = () => {
  const quantity = useSelector((state: State) => state?.quantity);

  return (
    <div>
      <Navbar quantity={quantity} />
      <Hero />
      <About />
      <WorkProcess
        title={HOME_CONTENT.work_process_title}
        p1={HOME_CONTENT.work_process_one}
        p2={HOME_CONTENT.work_process_two}
        p3={HOME_CONTENT.work_process_three}
        p4={HOME_CONTENT.work_process_four}
      />

      <ProductOverview />
      <Contact />
    </div>
  );
};

export default Home;
