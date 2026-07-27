import SiteHeader from "@/components/sections/site/site-header";
import Hero from "@/components/sections/site/hero";
import ServiceTicker from "@/components/sections/site/service-ticker";
import SelectedWork from "@/components/sections/site/selected-work";
import Services from "@/components/sections/site/services";
import Stats from "@/components/sections/site/stats";
import Process from "@/components/sections/site/process";
import Manifesto from "@/components/sections/site/manifesto";
import Contact from "@/components/sections/site/contact";
import SiteFooter from "@/components/sections/site/site-footer";

export default function Home() {
    return (
        <div className="brutal font-body relative min-h-screen overflow-x-clip">
            <SiteHeader />
            <main>
                <Hero />
                <ServiceTicker />
                <SelectedWork />
                <Services />
                <Stats />
                <Process />
                <Manifesto />
                <Contact />
            </main>
            <SiteFooter />
        </div>
    );
}
