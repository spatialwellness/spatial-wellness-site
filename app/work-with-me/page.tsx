import Link from 'next/link';
import Image from 'next/image';

export default function WorkWithMe() {
  return (
    <div className="pt-20">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-16 items-end">
          <div className="md:col-span-2">
            <h1 className="font-heading text-4xl md:text-6xl text-burgundy mb-6">
              Work with me
            </h1>
            <p className="text-xl text-burgundy/80 max-w-2xl leading-relaxed">
              I help hybrid companies reduce sick leave and turnover by redesigning workspaces for focus, calm, and sensory comfort.
            </p>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/13-portret-bar-koffie.jpg" alt="Elianne Alblas" fill className="object-cover" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {/* Main Service */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-4">
              Workplace Wellness Consulting
            </h2>
            <p className="text-lg text-burgundy/80 mb-12 max-w-3xl leading-relaxed">
              Full audit + strategic redesign roadmap for hybrid teams
            </p>
            
            <div className="bg-warm-white border border-dusty-rose/30 p-10 rounded-sm mb-8">
              <h3 className="font-heading text-2xl text-burgundy mb-6">
                What's included
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-burgundy/90">
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>Discovery call (30 min)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>In-person or virtual spatial audit</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>Optional employee sensory survey</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>Detailed report with priority matrix</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>3/6/12-month implementation roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>3 follow-up calls (30/60/90 days)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sage text-xl leading-none mt-1">✓</span>
                  <span>Supplier & vendor recommendations</span>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-dusty-rose/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-2xl font-heading text-burgundy mb-2">
                      €5.000 - €12.000
                    </p>
                    <p className="text-sm text-burgundy/70">
                      Pricing depends on team size, location, and scope
                    </p>
                    <p className="text-sm text-burgundy/70 mt-1">
                      Best for: Companies with 50-200 employees, hybrid or in-office teams
                    </p>
                  </div>
                  <a
                    href="mailto:hello@spatial-wellness.com?subject=Discovery Call Request"
                    className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium text-center whitespace-nowrap"
                  >
                    Book discovery call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-12">
              Additional services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Speaking */}
              <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
                <h3 className="font-heading text-2xl text-burgundy mb-4">
                  Speaking & Workshops
                </h3>
                <p className="text-burgundy/80 mb-6 leading-relaxed">
                  Keynotes, lunch & learns, and team workshops on spatial wellness.
                </p>
                <p className="text-burgundy/70 mb-4 text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-sm text-burgundy/70 space-y-2 mb-6">
                  <li>• Why Your Office Is Burning Out Your Team</li>
                  <li>• Neuro-Inclusive Design Fundamentals</li>
                  <li>• The ROI of Spatial Wellness</li>
                  <li>• Custom topics on request</li>
                </ul>
                <p className="text-burgundy/70 mb-6 text-sm">
                  <strong>Format:</strong> 45-60 min keynote or 90-min interactive workshop
                </p>
                <p className="text-lg font-medium text-burgundy mb-6">
                  From €1.500
                </p>
                <Link
                  href="/speaking"
                  className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
                >
                  See speaking page →
                </Link>
              </div>

              {/* Design Execution */}
              <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
                <h3 className="font-heading text-2xl text-burgundy mb-4">
                  Design Execution
                </h3>
                <p className="text-burgundy/80 mb-6 leading-relaxed">
                  From report to reality — I handle the implementation.
                </p>
                <p className="text-burgundy/70 mb-4 text-sm">
                  <strong>What's included:</strong>
                </p>
                <ul className="text-sm text-burgundy/70 space-y-2 mb-6">
                  <li>• Vendor sourcing (furniture, lighting, acoustics)</li>
                  <li>• Layout planning & space reconfiguration</li>
                  <li>• Project management & contractor coordination</li>
                  <li>• Installation oversight</li>
                </ul>
                <p className="text-lg font-medium text-burgundy mb-4">
                  €3.000 - €15.000
                </p>
                <p className="text-sm text-burgundy/70 mb-6">
                  Project-based pricing. Available only to consulting clients.
                </p>
                <a
                  href="mailto:hello@spatial-wellness.com?subject=Design Execution Inquiry"
                  className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
                >
                  Get in touch →
                </a>
              </div>

              {/* Custom Projects */}
              <div className="bg-warm-white border border-dusty-rose/30 p-8 rounded-sm">
                <h3 className="font-heading text-2xl text-burgundy mb-4">
                  Custom Projects
                </h3>
                <p className="text-burgundy/80 mb-6 leading-relaxed">
                  Multi-location audits, ongoing advisory, or custom spatial wellness programs.
                </p>
                <p className="text-burgundy/70 mb-6 text-sm">
                  <strong>Examples:</strong>
                </p>
                <ul className="text-sm text-burgundy/70 space-y-2 mb-8">
                  <li>• Quarterly wellness reviews</li>
                  <li>• Multi-office rollouts</li>
                  <li>• Employee training programs</li>
                  <li>• Custom research & reporting</li>
                </ul>
                <a
                  href="mailto:hello@spatial-wellness.com?subject=Custom Project Inquiry"
                  className="inline-block text-sage hover:text-sage/80 transition-colors font-medium"
                >
                  Let's talk →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mt-24 bg-dusty-rose/10 -mx-6 px-6 py-16 md:mx-0 md:px-12 md:rounded-sm">
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-8">
            How we work together
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-burgundy/80">
            <div>
              <div className="w-12 h-12 bg-sage text-warm-white rounded-full flex items-center justify-center text-xl font-heading mb-4">
                1
              </div>
              <h3 className="font-heading text-lg text-burgundy mb-2">Book a call</h3>
              <p className="text-sm leading-relaxed">
                30 minutes to understand your challenges and see if we're a fit.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage text-warm-white rounded-full flex items-center justify-center text-xl font-heading mb-4">
                2
              </div>
              <h3 className="font-heading text-lg text-burgundy mb-2">Proposal</h3>
              <p className="text-sm leading-relaxed">
                I send a tailored scope and pricing based on your needs.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage text-warm-white rounded-full flex items-center justify-center text-xl font-heading mb-4">
                3
              </div>
              <h3 className="font-heading text-lg text-burgundy mb-2">Audit & Report</h3>
              <p className="text-sm leading-relaxed">
                I assess your space and deliver a strategic roadmap.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage text-warm-white rounded-full flex items-center justify-center text-xl font-heading mb-4">
                4
              </div>
              <h3 className="font-heading text-lg text-burgundy mb-2">Implement</h3>
              <p className="text-sm leading-relaxed">
                You execute (or I do) with ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mb-6">
            Ready to make your office work?
          </h2>
          <p className="text-lg text-burgundy/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute discovery call. No pitch, just diagnosis. We'll look at your space, talk through your challenges, and I'll tell you honestly if I can help.
          </p>
          <a
            href="mailto:hello@spatial-wellness.com?subject=Discovery Call Request"
            className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
          >
            Book your discovery call
          </a>
        </div>
      </section>
    </div>
  );
}
