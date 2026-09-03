"use client";

import { useEffect, useRef, useState } from "react";
import { content, photos } from "./content";

type FlowerKind = "rose" | "peony" | "tulip" | "daisy" | "baby" | "eucalyptus";
type BouquetFlower = {
  kind: FlowerKind;
  height: number;
  angle: number;
  size: number;
  delay: number;
  color: string;
};

const bouquetFlowers: BouquetFlower[] = [
  { kind: "baby", height: 365, angle: -36, size: 58, delay: .04, color: "#fff9e9" },
  { kind: "eucalyptus", height: 455, angle: -31, size: 76, delay: .1, color: "#789078" },
  { kind: "baby", height: 425, angle: -25, size: 62, delay: .25, color: "#fff9e9" },
  { kind: "daisy", height: 340, angle: -23, size: 64, delay: .34, color: "#fff7dc" },
  { kind: "tulip", height: 390, angle: -20, size: 72, delay: .42, color: "#d88182" },
  { kind: "rose", height: 470, angle: -15, size: 105, delay: .58, color: "#a82f4b" },
  { kind: "peony", height: 395, angle: -10, size: 112, delay: .74, color: "#e8a0b2" },
  { kind: "rose", height: 350, angle: -8, size: 88, delay: .82, color: "#8f2943" },
  { kind: "daisy", height: 485, angle: -6, size: 76, delay: .9, color: "#fff8e8" },
  { kind: "rose", height: 440, angle: -2, size: 116, delay: 1.08, color: "#c64f69" },
  { kind: "peony", height: 505, angle: 4, size: 124, delay: 1.24, color: "#f0bec7" },
  { kind: "baby", height: 535, angle: 7, size: 62, delay: 1.32, color: "#fff9e9" },
  { kind: "tulip", height: 410, angle: 9, size: 78, delay: 1.4, color: "#e3a05c" },
  { kind: "rose", height: 462, angle: 14, size: 104, delay: 1.56, color: "#8f2943" },
  { kind: "peony", height: 360, angle: 18, size: 96, delay: 1.64, color: "#dc8fa7" },
  { kind: "baby", height: 430, angle: 20, size: 66, delay: 1.7, color: "#fff9e9" },
  { kind: "daisy", height: 382, angle: 24, size: 70, delay: 1.84, color: "#fff7dc" },
  { kind: "eucalyptus", height: 466, angle: 30, size: 78, delay: 1.98, color: "#789078" },
  { kind: "baby", height: 350, angle: 36, size: 58, delay: 2.08, color: "#fff9e9" },
];

const frameFlowers = [
  { kind: "rose", x: 8, y: 19, size: 88, rotate: -20, delay: .15, color: "#a82f4b" },
  { kind: "baby", x: 22, y: 5, size: 58, rotate: -8, delay: .28, color: "#fff9e9" },
  { kind: "peony", x: 48, y: 1, size: 100, rotate: 2, delay: .42, color: "#e8a0b2" },
  { kind: "tulip", x: 78, y: 7, size: 72, rotate: 14, delay: .56, color: "#e3a05c" },
  { kind: "rose", x: 93, y: 24, size: 92, rotate: 25, delay: .7, color: "#8f2943" },
  { kind: "daisy", x: 96, y: 54, size: 72, rotate: 50, delay: .84, color: "#fff8e8" },
  { kind: "peony", x: 88, y: 82, size: 96, rotate: 130, delay: .98, color: "#f0bec7" },
  { kind: "baby", x: 67, y: 96, size: 58, rotate: 170, delay: 1.12, color: "#fff9e9" },
  { kind: "rose", x: 39, y: 98, size: 88, rotate: 180, delay: 1.26, color: "#c64f69" },
  { kind: "tulip", x: 15, y: 88, size: 70, rotate: 215, delay: 1.4, color: "#d88182" },
  { kind: "daisy", x: 3, y: 62, size: 72, rotate: 260, delay: 1.54, color: "#fff7dc" },
] as const;

function FlowerHead({ kind, color }: { kind: FlowerKind; color: string }) {
  const style = { "--petal": color } as React.CSSProperties;
  if (kind === "eucalyptus") {
    return <span className="eucalyptus-sprig" style={style}>{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</span>;
  }
  if (kind === "baby") {
    return <span className="baby-cluster" style={style}>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</span>;
  }
  const petals = kind === "daisy" ? 12 : kind === "peony" ? 10 : kind === "rose" ? 9 : 4;
  return (
    <span className={`crafted-bloom crafted-bloom--${kind}`} style={style}>
      {Array.from({ length: petals }, (_, i) => <i key={i} />)}
      <b /><em />
    </span>
  );
}

function BouquetStem({ flower }: { flower: BouquetFlower }) {
  const style = {
    "--height": `${flower.height}px`,
    "--angle": `${flower.angle}deg`,
    "--counter-angle": `${-flower.angle}deg`,
    "--size": `${flower.size}px`,
    "--delay": `${flower.delay}s`,
  } as React.CSSProperties;
  return (
    <span className={`bouquet-stem bouquet-stem--${flower.kind}`} style={style} aria-hidden="true">
      <span className="green-stem"><i className="leaf leaf-one" /><i className="leaf leaf-two" /></span>
      <span className="stem-head"><FlowerHead kind={flower.kind} color={flower.color} /></span>
    </span>
  );
}

function BouquetScene() {
  return (
    <div className="bouquet-scene is-growing" aria-label="זר פרחים דיגיטלי שצומח">
      <div className="bouquet-aura" aria-hidden="true" />
      <div className="bouquet-sparkles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <i key={index} style={{
            "--spark-angle": `${index * 20}deg`,
            "--spark-delay": `${2.1 + index * .08}s`,
          } as React.CSSProperties} />
        ))}
      </div>
      <div className="css-bouquet">{bouquetFlowers.map((flower, index) => <BouquetStem key={index} flower={flower} />)}</div>
      <div className="bouquet-ribbon" aria-hidden="true"><i /><b /><span /></div>
    </div>
  );
}

function Photo({ photoIndex, index, wide = false }: { photoIndex: number; index: number; wide?: boolean }) {
  return (
    <figure className={`memory-photo ${wide ? "memory-photo--wide" : ""}`}>
      <img src={photos[photoIndex]} alt={`מקום לתמונה שלכם ${index + 1}`} />
      <figcaption>התמונה שלכם כאן</figcaption>
    </figure>
  );
}

export default function Home() {
  const [stage, setStage] = useState<"opening" | "flowers" | "recap" | "final">("opening");
  const [messageStep, setMessageStep] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const openGift = () => {
    setStage("flowers");
    setMessageStep(0);
    timers.current.push(window.setTimeout(() => setMessageStep(1), 5500));
    timers.current.push(window.setTimeout(() => setMessageStep(2), 7000));
  };

  const goToRecap = () => {
    setStage("recap");
    window.setTimeout(() => document.getElementById("recap-top")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const goToFinal = () => {
    setStage("final");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={`experience stage-${stage}`} dir="rtl">
      {stage === "opening" && (
        <section className="opening-screen page-enter">
          <div className="opening-glow" />
          <div className="stars" aria-hidden="true">
            {Array.from({ length: 24 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}
          </div>
          <div className="opening-content">
            <p className="overline">{content.opening.smallTitle}</p>
            <span className="tiny-heart">♥</span>
            <h1>{content.opening.titleLine1}<br />{content.opening.titleLine2}</h1>
            <p className="opening-note">{content.opening.noteLine1}<br />{content.opening.noteLine2}</p>
            <button className="primary-button" onClick={openGift}><span>{content.opening.button}</span><i>♡</i></button>
          </div>
          <p className="tap-note">{content.opening.footer}</p>
        </section>
      )}

      {stage === "flowers" && (
        <section className="flower-screen page-enter">
          <div className="flower-haze" />
          <BouquetScene />
          <div className={`flower-message step-${messageStep}`}>
            <p className="flower-line flower-line--one">{content.flowers.firstMessage}</p>
            <p className="flower-line flower-line--two">{content.flowers.secondMessageLine1}<br />{content.flowers.secondMessageLine2} <span>♥</span></p>
            <button className="soft-button" onClick={goToRecap}>{content.flowers.button} <span>←</span></button>
          </div>
        </section>
      )}

      {stage === "recap" && (
        <section id="recap-top" className="recap-screen page-enter">
          <header className="recap-hero">
            <span className="recap-number">06</span>
            <div>
              <p className="overline dark-overline">{content.recap.dates}</p>
              <h2>{content.recap.titleLine1}<br /><em>{content.recap.titleLine2}</em></h2>
              <p>{content.recap.intro}</p>
            </div>
            <div className="scroll-cue"><i /> {content.recap.scrollHint}</div>
          </header>

          <div className="recap-content">
            {content.recap.sections.map((section, sectionIndex) => (
              <article className={`memory-section ${sectionIndex % 2 ? "memory-section--reverse" : ""}`} key={section.title}>
                <div className="memory-copy">
                  <span className="chapter-number">0{sectionIndex + 1}</span>
                  <p className="section-eyebrow">{section.eyebrow}</p>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
                <div className={`photo-collage collage-${section.photos.length}`}>
                  {section.photos.map((photoIndex, imageIndex) => (
                    <Photo key={photoIndex} photoIndex={photoIndex} index={imageIndex} wide={section.photos.length === 2 && imageIndex === 0} />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="continue-panel">
            <p>{content.recap.continueText}</p>
            <button className="primary-button primary-button--dark" onClick={goToFinal}><span>{content.recap.continueButton}</span><i>♡</i></button>
          </div>
        </section>
      )}

      {stage === "final" && (
        <section className="final-screen page-enter">
          <div className="final-copy">
            <p className="overline">{content.final.smallTitle}</p>
            <h2>{content.final.titleLine1}<br /><em>{content.final.titleLine2}</em></h2>
            <p>{content.final.firstLine}</p>
            <p>{content.final.secondLine} <span>♥</span></p>
          </div>

          <div className="floral-frame">
            <div className="final-photos">
              <figure><img src={photos[13]} alt="התמונה המרכזית שלכם" /><figcaption>התמונה האהובה עליכם</figcaption></figure>
              <figure><img src={photos[14]} alt="תמונה שלכם" /></figure>
              <figure><img src={photos[15]} alt="תמונה שלכם" /></figure>
            </div>
            <div className="css-wreath" aria-hidden="true">
              <span className="wreath-vine wreath-vine-one" />
              <span className="wreath-vine wreath-vine-two" />
              {frameFlowers.map((flower, index) => (
                <span className="frame-flower" key={index} style={{
                  "--x": `${flower.x}%`, "--y": `${flower.y}%`, "--size": `${flower.size}px`,
                  "--rotate": `${flower.rotate}deg`, "--delay": `${flower.delay}s`,
                } as React.CSSProperties}>
                  <FlowerHead kind={flower.kind} color={flower.color} />
                </span>
              ))}
            </div>
            <div className="wreath-light" aria-hidden="true" />
          </div>

          <div className="final-signoff">
            <div className="date-rule"><i /><span>{content.final.dates}</span><i /></div>
            <h3>{content.final.mainTitle}</h3>
            <p>{content.final.lastLine}</p>
          </div>
        </section>
      )}
    </main>
  );
}
