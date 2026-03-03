import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const featureNames: Record<string, string> = {
  lighting: 'Adjustable lighting',
  acoustics: 'Acoustic treatment',
  privacy: 'Visual privacy options',
  biophilic: 'Biophilic elements',
  temperature: 'Temperature control',
  variety: 'Variety of work settings'
};

const featureImpacts: Record<string, number> = {
  lighting: 7,
  acoustics: 5,
  privacy: 4,
  biophilic: 6,
  temperature: 4,
  variety: 5
};

const featureDescriptions: Record<string, string> = {
  lighting: 'Adjustable lighting prevents fatigue and supports natural circadian rhythms. Studies show 7% productivity gain with proper lighting control.',
  acoustics: 'Acoustic treatment reduces cognitive load from noise. Open offices without sound absorption lose 5% productivity to constant interruptions.',
  privacy: 'Visual privacy enables deep focus work. Lack of privacy options costs 4% in productivity due to overstimulation and inability to concentrate.',
  biophilic: 'Plants, natural materials, and views reduce stress by 15% and increase productivity by 6% (Human Spaces Report, 2015).',
  temperature: 'Individual temperature control prevents discomfort-related distraction. Too cold/hot offices lose 4% productivity (Cornell study).',
  variety: 'Activity-based working (focus, collaborate, recharge zones) supports different work modes and increases productivity by 5%.'
};

const quickWins: Record<string, string[]> = {
  lighting: [
    'Add task lighting at individual desks (€50-150 per desk)',
    'Install dimmer switches for overhead lights (€100-300 per zone)',
    'Create a lighting map: bright for collaboration, dim for focus zones'
  ],
  acoustics: [
    'Add acoustic panels to walls/ceiling (€200-500 per panel)',
    'Introduce white noise machines or sound masking (€150-400)',
    'Designate a quiet zone with "no talking" signage (€0)'
  ],
  privacy: [
    'Add desk dividers or privacy screens (€100-300 per desk)',
    'Repurpose a meeting room as a focus room (€0-500)',
    'Install phone booths or focus pods (€2,000-5,000)'
  ],
  biophilic: [
    'Add plants (start with 10-20 low-maintenance plants, €300-600)',
    'Use natural materials in furniture or decor (€500-2,000)',
    'Maximize natural light by removing window obstructions (€0)'
  ],
  temperature: [
    'Provide personal fans/heaters at desks (€30-80 per person)',
    'Install zone-based HVAC controls (€1,000-3,000)',
    'Create temperature preference zones (hot/cold areas) (€0)'
  ],
  variety: [
    'Repurpose underused spaces (empty corners, hallways) (€0-1,000)',
    'Add standing desks or adjustable furniture (€300-800 per desk)',
    'Create a recharge space (couch, plants, soft lighting) (€500-2,000)'
  ]
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, teamSize, avgSalary, checkedFeatures, results } = body;

    // Build missing features list
    const allFeatureIds = Object.keys(featureNames);
    const missingFeatureIds = allFeatureIds.filter(id => !checkedFeatures.includes(id));
    
    // Sort missing features by impact (highest first)
    const sortedMissing = missingFeatureIds.sort((a, b) => 
      featureImpacts[b] - featureImpacts[a]
    );

    // Generate priority list with quick wins
    const priorityList = sortedMissing.map(id => {
      return `
        <div style="margin-bottom: 24px; padding: 20px; background: #f8f7f6; border-radius: 4px;">
          <h3 style="color: #5a4a42; margin: 0 0 8px 0; font-size: 18px;">
            ${featureNames[id]} (${featureImpacts[id]}% productivity impact)
          </h3>
          <p style="color: #5a4a42; opacity: 0.8; margin: 0 0 16px 0; line-height: 1.6;">
            ${featureDescriptions[id]}
          </p>
          <p style="color: #7a9b76; font-weight: 600; margin: 0 0 8px 0; font-size: 14px;">
            QUICK WINS:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: #5a4a42; opacity: 0.9;">
            ${quickWins[id].map(win => `<li style="margin-bottom: 4px;">${win}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');

    // Compose email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #fdfcfb;">
          <div style="max-width: 600px; margin: 40px auto; padding: 40px 20px;">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #7a9b76; margin: 0; font-size: 28px; font-weight: 400;">
                Your Office Wellness Gap Report
              </h1>
            </div>

            <!-- Results Summary -->
            <div style="background: #5a4a42; color: #fdfcfb; padding: 32px; border-radius: 4px; margin-bottom: 32px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #d4a5a5;">
                Estimated Annual Loss
              </p>
              <p style="margin: 0 0 16px 0; font-size: 42px; font-weight: 300;">
                €${results.annualLoss.toLocaleString('nl-NL')}
              </p>
              <p style="margin: 0; opacity: 0.9; line-height: 1.6;">
                Based on ${results.missingFeatures.length} missing features (${results.totalImpact}% productivity impact) across ${teamSize} people.
              </p>
            </div>

            <!-- Wellness Score -->
            <div style="background: #f8f7f6; padding: 24px; border-radius: 4px; margin-bottom: 32px;">
              <p style="margin: 0 0 12px 0; font-weight: 600; color: #5a4a42;">
                Current Wellness Score: ${results.wellnessScore}%
              </p>
              <div style="width: 100%; height: 8px; background: rgba(90, 74, 66, 0.1); border-radius: 4px; overflow: hidden;">
                <div style="width: ${results.wellnessScore}%; height: 100%; background: #7a9b76; border-radius: 4px;"></div>
              </div>
            </div>

            <!-- Priority Ranking -->
            <h2 style="color: #5a4a42; margin: 0 0 24px 0; font-size: 24px; font-weight: 400;">
              What to fix first
            </h2>
            <p style="color: #5a4a42; opacity: 0.8; margin: 0 0 24px 0; line-height: 1.6;">
              These features are costing you the most. We've ranked them by impact and included quick wins you can implement immediately.
            </p>

            ${priorityList}

            <!-- Next Steps -->
            <div style="background: #7a9b76; color: #fdfcfb; padding: 32px; border-radius: 4px; margin-top: 40px;">
              <h3 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 400;">
                Want help implementing these changes?
              </h3>
              <p style="margin: 0 0 24px 0; line-height: 1.6; opacity: 0.95;">
                Book a free 30-minute discovery call. We'll walk through your specific office, calculate your exact exposure, and create a prioritized action plan.
              </p>
              <a href="https://spatial-wellness.com/work-with-me" 
                 style="display: inline-block; background: #fdfcfb; color: #7a9b76; padding: 14px 28px; border-radius: 4px; text-decoration: none; font-weight: 600;">
                Book discovery call
              </a>
            </div>

            <!-- Footer -->
            <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(90, 74, 66, 0.1); text-align: center;">
              <p style="margin: 0 0 8px 0; color: #5a4a42; opacity: 0.6; font-size: 14px;">
                Elianne Alblas — Spatial Wellness
              </p>
              <p style="margin: 0; color: #5a4a42; opacity: 0.6; font-size: 14px;">
                <a href="https://spatial-wellness.com" style="color: #7a9b76; text-decoration: none;">spatial-wellness.com</a>
              </p>
            </div>

          </div>
        </body>
      </html>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Spatial Wellness <hello@houseofreturn.nl>',
      to: [email],
      subject: `Your office is losing €${results.annualLoss.toLocaleString('nl-NL')}/year`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Log to console for tracking (you can add Google Sheets later)
    console.log('Wellness report sent:', {
      email,
      teamSize,
      avgSalary,
      wellnessScore: results.wellnessScore,
      annualLoss: results.annualLoss,
      missingFeatures: sortedMissing
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in send-wellness-report:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
