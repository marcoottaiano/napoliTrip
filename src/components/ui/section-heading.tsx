type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-5xl px-6 md:px-10">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-fuchsia-300">{eyebrow}</p>
      <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p>
    </div>
  );
}
