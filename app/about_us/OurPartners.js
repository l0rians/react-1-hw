import styles from "./page.module.css";

const OurPartners = () => {
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className={styles.ourPartners}>
        <li>
          <img src="/business_partners/alphabet-logo.png"></img>
        </li>
        <li>
          <img src="/business_partners/amazon_logo.png"></img>
        </li>
        <li>
          <img src="/business_partners/CBC_Logo_White.png"></img>
        </li>
        <li>
          <img src="/business_partners/Microsoft-Logo-white.png"></img>
        </li>
        <li>
          <img src="/business_partners/nyu-logo.png"></img>
        </li>
        <li>
          <img src="/business_partners/QueensLogo_white.png"></img>
        </li>
        <li>
          <img src="/business_partners/samsung-logo.png"></img>
        </li>
        <li>
          <img src="/business_partners/sodexo-logo.png"></img>
        </li>
      </div>
    </>
  );
};

export default OurPartners;
