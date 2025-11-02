import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  const confidentToday = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Firebase",
    "EmailJS API",
    "Google Sheets API",
    "Make.com",
    "Vite",
    "Git",
    "GitHub",
    "Vercel",
    "API Integration",
    "Automation Systems",
    "Recharts",
  ];

  const levelUp = [
    "Node.js",
    "SQL",
    "Python",
    "AWS",
    "Authentication & Security",
    "Testing & CI/CD",
    "Scalable Backend Architecture",
  ];
  const subject = encodeURIComponent("Let's Talk About an Opportunity");
  const body = encodeURIComponent(
    "Hi Leopold,\n\nLet's talk about an opportunity together.\n\nBest,\n"
  );

  return (
    <>
      <header className="w-screen h-screen max-sm:min-h-screen max-sm:h-fit bg-linear-to-b from-sky-50 to-white border-sky-100 bg-cover">
        <div className="wrapper h-full mx-auto flex flex-col justify-center max-sm:items-center">
          <h1 className="text-7xl font-bold max-sm:text-5xl max-sm:text-center">Leopold Horne</h1>
          <h2 className="text-3xl font-bold max-sm:text-2xl">Frontend Developer</h2>
          <p className="text-lg w-[60%] max-sm:text-base max-sm:w-[80%] max-sm:text-center">
            Former JPMorgan analyst who left finance to build things that
            actually ship. I create fast, production-ready web apps with React,
            Next.js, and TypeScript, built for clarity, performance, and scale
          </p>
          <p className="text-lg max-sm:text-base max-sm:w-[80%] max-sm:text-center">
            React • Next.js • TypeScript • Tailwind CSS • Firebase • Vercel
          </p>
          <div className="CTAs flex flex-row gap-5 mt-5">
            <button className="text-lg border cursor-pointer rounded-xl p-1">
              <a href="#featured">View Projects</a>
            </button>
            <button className=" text-lg border cursor-pointer rounded-xl p-1">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </header>
      <section id="featured" className="w-screen h-fit">
        <div className="wrapper max-sm:py-0 mt-0">
          <h2 className="title text-5xl font-bold max-sm:text-center max-sm:text-3xl">
            Featured Project: PawCircle
          </h2>
          <div className="content flex flex-row gap-5 w-full h-fit max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center">
            <div className="text w-[49%] rounded-xl h-fit flex flex-col gap-5 max-sm:w-[90%]">
              <p className="font-bold">
                "It takes a village to raise a fur baby"
              </p>
              <p className="">
                PawCircle is a platform I built for pet parents to bring their
                support circle together in one place. It lets owners share
                updates, post wishlists, and let friends or fans chip in toward
                real needs like vet visits, food, or treats, all while giving
                supporters a way to stay connected through photos and updates.
              </p>
              <p className="">
                I created PawCircle because most pet owners already have a small
                online village, they just don’t have a simple, thoughtful way to
                organize it. This project combines everything I love about tech
                and community: design, functionality, and emotional
                storytelling. I’ve been documenting the build on TikTok as part
                of my public dev journey, showing how ideas evolve into live
                projects.
              </p>
              <p className="">
                Built with{" "}
                <span className="font-bold">
                  Next.js, TypeScript, Tailwind,
                </span>{" "}
                and the <span className="font-bold">Google Sheets API</span>,
                PawCircle’s waitlist form is powered by real-time server
                actions, dynamic form states, and seamless backend storage. It’s
                the foundation for what will eventually become a full social
                platform for pet parents.
              </p>
            </div>
            <div className="w-fit flex flex-col gap-5">
              <div className="image w-fit rounded-xl bg-contain bg-no-repeat h-fit overflow-hidden">
                <img
                  src="/images/pawcircle-landing.png"
                  alt=""
                  className="h-100 w-auto max-sm:h-auto"
                />
              </div>
              <a
                href="https://pawcircle.app"
                target="_blank"
                className="w-full border rounded-lg text-center p-1"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects-solo" className="w-screen h-fit">
        <div className="wrapper">
          <h2 className="title text-5xl font-bold max-sm:text-3xl max-sm:text-center">Projects</h2>
          <div className="project cards flex flex-row gap-5 w-full max-sm:flex-col max-sm:items-center">
            <div className="card flex gap-5 flex-col h-fit w-[50%] max-sm:w-[90%] rounded-xl overflow-hidden">
              <img
                src="/images/amex-tool.png"
                alt=""
                className="h-100 w-auto max-w-full max-sm:h-auto"
              />
              <p>
                A tool built with{" "}
                <span className="font-bold">Next.js, TypeScript, React</span>,
                and <span className="font-bold">Recharts</span> to visualize the
                dollar value of{" "}
                <span className="font-bold">Amex Membership Rewards</span>{" "}
                across transfer partners. It calculates and ranks where points
                go furthest, turning scattered conversion data into clear,
                comparable insights.
              </p>
              <a
                href="https://amex-points.vercel.app/"
                target="_blank"
                className="w-full border rounded-lg text-center p-1 mb-5"
              >
                Live Link
              </a>
            </div>
            <div className="card flex gap-5 flex-col h-fit w-[50%] max-sm:w-[90%] rounded-xl overflow-hidden">
              <img
                src="/images/animedb-landing.png"
                alt=""
                className="h-100 w-auto max-w-full max-sm:h-auto"
              />
              <p>
                A searchable anime database built with{" "}
                <span className="font-bold">React, Tailwind, and Firebase</span>
                , integrating the{" "}
                <span className="font-bold">MyAnimeList API</span> to display
                detailed anime pages. Tracks trending searches in real time
                through a custom backend. Created to master API integration,
                state management, and data tracking.
              </p>
              <a
                href="https://animedb-blond.vercel.app"
                target="_blank"
                className="w-full border rounded-lg text-center p-1 mb-5"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects-client" className="w-screen">
        <div className="wrapper">
          <h2 className="title text-5xl font-bold max-sm:text-center max-sm:text-3xl">Selected Client Project</h2>
          <div className="project flex flex-row gap-5 w-full justify-between max-sm:flex-col max-sm:items-center">
            <div className="card flex flex-col gap-3 h-100 w-[49%] rounded-xl max-sm:w-[90%] max-sm:h-fit">
              <p className="font-bold">
                Lumber Trading & AI Automation Landing Page
              </p>
              <p className="">
                This project was built for a client who operates at the
                intersection of lumber trading and AI automation: two industries
                that rarely meet but desperately need each other. He needed a
                digital home that could clearly explain his services to new
                contacts and show how automation can modernize traditional
                supply chains.
              </p>
              <p className="">
                Before this project, many of his potential clients didn’t fully
                understand the range of solutions he offered. Our goal was to
                design a landing page that positioned him as both an expert in
                lumber logistics and a pioneer in automation strategy.
              </p>
            </div>
            <div className="card h-100 w-auto rounded-xl overflow-hidden flex justify-center max-sm:h-auto">
              <img
                src="/images/lumber-hero.png"
                alt=""
                className="h-100 w-auto max-sm:h-auto"
              />
            </div>
          </div>
          <div className="project flex flex-row-reverse gap-5 w-full justify-between max-sm:flex-col max-sm:items-center">
            <div className="card flex flex-col gap-3 h-100 w-[60%] rounded-xl justify-center max-sm:w-[90%]">
              <p className="font-bold">Bringing It to Life</p>
              <p className="">
                The result is a clean, high-conversion landing experience built
                with{" "}
                <span className="font-bold">
                  React, JavaScript, and Tailwind,
                </span>{" "}
                featuring a contact flow powered by the{" "}
                <span className="font-bold">EmailJS API</span>. The page
                highlights each service with concise copy and strong visual
                hierarchy, making it easy for visitors to understand what he
                does and why it matters.
              </p>
              <p className="">
                Though the site has not yet gone live, the client was thrilled
                with how it captured his dual expertise and gave him a
                professional way to present his business to new partners.
              </p>
            </div>
            <div className="card h-fit w-auto rounded-xl overflow-hidden">
              <img
                src="/images/lumber-contact-censored.png"
                alt=""
                className="h-100 w-auto max-sm:h-auto"
              />
              <p className="font-extralight text-center">
                (Image censored to protect client privacy)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="w-screen">
        <div className="wrapper">
          <h2 className="title text-5xl font-bold max-sm:text-3xl max-sm:text-center">About</h2>
          <div className="content flex flex-row items-start gap-5 w-full justify-between max-sm:flex-col max-sm:items-center">
            <div className="text h-fit w-[49%] rounded-xl p-1 gap-3 flex flex-col max-sm:w-[90%] max-sm:items-center">
              <p>
                I’m a{" "}
                <span className="font-bold">
                  Cornell University graduate and former JPMorgan mergers and
                  acquisitions analyst
                </span>{" "}
                who left investment banking to build real products that create
                impact. In banking, I learned how to work under pressure, master
                complex systems, and deliver results when the stakes were high.
                Now I bring that same discipline and intensity to software
                development.
              </p>
              <p>
                I taught myself end to end development and built projects like
                PawCircle, AnimeDB, and the Amex Points Converter from the
                ground up. Each one reflects how I think:{" "}
                <span className="font-bold">fast, analytical</span>, and{" "}
                <span className="font-bold">
                  obsessed with turning ideas into working solutions.
                </span>
              </p>
              <p>
                I’m not just learning to code. I’m learning to build businesses,
                products, and experiences that scale. I move fast, care about
                quality, and love collaborating with people who do the same.
              </p>
            </div>
            <div className="w-fit flex flex-col gap-5">
              <div className="image w-fit rounded-xl bg-contain bg-no-repeat h-fit overflow-hidden">
                <img src="/images/pp.jpg" alt="" className="h-100 w-auto max-sm:h-auto" />
              </div>
            </div>
          </div>
          <h3 className="title text-3xl font-bold self-center max-sm:text-2xl">Skills</h3>
          <div className="skills flex flex-row gap-5 w-full mb-10 max-sm:flex-col max-sm:items-center">
            <div className="confident-today h-20 w-[49%] rounded-xl flex flex-col gap-1 max-sm:h-fit max-sm:w-[90%]">
              <p className="font-bold max-sm:text-center">Confident Today:</p>
              <div className="flex flex-wrap gap-2 max-sm:justify-center">
                {confidentToday.map((elem, index) => (
                  <p key={index}>
                    {elem}
                    {index !== confidentToday.length - 1 && " •"}
                  </p>
                ))}
              </div>
            </div>
            <div className="leveling-up-tomorrow h-20 w-[49%] rounded-xl flex flex-col gap-1 max-sm:h-fit max-sm:w-[90%]">
              <p className="font-bold max-sm:text-center">Leveling Up Tomorrow:</p>
              <div className="flex flex-wrap gap-2 max-sm:justify-center">
                {levelUp.map((elem, index) => (
                  <p key={index}>
                    {elem}
                    {index !== levelUp.length - 1 && " •"}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-screen">
        <div className="wrapper max-sm:py-0 max-sm:mb-10">
          <h2 className="title text-4xl font-bold text-center max-sm:text-3xl">
            Let's Connect
          </h2>
          <div className="content flex flex-col gap-3 w-full items-center">
            <p className="text-center">
              I love building, shipping, and improving fast. Open to full-time
              or contract work with teams that move quickly and value great
              execution.
            </p>
            <a
              href={`mailto:leopoldhorne1@gmail.com?subject=${subject}&body=${body}`}
              className="border-b  font-bold text-left p-1 flex gap-2 items-center"
            >
              Say Hello
              <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />{" "}
            </a>
            <p className="text-sm text-gray-400 max-sm:text-center">
              Or email me directly at{" "}
              <span className="font-medium text-gray-500">
                leopoldhorne1@gmail.com
              </span>
            </p>
          </div>
        </div>
      </section>
      <footer className="w-screen h-100 bg-linear-to-b from-sky-50 to-white border-sky-100 bg-cover">
        <div className="wrapper mx-auto flex flex-row gap-5 py-10  text-slate-900 justify-between max-sm:flex-col-reverse max-sm:items-center">
          <div className="left flex flex-col justify-center items-center gap-2 w-[30%] max-sm:w-[90%] ">
            <h4 className="font-bold text-4xl max-sm:text-2xl">Leopold Horne</h4>
            <p className="text-center">From banking to building, I focus on fast execution, strong design, and code that supports real business goals, not just pixels on a screen.</p>
          </div>
          <div className="middle flex flex-col gap-2 text-center">
            <h4 className="font-bold max-sm:text-2xl">Navigation</h4>
            <a href="#" className="link">
              Home
            </a>
            <a href="#featured" className="link">
              Featured
            </a>
            <a href="#projects-solo" className="link">
              Projects
            </a>
            <a href="#about" className="link">
              About
            </a>
            <a href="#contact" className="link">
              Contact
            </a>
          </div>
          <div className="right flex flex-col text-center">
            <h4 className="font-bold max-sm:text-2xl">Socials</h4>
            <p><a href="">Linkedin</a></p>
            <p><a href="">GitHub</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
