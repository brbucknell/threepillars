"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  hasDropdown: boolean;
};

type Service = {
  title: string;
  desc: string;
  extra: string;
  color: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
  { label: "Pages", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
];

const SERVICES: Service[] = [
  {
    title: "Data Science",
    desc: "Analytics & machine learning",
    extra: "Clear insights, dashboards, forecasting, and responsible machine learning.",
    color: "#f5c400",
  },
  {
    title: "Web Development",
    desc: "Modern websites & platforms",
    extra: "Responsive, professional websites built for clarity, trust, and usability.",
    color: "#7c6bd6",
  },
  {
    title: "Automation",
    desc: "Workflows & smart systems",
    extra: "Automated processes that reduce repetitive work and improve efficiency.",
    color: "#f35bdc",
  },
  {
    title: "IT Solutions",
    desc: "Support & infrastructure",
    extra: "Practical technical support, troubleshooting, systems, and digital setup.",
    color: "#607d67",
  },
  {
    title: "Research & Strategy",
    desc: "Data-driven decision making",
    extra: "Research, planning, and analysis to support better technology decisions.",
    color: "#ff8748",
  },
  {
    title: "Human-Centered Tech",
    desc: "Ethical & accessible design",
    extra: "Technology shaped around real people, accessibility, and meaningful outcomes.",
    color: "#59b7ef",
  },
];

const servicePositions: React.CSSProperties[] = [
  { top: "30%", left: "6%" },
  { top: "7%", left: "27%" },
  { top: "30%", left: "49%" },
  { top: "8%", right: "8%" },
  { bottom: "7%", left: "27%" },
  { bottom: "5%", right: "13%" },
];

function useViewportMode() {
  const [mode, setMode] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setMode("mobile");
      } else if (width <= 1024) {
        setMode("tablet");
      } else {
        setMode("desktop");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return mode;
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{ display: "inline", marginLeft: 4 }}
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const mode = useViewportMode();
  const isMobile = mode === "mobile";

  return (
    <nav style={styles.nav}>
      {!isMobile && (
        <div style={styles.navPill}>
          {NAV_ITEMS.map((item) => (
            <button key={item.label} style={styles.navBtn}>
              {item.label}
              {item.hasDropdown && <ChevronDown />}
            </button>
          ))}
        </div>
      )}

      {isMobile && (
        <button style={styles.hamburger} onClick={() => setOpen(!open)}>
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      )}

      {isMobile && open && (
        <div style={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <button key={item.label} style={styles.mobileNavBtn}>
              {item.label}
              {item.hasDropdown && <ChevronDown />}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const mode = useViewportMode();
  const isMobile = mode === "mobile";
  const isTablet = mode === "tablet";
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section style={styles.hero}>
      <div style={styles.heroBg} />
      <div
        style={{
          ...styles.heroContent,
          ...(isTablet ? styles.tabletHeroContent : {}),
          ...(isMobile ? styles.mobileHeroContent : {}),
        }}
      >
        <div style={styles.heroText}>
          <img src="/logo.png" alt="Three Pillars Logo" style={styles.heroLogo} />

        <div style={styles.email}>
  <button
    type="button"
    style={styles.emailButton}
  >
    bryan@threepillars.dev
  </button>
</div>



          <p style={styles.heroSub}>
            Leveraging Technology To Benefit Our Personal Lives,
            Our Communities And The World At Large.
          </p>
        </div>

        <div
          style={{
            ...styles.servicesStage,
            ...(isTablet ? styles.tabletServicesStage : {}),
            ...(isMobile ? styles.mobileServicesStage : {}),
          }}
        >
          {SERVICES.map((service, index) => {
            const isHovered = hoveredService === index;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  ...styles.serviceBox,
                  backgroundColor: service.color,
                  ...(!isMobile && !isTablet ? servicePositions[index] : {}),
                  ...(isTablet ? styles.tabletServiceBox : {}),
                  ...(isMobile ? styles.mobileServiceBox : {}),
                  ...(isHovered && !isMobile ? styles.serviceBoxHover : {}),
                }}
              >
                <div style={styles.innerCard}>
                  <p style={styles.serviceLabel}>SERVICE</p>

                  <h3
                    style={{
                      ...styles.serviceTitle,
                      ...(isMobile ? styles.mobileServiceTitle : {}),
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      ...styles.serviceDesc,
                      ...(isMobile ? styles.mobileServiceDesc : {}),
                    }}
                  >
                    {service.desc}
                  </p>

                  <p
                    style={{
                      ...styles.serviceExtra,
                      ...(isHovered || isTablet || isMobile
                        ? styles.serviceExtraVisible
                        : {}),
                      ...(isMobile ? styles.mobileServiceExtra : {}),
                    }}
                  >
                    {service.extra}
                  </p>
                </div>

                <span style={styles.gemOne}>◆</span>
                <span style={styles.gemTwo}>◆</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section style={styles.about}>
      <div style={styles.sectionInner}>
        <h2 style={styles.sectionHeading}>About</h2>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section style={styles.services}>
      <div style={styles.sectionInner}>
        <h2 style={styles.sectionHeading}>Services</h2>
      </div>
    </section>
  );
}

function FooterArea() {
  return <section style={styles.footerArea} />;
}

export default function Page() {
  return (
    <main style={styles.main}>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FooterArea />
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    backgroundColor: "#fff",
  },

  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 10,
  },

  navPill: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 6,
    padding: "7px 14px",
    gap: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },

  navBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 13.5,
    fontWeight: 500,
    color: "#111",
    padding: "6px 12px",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },

  hamburger: {
    position: "absolute",
    right: 20,
    top: 14,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "rgba(255,255,255,0.85)",
    border: "none",
    borderRadius: 6,
    padding: "10px 14px",
    cursor: "pointer",
  },

  bar: {
    display: "block",
    width: 22,
    height: 2,
    backgroundColor: "#111",
    borderRadius: 2,
  },

  mobileMenu: {
    position: "absolute",
    top: 66,
    left: 16,
    right: 16,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 8,
    padding: "8px 0",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
  },

  mobileNavBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 500,
    color: "#111",
    padding: "10px 20px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  email: {
  marginTop: "-10px",
  marginBottom: 28,
},

emailButton: {
  color: "#fff",
  backgroundColor: "#0716a0",
  border: "1px solid transparent",
  borderRadius: 9999,
  padding: "12px 22px",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  outline: "none",
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  transition: "all 220ms ease",
},

  hero: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
  },

  heroBg: {
    position: "absolute",
    inset: 0,
    backgroundColor: "oklch(97.9% 0.021 166.113)",
  },

  heroContent: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    padding: "60px 6vw 60px",
    display: "grid",
    gridTemplateColumns: "minmax(280px, 0.85fr) minmax(520px, 1.15fr)",
    alignItems: "center",
    gap: 30,
  },

  tabletHeroContent: {
    gridTemplateColumns: "1fr",
    alignItems: "start",
    paddingTop: 95,
  },

  mobileHeroContent: {
    gridTemplateColumns: "1fr",
    alignItems: "start",
    padding: "95px 5vw 50px",
  },

  heroText: {
    position: "relative",
    zIndex: 4,
    maxWidth: 760,
  },

  heroLogo: {
    width: 280,
    height: "auto",
    marginBottom: 0,
    transform: "translateY(-3.25rem)",
  },

  heroSub: {
    marginTop: 0,
    fontSize: "clamp(21px, 2vw, 28px)",
    color: "#111",
    lineHeight: 1.45,
    fontWeight: 700,
  },

  servicesStage: {
    position: "relative",
    width: "100%",
    height: 610,
    zIndex: 2,
  },

  tabletServicesStage: {
    height: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 22,
    marginTop: 35,
  },

  mobileServicesStage: {
    height: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    marginTop: 30,
  },

  serviceBox: {
    position: "absolute",
    width: 170,
    height: 230,
    borderRadius: 8,
    padding: 12,
    color: "#111",
    boxShadow: "0 18px 28px rgba(0,0,0,0.24)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    cursor: "pointer",
    transform: "translateY(0) rotate(0deg)",
    transition:
      "transform 260ms ease, width 260ms ease, height 260ms ease, box-shadow 260ms ease",
  },

  serviceBoxHover: {
    width: 330,
    height: 410,
    transform: "translateY(-16px) rotate(0 deg)",
    boxShadow: "0 28px 46px rgba(0,0,0,0.32)",
    zIndex: 20,
  },

  tabletServiceBox: {
    position: "relative",
    inset: "auto",
    width: "100%",
    height: 270,
  },

  mobileServiceBox: {
    position: "relative",
    inset: "auto",
    width: "100%",
    height: 210,
  },

  innerCard: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.78)",
    padding: 12,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
  },

  serviceLabel: {
    fontSize: 8,
    fontWeight: 900,
    letterSpacing: 1,
    margin: 0,
    opacity: 0.65,
  },

  serviceTitle: {
    margin: "20px 0 10px",
    fontSize: 20,
    lineHeight: 1.05,
    fontWeight: 900,
  },

  mobileServiceTitle: {
    fontSize: 16,
  },

  serviceDesc: {
    marginTop: "10",
    fontSize: 13,
    lineHeight: 1.25,
    fontWeight: 700,
    color: "rgba(0,0,0,0.66)",
  },

  mobileServiceDesc: {
    fontSize: 10.5,
  },

  serviceExtra: {
    margin: "10px 0 0",
    fontSize: 12.5,
    lineHeight: 1.35,
    fontWeight: 650,
    color: "rgba(0,0,0,0.72)",
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "opacity 220ms ease, max-height 260ms ease",
  },

  serviceExtraVisible: {
    opacity: 1,
    maxHeight: 100,
  },

  mobileServiceExtra: {
    fontSize: 10.5,
  },

  gemOne: {
    position: "absolute",
    left: 18,
    bottom: 18,
    fontSize: 17,
    color: "rgba(255,255,255,0.45)",
    zIndex: 1,
  },

  gemTwo: {
    position: "absolute",
    right: 18,
    top: 20,
    fontSize: 12,
    color: "rgba(255,255,255,0.35)",
    zIndex: 1,
  },

  about: {
    backgroundColor: "#22dd00",
    minHeight: 160,
    width: "100%",
  },

  services: {
    backgroundColor: "#4aa8b8",
    minHeight: 200,
    width: "100%",
  },

  sectionInner: {
    padding: "32px 5%",
  },

  sectionHeading: {
    fontSize: 26,
    fontWeight: 600,
    color: "#111",
    margin: 0,
  },

  footerArea: {
    backgroundColor: "#fff",
    minHeight: 500,
    width: "100%",
  },
};
