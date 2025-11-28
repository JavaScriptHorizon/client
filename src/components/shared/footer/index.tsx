import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: <Github className="size-6" />,
      href: "https://github.com/",
    },
    {
      icon: <Linkedin className="size-6" />,
      href: "https://linkedin.com/",
    },
    {
      icon: <Youtube className="size-6" />,
      href: "https://youtube.com/",
    },
    {
      icon: <Mail className="size-6" />,
      href: "mailto:javascripthorizon@gmail.com",
    },
  ];

  return (
    <footer className="space-y-6 w-full h-auto py-8 border-t">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Follow me</h1>

        <div className="flex items-center gap-4">
          {socials.map((item, idx) => (
            <Link
              to={item.href}
              key={idx}
              target="_blank"
              className="size-12 rounded-full bg-primary/90 text-white flex items-center justify-center 
                        hover:bg-primary transition-all duration-200 hover:scale-105 shadow-sm"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-center text-muted-foreground text-sm">
        Copyright &copy; {new Date().getFullYear()} — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
