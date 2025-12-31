import { useState } from "react";
import { Button } from "../components/Button";
import { Code2, Lightbulb, Rocket, Users, X } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Strong Fundamentals",
    description:
      "Solid understanding of HTML, CSS, JavaScript, and modern CSS frameworks.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "Quickly adapting to new tools, technologies, and real-world project requirements.",
  },
  {
    icon: Users,
    title: "Team Friendly",
    description:
      "Comfortable working with teams, taking feedback, and improving continuously.",
  },
  {
    icon: Lightbulb,
    title: "Modern Tech",
    description: "Hands-on React.js and Next.js for building modern UIs.",
  },
];

export const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Hi, I’m Ankur Changani,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                a Front-End Developer.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate Front-End Developer skilled in modern front-end
                technologies and web development. I focus on creating
                responsive, user-friendly, and visually appealing interfaces.
              </p>
              <p>
                I enjoy working on dynamic projects and experimenting with new
                technologies. I work with HTML, CSS, CSS frameworks,
                JavaScript, React.js, and Next.js while continuously improving
                my skills.
              </p>
            </div>

           <Button  onClick={() => setOpen(true)}>
              View Education
           </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto bg-black/60"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-lg rounded-2xl bg-surface border border-border p-6 transform transition-all duration-300 ${
            open ? "scale-100 translate-y-0" : "scale-95 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Education
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg transition hover:bg-muted"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="font-medium text-foreground">
                Diploma in Computer Engineering
              </p>
              <p>Swarrnim Startup and Innovations University</p>
              <p className="text-sm text-highlight">
                bachelor Semester 6 (Final Year)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="font-medium text-foreground">
                Front-End Developer Course
              </p>
              <p>Red & White Multimedia Education</p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="font-medium text-foreground">
                10th SSC – Passed
              </p>
              <p>Ramdev Vidyabhavan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
