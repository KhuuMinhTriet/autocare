import { FAQs } from "@/app/(main)/home/faqs";
import { Features } from "@/app/(main)/home/features";
import Hero from "@/app/(main)/home/hero";
import { Services } from "@/app/(main)/home/services";
import { Testimonials } from "@/app/(main)/home/testimonials";

export default function Home() {

    return (
        <div>
            <Hero />
            <Services />
            <Features />
            <Testimonials />
            <FAQs />
        </div>
    );
}
