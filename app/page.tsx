import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-8 leading-tight">
              Your space is already shaping how you think, focus, and feel.
            </h1>
            <p className="text-lg md:text-xl text-burgundy/80 mb-12 max-w-3xl leading-relaxed">
              I'm Elianne Alblas. I help people and organisations understand what their workspace is really doing to them, and what to change first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://audit.houseofreturn.nl"
                className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors text-center font-medium"
              >
                Take the free audit
              </a>
              <Link
                href="/speaking"
                className="inline-block bg-transparent border-2 border-sage text-sage px-8 py-4 rounded-sm hover:bg-sage hover:text-warm-white transition-colors text-center font-medium"
              >
                Book me to speak
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/08-portret-blazer-broches.jpg"
              alt="Elianne Alblas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Portfolio Strip */}
      <section className="bg-burgundy py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/02-kerk-werkruimte-orgel.jpg", alt: "Church converted to workspace" },
              { src: "/images/07-entree-teal-boog.jpg", alt: "Commercial entry with teal archway" },
              { src: "/images/10-eetkamer-behang-kroonluchter.jpg", alt: "Meeting space with statement wallpaper" },
              { src: "/images/09-detail-paars-gordijn-kast.jpg", alt: "Interior detail" },
            ].map((img, i) => (
              <div key={i} className="aspect-square relative rounded-sm overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-dusty-rose/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-12">
            What I do
          </h2>
          <div className="prose prose-lg max-w-none text-burgundy/90 leading-relaxed space-y-6">
            <p>
              I've had various businesses in the hospitality industry where I saw firsthand what interior and environment does to people. Thousands of guests, employees, and teams moving through spaces I helped shape. Along the way I became obsessed with a question most people in hospitality never ask: what is this room doing to the people in it?
            </p>
            <p>
              Not aesthetically. Neurologically.
            </p>
            <p>
              I started reading everything I could find on environmental psychology, neuroscience, and neuro-inclusive design. Not as a scientist, but because I needed to understand why some spaces make people sharper, calmer, more creative. And why others quietly drain them.
            </p>
            <p>
              That obsession became my work. Today I translate spatial research into practical changes, for home offices, commercial workspaces, and organisations that want to stop guessing and start measuring what their environment is doing to their people.
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-16 text-center">
          How I can help
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-warm-white border border-dusty-rose/30 p-10 rounded-sm">
            <h3 className="font-heading text-2xl text-burgundy mb-4">
              For individuals and remote workers
            </h3>
            <p className="text-burgundy/80 mb-8 leading-relaxed">
              Your home office might be the most important room in your house. Start with the free Spatial Wellness Lite Audit, or go deeper with the Home Office Full Audit (€97) for detailed scores, personalised recommendations, and a prioritised action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://audit.houseofreturn.nl"
                className="inline-block bg-sage text-warm-white px-6 py-3 rounded-sm hover:bg-sage/90 transition-colors font-medium text-center"
              >
                Start the free audit
              </a>
              <Link
                href="/audit"
                className="inline-block bg-transparent border-2 border-sage text-sage px-6 py-3 rounded-sm hover:bg-sage hover:text-warm-white transition-colors font-medium text-center"
              >
                Home Office Audit €97
              </Link>
            </div>
          </div>
          <div className="bg-warm-white border border-dusty-rose/30 p-10 rounded-sm">
            <h3 className="font-heading text-2xl text-burgundy mb-4">
              For organisations
            </h3>
            <p className="text-burgundy/80 mb-8 leading-relaxed">
              Your office is working on your people every single day. The question is whether it's working for them. I offer spatial wellness audits, consulting, and speaking for teams that are ready to look at their environment with fresh eyes.
            </p>
            <Link
              href="/work-with-me"
              className="inline-block bg-sage text-warm-white px-6 py-3 rounded-sm hover:bg-sage/90 transition-colors font-medium"
            >
              See what I offer
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-burgundy text-warm-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-heading leading-relaxed italic text-center mb-6">
            "Elianne completely changed how we think about our workspace. We always assumed people were just tired or distracted, but she showed us what the environment was actually doing to them. The lighting alone was exhausting our team before lunch. We made three changes and saw an immediate difference in focus and energy. I can't unsee it now."
          </blockquote>
          <p className="text-center text-warm-white/70">
            - Sarah de Vries, HR Director
          </p>
        </div>
      </section>

      {/* From the Blog Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-16">
          From the blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-dusty-rose/30 p-6 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Why your office feels exhausting before lunch
            </h3>
            <p className="text-burgundy/70 text-sm mb-4">
              It's not you. It's the fluorescent lights doing something to your nervous system that most people don't notice until it's too late.
            </p>
            <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
              Read more →
            </Link>
          </div>
          <div className="border border-dusty-rose/30 p-6 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-3">
              The open floor plan isn't broken. It's just designed for the wrong people.
            </h3>
            <p className="text-burgundy/70 text-sm mb-4">
              1 in 5 people on your team experiences sound fundamentally differently. Here's what that means for your workspace.
            </p>
            <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
              Read more →
            </Link>
          </div>
          <div className="border border-dusty-rose/30 p-6 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Three things you can change today (without asking permission)
            </h3>
            <p className="text-burgundy/70 text-sm mb-4">
              Small changes that make an immediate difference to how your workspace affects your focus, energy, and mood.
            </p>
            <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-dusty-rose/10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-6">
            Stay in touch
          </h2>
          <p className="text-lg text-burgundy/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            I write about how spaces shape us, the science, the details, the things nobody tells you about your workspace. Straight to your inbox, no fluff.
          </p>
          <a
            href="https://substack.com/@spatialwellness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </div>
  );
}
