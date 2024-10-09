import OurValues from "./OurValues.js";
import OurCrew from "./OurCrew.js";
import OurPartners from "./OurPartners.js";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
