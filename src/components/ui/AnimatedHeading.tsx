"use client";

import { motion, type Variants } from "framer-motion";

type AnimatedHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  /** Words from this index onward render italic/accented via <em> */
  emphasisFrom?: number;
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055 },
  },
};

const word: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedHeading({
  text,
  as = "h2",
  className = "",
  delay = 0,
  emphasisFrom,
}: AnimatedHeadingProps) {
  const words = text.split(" ");
  const Tag = as;

  return (
    <>
      <Tag className="sr-only">{text}</Tag>
      <motion.div
        className={className}
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={container}
        transition={{ delayChildren: delay }}
      >
        {words.map((w, i) => {
          const content = (
            <>
              {w}
              {i < words.length - 1 ? " " : ""}
            </>
          );
          const emphasize =
            emphasisFrom !== undefined && i >= emphasisFrom;

          return (
            <span className="word-mask" key={i}>
              <motion.span className="word-inner" variants={word}>
                {emphasize ? <em>{content}</em> : content}
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </>
  );
}
