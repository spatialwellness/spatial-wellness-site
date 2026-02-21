import Link from 'next/link';
import Image from 'next/image';

export default function WorkWithMe() {
  return (
    <div className="pt-20">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-16 items-end">
          <div className="md:col-span-2">
            <h1 className="font-heading text-4xl md:text-6xl text-burgundy">
              Work with me
            </h1>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/13-portret-bar-koffie.jpg" alt="Elianne Alblas" fill className="object-cover" />
          </div>
        </div>

        {/* For Organisations */}
        <div className="mb-24">
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-12">
            For organisations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Spatial Wellness Audit
              </h3>
              <p className="text-burgundy/80 mb-4 leading-relaxed">
                A full assessment of your workspace. Acoustics, lighting, layout, flexibility, sensory environment. You get a detailed report with scores, priorities, and an action plan. No site visit needed.
              </p>
              <p className="text-lg font-medium text-burgundy mb-8">
                €197
              </p>
              <Link
                href="/audit"
                className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
              >
                Learn more →
              </Link>
            </div>
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Consult
              </h3>
              <p className="text-burgundy/80 mb-4 leading-relaxed">
                One-on-one guidance to interpret your audit results, prioritise your next steps, and create a realistic implementation roadmap. Available online (video call) or on-site.
              </p>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                <a href="mailto:hello@spatial-wellness.com" className="text-sage hover:text-sage/80 transition-colors font-medium">
                  Contact for pricing
                </a>
              </p>
            </div>
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Design
              </h3>
              <p className="text-burgundy/80 mb-4 leading-relaxed">
                Custom spatial planning, mood boards, colour palettes, and product recommendations tailored to your team's needs, existing architecture, and budget.
              </p>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                <a href="mailto:hello@spatial-wellness.com" className="text-sage hover:text-sage/80 transition-colors font-medium">
                  Get in touch
                </a>
              </p>
            </div>
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Speaking
              </h3>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                A 45-minute keynote that changes how your team thinks about their workspace.
              </p>
              <Link
                href="/speaking"
                className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
              >
                See my speaking page →
              </Link>
            </div>
          </div>
        </div>

        {/* For Individuals */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-12">
            For individuals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Free Lite Audit
              </h3>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                16 questions, 10 minutes. Find out how your home office is affecting your focus, energy, and wellbeing.
              </p>
              <a
                href="https://audit.houseofreturn.nl"
                className="inline-block bg-sage text-warm-white px-6 py-3 rounded-sm hover:bg-sage/90 transition-colors font-medium"
              >
                Take the free audit
              </a>
            </div>
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Home Office Full Audit
              </h3>
              <p className="text-lg font-medium text-burgundy mb-4">
                €97
              </p>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                The complete picture for your home office. Detailed scores, personalised recommendations, colour advice, layout suggestions, and a prioritised action plan.
              </p>
              <a
                href="https://full-audit.vercel.app"
                className="inline-block bg-sage text-warm-white px-6 py-3 rounded-sm hover:bg-sage/90 transition-colors font-medium"
              >
                Start your full audit
              </a>
            </div>
            <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                Toolkit
              </h3>
              <p className="text-burgundy/80 mb-8 leading-relaxed">
                My curated selection of products that actually make a difference.
              </p>
              <Link
                href="/toolkit"
                className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
              >
                Browse the toolkit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
