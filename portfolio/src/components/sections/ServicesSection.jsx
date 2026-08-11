import SectionHeader from "../shared/SectionHeader";
import ServiceCard from "../shared/ServiceCard";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        <SectionHeader
          label="SERVICES"
          title="What I Offer."
          description="Offering professional solutions designed to meet client needs."
          link={{ href: "/services", label: "View All Services" }}
        />

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}