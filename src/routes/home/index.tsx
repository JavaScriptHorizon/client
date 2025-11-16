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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

  html: { label: "HTML", color: "#E44D26" },
  css: { label: "CSS", color: "#1572B6" },
  js: { label: "JavaScript", color: "#F7DF1E" },
  react: { label: "React.js", color: "#61DAFB" },
  next: { label: "Next.js", color: "#000000" },
  node: { label: "Node.js", color: "#3C873A" },
  express: { label: "Express.js", color: "#444444" },
  postgres: { label: "PostgreSQL", color: "#336791" },
} satisfies ChartConfig;

const Hero = () => {
  const arr_detl = [
    {
      icon: "",
      title: "",
      description: "",
      className: "md:col-span-2",
      card: "p-0",
      children: (
        <>
          <video
            src={`${videoPro}#t=1`}
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
      icon: "",
      title: "",
      description: "",
      className: "",
      card: "bg-primary/5 border border-primary/20",
      children: (
        <CardContent className="space-y-2">
          <h2 className="text-xl font-semibold">My Message</h2>
          <p className="text-muted-foreground text-sm">
            I believe that real success comes from consistency — showing up
            every day, learning, building, and pushing one step further.
          </p>
          <p className="text-muted-foreground text-sm">
            My goal is to create meaningful digital experiences that inspire
            growth, help others learn, and make technology feel simple and
            human.
          </p>
          <p className="text-muted-foreground text-sm">
            If my work touches even one person or makes their path clearer, then
            I’m on the right journey.
          </p>
          <h1 className=" absolute top-0 translate-y-8 right-2 pointer-events-none text-[60px] leading-0 text-muted-foreground/50">
            @
          </h1>
        </CardContent>
      ),
    },
    {
      icon: "",
      title: "",
      description: "",
      className: "",
      card: "p-4",
      children: (
        <>
          <h2 className="text-2xl font-extralight">Chart & Skills</h2>
          <ChartRadialLabel chartConfig={chartConfig} chartData={chartData} />
          <p className="text-muted-foreground">@2026</p>
        </>
      ),
    },
  ];

  return (
    <Section>
      <div className="py-4 flex items-center justify-between">
        <div className="space-y-4 max-w-xl">
          <motion.h2
            initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            className="text-2xl md:text-3xl"
          >
            👋Hi, I’m{" "}
            <span className="font-semibold text-primary">Mohamed Walid</span>.
          </motion.h2>
          <p className="text-muted-foreground text-base">
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
        <div>
          <motion.div
            initial={{ y: -50, opacity: 0, x: 50 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="flex justify-center items-center size-24 text-chart-3 relative rounded-full hover:scale-110 transition-transform cursor-pointer"
          >
            <ArrowUpRight className="size-6" />
            {"explore".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 0, rotate: (index + 1) * 40 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="absolute h-full"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="min-h-[26rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 relative">
        {arr_detl.map((item, idx) => (
          <motion.div
            key={idx}
            className={cn("rounded-lg", item.className)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <Card
              className={cn(
                "h-full w-full flex flex-col justify-center items-center relative",
                item.card
              )}
            >
              {item.children}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const About = () => (
  <Section
    title="About"
    className="bg-linear-[240deg] px-4 from-chart-3/50 to-90% from-80% to-chart-3 rounded-lg flex flex-col items-center text-center"
  >
    <p className="max-w-xl">
      I’m Mohamed Walid, a full‑stack web developer specializing in building
      modern educational platforms and beautiful user experiences.
    </p>
    <details className=" open:animate-fadeIn w-full max-w-2xl">
      <summary className="cursor-pointer mt-2 text-primary underline  decoration-2 underline-offset-4">
        Read more
      </summary>
      <p className="mt-2 max-w-xl text-center mx-auto">
        With a strong foundation in both front-end and back-end technologies, I
        create seamless and efficient web applications. My expertise includes
        React, Node.js, and database management, allowing me to deliver
        comprehensive solutions that meet client needs. I am passionate about
        learning new technologies and continuously improving my skills to stay
        ahead in the ever-evolving web development landscape.
      </p>
    </details>
    <div className="size-20 md:size-28 absolute -top-8 right-8 pointer-events-none ">
      <div className="size-full absolute -rotate-12 rounded-md overflow-hidden">
        <img src="/img/tab.jpg" className="size-full object-cover" />
      </div>
      <div className="size-full bg-primary rounded-lg" />
    </div>
  </Section>
);

const Projects = () => {
  const [projects, setProjects] = useState<
    { title: string; description: string; url: string; image?: string }[]
  >([]);

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
      title="Projects"
      description="Show 5 Popular projects"
      className="text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((p, idx) => (
            <Card
              key={idx}
              className="bg-transparent hover:bg-chart-3/50 transition-all"
            >
              <CardHeader>
                <img
                  src={p.image || "/placeholder.jpg"}
                  alt={p.title}
                  className="w-full h-64 rounded-lg object-cover"
                />
              </CardHeader>

              <CardContent>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {p.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link
                  to={`/projects/${p.url}`}
                  className="inline-block mt-4 text-primary text-sm underline hover:no-underline"
                >
                  View Project →
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="w-full py-10 col-span-3 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-muted/20 animate-pulse">
            <svg
              className="w-10 h-10 text-primary mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 10-4 0 2 2 0 004 0zm-4 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-muted-foreground text-sm">No projects found</p>
          </div>
        )}
      </div>
    </Section>
  );
};
const Contact = () => (
  <Section title="Contact" className="flex flex-col items-center text-center">
    <p className="text-muted-foreground max-w-md">
      Feel free to get in touch anytime. I’m always open to discussing new
      projects, collaborations, or opportunities.
    </p>

    <a
      href="mailto:javascripthorizon@gmail.com"
      className="mt-3 flex items-center gap-2 text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition"
    >
      <MessageSquareCodeIcon className="size-6" />
      <span>javascripthorizon@gmail.com</span>
    </a>
  </Section>
);

const Section = ({
  className,
  children,
  title,
  description,
  ...props
}: {
  className?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
}) => (
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
    viewport={{ once: true }}
    className={cn("py-12 space-y-4 relative", className)}
    id={String(title?.toLowerCase())}
  >
    <div className="space-y-4">
      {title && <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>}
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
    {children}
  </motion.section>
);

const Home = () => {
  return (
    <main className="space-y-3">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
