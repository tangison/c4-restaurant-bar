// Navy page head: every non-home route opens with this band, so the floating
// navigation always sits on brand navy and no paper margin shows around it.
// One h1 per page lives here; section headings below stay h2.
// No overline/kicker: the heading carries its own weight (craft floor rule).
export function PageHead({
  title,
  line,
}: {
  title: string;
  line?: string;
}) {
  return (
    <div className="bg-c4-navy px-5 pb-12 pt-28 sm:px-6 sm:pb-14 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <h1 className="display text-4xl text-white sm:text-5xl">{title}</h1>
        {line && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-c4-grey sm:text-base">
            {line}
          </p>
        )}
      </div>
    </div>
  );
}
