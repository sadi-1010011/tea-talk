"use client";

import { useRef } from "react";
import { motion, useInView, type Variant } from "motion/react";

type AnimationVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "zoomOut"
  | "flipUp"
  | "slideUp"
  | "scaleUp";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.15 },
    visible: { opacity: 1, scale: 1 },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: 30, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className = "",
  as = "div",
  staggerChildren,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const MotionComponent = motion[as] as typeof motion.div;

  const containerVariants = staggerChildren
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }
    : undefined;

  const itemVariants = variants[variant];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants || itemVariants}
      transition={
        !staggerChildren
          ? {
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1],
            }
          : undefined
      }
      className={className}
    >
      {staggerChildren
        ? children
        : children}
    </MotionComponent>
  );
}

/* A child item for use inside a staggered ScrollReveal parent */
export function ScrollRevealItem({
  children,
  variant = "fadeUp",
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
