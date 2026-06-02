import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cancer from "../assets/cancer.jpg";
import photo_1 from "../assets/photo_1.jpg";
import home from "../assets/home.jpg";
import map from "../assets/map.svg";
import heartpulse from "../assets/heartpulse.svg";
import notebook from "../assets/notebook.svg";
import photo23 from "../assets/new/photo23.jpg";
import photo14 from "../assets/new/photo14.jpg";
import photo15 from "../assets/new/photo15.jpg";
import photo16 from "../assets/new/photo16.jpg";
import photo22 from "../assets/new/photo22.jpg";
import photo19 from "../assets/new/photo19.jpg";
import photo8 from "../assets/new/photo8.jpg";
import photo10 from "../assets/new/photo10.jpg";
import photo13 from "../assets/new/photo13.jpg";
import photo5 from "../assets/new/photo5.jpg";
import photo6 from "../assets/new/photo6.jpg";
import photo12 from "../assets/new/photo12.jpg";
import photo38 from "../assets/new/photo38.jpg";
import photo41 from "../assets/new/photo41.jpg";
import photo08 from "../assets/new/photo08.JPG";

const COLORS = {
  darkest: "#063a3a",
  deep:    "#084f4f",
  base:    "#0b6e6e",
  light:   "#5dc8c8",
  gold:    "#c8a84b",
  cream:   "#f5f2ea",
};

const cards = [
  {
    title: "Emergency Care Unit",
    subtitle: "Immediate medical response for critical cases",
    icon: heartpulse,
    bgImages: [cancer, photo6, photo14, photo38],
    tag: "24 / 7",
  },
  {
    title: "Hospital Location Services",
    subtitle: "Find our facilities and departments easily",
    icon: map,
    bgImages: [photo15, photo13, home, photo12],
    tag: "On-site",
  },
  {
    title: "Patient Appointment Booking",
    subtitle: "Schedule consultations with specialists",
    icon: notebook,
    bgImages: [photo5, photo12, photo08, photo41],
    tag: "Online",
  },
];

const ContactCard = ({ card, imgIndex }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        height: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "36px 32px",
      }}
    >
      {/* Background image with crossfade */}
      {card.bgImages.map((img, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            transition: "opacity 1s ease",
            opacity: i === imgIndex ? 1 : 0,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1s, 0.8s",
            filter: "brightness(0.45) saturate(0.7)",
          }}
        />
      ))}

      {/* Deep teal gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to top, ${COLORS.darkest}f2 0%, ${COLORS.deep}99 50%, transparent 100%)`,
      }} />

      {/* Hover teal tint */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `${COLORS.deep}55`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.5s ease",
      }} />

      {/* Top shimmer line on hover */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${COLORS.light}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.5s ease",
      }} />

      {/* Tag pill — top right */}
      <div style={{
        position: "absolute",
        top: "24px",
        right: "24px",
        padding: "5px 14px",
        border: `1px solid rgba(93,200,200,0.35)`,
        fontFamily: "'Lato', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: COLORS.light,
        zIndex: 2,
      }}>
        {card.tag}
      </div>

      {/* Icon */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "52px",
        height: "52px",
        borderRadius: 0,
        border: `1px solid rgba(200,168,75,0.35)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "24px",
        background: "rgba(6,58,58,0.5)",
        transition: "border-color 0.3s ease",
        borderColor: hovered ? COLORS.gold : "rgba(200,168,75,0.35)",
      }}>
        <img src={card.icon} alt={card.title} style={{ width: "26px", height: "26px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
      </div>

      {/* Gold rule */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: hovered ? "48px" : "32px",
        height: "1px",
        background: COLORS.gold,
        marginBottom: "16px",
        transition: "width 0.4s ease",
      }} />

      {/* Title */}
      <h3 style={{
        position: "relative",
        zIndex: 2,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "26px",
        fontWeight: 300,
        color: COLORS.cream,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        margin: "0 0 12px",
      }}>
        {card.title}
      </h3>

      {/* Subtitle */}
      <p style={{
        position: "relative",
        zIndex: 2,
        fontFamily: "'Lato', sans-serif",
        fontSize: "13px",
        fontWeight: 300,
        color: "rgba(245,242,234,0.6)",
        letterSpacing: "0.02em",
        lineHeight: 1.7,
        margin: "0 0 28px",
        maxWidth: "240px",
      }}>
        {card.subtitle}
      </p>

      {/* CTA row */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: hovered ? 1 : 0.5,
        transform: hovered ? "translateY(0)" : "translateY(6px)",
        transition: "all 0.4s ease",
      }}>
        <span style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: COLORS.light,
        }}>
          Learn more
        </span>
        <div style={{ width: "28px", height: "1px", background: COLORS.light }} />
      </div>
    </motion.div>
  );
};

const EmergencyBox = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((index, i) => (index + 1) % cards[i].bgImages.length)
      );
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section style={{
      background: `linear-gradient(180deg, ${COLORS.darkest} 0%, ${COLORS.deep} 100%)`,
      padding: "100px 40px 120px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative rings */}
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(93,200,200,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(93,200,200,0.07)", pointerEvents: "none" }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "72px" }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{ height: "1px", width: "36px", background: COLORS.gold }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "12px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: COLORS.gold, fontWeight: 500,
          }}>
            Get in Touch
          </span>
          <div style={{ height: "1px", width: "36px", background: COLORS.gold }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 300, color: COLORS.cream,
          lineHeight: 1.1, letterSpacing: "-0.02em",
          margin: "0 0 16px",
        }}>
          Contact <em style={{ fontStyle: "italic", color: COLORS.light }}>Us</em>
        </h2>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "15px", color: "rgba(245,242,234,0.5)",
          fontWeight: 300, letterSpacing: "0.04em",
        }}>
          Reach our medical team anytime
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2px",
        }}
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ContactCard card={card} imgIndex={currentImages[index]} />
          </motion.div>
        ))}
      </motion.div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400&display=swap');`}</style>
    </section>
  );
};

export default EmergencyBox;