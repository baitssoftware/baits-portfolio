import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import SmoothScroll from "@/components/shared/scroll/SmoothScroll";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SmoothScroll>
      <Navbar />
      {children}
      <Footer />
    </SmoothScroll>
  );
};

export default layout;
