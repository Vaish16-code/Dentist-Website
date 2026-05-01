export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  bannerImage: string;
  description: string;
  benefits: string[];
  treatmentSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  patientProblems: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "painless-root-canal",
    title: "Painless Root Canal Treatment",
    shortDescription: "Save your natural tooth with our completely painless root canal therapy using advanced laser technology.",
    image: "/images/services/root-canal.jpg",
    bannerImage: "/images/services/root-canal.jpg",
    description: "Root canal treatment is a dental procedure designed to save a tooth that has become severely infected or decayed. At Dental Essential, we use state-of-the-art technology and gentle techniques to make this procedure virtually painless, preserving your natural tooth and restoring your smile.",
    benefits: [
      "Eliminates tooth pain and infection",
      "Saves your natural tooth from extraction",
      "Prevents spread of infection to other teeth",
      "Restores normal biting force and sensation",
      "Virtually painless with modern anesthesia"
    ],
    treatmentSteps: [
      { step: 1, title: "Diagnosis & X-Ray", description: "We examine your tooth and take digital X-rays to assess the extent of infection." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia is administered to ensure complete comfort during the procedure." },
      { step: 3, title: "Cleaning the Canal", description: "The infected pulp is carefully removed and the canal is thoroughly cleaned." },
      { step: 4, title: "Filling & Sealing", description: "The canal is filled with biocompatible material and sealed to prevent reinfection." },
      { step: 5, title: "Crown Placement", description: "A dental crown is placed to protect and restore the tooth's function." }
    ],
    metaTitle: "Painless Root Canal Treatment in Panvel | Tooth Pain Relief",
    metaDescription: "Suffering from severe tooth pain or sensitivity? Get painless root canal treatment at Dental Essential, Old Panvel. Save your natural tooth with advanced laser technology.",
    patientProblems: ["Severe toothache", "Pain in upper teeth", "Pain in lower teeth", "Sensitivity to hot or cold food", "Deep cavity", "Swollen gums near a tooth", "Tooth pain while chewing"],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "No. At Dental Essential, we use modern anesthesia and advanced rotary instruments to make the procedure virtually painless. Most patients feel relief immediately after treatment." },
      { question: "How do I know if I need a root canal?", answer: "Common signs include severe toothache, prolonged sensitivity to hot or cold, darkening of the tooth, swelling in nearby gums, or pain when chewing. Visit us for a diagnosis." },
      { question: "How long does a root canal take?", answer: "A single-sitting root canal typically takes 45–90 minutes. Complex cases may require two visits." },
      { question: "What is the cost of root canal treatment in Panvel?", answer: "Root canal treatment at Dental Essential costs between ₹3,000 and ₹8,000 per tooth depending on complexity. Crown costs are additional." }
    ],
    relatedSlugs: ["crowns-and-bridges", "wisdom-tooth-extraction", "full-mouth-rehabilitation"]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent tooth replacement solution that looks, feels, and functions like natural teeth.",
    image: "/images/services/dental-implants.jpg",
    bannerImage: "/images/services/dental-implants.jpg",
    description: "Dental implants are the gold standard for replacing missing teeth. They provide a permanent, stable foundation for replacement teeth that look, feel, and function just like your natural teeth. Our experienced implantologist uses precision techniques for optimal results.",
    benefits: [
      "Permanent solution that can last a lifetime",
      "Looks and feels like natural teeth",
      "Prevents bone loss in the jaw",
      "No impact on adjacent healthy teeth",
      "Restores full chewing ability"
    ],
    treatmentSteps: [
      { step: 1, title: "Consultation & Planning", description: "Comprehensive examination and 3D imaging to plan your implant placement." },
      { step: 2, title: "Implant Placement", description: "The titanium implant is surgically placed into the jawbone." },
      { step: 3, title: "Healing Period", description: "3-6 months for the implant to fuse with your jawbone (osseointegration)." },
      { step: 4, title: "Abutment Placement", description: "A connector piece is attached to the implant to hold the crown." },
      { step: 5, title: "Crown Fitting", description: "A custom-made crown is attached, completing your new tooth." }
    ],
    metaTitle: "Dental Implants in Panvel | Missing Teeth Replacement",
    metaDescription: "Missing teeth or struggling to chew? Get permanent dental implants at Dental Essential, Old Panvel. Natural-looking, long-lasting tooth replacement by expert implantologists.",
    patientProblems: ["Missing teeth", "Cannot chew food properly", "Loose dentures", "Broken tooth", "Gap in teeth after extraction", "Denture replacement"],
    faqs: [
      { question: "Are dental implants permanent?", answer: "Yes. With proper care and oral hygiene, dental implants can last a lifetime. The titanium post fuses with your jawbone for a permanent, stable foundation." },
      { question: "Can dental implants replace dentures?", answer: "Absolutely. Many patients switch from loose dentures to implants for better comfort, stability, and chewing ability. We offer implant-supported dentures too." },
      { question: "Is the dental implant procedure painful?", answer: "The procedure is done under local anesthesia and is virtually painless. Post-operative discomfort is mild and manageable with prescribed medication." },
      { question: "What is the cost of dental implants in Panvel?", answer: "Dental implant costs at Dental Essential start from ₹20,000 per implant depending on the type and complexity. A detailed cost estimate is provided after consultation." }
    ],
    relatedSlugs: ["crowns-and-bridges", "dentures", "full-mouth-rehabilitation"]
  },
  {
    slug: "braces",
    title: "Dental Braces",
    shortDescription: "Traditional metal and ceramic braces for effective teeth straightening and bite correction.",
    image: "/images/services/braces-aligners.jpg",
    bannerImage: "/images/services/braces-aligners.jpg",
    description: "Dental braces are the most effective solution for correcting crooked teeth, overcrowding, and bite issues. We offer both traditional metal braces and tooth-colored ceramic braces for a more aesthetic option during treatment.",
    benefits: [
      "Highly effective for complex cases",
      "Corrects severe misalignment",
      "Options for metal or ceramic brackets",
      "Improves bite and jaw alignment",
      "Predictable and reliable results"
    ],
    treatmentSteps: [
      { step: 1, title: "Orthodontic Assessment", description: "Complete examination, X-rays, and digital scans of your teeth." },
      { step: 2, title: "Treatment Planning", description: "Custom treatment plan with timeline and expected results." },
      { step: 3, title: "Bracket Placement", description: "Braces are carefully bonded to your teeth." },
      { step: 4, title: "Regular Adjustments", description: "Monthly visits for wire adjustments and progress monitoring." },
      { step: 5, title: "Retention", description: "Retainers provided to maintain your new smile." }
    ],
    metaTitle: "Dental Braces in Panvel | Crooked Teeth & Spacing Correction",
    metaDescription: "Have crooked teeth or spacing issues? Get metal or ceramic braces at Dental Essential, Old Panvel. Effective teeth straightening for all ages by expert orthodontists.",
    patientProblems: ["Crooked teeth", "Spacing in front teeth", "Overlapping teeth", "Bite problems", "Teeth not aligned properly", "Gap between teeth"],
    faqs: [
      { question: "At what age can braces be started?", answer: "Braces can be started from age 12 onwards. Adults can also get braces — there is no upper age limit for orthodontic treatment." },
      { question: "How long does braces treatment take?", answer: "Treatment typically takes 12–24 months depending on the severity of misalignment. Regular monthly adjustments are needed." },
      { question: "Do braces hurt?", answer: "You may feel mild discomfort for 2–3 days after each adjustment, but it's easily manageable. Modern braces are much more comfortable than older versions." },
      { question: "What is the cost of braces in Panvel?", answer: "Braces treatment at Dental Essential starts from ₹20,000 for metal braces and ₹30,000 for ceramic braces, depending on case complexity." }
    ],
    relatedSlugs: ["clear-aligners", "smile-designing", "crowns-and-bridges"]
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    shortDescription: "Invisible aligners for discreet teeth straightening without metal brackets or wires.",
    image: "/images/services/Clear Aligners.jpg",
    bannerImage: "/images/services/Clear Aligners.jpg",
    description: "Clear aligners are virtually invisible, removable trays that gradually straighten your teeth. They're perfect for adults and teens who want a discreet orthodontic solution without the look of traditional braces.",
    benefits: [
      "Nearly invisible appearance",
      "Removable for eating and cleaning",
      "Comfortable with no metal brackets",
      "Fewer dental visits required",
      "See your results with 3D simulation"
    ],
    treatmentSteps: [
      { step: 1, title: "Digital Scanning", description: "3D scans of your teeth to create your custom aligners." },
      { step: 2, title: "Treatment Simulation", description: "See your projected results before starting treatment." },
      { step: 3, title: "Aligner Delivery", description: "Receive your custom-made clear aligners." },
      { step: 4, title: "Progress Check-ups", description: "Periodic visits to monitor your progress." },
      { step: 5, title: "Retention", description: "Retainers provided to maintain your new smile." }
    ],
    metaTitle: "Clear Aligners in Panvel | Straight Teeth Without Braces",
    metaDescription: "Want straight teeth without metal braces? Get invisible clear aligners at Dental Essential, Old Panvel. Removable, comfortable, and discreet teeth straightening.",
    patientProblems: ["Straight teeth without braces", "Spacing in front teeth", "Crooked teeth", "Mild bite issues", "Teeth alignment for wedding", "Discreet orthodontic treatment"],
    faqs: [
      { question: "Can clear aligners fix crooked teeth?", answer: "Yes. Clear aligners effectively treat mild to moderate crowding, spacing, and bite issues. A consultation will determine if you are a good candidate." },
      { question: "How long do I need to wear clear aligners daily?", answer: "You need to wear them 20–22 hours per day, removing them only for eating, brushing, and flossing." },
      { question: "Are clear aligners better than braces?", answer: "Both are effective. Clear aligners are preferred for aesthetics and convenience, while braces handle complex cases better. Our orthodontist will recommend the best option for you." },
      { question: "What is the cost of clear aligners in Panvel?", answer: "Clear aligner treatment at Dental Essential ranges from ₹80,000 to ₹3,00,000 depending on brand and case complexity." }
    ],
    relatedSlugs: ["braces", "smile-designing", "crowns-and-bridges"]
  },
  {
    slug: "smile-designing",
    title: "Smile Designing and Correction",
    shortDescription: "Transform your smile with our comprehensive cosmetic dentistry solutions.",
    image: "/images/services/smile-correction.jpeg",
    bannerImage: "/images/services/smile-correction.jpeg",
    description: "Smile designing is a comprehensive approach to enhancing your smile using various cosmetic dental procedures. We analyze your facial features, tooth shape, and personal preferences to create a customized treatment plan that gives you the smile of your dreams.",
    benefits: [
      "Customized to your facial features",
      "Combines multiple treatments for best results",
      "Dramatic improvement in appearance",
      "Boosts self-confidence",
      "Long-lasting results"
    ],
    treatmentSteps: [
      { step: 1, title: "Smile Analysis", description: "Digital smile design using photos and measurements." },
      { step: 2, title: "Treatment Planning", description: "Customized plan combining procedures like veneers, whitening, and contouring." },
      { step: 3, title: "Mock-Up Preview", description: "See a preview of your new smile before treatment begins." },
      { step: 4, title: "Treatment Execution", description: "Step-by-step implementation of the smile design plan." },
      { step: 5, title: "Final Reveal", description: "Your transformed smile is revealed with care instructions." }
    ],
    metaTitle: "Smile Designing in Panvel | Smile Makeover & Cosmetic Dentistry",
    metaDescription: "Boost your confidence with a complete smile makeover at Dental Essential, Old Panvel. Veneers, whitening, and contouring for the perfect wedding smile or everyday confidence.",
    patientProblems: ["Smile makeover for wedding", "Uneven teeth", "Discoloured teeth", "Want a confident smile", "Chipped or broken front teeth", "Smile improvement"],
    faqs: [
      { question: "What is smile designing?", answer: "Smile designing is a combination of cosmetic treatments like veneers, teeth whitening, bonding, and contouring customized to enhance your facial aesthetics and smile." },
      { question: "How long does a smile makeover take?", answer: "Depending on the treatments involved, a smile makeover can take 1–4 weeks. Simple cases with veneers can be done in 2 visits." },
      { question: "Is smile designing permanent?", answer: "Veneers and crowns used in smile designing are long-lasting (10–15 years). Teeth whitening may need periodic touch-ups." },
      { question: "What is the cost of smile designing in Panvel?", answer: "Cost varies based on the combination of treatments. A personalized quote is provided after your smile analysis consultation." }
    ],
    relatedSlugs: ["clear-aligners", "braces", "crowns-and-bridges"]
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    shortDescription: "Restore damaged or missing teeth with durable, natural-looking crowns and bridges.",
    image: "/images/services/crown-bridges.jpg",
    bannerImage: "/images/services/crown-bridges.jpg",
    description: "Dental crowns and bridges are effective solutions for restoring damaged teeth or replacing missing ones. Our crowns are crafted from high-quality materials to match your natural teeth perfectly, while bridges span the gap left by missing teeth.",
    benefits: [
      "Restores tooth strength and function",
      "Natural-looking appearance",
      "Protects weakened teeth",
      "Bridges fill gaps from missing teeth",
      "Durable and long-lasting"
    ],
    treatmentSteps: [
      { step: 1, title: "Examination", description: "Assessment of the damaged tooth or gap to determine the best solution." },
      { step: 2, title: "Tooth Preparation", description: "The tooth is shaped to accommodate the crown or bridge." },
      { step: 3, title: "Impressions", description: "Digital or physical impressions are taken for precise fitting." },
      { step: 4, title: "Temporary Restoration", description: "A temporary crown/bridge is placed while the permanent one is made." },
      { step: 5, title: "Final Placement", description: "The custom crown or bridge is cemented in place." }
    ],
    metaTitle: "Crowns & Bridges in Panvel | Broken or Damaged Tooth Repair",
    metaDescription: "Broken, cracked, or missing tooth? Restore your smile with durable crowns and bridges at Dental Essential, Old Panvel. Natural-looking, long-lasting dental restorations.",
    patientProblems: ["Broken tooth", "Cracked tooth", "Damaged tooth after injury", "Missing tooth support", "Weak tooth after root canal", "Gap between teeth"],
    faqs: [
      { question: "What is the difference between a crown and a bridge?", answer: "A crown covers and protects a single damaged tooth. A bridge replaces one or more missing teeth by anchoring to adjacent teeth." },
      { question: "How long do dental crowns last?", answer: "With good oral hygiene, dental crowns typically last 10–15 years or longer." },
      { question: "Is getting a crown painful?", answer: "No. The procedure is done under local anesthesia and is completely painless. You may feel mild sensitivity for a day or two afterward." },
      { question: "What is the cost of crowns and bridges in Panvel?", answer: "Dental crown costs range from ₹3,000 to ₹15,000 per tooth depending on the material chosen (metal, ceramic, or zirconia)." }
    ],
    relatedSlugs: ["painless-root-canal", "dental-implants", "smile-designing"]
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, child-friendly dental care to keep your little one's smile healthy and bright.",
    image: "/images/services/pedetric.jpeg",
    bannerImage: "/images/services/pedetric.jpeg",
    description: "Our pediatric dental services are designed to make dental visits fun and stress-free for children. We create a welcoming environment and use gentle techniques to ensure your child develops positive associations with dental care from an early age.",
    benefits: [
      "Child-friendly environment",
      "Gentle and painless treatments",
      "Early detection of dental issues",
      "Education on proper oral hygiene",
      "Builds positive dental habits for life"
    ],
    treatmentSteps: [
      { step: 1, title: "Friendly Introduction", description: "We make your child comfortable with our team and environment." },
      { step: 2, title: "Gentle Examination", description: "Thorough but gentle check-up of teeth and gums." },
      { step: 3, title: "Cleaning", description: "Professional cleaning with child-friendly techniques." },
      { step: 4, title: "Treatment (if needed)", description: "Any necessary treatment performed with extra care." },
      { step: 5, title: "Education & Rewards", description: "Oral hygiene tips and a fun reward for being brave!" }
    ],
    metaTitle: "Pediatric Dentist in Panvel | Child Dental Care & Cavity Prevention",
    metaDescription: "Looking for a kids' dentist in Panvel? Gentle, child-friendly dental care at Dental Essential. Cavity prevention, fluoride treatment, and painless procedures for children.",
    patientProblems: ["Child tooth pain", "Cavity in child's teeth", "Baby teeth problems", "First dental visit for child", "Child afraid of dentist", "Thumb sucking habit"],
    faqs: [
      { question: "When should my child first visit a dentist?", answer: "We recommend a first dental visit by the child's first birthday or within 6 months of the first tooth appearing." },
      { question: "Are dental treatments safe for children?", answer: "Absolutely. We use child-safe materials and gentle techniques. Our pediatric dentist is specially trained to handle children with care and patience." },
      { question: "How can I prevent cavities in my child's teeth?", answer: "Start brushing as soon as the first tooth appears, limit sugary snacks, apply fluoride as recommended, and schedule dental checkups every 6 months." },
      { question: "What if my child is scared of the dentist?", answer: "Our clinic is designed to be child-friendly. We use gentle approaches and positive reinforcement to make dental visits fun and stress-free." }
    ],
    relatedSlugs: ["painless-root-canal", "crowns-and-bridges", "smile-designing"]
  },
  {
    slug: "dentures",
    title: "Dentures",
    shortDescription: "Custom-fitted removable dentures to restore your smile and chewing ability.",
    image: "/images/services/dentures.jpg",
    bannerImage: "/images/services/dentures.jpg",
    description: "Our custom dentures are designed to fit comfortably and look natural. Whether you need complete dentures or partial dentures, we use quality materials and precise fitting techniques to restore your smile and ability to eat and speak confidently.",
    benefits: [
      "Restores ability to eat and speak properly",
      "Natural-looking appearance",
      "Custom-fitted for comfort",
      "Supports facial muscles",
      "Affordable tooth replacement option"
    ],
    treatmentSteps: [
      { step: 1, title: "Consultation", description: "Discussion of your needs and examination of your mouth." },
      { step: 2, title: "Impressions", description: "Precise impressions taken of your gums and any remaining teeth." },
      { step: 3, title: "Try-In", description: "Wax model fitting to check appearance and fit." },
      { step: 4, title: "Final Denture", description: "Custom dentures are crafted and fitted." },
      { step: 5, title: "Adjustments", description: "Follow-up visits to ensure perfect fit and comfort." }
    ],
    metaTitle: "Dentures in Panvel | Comfortable Dentures for Missing Teeth",
    metaDescription: "Struggling with loose dentures or missing teeth? Get custom-fitted, comfortable dentures at Dental Essential, Old Panvel. Restore your chewing ability and smile.",
    patientProblems: ["Loose dentures", "Multiple missing teeth", "Cannot chew food properly", "Old dentures not fitting", "Affordable tooth replacement", "Full set of teeth missing"],
    faqs: [
      { question: "What types of dentures are available?", answer: "We offer complete dentures (for all teeth), partial dentures (for some missing teeth), and implant-supported dentures for maximum stability." },
      { question: "How long does it take to get dentures?", answer: "The entire process from consultation to final fitting typically takes 3–5 weeks, including impressions and try-in appointments." },
      { question: "Can I eat normally with dentures?", answer: "Yes. After an initial adjustment period of 1–2 weeks, most patients can eat a wide variety of foods comfortably with well-fitted dentures." },
      { question: "What is the cost of dentures in Panvel?", answer: "Denture costs range from ₹5,000 to ₹30,000 depending on the type (partial, complete, or implant-supported)." }
    ],
    relatedSlugs: ["dental-implants", "full-mouth-rehabilitation", "crowns-and-bridges"]
  },
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    shortDescription: "Safe and comfortable removal of problematic wisdom teeth by experienced surgeons.",
    image: "/images/services/wisdom.jpg",
    bannerImage: "/images/services/wisdom.jpg",
    description: "Wisdom teeth can cause pain, infection, and damage to adjacent teeth when they don't have enough room to emerge properly. Our oral surgeons perform safe, comfortable extractions using modern techniques and sedation options for a stress-free experience.",
    benefits: [
      "Relieves pain and discomfort",
      "Prevents damage to adjacent teeth",
      "Reduces risk of infection and cysts",
      "Quick recovery with proper care",
      "Sedation options available"
    ],
    treatmentSteps: [
      { step: 1, title: "X-Ray & Assessment", description: "Digital X-rays to evaluate the position and condition of wisdom teeth." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia or sedation administered for comfort." },
      { step: 3, title: "Extraction", description: "Careful removal of the wisdom tooth using specialized techniques." },
      { step: 4, title: "Closure", description: "Stitches placed if necessary to promote healing." },
      { step: 5, title: "Aftercare", description: "Instructions provided for quick and comfortable recovery." }
    ],
    metaTitle: "Wisdom Tooth Extraction in Panvel | Jaw Pain & Impacted Tooth",
    metaDescription: "Jaw pain, swelling, or impacted wisdom tooth? Safe and comfortable wisdom tooth extraction at Dental Essential, Old Panvel. Quick recovery with experienced oral surgeons.",
    patientProblems: ["Right jaw pain", "Left jaw pain", "Swelling at back of mouth", "Impacted wisdom tooth", "Pain while opening mouth", "Difficulty chewing at the back"],
    faqs: [
      { question: "How do I know if my wisdom tooth needs extraction?", answer: "Common signs include pain at the back of the jaw, swelling, difficulty opening your mouth, or crowding of other teeth. An X-ray will confirm if extraction is needed." },
      { question: "Is wisdom tooth extraction painful?", answer: "The procedure is done under local anesthesia and is painless during the process. Post-operative discomfort is managed with prescribed medication." },
      { question: "How long is recovery after wisdom tooth removal?", answer: "Simple extractions heal in 3–5 days. Surgical extractions of impacted teeth may take 1–2 weeks for full recovery." },
      { question: "What is the cost of wisdom tooth extraction in Panvel?", answer: "Simple extraction costs ₹1,500–₹3,000 per tooth. Surgical extraction of impacted teeth costs ₹4,000–₹12,000 per tooth." }
    ],
    relatedSlugs: ["painless-root-canal", "dental-implants", "full-mouth-rehabilitation"]
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    shortDescription: "Comprehensive restoration of your entire mouth for optimal function and aesthetics.",
    image: "/images/services/Full-Mouth-Rehablitation.jpeg",
    bannerImage: "/images/services/Full-Mouth-Rehablitation.jpeg",
    description: "Full mouth rehabilitation is a comprehensive treatment plan that addresses multiple dental issues to restore your entire mouth. This may involve a combination of procedures including crowns, bridges, implants, and veneers to achieve optimal oral health and aesthetics.",
    benefits: [
      "Addresses multiple dental issues at once",
      "Restores complete oral function",
      "Dramatically improves smile aesthetics",
      "Customized treatment plan",
      "Long-term oral health improvement"
    ],
    treatmentSteps: [
      { step: 1, title: "Comprehensive Evaluation", description: "Full examination, X-rays, and assessment of all dental issues." },
      { step: 2, title: "Treatment Planning", description: "Detailed plan addressing all concerns with timeline and costs." },
      { step: 3, title: "Phased Treatment", description: "Procedures performed in logical sequence for best results." },
      { step: 4, title: "Progress Monitoring", description: "Regular check-ups to ensure treatment is progressing well." },
      { step: 5, title: "Maintenance Plan", description: "Long-term care plan to maintain your restored smile." }
    ],
    metaTitle: "Full Mouth Rehabilitation in Panvel | Complete Dental Restoration",
    metaDescription: "Multiple missing teeth, bite issues, or difficulty chewing? Get comprehensive full mouth rehabilitation at Dental Essential, Old Panvel. Restore your complete smile.",
    patientProblems: ["Multiple missing teeth", "Bite issues", "Cannot chew food properly", "Worn down teeth", "Full mouth restoration needed", "Severely damaged teeth"],
    faqs: [
      { question: "What is full mouth rehabilitation?", answer: "It is a comprehensive treatment combining multiple procedures like crowns, bridges, implants, and veneers to restore the function and aesthetics of your entire mouth." },
      { question: "Who needs full mouth rehabilitation?", answer: "Patients with multiple missing teeth, severe wear, bite problems, or those who need extensive dental work across the entire mouth benefit from this approach." },
      { question: "How long does full mouth rehabilitation take?", answer: "Treatment duration varies from a few weeks to several months depending on the complexity and number of procedures involved." },
      { question: "What is the cost of full mouth rehabilitation in Panvel?", answer: "Cost depends on the treatments included. A detailed treatment plan with costs is provided after a comprehensive evaluation. EMI options are available." }
    ],
    relatedSlugs: ["dental-implants", "crowns-and-bridges", "dentures"]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
