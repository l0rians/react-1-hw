import styles from "./page.module.css";

const OurValues = () => {
  return (
    <div className={styles.ourValues}>
      <li>
        <h2>01</h2>
        <strong>
          <h3>Exploration</h3>
        </strong>
        We are driven by a deep-seated desire to explore the unknown. We believe
        that the pursuit of discovery is at the heart of human nature, and we
        are committed to pushing the boundaries of what is possible.
      </li>
      <li>
        <h2>02</h2>
        <strong>
          <h3>Innovation</h3>
        </strong>
        At Galactica, we prioritize cutting-edge technology and innovation. We
        are constantly evolving our spacecraft, safety protocols, and services
        to ensure that our travelers experience the most advanced and secure
        space journeys available.
      </li>
      <li>
        <h2>03</h2>
        <strong>
          <h3>Sustainability</h3>
        </strong>
        We are committed to making space exploration sustainable for future
        generations. Our space missions are designed to minimize environmental
        impact, both on Earth and in space, and to foster a spirit of
        responsibility towards our universe.
      </li>
      <li>
        <h2>04</h2>
        <strong>
          <h3>Community</h3>
        </strong>
        We believe in the power of collective exploration. Our journeys are not
        just about reaching new destinations; they are about building a
        community of space enthusiasts who share a passion for the stars.
      </li>
    </div>
  );
};

export default OurValues;
