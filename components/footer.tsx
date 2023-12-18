import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 bg-gray mb-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center"></div>
      </Container>
    </footer>
  );
};

export default Footer;
