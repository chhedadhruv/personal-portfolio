import React from "react";
import "../styles/Illustrations.css";

/**
 * Hand-drawn vector scenes for each page, built from the same shapes (rounded tiles, a soft
 * backdrop disc, a coin with a dotted ring) and coloured from the site's CSS variables so they
 * match the theme. No text inside the artwork.
 */

const Scene = ({ label, className = "", children }) => (
  <svg
    className={`illustration-art ${className}`.trim()}
    viewBox="0 0 300 300"
    role="img"
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle className="il-disc" cx="150" cy="150" r="138" />
    {children}
  </svg>
);

/** The coin from the app-icon vocabulary: a disc, a dotted ring and a centre dot. */
const Coin = ({ cx, cy, r, tone = "il-cyan" }) => (
  <g>
    <circle className={tone} cx={cx} cy={cy} r={r} />
    <circle
      className="il-ring"
      cx={cx}
      cy={cy}
      r={r * 0.66}
      strokeWidth={r * 0.1}
      strokeDasharray={`${r * 0.16} ${r * 0.2}`}
    />
    <circle className="il-card-fill" cx={cx} cy={cy} r={r * 0.2} />
  </g>
);

export const ProjectsIllustration = ({ className }) => (
  <Scene label="A code window and a phone showing app tiles" className={className}>
    <rect className="il-card" x="36" y="68" width="176" height="136" rx="18" />
    <circle className="il-cyan" cx="56" cy="88" r="5" />
    <circle className="il-purple" cx="72" cy="88" r="5" />
    <circle className="il-green" cx="88" cy="88" r="5" />
    <line className="il-line" x1="58" y1="120" x2="120" y2="120" strokeWidth="8" />
    <line className="il-stroke-purple" x1="58" y1="140" x2="96" y2="140" strokeWidth="8" />
    <line className="il-line" x1="106" y1="140" x2="150" y2="140" strokeWidth="8" />
    <line className="il-line" x1="58" y1="160" x2="138" y2="160" strokeWidth="8" />
    <line className="il-line" x1="58" y1="180" x2="104" y2="180" strokeWidth="8" />
    <rect className="il-card il-card-accent" x="148" y="98" width="106" height="176" rx="22" />
    <line className="il-line" x1="186" y1="114" x2="216" y2="114" strokeWidth="5" />
    <rect className="il-purple" x="164" y="130" width="34" height="34" rx="10" />
    <rect className="il-cyan" x="206" y="130" width="34" height="34" rx="10" />
    <rect className="il-green" x="164" y="172" width="34" height="34" rx="10" />
    <rect className="il-amber il-soft" x="206" y="172" width="34" height="34" rx="10" />
    <line className="il-line" x1="178" y1="256" x2="224" y2="256" strokeWidth="5" />
    <Coin cx={240} cy={78} r={22} />
  </Scene>
);

export const ExperienceIllustration = ({ className }) => (
  <Scene label="A timeline of three roles with cards beside each step" className={className}>
    <line className="il-line" x1="82" y1="72" x2="82" y2="228" strokeWidth="5" />
    <rect className="il-card" x="112" y="56" width="140" height="48" rx="14" />
    <rect className="il-card" x="112" y="126" width="140" height="48" rx="14" />
    <rect className="il-card" x="112" y="196" width="140" height="48" rx="14" />
    <line className="il-stroke-purple" x1="128" y1="72" x2="196" y2="72" strokeWidth="7" />
    <line className="il-line" x1="128" y1="90" x2="228" y2="90" strokeWidth="6" />
    <line className="il-line" x1="128" y1="142" x2="190" y2="142" strokeWidth="7" />
    <line className="il-line" x1="128" y1="160" x2="220" y2="160" strokeWidth="6" />
    <line className="il-line" x1="128" y1="212" x2="180" y2="212" strokeWidth="7" />
    <line className="il-line" x1="128" y1="230" x2="210" y2="230" strokeWidth="6" />
    <circle className="il-green" cx="82" cy="80" r="15" />
    <path className="il-check" d="M75 80 L80 85 L90 74" />
    <circle className="il-purple" cx="82" cy="150" r="13" />
    <circle className="il-cyan" cx="82" cy="220" r="13" />
  </Scene>
);

export const EducationIllustration = ({ className }) => (
  <Scene label="A graduation cap resting on an open book" className={className}>
    <path className="il-card" d="M56 206 Q104 190 150 210 L150 252 Q104 232 56 246 Z" />
    <path className="il-card" d="M244 206 Q196 190 150 210 L150 252 Q196 232 244 246 Z" />
    <line className="il-line" x1="76" y1="218" x2="130" y2="226" strokeWidth="5" />
    <line className="il-line" x1="76" y1="232" x2="118" y2="238" strokeWidth="5" />
    <line className="il-line" x1="224" y1="218" x2="170" y2="226" strokeWidth="5" />
    <line className="il-line" x1="224" y1="232" x2="182" y2="238" strokeWidth="5" />
    <path className="il-purple il-soft" d="M104 120 L104 158 Q150 184 196 158 L196 120 L150 142 Z" />
    <path className="il-purple" d="M150 64 L242 102 L150 140 L58 102 Z" />
    <line className="il-stroke-amber" x1="232" y1="107" x2="232" y2="156" strokeWidth="5" />
    <circle className="il-amber" cx="232" cy="162" r="8" />
    <circle className="il-cyan" cx="150" cy="102" r="6" />
  </Scene>
);

export const BlogIllustration = ({ className }) => (
  <Scene label="An article page with a pencil and a speech bubble" className={className}>
    <rect className="il-card" x="52" y="52" width="152" height="196" rx="18" />
    <rect className="il-purple" x="72" y="74" width="84" height="14" rx="7" />
    <line className="il-line" x1="72" y1="108" x2="182" y2="108" strokeWidth="7" />
    <line className="il-line" x1="72" y1="126" x2="170" y2="126" strokeWidth="7" />
    <line className="il-line" x1="72" y1="144" x2="182" y2="144" strokeWidth="7" />
    <rect className="il-cyan il-soft" x="72" y="170" width="112" height="54" rx="12" />
    <circle className="il-amber" cx="96" cy="188" r="8" />
    <path className="il-card-fill" d="M72 224 L108 196 L132 214 L152 200 L184 224 Z" />
    <path className="il-green" d="M242 120 L264 142 L196 210 L170 214 L174 188 Z" />
    <path className="il-card-fill" d="M174 188 L170 214 L196 210 Z" />
    <path className="il-amber" d="M170 214 L174 202 L182 210 Z" />
    <rect className="il-cyan" x="204" y="58" width="58" height="40" rx="14" />
    <path className="il-cyan" d="M222 96 L218 112 L236 96 Z" />
    <circle className="il-card-fill" cx="220" cy="78" r="4" />
    <circle className="il-card-fill" cx="233" cy="78" r="4" />
    <circle className="il-card-fill" cx="246" cy="78" r="4" />
  </Scene>
);

export const ContactIllustration = ({ className }) => (
  <Scene label="A letter coming out of an envelope with a chat bubble" className={className}>
    <rect className="il-card" x="82" y="60" width="140" height="96" rx="12" />
    <line className="il-stroke-purple" x1="102" y1="82" x2="162" y2="82" strokeWidth="8" />
    <line className="il-line" x1="102" y1="102" x2="198" y2="102" strokeWidth="7" />
    <line className="il-line" x1="102" y1="120" x2="178" y2="120" strokeWidth="7" />
    <path
      className="il-card"
      d="M56 130 L152 190 L248 130 L252 220 Q252 240 232 240 L72 240 Q52 240 52 220 Z"
    />
    <path className="il-line" d="M62 232 L124 178" strokeWidth="4" />
    <path className="il-line" d="M242 232 L180 178" strokeWidth="4" />
    <path className="il-stroke-purple" d="M62 134 L152 194 L242 134" strokeWidth="7" />
    <Coin cx={246} cy={70} r={24} />
    <rect className="il-green" x="30" y="52" width="46" height="34" rx="12" />
    <path className="il-green" d="M46 84 L42 98 L58 84 Z" />
    <circle className="il-card-fill" cx="42" cy="69" r="3.5" />
    <circle className="il-card-fill" cx="53" cy="69" r="3.5" />
    <circle className="il-card-fill" cx="64" cy="69" r="3.5" />
  </Scene>
);

export const NotFoundIllustration = ({ className }) => (
  <Scene label="An empty browser window with a magnifying glass" className={className}>
    <rect className="il-card" x="46" y="62" width="208" height="150" rx="18" />
    <circle className="il-cyan" cx="68" cy="84" r="5" />
    <circle className="il-purple" cx="84" cy="84" r="5" />
    <circle className="il-green" cx="100" cy="84" r="5" />
    <line className="il-line" x1="66" y1="116" x2="150" y2="116" strokeWidth="8" strokeDasharray="14 12" />
    <line className="il-line" x1="66" y1="138" x2="120" y2="138" strokeWidth="8" strokeDasharray="14 12" />
    <circle className="il-lens" cx="180" cy="172" r="40" />
    <line className="il-stroke-purple" x1="209" y1="201" x2="240" y2="232" strokeWidth="14" />
    <circle className="il-stroke-purple" cx="180" cy="172" r="40" strokeWidth="9" />
    <path
      className="il-stroke-amber"
      d="M166 160 Q166 148 180 148 Q194 148 194 160 Q194 169 180 173 L180 181"
      strokeWidth="7"
    />
    <circle className="il-amber" cx="180" cy="195" r="4.5" />
  </Scene>
);
