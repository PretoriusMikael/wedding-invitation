import CoupleSection from "./components/CoupleSection";
import EnvelopeHero from "./components/EnvelopeHero";
import EventDetails from "./components/EventDetails";
import Accommodation from "./components/Accommodation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import RSVPSection from "./components/RSVPSection";
import DressCode from "./components/DressCode";
import VenueSection from "./components/VenueSection";
import "./styles/globals.css";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <EnvelopeHero />
      <CoupleSection />
      <OurStory />
      <EventDetails />
      <VenueSection />
      <DressCode />
      <Accommodation />
      <FAQ />
      <RSVPSection />
      <Footer />
    </main>
  );
}
