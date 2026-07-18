export interface HospitalAffiliation {
  id: string;
  name: string;
  logo: string;
  location: string;
  mapEmbedUrl: string;
  appointmentPhone: string;
  address: string;
}

export interface DegreeInfo {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface Treatment {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  procedures: string[];
}

export interface WhyChooseReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceTimeline {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  rating: number;
  story: string;
  videoPlaceholderUrl?: string;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imagePlaceholder: string;
}

export interface VideoGuide {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  tagline: string;
  qualificationsSummary: string;
  experienceYears: string;
  patientsTreated: string;
  surgeriesPerformed: string;
  hospitalsServed: string;
  aboutText: string;
  missionStatement: string;
  visionStatement: string;
  philosophy: string;
  contactEmail: string;
  contactPhone: string;
  emergencyPhone: string;
  whatsappNumber: string;
  workingHours: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  hospitals: HospitalAffiliation[];
  education: DegreeInfo[];
  fellowships: DegreeInfo[];
  boardCertifications: Certification[];
  memberships: string[];
  awards: Award[];
  treatments: Treatment[];
  whyChooseUs: WhyChooseReason[];
  timeline: ExperienceTimeline[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  blogArticles: BlogArticle[];
  videos: VideoGuide[];
}

export const doctorData: DoctorProfile = {
  name: "Vijay Ganesh Sankar",
  title: "Senior Consultant Paediatric Surgeon",
  tagline: "15+ years of specialized pediatric urology, laparoscopy, and neonatal reconstructive surgery.",
  qualificationsSummary: "MBBS, MS, MCh, FICRS, FEBPS, FMAS, FIAGES",
  experienceYears: "15+ Years",
  patientsTreated: "10,000+",
  surgeriesPerformed: "6,000+",
  hospitalsServed: "6+",
  aboutText: "Dr. Vijay Ganesh Sankar is a DHA Eligible, European Board Certified Paediatric Surgeon with 15 years of Paediatric surgical experience post-M.Ch. Having received advanced training in Paediatric Robotic Surgery, he specializes in laparoscopic surgical procedures with a strong focus on advanced keyhole techniques, neonatal surgical emergencies, and pediatric urology. Known for excelling in high-stress environments, he is dedicated to putting young patients at ease and diagnosing even the most complex congenital and acquired disorders.",
  missionStatement: "To deliver advanced, minimally invasive, and robotic pediatric surgical care that meets the highest global clinical standards, minimizing recovery times and providing families with peace of mind.",
  visionStatement: "To lead clinical progress in pediatric keyhole surgery and robotic-assisted urological procedures, establishing a safe, child-first surgical environment locally.",
  philosophy: "Children are not miniature adults. They require delicate physical handling, specialized anatomical precision, and above all, a reassuring and gentle clinical presence that calms both the child and their family.",
  contactEmail: "drvijayganeshsankar@gmail.com",
  contactPhone: "+91 73865 40480",
  emergencyPhone: "+91 73865 40480 (EMERGENCY ONLY)",
  whatsappNumber: "+917386540480",
  workingHours: "Mon - Sat: 9:00 AM - 5:00 PM (Emergency 24/7)",
  socialLinks: {
    linkedin: "https://www.linkedin.com/pub/vijayganesh/79/3",
    twitter: "https://twitter.com/drvijayganesh",
    youtube: "https://youtube.com/drvijayganesh",
  },
  hospitals: [
    {
      id: "hosp-1",
      name: "Aster Women and Children Hospital",
      logo: "Aster Logo",
      location: "Whitefield, Bangalore, India",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0016839352726!2d77.74780517596041!3d12.97177571558296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ad273bd639%3A0xe54e60155b9a957b!2sAster%20Women%20%26%20Children%20Hospital%20Whitefield!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      appointmentPhone: "+91 80 4347 4347",
      address: "Aster Women & Children Hospital, Whitefield, Bengaluru, Karnataka 560066",
    }
  ],
  education: [
    {
      degree: "M.Ch in Paediatric Surgery",
      institution: "Madras Medical College, Dr MGR Medical University, Chennai, Tamil Nadu",
      year: "2011"
    },
    {
      degree: "MS in General Surgery",
      institution: "Thanjavur Medical College, Dr MGR Medical University, Tanjore, Tamil Nadu",
      year: "2008"
    },
    {
      degree: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      institution: "Stanley Medical College, Dr MGR Medical University, Chennai, Tamil Nadu",
      year: "2003"
    }
  ],
  fellowships: [
    {
      degree: "FICRS, Fellowship in Robotic Surgery",
      institution: "International College of Robotic Surgeons",
      year: "2025"
    },
    {
      degree: "FEBPS, Fellow of the European Board of Paediatric Surgery",
      institution: "European Board of Paediatric Surgery",
      year: "2018"
    },
    {
      degree: "FMAS, Fellowship in Minimal Access Surgery",
      institution: "Association of Minimal Access Surgeons of India",
      year: "2014"
    },
    {
      degree: "FIAGES, Fellowship in Indian Association of Gastrointestinal Endosurgeons",
      institution: "Indian Association of Gastrointestinal and Endoscopic Surgeons",
      year: "2013"
    }
  ],
  boardCertifications: [
    {
      name: "DHA Eligibility Certified Paediatric Surgeon",
      issuer: "Dubai Health Authority (Eligibility ID: 25922089)",
      year: "2025"
    },
    {
      name: "Paediatric Advanced Life Support (PALS)",
      issuer: "American Heart Association",
      year: "2025"
    },
    {
      name: "State Medical Council Registration",
      issuer: "State Medical Council (Registration No: 74390)",
      year: "2005"
    }
  ],
  memberships: [
    "Member of Indian Association of Paediatric Surgeons (IAPS, Rgd No: 1100)",
    "Member of Association of Minimal Access Surgeons of India (AMASICON, Rgd No: 4378)",
    "Member of Indian Association of Gastrointestinal Endosurgeons (IAGES, Rgd No: 4118)",
    "Member of Paediatric Endoscopic Surgeons of India (PESI, Rgd No: 310)",
    "Member of World Laparoscopic Surgeons",
    "Member of Indian Medical Association (IMA)",
    "Member of Indian Associations of Surgeons (ASI)",
    "Member of Royal College of Surgeons (MRCS - Part 3 Pending, in Good Standing)"
  ],
  awards: [
    {
      title: "Winner of Radiology Quiz",
      issuer: "Institute of Child Health (ICH) 'PEDSURG CLINICS'",
      year: "2011",
      description: "Awarded first place in the specialized pediatric surgical radiology quiz during academic residency."
    },
    {
      title: "DHA Practitioner Eligibility ID 25922089",
      issuer: "Dubai Health Authority License Evaluation",
      year: "2025",
      description: "Officially certified as eligible to practice as a Pediatric Surgeon specialist under DHA guidelines."
    }
  ],
  treatments: [
    {
      id: "treat-1",
      title: "Pediatric Robotic Surgery",
      badge: "Robotic Specialist",
      image: "/images/robotic_surgery.png",
      description: "State-of-the-art robotic-assisted reconstructive operations for children.",
      procedures: [
        "Robotic Pyeloplasty (Drainage)",
        "Robotic Ureteric Re-implantation",
        "Robotic Choledochal Cyst Resection",
        "Micro-invasive reconstructions"
      ]
    },
    {
      id: "treat-2",
      title: "Neonatal Reconstruction",
      badge: "Neonatal Care",
      image: "/images/neonatal_care.png",
      description: "Immediate emergency correction of congenital birth anomalies in newborns and preemies.",
      procedures: [
        "Diaphragmatic Hernia (CDH) Repair",
        "Tracheoesophageal Fistula Repair",
        "Anorectal Malformations Correction",
        "Intestinal Atresia & Volvulus Correction"
      ]
    },
    {
      id: "treat-3",
      title: "Laparoscopic Keyhole Surgery",
      badge: "Keyhole Precision",
      image: "/images/laparoscopic_surgery.jpg",
      description: "Advanced diagnostic and therapeutic surgical access via 3mm micro-incisions.",
      procedures: [
        "Laparoscopic Hernia & Hydrocele",
        "Laparoscopic Appendectomy",
        "Orchidopexy (Undescended Testis)",
        "Thoracoscopic Lung Operations"
      ]
    },
    {
      id: "treat-4",
      title: "Reconstructive Urology",
      badge: "Urology Expert",
      image: "/images/reconstructive_urology.png",
      description: "Complete repair of complex congenital defects of the urinary and reproductive tracts.",
      procedures: [
        "Hypospadias Surgical Repairs",
        "Vesicoureteral Reflux (VUR) Deflux",
        "Bladder Epispadias Reconstruction",
        "Posterior Urethral Valve Ablation"
      ]
    },
    {
      id: "treat-5",
      title: "Congenital Defect Correction",
      badge: "Reconstructive Specialist",
      image: "/images/congenital_defect.jpg",
      description: "Full anatomical reconstruction of complex gastrointestinal and thoracic birth defects.",
      procedures: [
        "Hirschsprung's Disease Surgery",
        "Choledochal Cyst Excision",
        "Bowel Atresia & Stenosis Repair",
        "Diaphragmatic Defect Repairs"
      ]
    },
    {
      id: "treat-6",
      title: "Pediatric Surgical Oncology",
      badge: "Oncology Expert",
      image: "/images/surgical_oncology.png",
      description: "Highly coordinated and precise surgical resections of solid childhood tumors.",
      procedures: [
        "Wilms' Tumor Resection",
        "Neuroblastoma Surgery",
        "Teratoma & Sacrococcygeal Excision",
        "Organ-Sparing Tumor Resections"
      ]
    }
  ],
  whyChooseUs: [
    {
      id: "why-1",
      title: "15 Years Post-M.Ch Experience",
      description: "Dedicated focus on child surgery with a high volume of successful neonatal, urological, and laparoscopic procedures across India.",
      iconName: "ShieldCheck"
    },
    {
      id: "why-2",
      title: "Robotic & Keyhole Precision",
      description: "Advanced training in pediatric robotic surgery and minimally invasive techniques, ensuring smaller scars and less pain.",
      iconName: "Cpu"
    },
    {
      id: "why-3",
      title: "European Board Certified",
      description: "Certified Fellow of the European Board of Paediatric Surgery (FEBPS), demonstrating adherence to global healthcare protocols.",
      iconName: "Globe"
    },
    {
      id: "why-4",
      title: "Neonatal Emergency Mastery",
      description: "Proven record in managing high-risk newborn anomalies (CDH, bowel blocks) in cooperation with leading pediatricians.",
      iconName: "HeartPulse"
    }
  ],
  timeline: [
    {
      id: "time-1",
      role: "Senior Consultant Paediatric Surgery, Urology and Laparoscopy",
      institution: "Aster Women & Children Hospital",
      location: "Whitefield, Bengaluru, Karnataka, India",
      period: "08/24 - Present",
      achievements: [
        "Senior Pediatric and Robotic Surgeon, leading neonatal reconstruction and urological services",
        "Focused on state-of-the-art Level-IV NICU/PICU surgical emergencies",
        "Pioneering advanced robotic and minimally invasive keyhole procedures"
      ]
    },
    {
      id: "time-2",
      role: "Senior Consultant Paediatric Surgery, Urology and Laparoscopy",
      institution: "Baby Memorial Hospital",
      location: "Kannur, Kerala, India",
      period: "04/2024 - 08/2024",
      achievements: [
        "Conducted complex pediatric emergency and elective surgeries",
        "Managed neonatal congenital anomalies and pediatric solid tumors",
        "Collaborated with pediatricians and anesthesiologists for clinical case management"
      ]
    },
    {
      id: "time-3",
      role: "Senior Consultant Paediatric Surgery, Urology and Laparoscopy",
      institution: "Aster MIMS Hospital, unit of Aster Group",
      location: "Kannur, Kerala, India",
      period: "07/2023 - 03/2024",
      achievements: [
        "Performed independent Thoracoscopic diaphragmatic hernia repairs",
        "Established critical care protocols for intestinal blockages and malformations",
        "Guided families through pre-operative planning and recovery expectations"
      ]
    },
    {
      id: "time-4",
      role: "Senior Consultant Paediatric, Laparoscopic Surgery and Urology",
      institution: "Sreechand Speciality Hospital",
      location: "Kannur, Kerala, India",
      period: "09/2023 - 06/2024",
      achievements: [
        "Served as independent consultant in a major 350-bedded hospital",
        "Expanded keyhole urologic procedures and neonatal emergency care"
      ]
    },
    {
      id: "time-5",
      role: "Consultant Paediatric and Laparoscopic Surgeon",
      institution: "Medicover Women and Child Hospital (Formerly Mycure)",
      location: "Visakhapatnam, Andhra Pradesh, India",
      period: "02/2017 - 08/2022",
      achievements: [
        "Managed pediatric oncology resections and emergency bowel blockages",
        "Expanded the hospital's minimally invasive (laparoscopic) pediatric offerings"
      ]
    },
    {
      id: "time-6",
      role: "Consultant Paediatric and Laparoscopic Surgeon",
      institution: "Valluvanad Hospitals",
      location: "Ottapalam, Palakkad, Kerala, India",
      period: "03/2012 - 01/2017",
      achievements: [
        "Conducted emergency trauma care and neonatal surgical transports",
        "Organized community services including free pediatric medical camps"
      ]
    },
    {
      id: "time-7",
      role: "Consultant Paediatric Surgeon",
      institution: "Neolife Children's Hospital",
      location: "Chennai, Tamil Nadu, India",
      period: "08/2011 - 03/2012",
      achievements: [
        "Analyzed clinical tests to diagnose complex congenital issues",
        "Monitored child growth and developmental patterns post-operatively"
      ]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      patientName: "Parent of Baby Rohan",
      condition: "Congenital Diaphragmatic Hernia Repair",
      rating: 5,
      story: "We were extremely anxious when Rohan was diagnosed with a diaphragmatic hernia at birth. Dr. Vijayganesh Sankar performed a thoracoscopic repair keyhole when Rohan was just days old. Rohan is now perfectly healthy and active. We are extremely grateful for Dr. Vijayganesh's incredible surgical precision and supportive care.",
      avatarText: "PR"
    },
    {
      id: "test-2",
      patientName: "Parent of Ananya (Age 4)",
      condition: "Laparoscopic Choledochal Cyst Correction",
      rating: 5,
      story: "Ananya had severe abdominal pain and a cyst diagnosis. Dr. Vijayganesh explained the keyhole surgical plan clearly, which put us at ease. The surgery was extremely successful, and the recovery was much faster than we expected. She was playing in the ward within 36 hours.",
      avatarText: "PA"
    },
    {
      id: "test-3",
      patientName: "Parent of Karthik (Age 8)",
      condition: "Orchidopexy (Undescended Testis)",
      rating: 5,
      story: "Dr. Vijayganesh talked to Karthik directly, explaining things with drawings so he wasn't scared. The day-case laparoscopic surgery was very smooth and Karthik recovered rapidly. Excellent surgeon and human being.",
      avatarText: "PK"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What is the advantage of minimally invasive (keyhole) surgery in newborns?",
      answer: "Laparoscopic and thoracoscopic surgery uses tiny 3mm instruments. In infants, this significantly reduces tissue trauma, mitigates post-operative pain, limits scarring, and allows babies to feed and recover much faster than standard open surgeries."
    },
    {
      id: "faq-2",
      question: "Are your affiliated hospitals equipped for major neonatal emergencies?",
      answer: "Yes. Aster Women & Children Hospital in Whitefield, Bangalore is a top-tier facility featuring fully-equipped Level-IV Neonatal Intensive Care Units (NICUs), Pediatric Intensive Care Units (PICUs), and 24/7 emergency response systems."
    },
    {
      id: "faq-3",
      question: "When is surgery recommended for an undescended testis?",
      answer: "Clinical guidelines recommend that undescended testes be surgically corrected (orchidopexy) between 6 to 12 months of age. Early laparoscopic correction helps preserve testicular function and reduces future complications."
    },
    {
      id: "faq-4",
      question: "Can parents stay with the child during the hospital stay?",
      answer: "Yes, family-centered care is essential. One parent is encouraged to stay next to the child's bed throughout the hospital stay, and Aster Women & Children Hospital provides comfortable accommodation configurations for parent lodging."
    }
  ],
  blogArticles: [
    {
      id: "blog-1",
      title: "Minimally Invasive Surgery in Children: A Parent's Guide",
      excerpt: "An overview of pediatric laparoscopic procedures, safety profiles, and recovery expectations.",
      content: "Laparoscopic and thoracoscopic surgery has transformed pediatric surgical care. By utilizing specialized micro-instruments, surgeons can operate on babies with extreme precision, leaving minimal scarring...",
      date: "June 30, 2026",
      readTime: "5 min read",
      category: "Parent Education",
      imagePlaceholder: "laparoscopy_guide"
    },
    {
      id: "blog-2",
      title: "Understanding Congenital Diaphragmatic Hernia (CDH)",
      excerpt: "What to expect when your unborn baby is diagnosed with CDH and how advanced neonatal surgery resolves it.",
      content: "Congenital Diaphragmatic Hernia is a birth defect where a hole in the diaphragm allows abdominal organs to migrate into the chest. Learn how immediate post-birth thoracoscopic repairs and NICU stabilization help preemies heal...",
      date: "May 15, 2026",
      readTime: "7 min read",
      category: "Neonatal Anomalies",
      imagePlaceholder: "cdh_information"
    },
    {
      id: "blog-3",
      title: "Pediatric Urology: Common Congenital Issues and Care Plans",
      excerpt: "From hypospadias to undescended testes, learn about modern clinical timelines for corrections.",
      content: "Urologic conditions in children are often congenital and require precise reconstruction. We walk through clinical timings for orchidopexy, endourology glue injections, and reconstructive urologic treatments...",
      date: "April 28, 2026",
      readTime: "6 min read",
      category: "Pediatric Urology",
      imagePlaceholder: "urology_guide"
    }
  ],
  videos: [
    {
      id: "vid-1",
      title: "Minimally Invasive Pediatric Laparoscopy: A Patient Guide",
      duration: "4:15",
      thumbnail: "/images/laparoscopic_surgery.jpg",
      youtubeId: "dQw4w9WgXcQ",
      description: "An educational overview of how 3mm micro-incisions are utilized in keyhole surgeries for infants and children."
    },
    {
      id: "vid-2",
      title: "Neonatal Reconstructive Surgery & Advanced NICU Support",
      duration: "5:30",
      thumbnail: "/images/neonatal_care.png",
      youtubeId: "dQw4w9WgXcQ",
      description: "Understanding the clinical setup and surgical approach for correcting congenital birth conditions in newborns."
    },
    {
      id: "vid-3",
      title: "Pediatric Robotic Reconstructive Urology Innovations",
      duration: "3:45",
      thumbnail: "/images/robotic_surgery.png",
      youtubeId: "dQw4w9WgXcQ",
      description: "A look into precision robotic-assisted urological procedures, including robotic pyeloplasty and reconstructions."
    }
  ]
};
