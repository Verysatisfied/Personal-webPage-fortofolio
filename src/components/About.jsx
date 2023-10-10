import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and ME" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello there! I'm Rongrong, a future front-end web developer!
            Struggling to build some websites at the moment. hailing from China,
            and currently calling Cork, Ireland. My academic journey led me to
            the prestigious University College Cork, where I will earn a
            Master's degree in Information Syetem in Business Performance!
            <br /> <br />
            My journey, fueled by design thinking and a love for globe-trotting,
            has equipped me with a keen sense of empathy, boundless curiosity,
            and an unwavering passion for connecting with diverse individuals.
            I'm on a perpetual quest to understand how people navigate life.
            <br /> <br />
            🌱 Currently, I'm diving headfirst into a new Journey in Ireland,
            currently in all kinds of activities in clubs: Swimming🏊‍, hiking,
            canoeing, and dancing💃... Join me on these exciting journeys!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
