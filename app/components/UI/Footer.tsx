import { Github, Linkedin, Twitter } from "lucide-react";
import TimeDisplay from "./Dynamic Island/Time";
import ThemeToggle from "./ThemeToggle";
import Links from "../common/Links";

export default function Footer() {
  return (
    <footer className="footer z-50 border-footer-border sticky bottom-0 flex h-10 w-full items-center justify-center bord shadow bg-[rgb(var(--background-rgb))]">
      <div className="mx-auto flex w-full max-w-[700px] items-center justify-between px-4 text-sm font-thin md:px-0">
        <div className="flex items-center gap-4">
          <TimeDisplay /> | <ThemeToggle />
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <Links icon={false} to="/blog">
              blog
            </Links>
          </li>
          <li>
            <a
              href="https://twitter.com/timmyawoniyi"
              target="_blank"
              rel="noopener noreferrer"
              className="*:stroke-brown"
            >
              <Twitter strokeWidth={2} size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oluwatimilehin-awoniyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="*:stroke-brown"
            >
              <Linkedin strokeWidth={2} size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oluwatimilehinawoniyi"
              target="_blank"
              rel="noopener noreferrer"
              className="*:stroke-brown"
            >
              <Github strokeWidth={2} size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
