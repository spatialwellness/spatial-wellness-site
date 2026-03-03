'use client';

import { useState } from 'react';

interface Feature {
  id: string;
  label: string;
  impact: number; // productivity % impact
  description: string;
}

const features: Feature[] = [
  {
    id: 'lighting',
    label: 'Adjustable lighting (not just fluorescent)',
    impact: 7,
    description: 'Reduces fatigue, headaches, and supports circadian rhythm'
  },
  {
    id: 'acoustics',
    label: 'Acoustic treatment (sound absorption, quiet zones)',
    impact: 5,
    description: 'Minimizes interruptions and cognitive load from noise'
  },
  {
    id: 'privacy',
    label: 'Visual privacy options (screens, pods, quiet rooms)',
    impact: 4,
    description: 'Enables deep focus work and reduces overstimulation'
  },
  {
    id: 'biophilic',
    label: 'Biophilic elements (plants, natural materials, views)',
    impact: 6,
    description: 'Reduces stress and increases wellbeing'
  },
  {
    id: 'temperature',
    label: 'Temperature control (individual or zone-based)',
    impact: 4,
    description: 'Prevents discomfort-related distraction'
  },
  {
    id: 'variety',
    label: 'Variety of work settings (focus, collaborate, recharge)',
    impact: 5,
    description: 'Supports different work modes and neurodiversity'
  }
];

export default function WellnessCalculator() {
  const [checkedFeatures, setCheckedFeatures] = useState<Set<string>>(new Set());
  const [teamSize, setTeamSize] = useState<string>('20');
  const [avgSalary, setAvgSalary] = useState<string>('45000');
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeatureToggle = (id: string) => {
    const newSet = new Set(checkedFeatures);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCheckedFeatures(newSet);
  };

  const calculateLoss = () => {
    const missingFeatures = features.filter(f => !checkedFeatures.has(f.id));
    const totalImpact = missingFeatures.reduce((sum, f) => sum + f.impact, 0);
    const team = parseInt(teamSize) || 0;
    const salary = parseInt(avgSalary) || 0;
    
    // Total cost base (salary + overhead ~€8k per person)
    const costPerPerson = salary + 8000;
    const annualLoss = team * costPerPerson * (totalImpact / 100);
    
    return {
      annualLoss: Math.round(annualLoss),
      totalImpact,
      missingFeatures,
      wellnessScore: Math.round((checkedFeatures.size / features.length) * 100)
    };
  };

  const handleCalculate = () => {
    if (!teamSize || parseInt(teamSize) <= 0) {
      alert('Please enter a valid team size');
      return;
    }
    setShowResults(true);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const results = calculateLoss();
    
    try {
      const response = await fetch('/api/send-wellness-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          teamSize: parseInt(teamSize),
          avgSalary: parseInt(avgSalary),
          checkedFeatures: Array.from(checkedFeatures),
          results
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', response.status, errorData);
        alert(`Something went wrong: ${errorData.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Network error: ${error instanceof Error ? error.message : 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const results = showResults ? calculateLoss() : null;

  return (
    <div className="bg-warm-white border border-dusty-rose/30 p-8 md:p-12 rounded-sm">
      <h3 className="font-heading text-2xl md:text-3xl text-burgundy mb-6">
        Office Wellness Gap Calculator
      </h3>
      <p className="text-burgundy/80 mb-8 leading-relaxed">
        Check which spatial wellness features your office has. We'll calculate what the missing ones are costing you in lost productivity.
      </p>

      {/* Feature Checklist */}
      <div className="space-y-4 mb-8">
        <p className="font-medium text-burgundy mb-4">Does your office have these features?</p>
        {features.map((feature) => (
          <label
            key={feature.id}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={checkedFeatures.has(feature.id)}
              onChange={() => handleFeatureToggle(feature.id)}
              className="mt-1 w-5 h-5 text-sage border-dusty-rose/30 rounded focus:ring-sage"
            />
            <div className="flex-1">
              <div className="text-burgundy group-hover:text-sage transition-colors">
                {feature.label}
              </div>
              <div className="text-sm text-burgundy/60 mt-1">
                {feature.description}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Wellness Score Progress */}
      {checkedFeatures.size > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-burgundy">Wellness Score</span>
            <span className="text-sm font-medium text-sage">
              {Math.round((checkedFeatures.size / features.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-dusty-rose/20 rounded-full h-2">
            <div
              className="bg-sage h-2 rounded-full transition-all duration-300"
              style={{ width: `${(checkedFeatures.size / features.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Team Input */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-burgundy mb-2">
            Team size
          </label>
          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full px-4 py-3 border border-dusty-rose/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage"
            placeholder="20"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-burgundy mb-2">
            Average salary (€)
          </label>
          <input
            type="number"
            value={avgSalary}
            onChange={(e) => setAvgSalary(e.target.value)}
            className="w-full px-4 py-3 border border-dusty-rose/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage"
            placeholder="45000"
            min="0"
          />
        </div>
      </div>

      {/* Calculate Button */}
      {!showResults && (
        <button
          onClick={handleCalculate}
          className="w-full bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
        >
          Calculate your cost
        </button>
      )}

      {/* Results */}
      {showResults && results && !submitted && (
        <div className="mt-8 pt-8 border-t border-dusty-rose/30">
          <div className="bg-burgundy text-warm-white p-8 rounded-sm mb-6">
            <p className="text-sm uppercase tracking-wide text-dusty-rose mb-2">
              Estimated Annual Loss
            </p>
            <p className="font-heading text-4xl md:text-5xl mb-4">
              €{results.annualLoss.toLocaleString('nl-NL')}
            </p>
            <p className="text-warm-white/80 leading-relaxed">
              Based on {results.missingFeatures.length} missing features ({results.totalImpact}% productivity impact) 
              across {teamSize} people.
            </p>
          </div>

          {results.missingFeatures.length > 0 && (
            <div className="mb-6">
              <p className="font-medium text-burgundy mb-3">Missing features costing you the most:</p>
              <ul className="space-y-2">
                {results.missingFeatures
                  .sort((a, b) => b.impact - a.impact)
                  .map((feature) => (
                    <li key={feature.id} className="flex items-start gap-2 text-burgundy/80">
                      <span className="text-dusty-rose mt-1">→</span>
                      <span>
                        <strong>{feature.label}</strong> ({feature.impact}% impact)
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <div className="bg-dusty-rose/10 p-6 rounded-sm mb-6">
            <p className="font-medium text-burgundy mb-3">
              Want to know exactly what to fix first?
            </p>
            <p className="text-burgundy/80 mb-4">
              Get your detailed report with priority ranking, quick wins under €5k, and implementation guide.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmitEmail}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-dusty-rose/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-sage"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-sage text-warm-white px-8 py-3 rounded-sm hover:bg-sage/90 transition-colors font-medium disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get detailed report'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Message */}
      {submitted && (
        <div className="mt-8 pt-8 border-t border-dusty-rose/30">
          <div className="bg-sage/10 border border-sage/30 p-6 rounded-sm text-center">
            <p className="text-lg font-medium text-sage mb-2">
              Report sent!
            </p>
            <p className="text-burgundy/80">
              Check your inbox for your detailed wellness gap analysis and next steps.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
