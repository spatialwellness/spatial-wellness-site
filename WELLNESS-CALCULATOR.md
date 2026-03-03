# Office Wellness Gap Calculator

## Overview

Interactive lead generation tool on spatial-wellness.com homepage that calculates annual productivity loss from missing spatial wellness features.

## Features

**6 Spatial Wellness Features Tracked:**
1. Adjustable lighting (7% impact)
2. Acoustic treatment (5% impact)
3. Visual privacy options (4% impact)
4. Biophilic elements (6% impact)
5. Temperature control (4% impact)
6. Variety of work settings (5% impact)

## User Flow

1. **Checklist:** User checks which features their office has
2. **Wellness Score:** Live progress bar shows completion (0-100%)
3. **Team Input:** Team size + average salary (€45k default)
4. **Calculate:** Instant result showing annual cost
5. **Email Gate:** Get detailed report with priority ranking

## Calculation Logic

```
Missing features = unchecked boxes
Total impact % = sum of missing feature impacts
Cost per person = salary + €8k overhead
Annual loss = team size × cost per person × (total impact % / 100)
```

**Example:**
- Team: 20 people
- Avg salary: €45,000
- Missing: lighting (7%), acoustics (5%), privacy (4%) = 16% total
- Annual loss = 20 × €53,000 × 0.16 = **€169,600/year**

## Email Report Contents

**Priority-ranked missing features with:**
- Research-backed description
- Productivity impact percentage
- 3 quick wins per feature (with budget ranges)

**Quick Wins Examples:**
- Lighting: Task lights (€50-150), dimmers (€100-300)
- Acoustics: Acoustic panels (€200-500), white noise (€150-400)
- Privacy: Desk dividers (€100-300), focus pods (€2k-5k)

## Technical Stack

- **Frontend:** React component (WellnessCalculator.tsx)
- **Backend:** Next.js API route (/api/send-wellness-report)
- **Email:** Resend (hello@houseofreturn.nl)
- **Tracking:** Console logs (can add Google Sheets later)

## Research Citations

All impact percentages are backed by research:
- Lighting: Heschong Mahone study (7% productivity gain)
- Acoustics: Steelcase research (5% gain)
- Privacy: Open vs. mixed layout studies (4% gain)
- Biophilic: Human Spaces Report 2015 (6% + 15% wellbeing)
- Temperature: Cornell study (4% loss when uncomfortable)
- Variety: Activity-Based Working research (5% gain)

## Deployment

**Live URL:** https://spatial-wellness.com
**GitHub:** spatialwellness/spatial-wellness-site
**Auto-deploy:** Every push to main → Vercel deployment

**Environment Variables:**
- `RESEND_API_KEY`: For email sending

## Metrics to Track

- Calculator completions
- Email captures (conversion rate)
- Most commonly missing features
- Average team size
- Discovery call bookings (from email CTAs)

## Future Enhancements

- Google Sheets integration for lead tracking
- Email automation sequence (day 4, 7, 14)
- Comparison with industry benchmarks
- Export to PDF option
- LinkedIn share functionality
