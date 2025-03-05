import StartProject from '@/components/home/StartProject/StartProject';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import { TestimonialSlider } from './components/TestimonialSlider';

const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <TestimonialSlider />
      <StartProject />
    </>
  );
};

export default page;
