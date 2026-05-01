export interface Condition {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  content: string;
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export const conditions: Condition[] = [
  {
    slug: "tooth-pain-treatment-panvel",
    title: "Tooth Pain Treatment in Panvel",
    metaTitle: "Tooth Pain Treatment in Panvel | Relief for Severe Toothache",
    metaDescription: "Suffering from severe tooth pain, sensitivity, or throbbing ache? Get immediate relief at Dental Essential, Panvel. Painless root canal & expert diagnosis.",
    heroHeading: "Tooth Pain Treatment in Panvel",
    heroSubheading: "Don't suffer in silence — get fast, painless relief for your toothache",
    content: `Are you experiencing a sharp, throbbing pain in your upper or lower teeth? Tooth pain can range from mild sensitivity to severe, sleep-disrupting agony. The most common causes include deep cavities, tooth infection, cracked teeth, or gum disease.

At Dental Essential in Panvel, we diagnose the exact cause of your tooth pain using digital X-rays and provide same-day relief. Whether you need a simple filling, a painless root canal, or gum treatment — our experienced team ensures you leave pain-free.

## Common Causes of Tooth Pain

- **Deep cavities** that have reached the tooth nerve
- **Tooth infection or abscess** causing throbbing pain
- **Cracked or fractured tooth** from injury or hard food
- **Gum disease** leading to sensitivity and bleeding
- **Impacted wisdom tooth** pressing against adjacent teeth

## When to See a Dentist for Tooth Pain

Visit a dentist immediately if you experience pain that lasts more than 1–2 days, swelling in gums or face, fever alongside tooth pain, or pain that radiates to the jaw or ear. Early treatment prevents the problem from getting worse and saves your natural tooth.

## Our Approach to Pain Relief

1. **Immediate Diagnosis** — Digital X-rays and thorough examination
2. **Pain Management** — Effective anesthesia for complete comfort
3. **Treatment** — Root canal, filling, extraction, or gum treatment as needed
4. **Follow-up Care** — Ensuring complete recovery and prevention`,
    faqs: [
      { question: "What should I do for sudden severe tooth pain?", answer: "Rinse with warm salt water, take an over-the-counter painkiller, and book an emergency appointment at Dental Essential. Avoid placing aspirin directly on the gum." },
      { question: "Can a toothache go away on its own?", answer: "Mild sensitivity may subside, but persistent tooth pain usually indicates an underlying problem like infection or decay that requires professional treatment." },
      { question: "Is root canal the only option for tooth pain?", answer: "Not always. Mild cases may only need a filling. Root canal is recommended when the infection has reached the tooth pulp. Our dentist will recommend the least invasive option." },
      { question: "How much does tooth pain treatment cost in Panvel?", answer: "Simple fillings cost ₹500–₹2,000. Root canal treatment ranges from ₹3,000–₹8,000 per tooth. An accurate estimate is given after diagnosis." }
    ],
    relatedServiceSlugs: ["painless-root-canal", "crowns-and-bridges", "wisdom-tooth-extraction"]
  },
  {
    slug: "missing-teeth-replacement-panvel",
    title: "Missing Teeth Replacement in Panvel",
    metaTitle: "Missing Teeth Replacement in Panvel | Implants, Bridges & Dentures",
    metaDescription: "Lost one or more teeth? Explore permanent and affordable missing teeth replacement options at Dental Essential — dental implants, bridges, and dentures in Panvel.",
    heroHeading: "Missing Teeth Replacement in Panvel",
    heroSubheading: "Restore your smile, chewing ability, and confidence with permanent solutions",
    content: `Missing teeth affect more than just your appearance — they impact your ability to chew food properly, speak clearly, and maintain jawbone health. Whether you've lost a tooth due to decay, injury, or gum disease, Dental Essential in Panvel offers multiple replacement options.

## Options for Replacing Missing Teeth

### Dental Implants — The Gold Standard
Implants are titanium posts surgically placed in the jawbone, topped with a natural-looking crown. They're permanent, prevent bone loss, and function exactly like natural teeth.

### Dental Bridges — Fixed and Reliable
Bridges anchor to adjacent healthy teeth to fill the gap. They're a good option when implants aren't suitable and provide stable, natural-looking results.

### Dentures — Affordable and Comfortable
Custom-fitted dentures replace multiple or all missing teeth. Modern dentures are comfortable, natural-looking, and restore chewing ability effectively.

## Why You Shouldn't Ignore Missing Teeth

- Adjacent teeth shift into the gap, causing misalignment
- Jawbone deteriorates without tooth root stimulation
- Difficulty chewing leads to digestive issues
- Self-confidence decreases due to appearance concerns

## Which Option Is Right for You?

The best replacement depends on how many teeth are missing, jawbone health, budget, and personal preference. Book a consultation at Dental Essential for a personalized treatment plan.`,
    faqs: [
      { question: "What is the best option for replacing a single missing tooth?", answer: "A dental implant is the best long-term solution for a single missing tooth. It looks, feels, and functions like a natural tooth without affecting adjacent teeth." },
      { question: "Can I get teeth replacement if I have multiple missing teeth?", answer: "Yes. We offer implant-supported bridges, partial dentures, or full dentures depending on how many teeth are missing and your jawbone condition." },
      { question: "How long do dental implants last?", answer: "With proper care and oral hygiene, dental implants can last a lifetime. The crown on top may need replacement after 10–15 years." },
      { question: "Is missing teeth replacement expensive?", answer: "We offer options for every budget — from affordable dentures (₹5,000+) to premium implants (₹20,000+). EMI options are available." }
    ],
    relatedServiceSlugs: ["dental-implants", "dentures", "crowns-and-bridges", "full-mouth-rehabilitation"]
  },
  {
    slug: "jaw-pain-dentist-panvel",
    title: "Jaw Pain Dentist in Panvel",
    metaTitle: "Jaw Pain Treatment in Panvel | Right & Left Jaw Pain Relief",
    metaDescription: "Experiencing right or left jaw pain, difficulty opening mouth, or swelling? Expert jaw pain diagnosis and treatment at Dental Essential, Panvel. Book now.",
    heroHeading: "Jaw Pain Treatment in Panvel",
    heroSubheading: "Expert diagnosis and relief for jaw pain, TMJ issues, and oral discomfort",
    content: `Jaw pain can be alarming and debilitating. Whether it's on the right side, left side, or both — the cause often lies in dental issues that need professional attention. At Dental Essential in Panvel, we accurately diagnose and treat the root cause of your jaw pain.

## Common Causes of Jaw Pain

- **Impacted wisdom tooth** — the most common cause in young adults
- **TMJ (Temporomandibular Joint) disorder** — causing clicking, locking, or pain
- **Tooth abscess or infection** — spreading pain to the jaw area
- **Teeth grinding (Bruxism)** — often occurs during sleep
- **Gum disease** — advanced periodontitis affecting jawbone

## When Jaw Pain Needs Urgent Attention

See a dentist immediately if you have jaw pain with swelling, difficulty opening or closing your mouth, pain radiating to the ear or temple, or numbness in the jaw or face.

## Treatment Options

Depending on the cause, treatment may include wisdom tooth extraction, TMJ therapy, night guards for teeth grinding, root canal for infected teeth, or antibiotics for infection. Our comprehensive approach ensures we treat the cause, not just the symptoms.`,
    faqs: [
      { question: "Why does my right/left jaw hurt?", answer: "One-sided jaw pain is often caused by an impacted wisdom tooth, TMJ disorder, or a tooth abscess on that side. An X-ray at our clinic will reveal the exact cause." },
      { question: "Can a dentist treat jaw pain?", answer: "Yes. Most jaw pain has dental origins. Our dentists are trained to diagnose and treat TMJ disorders, impacted teeth, infections, and bruxism." },
      { question: "What is TMJ disorder?", answer: "TMJ disorder affects the jaw joint, causing pain, clicking sounds, difficulty opening the mouth, and headaches. It can be treated with medication, therapy, or night guards." },
      { question: "How much does jaw pain treatment cost?", answer: "Costs vary based on the cause. Wisdom tooth extraction starts from ₹1,500, TMJ therapy from ₹2,000, and night guards from ₹3,000. Consult us for an accurate estimate." }
    ],
    relatedServiceSlugs: ["wisdom-tooth-extraction", "painless-root-canal", "full-mouth-rehabilitation"]
  },
  {
    slug: "gap-in-front-teeth-treatment",
    title: "Gap in Front Teeth Treatment",
    metaTitle: "Gap in Front Teeth Treatment in Panvel | Close Teeth Spacing",
    metaDescription: "Embarrassed by gaps or spacing in your front teeth? Get braces, clear aligners, or veneers to close the gap at Dental Essential, Panvel. Natural-looking results.",
    heroHeading: "Gap in Front Teeth Treatment in Panvel",
    heroSubheading: "Close the gap and get the smile you've always wanted",
    content: `A gap between the front teeth (called a diastema) is one of the most common cosmetic dental concerns. While some people embrace it, many feel self-conscious about the spacing. At Dental Essential in Panvel, we offer multiple effective treatments to close gaps in front teeth.

## Treatment Options for Gaps in Teeth

### Dental Braces
Traditional braces gradually move teeth together to close gaps. Effective for both mild and severe spacing issues, with results visible within months.

### Clear Aligners
Invisible, removable trays that close gaps discreetly. Perfect for adults and teens who want straight teeth without the appearance of metal braces.

### Dental Veneers
Thin porcelain or composite shells bonded to the front of teeth. Instantly close gaps and improve tooth shape, color, and alignment in just 2 visits.

### Dental Bonding
A quick, affordable option where tooth-colored composite resin is applied to close small gaps. Can be completed in a single visit.

## Which Treatment Is Best for You?

The ideal treatment depends on the size of the gap, your budget, and how quickly you want results. Small gaps may only need bonding, while larger spacing benefits from braces or aligners. Visit us for a personalized recommendation.`,
    faqs: [
      { question: "Can gaps in front teeth be fixed without braces?", answer: "Yes. Dental veneers and composite bonding can close gaps without braces. However, if other alignment issues exist, braces or clear aligners may be recommended." },
      { question: "How long does it take to close a gap in front teeth?", answer: "Bonding takes one visit. Veneers take 2 visits over 1–2 weeks. Braces take 6–18 months. Clear aligners take 3–12 months depending on gap size." },
      { question: "Will the gap come back after treatment?", answer: "With proper retention (wearing retainers as advised), the gap will not return. Veneers and bonding are also permanent solutions." },
      { question: "How much does gap closure treatment cost in Panvel?", answer: "Composite bonding starts from ₹2,000 per tooth. Veneers from ₹5,000 per tooth. Braces from ₹20,000. Clear aligners from ₹80,000." }
    ],
    relatedServiceSlugs: ["braces", "clear-aligners", "smile-designing"]
  },
  {
    slug: "loose-dentures-solution",
    title: "Loose Dentures Solution",
    metaTitle: "Loose Dentures Solution in Panvel | Better-Fitting Dentures & Implants",
    metaDescription: "Struggling with loose, uncomfortable dentures? Get custom-fitted dentures or implant-supported dentures at Dental Essential, Panvel. Eat and speak with confidence.",
    heroHeading: "Loose Dentures Solution in Panvel",
    heroSubheading: "Stop struggling with ill-fitting dentures — get a permanent, comfortable solution",
    content: `If your dentures keep slipping, clicking, or causing sore spots, you're not alone. Loose dentures are one of the most frustrating dental problems, affecting eating, speaking, and confidence. At Dental Essential in Panvel, we offer modern solutions to fix or replace loose dentures.

## Why Do Dentures Become Loose?

- **Bone resorption** — Jawbone shrinks over time without tooth roots, causing dentures to lose their fit
- **Poor initial fit** — Imprecise impressions leading to ill-fitting dentures
- **Wear and tear** — Dentures deteriorate after 5–7 years of use
- **Weight changes** — Significant weight loss or gain affects facial structure

## Solutions for Loose Dentures

### Denture Relining
Adding material to the inner surface of existing dentures to improve fit. A quick, affordable solution.

### New Custom Dentures
Precisely crafted dentures using modern impression techniques for a superior fit and natural appearance.

### Implant-Supported Dentures
The ultimate solution — 2–4 dental implants anchor the denture firmly in place. No more slipping, clicking, or adhesives. Eat anything with confidence.

## Why Choose Implant-Supported Dentures?

They prevent further bone loss, eliminate the need for adhesives, restore full chewing power, and last much longer than traditional dentures. Many patients say it changed their life.`,
    faqs: [
      { question: "Can loose dentures be fixed?", answer: "Yes. Depending on the condition, we can reline, rebase, or replace your dentures. For a permanent fix, implant-supported dentures are the best option." },
      { question: "What are implant-supported dentures?", answer: "These are dentures anchored to 2–4 dental implants placed in your jawbone. They snap securely in place and won't slip or move." },
      { question: "How much do implant-supported dentures cost?", answer: "Implant-supported dentures start from ₹50,000 onwards, including the implants and denture. Traditional denture relining starts from ₹3,000." },
      { question: "Can I eat normally with implant-supported dentures?", answer: "Yes! Unlike traditional dentures, implant-supported dentures restore almost full chewing power. You can eat fruits, vegetables, and most foods comfortably." }
    ],
    relatedServiceSlugs: ["dentures", "dental-implants", "full-mouth-rehabilitation"]
  },
  {
    slug: "smile-makeover-for-wedding",
    title: "Smile Makeover for Wedding",
    metaTitle: "Smile Makeover for Wedding in Panvel | Look Your Best on Your Big Day",
    metaDescription: "Getting married soon? Get a stunning smile makeover at Dental Essential, Panvel — teeth whitening, veneers, aligners & more. Start 2–6 months before your wedding.",
    heroHeading: "Smile Makeover for Your Wedding in Panvel",
    heroSubheading: "Your wedding photos will last forever — make sure your smile is perfect",
    content: `Your wedding day is one of the most photographed days of your life. Every smile, every laugh will be captured forever. A smile makeover before your wedding ensures you look and feel your absolute best.

At Dental Essential in Panvel, we offer personalized wedding smile packages that combine multiple treatments for a stunning, natural-looking result.

## Wedding Smile Makeover Options

### Teeth Whitening
Professional whitening brightens your smile by 3–8 shades in just one session. Perfect for removing stains from tea, coffee, or smoking. Can be done 1–2 weeks before the wedding.

### Dental Veneers
Ultra-thin porcelain shells that transform your smile — close gaps, fix chips, correct shape, and create a uniform, bright appearance. Requires 2–3 weeks.

### Clear Aligners
For mild spacing or crowding, short-term aligner treatment (3–6 months) can straighten your smile before the big day. Start early!

### Composite Bonding
Quick fixes for chipped teeth, small gaps, or uneven edges. Can be completed in a single visit, even a week before the wedding.

## When to Start Your Wedding Smile Makeover

- **6 months before**: Start aligners for mild crowding
- **2–3 months before**: Get veneers or crowns
- **2–4 weeks before**: Teeth whitening
- **1 week before**: Final touch-ups and polishing

## Why Dental Essential for Your Wedding Smile?

Dr. Sameer Gharat specializes in cosmetic dentistry and has designed hundreds of smile makeovers. Our digital smile design technology lets you preview your new smile before treatment begins.`,
    faqs: [
      { question: "How early should I start my wedding smile makeover?", answer: "Ideally, start 3–6 months before your wedding. This allows time for aligners or veneers. Teeth whitening can be done 1–2 weeks before." },
      { question: "Can I get a smile makeover in a short time?", answer: "Yes. Quick options like professional whitening (1 visit), bonding (1 visit), or veneers (2 visits over 2 weeks) can transform your smile rapidly." },
      { question: "How much does a wedding smile makeover cost?", answer: "Costs vary based on treatments chosen. Professional whitening starts from ₹5,000, veneers from ₹5,000/tooth, and aligners from ₹80,000. We offer package pricing." },
      { question: "Is a smile makeover only for brides?", answer: "Not at all! Grooms, bridesmaids, and anyone in the wedding party can benefit from a smile makeover. Everyone deserves to look their best." }
    ],
    relatedServiceSlugs: ["smile-designing", "clear-aligners", "crowns-and-bridges"]
  }
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find(c => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return conditions.map(c => c.slug);
}
