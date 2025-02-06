import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Link from "next/link";

const floatingVariants = {
  initial: { y: -10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-4 left-2 md:left-[20%] -translate-x-1/2 w-[95%] max-w-4xl rounded-full border border-white/20 bg-transparent backdrop-blur-md shadow-lg z-50 px-3 md:px-8 py-3"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="#"
            className="flex items-center text-white hover:text-purple-400 transition-colors"
          >
            <Code className="h-6 w-6 text-purple-400" />
            <span className="ml-2 text[14px] md:text-lg font-bold ">CodeCanvas</span>
          </Link>
        </motion.div>

        {/* Navigation Items */}
        <nav className="flex items-center gap-6">
          {["Features", "Pricing", "Blog"].map((item, index) => (
            <motion.div
              key={item}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href="#"
                className="text-[12px] font-medium text-white hover:text-purple-400 transition-colors relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  {item}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
