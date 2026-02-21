import Image from 'next/image';

export default function Speaking() {
  return (
    <div className="pt-20">
      {/* Hero with photo */}
      <section className="relative bg-burgundy text-warm-white py-24 px-6 mb-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-6xl mb-6">
              Speaking
            </h1>
            <p className="text-xl text-warm-white/80 leading-relaxed">
              The space is already working on your people. The question is whether it's working for them, or against them.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image src="/images/14-portret-podium-boothstraat.jpg" alt="Elianne Alblas on stage" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg max-w-none text-burgundy/90 leading-relaxed space-y-12">
          <div>
            <h2 className="font-heading text-3xl text-burgundy mb-6">
              Why this talk matters
            </h2>
            <p>
              Most organisations pour resources into leadership programmes, culture initiatives, and wellbeing perks. And then put their people in an environment that quietly undoes all of it.
            </p>
            <p>
              Noise that fragments concentration. Lighting that exhausts the nervous system. Layouts that offer no real choice. Spaces designed for the average person, which means they work well for almost no one.
            </p>
            <p>
              Elianne Alblas translates research from environmental psychology, neuroscience, and neuro-inclusive design into language business leaders actually understand: productivity, retention, focus, and the real cost of a workspace that drains people before the day has even started.
            </p>
          </div>

          <div className="bg-dusty-rose/10 p-10 rounded-sm">
            <h2 className="font-heading text-3xl text-burgundy mb-6">
              "The Space Works. The Question Is: For Whom?"
            </h2>
            <p className="text-xl mb-6">
              A 45-minute keynote for HR directors, business owners, facility managers, and anyone responsible for the environments their people work in. With particular attention to neuro-inclusive design, because 1 in 5 people on your team processes space fundamentally differently.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-burgundy mb-6">
              What your audience will walk away with
            </h3>
            <ul className="space-y-4 text-burgundy/90">
              <li>A new lens on a problem they thought they already understood.</li>
              <li>The science behind what their space is doing to their people's nervous systems, explained without jargon.</li>
              <li>Why 1 in 5 people on their team experiences the workspace fundamentally differently, and what that costs.</li>
              <li>Three things they can change immediately, with minimal budget and immediate impact.</li>
              <li>A question that will change how they walk into their office on Monday morning.</li>
            </ul>
          </div>

          <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
            <p className="mb-4">
              <strong>Available in:</strong> Dutch and English
            </p>
            <p>
              <strong>Format:</strong> Keynote (45 min) · Panel · Workshop (half day)
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-burgundy mb-6">
              Who this is for
            </h3>
            <p>
              Corporate HR and People teams. Facility and workplace managers. Leadership teams planning an office return or redesign. Conferences on wellbeing, inclusion, and the future of work.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-burgundy mb-6">
              About Elianne
            </h3>
            <p>
              Elianne Alblas is an interior designer and spatial wellness specialist who draws from environmental psychology, neuroscience, and neuro-inclusive design. Not to lecture, but to translate. Her approach is direct, research-informed, and grounded in what actually works inside real organisations.
            </p>
            <p>
              She has run multiple businesses in hospitality and through that has seen firsthand what environment does to thousands of people: guests, employees, teams. That lived experience is what she draws from. She has built her practice around one conviction: the spaces we design are doing something to people whether we intend it or not. The question is what.
            </p>
          </div>

          <div className="bg-burgundy text-warm-white p-10 rounded-sm">
            <h3 className="font-heading text-2xl mb-6">
              Ready to bring this into your organisation?
            </h3>
            <p className="mb-6">
              Every speaking engagement includes a complimentary Spatial Wellness Quick Scan, a €197 value.
            </p>
            <a
              href="mailto:hello@spatial-wellness.com"
              className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
