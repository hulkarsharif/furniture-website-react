import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Features } from "./sections/features/Features";
import { Design } from "./sections/design/Design";
import { Process } from "./sections/process/Process";
import { About } from "./sections/about/About";
import { Testimonial } from "./sections/testimonial/Testimonial";
import { Subscribe } from "./sections/subscribe/Subscribe";
import { Footer } from "./sections/footer/Footer";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
            <Design />
            <Process />
            <About />
            <Testimonial />
            <Subscribe />
            <Footer />
        </>
    );
};
