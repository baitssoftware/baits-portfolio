import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Hero from "./components/Hero";
import RevealLinks from "./components/RevealLinks";

const page = () => {
  return (
    <div>
      <Hero />
      <ContactForm />
      <RevealLinks />
      <ContactInfo />
    </div>
  );
};

export default page;
