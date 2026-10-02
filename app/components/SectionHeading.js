import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";

export default function SectionHeading({ index, label, title, intro }) {
  return (
    <div className="mb-16 md:mb-24">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {index} {label}
      </p>
      <SplitText
        as="h2"
        text={title}
        mode="inView"
        className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]"
      />
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-muted">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
