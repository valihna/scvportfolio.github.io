import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./routes";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div className="global-nav">
      <div className="nav">
        <div ref={ref} className="lghidden">
          <Hamburger toggled={isOpen} right={10} size={20} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
              >
                <ul className="grid gap-2">
                  {routes.map((route, idx) => {
                    const { Icon, link, title } = route;

                    return (
                      <motion.li
                        key={title}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                          href={link}
                        >
                          <span className="flex gap-1 text-lg">{title}</span>
                          <Icon className="text-xl" />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="slogan">
          <h2>
            <Link to="/home" rel="noopener noreferrer">
              VSC Web - Transform your vision into an exceptional web
              experience.
              {/* VSC Web - Transformez votre vision en une expérience web exceptionnelle. */}
            </Link>
          </h2>
        </div>
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
