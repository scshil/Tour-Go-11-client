import React from "react";
import { Image } from "react-bootstrap";
import about from "../../Picture/about.jpg";

const About = () => {
  return (
    <div className="min-vh-100">
      <div className=" mb-5">
        <Image src={about} fluid />
      </div>
      <section className="container my-5">
        <article style={{ textAlign: "justify" }}>
          <p>
            {" "}
            “Travel is the main thing you purchase that makes you more
            extravagant”. We, at Tour-Go, swear by this and put stock in
            satisfying travel dreams that make you perpetually rich constantly.
          </p>

          <p>
            {" "}
            We have been moving excellent encounters for a considerable length
            of time through our cutting-edge planned occasion bundles and other
            fundamental travel administrations. We rouse our clients to carry on
            with a rich life, brimming with extraordinary travel encounters.
          </p>
          <p>
            Through our exceptionally curated occasion bundles, we need to take
            you on an adventure where you personally enjoy the stunning
            magnificence of America and far-off terrains. We need you to observe
            sensational scenes that are a long way past your creative ability.
          </p>
          <p>
            {" "}
            The powerful inclination of American voyagers to travel more
            nowadays is something that keeps us inspired to satisfy our vacation
            necessities. Our vision to give you a consistent occasion encounter
            makes us one of the main visit administrators in the regularly
            extending travel industry. To guarantee that you have a satisfying
            occasion and healthy encounters, all our vacation administrations
            are available to your no matter what. On your universal occasion, we
            guarantee that you are very much outfitted with outside trade (Forex
            Cards, Currency Notes), visa, and travel protection.
          </p>
          <p>
            We are the pioneers of outside trade in America and booking forex
            online is basic and advantageous with us. Our online visa
            administrations are exceptional and make the bulky procedure of
            booking visas a cake stroll for clients. We likewise give
            exceptional visa, forex, and travel protection and outside
            settlement administrations for understudies voyaging abroad for
            study.Regardless of whether it’s reserving flights or inns for your
            movement, COmpany Name offers everything under one umbrella. We
            likewise have journey occasions for individuals who are searching
            for solace and reasonable extravagance.
          </p>
          <p>
            {" "}
            We offer the best limits on our top-rated visit bundles to clients
            who pick our viable administrations over and over. How about we
            remind you indeed that we don’t expect to be your visit and travel
            specialists; we endeavor to be your vacation accomplices until the
            end of time.{" "}
          </p>
        </article>
      </section>
      {/* address */}
      <section></section>
    </div>
  );
};

export default About;
