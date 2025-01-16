import React from "react";
import { services } from "../constant";
import ServicesCard from "../component/ServicesCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
