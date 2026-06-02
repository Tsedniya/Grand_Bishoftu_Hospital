import React from "react";
import now from "../assets/new/now.png";
import photo11 from "../assets/new/photo11.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const COLORS = {
  darkest: "#063a3a",
  deep: "#084f4f",
  base: "#0b6e6e",
  bright: "#0a9898",
  light: "#5dc8c8",
  tint: "#e0f5f5",
  gold: "#c8a84b",
  cream: "#f5f2ea",
};

const HeroButton = ({ children, primary }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "14px 32px",
        fontFamily: "'Lato', sans-serif",
        fontSize: "11px",
        fontWeight: 400,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.35s ease",
        border: `1px solid ${primary ? COLORS.gold : "rgba(245,242,234,0.35)"}`,
        background: primary
          ? hovered ? "transparent" : COLORS.gold
          : hovered ? "rgba(245,242,234,0.08)" : "transparent",
        color: primary
          ? hovered ? COLORS.gold : COLORS.darkest
          : COLORS.cream,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {children}
    </button>
  );
};

const HeroSecond = () => {
  return (
    <section style={{ width: "100%", position: "relative" }}>
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

        {/* Background Image */}
        <picture>
          <source srcSet={now} media="(min-width: 1024px)" />
          <img
            src={photo11}
            alt="Grand Bishoftu Hospital"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.35) saturate(0.7)",
            }}
          />
        </picture>

        {/* Deep teal overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(120deg, ${COLORS.darkest}ee 0%, ${COLORS.deep}cc 50%, ${COLORS.darkest}99 100%)`,
          zIndex: 1,
        }} />

        {/* Bottom fade into page */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "160px",
          background: `linear-gradient(to top, ${COLORS.darkest} 0%, transparent 100%)`,
          zIndex: 2,
        }} />

        {/* Decorative rings */}
        <div style={{ position: "absolute", top: "8%", right: "-60px", width: "380px", height: "380px", borderRadius: "50%", border: "1px solid rgba(93,200,200,0.12)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "13%", right: "-30px", width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(93,200,200,0.08)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(93,200,200,0.07)", zIndex: 1, pointerEvents: "none" }} />

        {/* Gold vertical accent */}
        <div style={{
          position: "absolute",
          left: 0, top: "20%", bottom: "20%",
          width: "3px",
          background: `linear-gradient(to bottom, transparent, ${COLORS.gold}, transparent)`,
          zIndex: 3,
        }} />

        {/* Main Content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px 64px 0",
        }}>
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}
            >
              <div style={{ width: "40px", height: "1px", background: COLORS.gold }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "12px", letterSpacing: "0.3em",
                textTransform: "uppercase", color: COLORS.gold, fontWeight: 500,
              }}>
                Bishoftu, Ethiopia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            >
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(52px, 8vw, 88px)",
                fontWeight: 300, color: COLORS.cream,
                lineHeight: 1.0, letterSpacing: "-0.02em", margin: "0 0 4px",
              }}>
                Grand Bishoftu
              </h1>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(52px, 8vw, 88px)",
                fontWeight: 300, fontStyle: "italic", color: COLORS.light,
                lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0,
              }}>
                Hospital
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              style={{ width: "80px", height: "1px", background: `rgba(93,200,200,0.4)`, margin: "28px 0", transformOrigin: "left" }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "rgba(245,242,234,0.6)",
                fontWeight: 300, letterSpacing: "0.02em",
                lineHeight: 1.75, maxWidth: "460px", margin: "0 0 40px",
              }}
            >
              Exceptional healthcare delivered with compassion, innovation,
              and unwavering commitment to your well-being.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
            >
              <Link to="/contact"><HeroButton primary>Emergency Care →</HeroButton></Link>
              <Link to="/services"><HeroButton>Explore Our Services</HeroButton></Link>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: "absolute", bottom: "130px", right: "64px",
            zIndex: 10, display: "flex", flexDirection: "column",
            gap: "20px", textAlign: "right",
          }}
        >
          {[
            { value: "24/7", label: "Emergency" },
            { value: "50+", label: "Specialists" },
            { value: "15yr", label: "Excellence" },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 400, color: COLORS.gold, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,242,234,0.4)", marginTop: "2px" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10 }}
        >
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: `rgba(93,200,200,0.55)` }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ width: "1px", height: "36px", background: `rgba(93,200,200,0.3)` }}
          />
        </motion.div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400&display=swap');`}</style>
    </section>
  );
};

export default HeroSecond;