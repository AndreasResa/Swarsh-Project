import Evolution from "./Evolution";
import TypeEffect from "./Type-Effect";
import Logo from "./Logo";

const Card = () => {
  const card = "Card-Info";
  return (
    <>
      <h1>{card}</h1>
      <Evolution />
      <TypeEffect />
      <Logo />
    </>
  );
};

export default Card;
