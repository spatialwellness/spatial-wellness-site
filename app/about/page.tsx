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
            I'm Elianne Alblas. I'm an interior designer, but probably not the kind you're picturing.
          </p>
          <p>
            I've had multiple businesses in the hospitality industry. One coffee shop. Lots of spaces where I saw what environment does to thousands of people: guests, employees, teams. I learned by doing, by looking, by paying obsessive attention to how a room makes people feel the moment they walk in.
          </p>
          <p>
            At some point something shifted. I started noticing that the conversations about workspace design were always about aesthetics and efficiency. Open plan or private offices. Standing desks or sitting desks. Warm lighting or cool lighting.
          </p>
          <p>
            But nobody was talking about what really happens. How fluorescent light exhausts your nervous system before lunch. How an open floor plan can feel like a warzone if your brain processes sound differently. How the colour of your walls is doing something to your mood whether you chose it deliberately or not.
          </p>
          <p>
            I went deep. Environmental psychology. Neuroscience. Neuro-inclusive design. Not to become a researcher, but because I needed to understand why some spaces work and others don't. And because the answers were there, buried in academic papers that nobody in design was reading.
          </p>
          <p>
            Now I translate that research into language that makes sense and changes that people can actually make. Through audits, consulting, and speaking.
          </p>
          <p>
            I work from Utrecht, the Netherlands. I speak Dutch and English. I believe every space has the potential to work better for the people in it, and that starts with understanding what it's doing right now.
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
              Environmental psychology. Neuroscience. Neuro-inclusive design. Multiple businesses in hospitality where I watched what environment does to thousands of people.
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
