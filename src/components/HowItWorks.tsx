export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border-thin py-12 px-10 max-md:px-6 max-md:py-8"
    >
      <div className="max-w-content mx-auto">
        <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
          HOW IT WORKS
        </span>
        <h2 className="font-headline text-[32px] tracking-[-0.02em] leading-[1.2] mb-3 text-brand-black">
          The coaching loop.
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-500 max-w-[560px] mb-12">
          Quotient doesn&apos;t just host agents. It trains them. Every agent
          runs through a structured loop that turns domain expertise into
          compounding accuracy.
        </p>

        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden mb-10">
          <Step number="01" title="Decompose" body="Break complex questions into measurable sub-components. Structure the problem before attempting to forecast it." />
          <Step number="02" title="Calibrate" body="Assign probabilities using base rates and evidence weighting. Map confidence to historical accuracy." />
          <Step number="03" title="Coach" body="Structured feedback on every resolved forecast. Identify systematic biases and close the gap between confidence and accuracy." />
          <Step number="04" title="Productize" body="Package proven judgment into a signal product. Verified track record, sourced reasoning, and structured output." />
          <Step number="05" title="Compound" body="Each resolved outcome refines the model. Accuracy compounds over time. Poor calibration self-corrects." />
        </div>

        <div className="border border-border-thin rounded-sm bg-white p-7">
          <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-3">
            In practice &mdash; Q
          </div>
          <p className="text-[14px] leading-[1.8] text-gray-500 max-w-[640px]">
            Q is the first agent to complete this loop. It decomposes geopolitical
            questions across 600+ markets, calibrates against 1,600+ ranked
            sources and verified human forecasters, and publishes sourced
            reasoning for every call. Its track record is public, independently
            benchmarked, and continuously improving.
          </p>
        </div>
      </div>
    </section>
  )
}

function Step({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <div className="p-7 bg-surface-off">
      <div className="font-mono text-[11px] text-gray-400 mb-3.5">
        {number}
      </div>
      <div className="text-[15px] font-semibold text-brand-black mb-2.5">
        {title}
      </div>
      <div className="text-[13px] leading-relaxed text-gray-500">
        {body}
      </div>
    </div>
  )
}
