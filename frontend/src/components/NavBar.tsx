import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const leftNavBar = [
  { label: "Home", hash: "#home" },
  { label: "Sponsor", hash: "#sponsor" },
  { label: "Achievements", hash: "#achievements" },
  { label: "Map", hash: "#mapview" },
  { label: "3D Visiting", hash: "#partners" },
  { label: "CV Clinic", hash: "#CV" },
];

const rightNavBar = [
  { label: "Support", hash: "#support" },
  { label: "Help", hash: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const location = useLocation();

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [location.pathname]);

  const navItemClass = (hash: string) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeHash === hash ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-start gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="CSE logo" className="h-[30px] w-auto sm:block" aria-hidden="true" />
          <span className="hidden font-display text-sm font-semibold text-foreground sm:block">CSE JOB FAIR 2026</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {leftNavBar.map((item) => (
            <a key={item.label} href={item.hash} className={navItemClass(item.hash)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {rightNavBar.map((item) => (
            <a key={item.label} href={item.hash} className={navItemClass(item.hash)}>
              {item.label}
            </a>
          ))}
          <Search size={16} className="text-blue-500" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border bg-card md:hidden"
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {[...leftNavBar, ...rightNavBar].map((item) => (
              <a
                key={item.label}
                href={item.hash}
                onClick={() => setIsOpen(false)}
                className={navItemClass(item.hash)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
