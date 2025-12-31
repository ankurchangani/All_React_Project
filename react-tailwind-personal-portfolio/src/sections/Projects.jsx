import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import AdminPanle from "../assets/Admin-panle.jpg";
import Music from "../assets/Music.jpg";
import Welth from "../assets/welth.png";
import MovieAdminPanle from "../assets/movieAdminPanle.png";
import MovieUserPanle from "../assets/movieUserPanle.png";
import Blog from "../assets/Blog.png";
const projects = [
  {
    title: "Admin panel",
    description:
      "An ECommerce admin panel with jQuery and css Bootstrap , featuring user management and analytics.",
    image: AdminPanle,
    tags: ["Html", "Css", "Jquery"],
    link: "https://dashboard-panel-admin.netlify.app/",
    github: "https://github.com/ankurchangani/Adminpanel",
  },
  {
    title: "Music School",
    description:
      "Responsive Music School website using Next.js and Tailwind CSS..",
    image: Music,
    tags: ["Next.js", "Tailwind Css"],
    link: "https://music-school-web-ten.vercel.app/",
    github: "https://github.com/ankurchangani/Music-School-web",
  },
  {
    title: "Ai Finance Platform",
    description:
      "Finance website using Next.js, Supabase, and Gemini AI features.",
    image: Welth,
    tags: ["Next.js", "Supabase", "Gemini AI"],
    link: "https://ai-finance-platform-zeta.vercel.app/",
    github: "https://github.com/ankurchangani/Ai-Finance-platform",
  },

  {
    title: "Movie Management Admin Panel",
    description:
      "Admin dashboard to add and manage movies using React and Firebase..",
    image: MovieAdminPanle,
    tags: ["React", "Firebase"],
    link: "https://cleancoreadmin.netlify.app/",
    github: "https://github.com/ankurchangani/Movie_Management_ReactJs",
  },

  {
    title: "Movie Management User Panel",
    description:
      "User panel to browse all movies with authentication and real-time updates..",
    image: MovieUserPanle,
    tags: ["React", "Firebase"],
    link: "https://cleancoreadmin.netlify.app/",
    github: "https://github.com/ankurchangani/Movie_Management_ReactJs",
  },

  {
    title: "Blog App",
    description:
      "Ae Blog Application built with React.js, Tailwind CSS, Firebase, Redux, and Cloudinary, allowing users to create, read, update, delete, and view detailed recipes through a modern and responsive interface",
    image: Blog,
    tags: ["React", "Firebase", "Tailwind Css", "Redux", "Cloudinary"],
    link: "https://blog-app-reactjs-jwcq.vercel.app/",
    github: "https://github.com/ankurchangani/blog-app-reactjs",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/ankurchangani" target="_blank">
            <AnimatedBorderButton>
              More Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
