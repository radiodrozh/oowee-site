type SourceNoteProps = {
  children: React.ReactNode;
};

export function SourceNote({ children }: SourceNoteProps) {
  return (
    <p className="mt-10 font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--muted)] md:mt-14 md:text-[16px] md:leading-6">
      {children}
    </p>
  );
}
