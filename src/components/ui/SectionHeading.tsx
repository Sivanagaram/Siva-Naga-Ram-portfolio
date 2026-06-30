import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Consistent eyebrow + gradient title block for each section. */
export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-mist">{subtitle}</p>}
    </Reveal>
  );
}
