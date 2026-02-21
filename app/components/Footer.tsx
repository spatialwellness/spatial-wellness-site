import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-burgundy text-warm-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl mb-4">Spatial Wellness</h3>
            <p className="text-warm-white/80 mb-4">by Elianne Alblas</p>
            <p className="text-warm-white/60 italic max-w-md">
              Every space has the potential to work better for the people in it.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl mb-4">Get in touch</h4>
            <p className="mb-2">
              <a 
                href="mailto:home@houseofreturn.nl" 
                className="text-warm-white/80 hover:text-warm-white transition-colors"
              >
                home@houseofreturn.nl
              </a>
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/eliannealblas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-warm-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/houseofreturnnl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-warm-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://substack.com/@spatialwellness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/80 hover:text-warm-white transition-colors"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-warm-white/20 pt-8 text-warm-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Spatial Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
