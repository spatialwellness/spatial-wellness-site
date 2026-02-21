export default function Toolkit() {
  const categories = [
    {
      name: "Lighting",
      products: [
        { name: "Full-spectrum desk lamp", description: "Mimics natural daylight without harsh glare" },
        { name: "Dimmable LED bulbs", description: "Control intensity throughout the day" },
        { name: "Light temperature meter", description: "Measure and adjust your lighting setup" }
      ]
    },
    {
      name: "Sound",
      products: [
        { name: "Acoustic panels", description: "Reduce echo and improve sound quality in open spaces" },
        { name: "Sound-absorbing desk pad", description: "Dampens keyboard and desk noise" },
        { name: "Door sweep or seal", description: "Block sound from corridors or adjacent rooms" }
      ]
    },
    {
      name: "Sensory & Focus Tools",
      products: [
        { name: "Noise-cancelling headphones", description: "Essential for managing auditory input and maintaining focus - Sony WH-1000XM5 or Apple AirPods Pro are excellent options" },
        { name: "Weighted lap pad or shoulder wrap", description: "Provides calming deep pressure during long work sessions - helps focus and regulation without being as heavy as a blanket" },
        { name: "Fidget tools", description: "Desk-appropriate focus aids like fidget cubes or thinking putty - support concentration without creating distraction" },
        { name: "Desk divider or privacy screen", description: "Creates visual boundaries in open-plan spaces - reduces peripheral distractions and sensory overwhelm" },
        { name: "Blue-light filtering glasses", description: "Reduces screen-related eye strain and supports healthier sleep patterns - particularly helpful for long screen hours" },
        { name: "White noise machine", description: "Masks irregular background sounds and creates consistent ambient noise - especially valuable for neurodivergent focus" },
        { name: "Aromatherapy diffuser", description: "Gentle scent diffusion with calming essential oils like lavender or peppermint - creates a soothing environment without overwhelming" }
      ]
    },
    {
      name: "Privacy & Focus",
      products: [
        { name: "Privacy screen", description: "Create visual boundaries in open spaces" },
        { name: "Room divider panels", description: "Flexible spatial separation" },
        { name: "Focus timer", description: "Visual time management without distraction" }
      ]
    },
    {
      name: "Air & Nature",
      products: [
        { name: "Air quality monitor", description: "Track CO2 and VOC levels" },
        { name: "Low-maintenance plants", description: "Living elements that actually thrive indoors" },
        { name: "Essential oil diffuser", description: "Subtle scent without overwhelming" }
      ]
    },
    {
      name: "Ergonomics",
      products: [
        { name: "Adjustable monitor arm", description: "Perfect screen position without strain" },
        { name: "Ergonomic keyboard", description: "Reduce wrist tension during long sessions" },
        { name: "Standing desk converter", description: "Add movement options to existing setup" }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="font-heading text-4xl md:text-6xl text-burgundy mb-6">
          Toolkit
        </h1>
        <p className="text-xl text-burgundy/80 mb-16 max-w-3xl">
          Products that actually make a difference. Curated from years of shaping spaces and testing what works.
        </p>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="font-heading text-3xl text-burgundy mb-8">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-warm-white border border-dusty-rose/30 p-6 rounded-sm">
                    <div className="bg-dusty-rose/20 h-48 mb-4 rounded-sm"></div>
                    <h3 className="font-heading text-lg text-burgundy mb-2">
                      {product.name}
                    </h3>
                    <p className="text-burgundy/70 text-sm mb-4">
                      {product.description}
                    </p>
                    <button className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
                      View product →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-dusty-rose/10 rounded-sm">
          <p className="text-burgundy/70 text-sm">
            These are products I recommend based on spatial wellness research and what works in practice. As I test more products, this list will grow. Some links may be affiliate links.
          </p>
        </div>
      </section>
    </div>
  );
}
