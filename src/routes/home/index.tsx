import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageSquareCodeIcon } from "lucide-react";
import { motion } from "framer-motion";
import videoPro from "/public/video/2026.mp4";
import type { ChartConfig } from "@/components/ui/chart";
import { ChartRadialLabel } from "@/components/blocks/charts-radial";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

// --- 1. Externalized and Typed Data ---

const chartData = [
  { browser: "js", visitors: 280, fill: "var(--color-js)" },
  { browser: "react", visitors: 200, fill: "var(--color-react)" },
  { browser: "next", visitors: 180, fill: "var(--color-next)" },
  { browser: "node", visitors: 160, fill: "var(--color-node)" },
  { browser: "express", visitors: 180, fill: "var(--color-express)" },
  { browser: "postgres", visitors: 120, fill: "var(--color-postgres)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  js: { label: "JavaScript", color: "#F7DF1E" },
  react: { label: "React.js", color: "#61DAFB" },
  next: { label: "Next.js", color: "#000000" },
  node: { label: "Node.js", color: "#3C873A" },
  express: { label: "Express.js", color: "#444444" },
  postgres: { label: "PostgreSQL", color: "#336791" },
} satisfies ChartConfig;

const heroDetails = [
  {
    className: "md:col-span-2",
    card: "p-0",
    children: (
      <>
        {/* Added poster for better perceived load performance */}
        <video
          src={`${videoPro}#t=1`}
          poster="/img/video-poster.jpg"
          controls
          controlsList="nodownload noremoteplayback noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          playsInline
          className="w-full h-full object-cover rounded-lg bg-background"
        />
      </>
    ),
  },
  {
    card: "bg-primary/5 border border-primary/20 backdrop-blur-3xl",
    children: (
      <CardContent className="space-y-2">
        <h2 className="text-xl font-semibold">My Message</h2>
        <p className="text-muted-foreground text-sm">
          I believe that real success comes from **consistency** — showing up
          every day, learning, building, and pushing one step further.
        </p>
        <p className="text-muted-foreground text-sm">
          My goal is to create meaningful digital experiences that inspire
          growth, help others learn, and make technology feel simple and human.
        </p>
        <p className="text-muted-foreground text-sm">
          If my work touches even one person or makes their path clearer, then
          I’m on the right journey.
        </p>
        <h1 className=" absolute top-0 translate-y-8 right-2 pointer-events-none text-[60px] leading-0 text-primary">
          @
        </h1>
      </CardContent>
    ),
  },
  {
    card: "p-4",
    children: (
      <>
        <h2 className="text-2xl font-extralight">Chart & Skills</h2>
        <ChartRadialLabel chartConfig={chartConfig} chartData={chartData} />
        <p className="text-muted-foreground text-sm">
          @{new Date().getFullYear()}
        </p>
      </>
    ),
  },
];

interface Project {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A comprehensive e-learning platform built with Next.js and PostgreSQL.",
    url: "project-alpha",
    image: "/placeholder.jpg",
  },
  {
    title: "Project Beta",
    description:
      "An advanced state management demo using React and TypeScript.",
    url: "project-beta",
    image: "/placeholder.jpg",
  },
  {
    title: "Project Gamma",
    description: "A RESTful API service developed with Node.js and Express.",
    url: "project-gamma",
    image: "/placeholder.jpg",
  },
];

// --- Section Component (Refined) ---

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Section = ({
  className,
  children,
  title,
  description,
  ...props
}: SectionProps) => (
  <motion.section
    {...props}
    initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 10,
    }}
    viewport={{ once: true, amount: 0.1 }} // Increased viewport amount for smoother trigger
    className={cn("py-12 space-y-8 relative", className)}
  >
    {(title || description) && (
      <div className="space-y-4 text-center">
        {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
        {description && (
          <p className="text-lg mx-auto text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
    )}
    {children}
  </motion.section>
);

// --- Hero Component ---

const Hero = () => {
  return (
    <Section className="pt-24 pb-16">
      <div className="flex items-center justify-between ">
        <div className="space-y-4 max-w-xl">
          <motion.h2
            initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            👋Hi, I’m{" "}
            <span className="font-extrabold text-primary">Mohamed Walid</span>.
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            "
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            consectetur voluptatum esse quisquam quam pariatur modi maxime est
            non vero.`
              .split(" ")
              .map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {char}{" "}
                </motion.span>
              ))}
            "
          </p>
        </div>
        {/* Redesigned 'Explore' to be a semantic Link */}
        <motion.div
          initial={{ y: -50, opacity: 0, x: 50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="hidden md:block"
        >
          <a
            href="#contact"
            aria-label="Explore my profile and contact information"
            className="flex justify-center items-center size-28 text-chart-3 relative rounded-full hover:scale-110 transition-transform cursor-pointer group"
          >
            <ArrowUpRight className="size-8 group-hover:rotate-45 transition-transform" />
            {"explore".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ rotate: index * 45 - 90 }} // Initial rotation for circle placement
                animate={{ rotate: [index * 45 - 90, index * 45 - 90 + 360] }} // Full rotation animation
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.05,
                }}
                className="absolute h-[120%] origin-bottom-center"
                style={{ top: "-10%" }}
              >
                {char}
              </motion.span>
            ))}
          </a>
        </motion.div>
      </div>
      <div className="min-h-[26rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 relative">
        {heroDetails.map((item, idx) => (
          <motion.div
            key={idx}
            className={cn("rounded-xl", item.className)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <Card
              className={cn(
                "h-full w-full flex flex-col justify-center items-center relative rounded-xl",
                item.card
              )}
            >
              {item.children}
            </Card>
          </motion.div>
        ))}
      </div>

      <img
        src="/img/image-h.svg"
        className="w-full h-auto absolute top-0 pointer-events-none -z-10"
      />
    </Section>
  );
};

// --- About Component ---

const About = () => (
  <Section
    title="About Me"
    className="bg-primary/5 border border-primary/10 rounded-xl flex flex-col items-center text-center px-6"
  >
    <p className="max-w-xl text-lg">
      I’m **Mohamed Walid**, a full‑stack web developer specializing in building
      modern educational platforms and beautiful user experiences.
    </p>
    <details className=" open:animate-fadeIn w-full max-w-2xl mt-4">
      <summary className="cursor-pointer text-primary underline decoration-2 underline-offset-4 font-medium">
        Read more about my journey
      </summary>
      <p className="mt-4 max-w-xl text-center mx-auto text-muted-foreground">
        With a strong foundation in both front-end (React, Next.js) and back-end
        (Node.js, Express, PostgreSQL) technologies, I create seamless and
        efficient web applications. My passion lies in delivering comprehensive
        solutions that are highly performant and user-centric. I am passionate
        about learning new technologies and continuously improving my skills to
        stay ahead in the ever-evolving web development landscape.
      </p>
    </details>
    {/* Minor redesign for the decorative image/card */}
    <div className="size-20 md:size-28 absolute -top-8 right-8 pointer-events-none ">
      <div className="size-full absolute -rotate-12 rounded-lg overflow-hidden border-2 border-primary/50 shadow-lg">
        <img
          src="/img/tab.jpg"
          alt="A laptop screen displaying code"
          className="size-full object-cover"
        />
      </div>
    </div>
  </Section>
);

// --- Projects Component ---

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(PLACEHOLDER_PROJECTS);

  // Original fetch logic commented out, using placeholder data for display
  // useEffect(() => {
  //   const fetched = async () => {
  //     try {
  //       const res = await axios.get("/api/projects");
  //       if (res.status === 200) {
  //         setProjects(res.data);
  //       }
  //     } catch (err) {
  //       console.error("Error Fetched", err);
  //     }
  //   };

  //   fetched();
  // }, []);

  return (
    <Section
      title="Recent Projects"
      description="A selection of my most recent and popular work."
      className="text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((p, idx) => (
            <Card
              key={idx}
              className="bg-transparent hover:bg-chart-3/50 transition-all text-left rounded-xl shadow-lg border-primary/20"
            >
              <CardHeader className="p-0">
                <img
                  src={p.image || "/placeholder.jpg"}
                  alt={`Cover image for ${p.title}`}
                  className="w-full h-48 rounded-t-xl object-cover"
                />
              </CardHeader>

              <CardContent className="pt-4">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {p.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link
                  to={`/projects/${p.url}`}
                  className=" text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View Project <ArrowUpRight className="size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="w-full py-10 col-span-3 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-muted/20">
            <svg
              className="w-10 h-10 text-primary mb-3 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 10-4 0 2 2 0 004 0zm-4 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-muted-foreground text-sm">Loading projects...</p>
          </div>
        )}
      </div>
    </Section>
  );
};

// --- Contact Component ---

const Contact = () => (
  <Section
    title="Get in Touch"
    description="Feel free to get in touch anytime. I’m always open to discussing new
      projects, collaborations, or opportunities."
    id="contact"
    className="flex flex-col items-center text-center"
  >
    <a
      href="mailto:javascripthorizon@gmail.com"
      className="mt-6 flex items-center gap-3 text-2xl text-primary font-bold underline underline-offset-8 hover:text-primary/80 transition"
    >
      <MessageSquareCodeIcon className="size-8" />
      <span>javascripthorizon@gmail.com</span>
    </a>
  </Section>
);

// --- Home Component ---

const Home = () => {
  return (
    <main className="space-y-4">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
