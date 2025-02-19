import Title from "./Title";
import { servicedata } from "../data";
import Service from "./Service";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {servicedata.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}
export default Services;
