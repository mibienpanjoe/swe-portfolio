export function SectionHeading({
  id,
  path,
  title,
}: {
  id: string;
  path: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 pt-16 pb-8">
      <p className="mb-1 font-mono text-xs text-muted-foreground">~/{path}</p>
      <div className="flex items-center gap-6">
        <h2 className="font-serif text-4xl italic sm:text-5xl">{title}</h2>
        <div className="h-px flex-1 bg-border" aria-hidden />
      </div>
    </div>
  );
}
