import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import BallCanvas from "../canvas/Ball"; // now HTML/CSS based

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <BallCanvas
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
