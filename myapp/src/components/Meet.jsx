import React from "react";
import { motion } from "framer-motion";

import photo30 from "../assets/new/photo30.jpg";
import photo31 from "../assets/new/photo31.jpg";
import photo25 from "../assets/new/photo25.jpg";
import photo27 from "../assets/new/photo27.jpg";
import photo28 from "../assets/new/photo28.jpg";
import photo29 from "../assets/new/photo29.jpg";
import photo90 from "../assets/new/photo90.jpg";
import photo71 from "../assets/new/photo71.JPG";
import photo70 from "../assets/new/photo70.JPG";
import tade from "../assets/new/tade.jpg";

const doctors = [
  { img: photo70, name: "Dr. Segni Bekele", role: "Founding Member & CEO", index: 0 },
  { img: photo90, name: "Dr. Tatek Belay", role: "Founding Member & Medical Director", index: 1 },
  { img: photo29, name: "Dr. Yeshi Teshome", role: "Founding Member & Board Secretary", index: 2 },
  { img: photo71, name: "Dr. Tsion Mekasha", role: "V. Medical Director", index: 3 },
  { img: tade, name: "Dr. Tadesse Gonfa", role: "Founding Member & Board Chair", index: 4 },
];

const Meet = () => {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0d1f2d 60%, #091520 100%)",
        padding: "100px 24px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(192, 155, 83, 0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "1px solid rgba(192, 155, 83, 0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          border: "1px solid rgba(192, 155, 83, 0.07)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "760px", margin: "0 auto 80px", textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div style={{ height: "1px", width: "40px", background: "#c09b53" }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c09b53",
              fontWeight: 500,
            }}
          >
            Meet Our Leadership
          </span>
          <div style={{ height: "1px", width: "40px", background: "#c09b53" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 300,
            color: "#f5f0e8",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 20px",
          }}
        >
          Our Founders &{" "}
          <em style={{ fontStyle: "italic", color: "#c09b53" }}>Visionaries</em>
        </h2>

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "17px",
            color: "rgba(245, 240, 232, 0.55)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: 1.7,
          }}
        >
          Dedicated professionals committed to excellence in healthcare
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2px",
        }}
      >
        {doctors.map((doctor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            style={{ position: "relative" }}
          >
            <DoctorCard doctor={doctor} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "20px 40px",
            border: "1px solid rgba(192, 155, 83, 0.2)",
            position: "relative",
          }}
        >
          {/* Corner accents */}
          {[
            { top: -1, left: -1 },
            { top: -1, right: -1 },
            { bottom: -1, left: -1 },
            { bottom: -1, right: -1 },
          ].map((pos, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderColor: "#c09b53",
                borderStyle: "solid",
                borderWidth: 0,
                borderTopWidth: pos.top !== undefined ? "2px" : 0,
                borderBottomWidth: pos.bottom !== undefined ? "2px" : 0,
                borderLeftWidth: pos.left !== undefined ? "2px" : 0,
                borderRightWidth: pos.right !== undefined ? "2px" : 0,
                ...pos,
              }}
            />
          ))}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "rgba(245, 240, 232, 0.6)",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            "Leadership rooted in compassion and excellence"
          </p>
        </div>
      </motion.div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400&display=swap');
      `}</style>
    </section>
  );
};

const DoctorCard = ({ doctor }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        aspectRatio: "3/4",
        background: "#0d1a28",
      }}
    >
      {/* Photo */}
      <img
        src={doctor.img}
        alt={doctor.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered ? "brightness(0.45)" : "brightness(0.65) saturate(0.85)",
        }}
      />

      {/* Always-visible bottom gradient + name */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(8,14,22,0.95) 0%, rgba(8,14,22,0.5) 40%, transparent 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "28px 22px",
          transition: "opacity 0.4s ease",
          opacity: hovered ? 0 : 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "17px",
            fontWeight: 400,
            color: "#f5f0e8",
            margin: "0 0 5px",
            lineHeight: 1.2,
            letterSpacing: "0.01em",
          }}
        >
          {doctor.name}
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            color: "#c09b53",
            margin: 0,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {doctor.role}
        </p>
      </div>

      {/* Hover overlay — centered detail */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        {/* Gold line accent */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "#c09b53",
            marginBottom: "20px",
          }}
        />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "20px",
            fontWeight: 400,
            color: "#f5f0e8",
            margin: "0 0 10px",
            lineHeight: 1.2,
          }}
        >
          {doctor.name}
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            color: "#c09b53",
            margin: "0 0 20px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {doctor.role}
        </p>
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(192, 155, 83, 0.4)",
          }}
        />
      </div>

      {/* Gold top border on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c09b53, transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
};

export default Meet;