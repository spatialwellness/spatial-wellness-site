import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-20">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-12 mb-24">
          <div className="md:col-span-3">
            <h1 className="font-heading text-4xl md:text-6xl text-burgundy mb-16">
              About
            </h1>

            <div className="prose prose-lg max-w-none text-burgundy/90 leading-relaxed space-y-6">
          <p>
            I'm Elianne Alblas. I design workspaces, but not in the way most people think about design.
          </p>
          <p>
            I started in commercial interiors, running my own businesses and designing spaces where I could watch what actually happens when people move through a room. Not what the mood board promised. What really happened. And I kept noticing the same thing: people respond to the same environment in completely different ways.
          </p>
          <p>
            That became the question I couldn't let go of. Why does an open floor plan energize one person and drain another by 10 AM? Why does fluorescent lighting give some people headaches while others don't notice? Why do some offices feel calm and others feel like chaos?
          </p>
          <p>
            The design conversations I was hearing missed the point entirely. Open plan or closed offices. Warm lighting or cool. Standing desks or sitting. All surface decisions. Nobody was asking the real question: what is this space doing to people's nervous systems?
          </p>
          <p>
            So I went looking for answers. Environmental psychology. Neuroscience. Neuro-inclusive design. Not to become a researcher, but because I needed to understand the gap between how we design offices and how human brains actually work in them.
          </p>
          <p>
            Today I work specifically with workplaces. That's where the impact matters most. People spend 40+ hours a week in offices that are either supporting their focus, wellbeing, and productivity or quietly undermining all three. Most companies have no idea which one they're doing.
          </p>
          <p>
            I translate research into changes people can actually make. Through consulting, strategic redesign, and speaking. I work from Utrecht, the Netherlands. I speak Dutch and English.
          </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-28 space-y-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/images/08-portret-blazer-broches.jpg" alt="Elianne Alblas" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/images/07-entree-teal-boog.jpg" alt="Commercial entry with teal archway" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/images/14-portret-podium-boothstraat.jpg" alt="Elianne Alblas speaking" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Three Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-dusty-rose/10 p-8 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-4">
              What I draw from
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              Environmental psychology. Neuroscience. Neuro-inclusive design. Years of watching what happens when you put real people in real spaces and pay obsessive attention.
            </p>
          </div>
          <div className="bg-dusty-rose/10 p-8 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-4">
              What I'm not
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              An academic. A wellness guru. Someone who thinks a plant and a candle will fix your workspace.
            </p>
          </div>
          <div className="bg-dusty-rose/10 p-8 rounded-sm">
            <h3 className="font-heading text-xl text-burgundy mb-4">
              What I am
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              A designer who got obsessed with the question: what is this space actually doing to you?
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-12">
            Spaces I've shaped
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/02-kerk-werkruimte-orgel.jpg", alt: "Church converted to workspace" },
              { src: "/images/07-entree-teal-boog.jpg", alt: "Commercial entry with teal archway" },
              { src: "/images/10-eetkamer-behang-kroonluchter.jpg", alt: "Meeting space with William Morris wallpaper" },
              { src: "/images/09-detail-paars-gordijn-kast.jpg", alt: "Interior detail - layered textures" },
              { src: "/images/13-portret-bar-koffie.jpg", alt: "Elianne Alblas" },
              { src: "/images/11-portret-aquarel.jpg", alt: "Elianne Alblas - creative process" },
            ].map((img, i) => (
              <div key={i} className="aspect-square relative rounded-sm overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
