"use client";

import { motion, type Variants } from "framer-motion";

type AnimatedLinesProps = {
  lines: string[];
  className?: string;
  as?: "p" | "div";
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const line: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedLines({
  lines,
  className = "",
  as = "p",
}: AnimatedLinesProps) {
  const MotionTag = as === "p" ? motion.p : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
    >
      {lines.map((text, i) => (
        <span className="line-mask" key={i}>
          <motion.span className="line-inner" variants={line}>
            {text}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
