import { FiUserCheck, FiActivity, FiStar, FiLayers, FiHeart, FiCpu, FiAward, FiSmile, FiShield, FiPocket } from "react-icons/fi";

const departmentsData = [
  // 1. Cardiology (already done)
  {
  id: 1,
  name: "Cardiology",
  slug: "cardiology",
  image: "/images/departments/cardiology.jpg",

  overview:
    "The Cardiology Department is the flagship department of our hospital, providing world-class cardiac care, advanced diagnostics, and comprehensive treatment for all heart-related conditions. Our team of expert cardiologists specializes in preventive cardiology, interventional procedures, and long-term heart disease management.",

  about:
    "The Cardiology Department serves as the cornerstone of our hospital, offering advanced care for patients with heart and vascular conditions. We provide comprehensive diagnosis and treatment for heart attacks, arrhythmias, heart failure, coronary artery disease, and valve disorders. Our department emphasizes early detection, preventive heart care, and personalized management plans to ensure optimal outcomes. Equipped with state-of-the-art diagnostic tools including ECG, Echocardiography, TMT, Holter monitoring, and interventional cardiac suites, we deliver precise evaluation and effective treatment for both acute and chronic cardiac conditions. Led by highly qualified cardiologists Dr. G. Kondal Rao (M.D., D.M., FSCAI, M.E.) and Dr. G. Kiran Kumar (M.D., D.M.), the department is dedicated to patient-centered care, advanced cardiac therapies, and long-term heart health, establishing our hospital as a trusted center for cardiovascular excellence.",

  services: [
    "ECG, Echo, and Treadmill Test (TMT)",
    "Hypertension and cholesterol management",
    "Heart attack diagnosis and treatment",
    "Interventional cardiology procedures",
    "Holter monitoring and arrhythmia evaluation",
    "Cardiac rehabilitation and lifestyle counseling",
    "Preventive cardiology programs",
    "Coronary angioplasty and stenting",
    "Valve repair and replacement procedures"
  ],

  conditions: [
    "Heart attack (Myocardial infarction)",
    "Arrhythmia and irregular heartbeats",
    "Heart failure and cardiomyopathy",
    "Coronary artery disease",
    "Valve disorders",
    "Congenital heart defects",
    "Hypertension-related heart issues",
    "High cholesterol and atherosclerosis"
  ],

  doctors: [
    {
      name: "Dr. G. Kondal Rao",
      designation: "Cardiologist",
      about:
        "Dr. G. Kondal Rao is a highly experienced cardiologist specializing in interventional cardiology, preventive heart care, and complex cardiac procedures. Known for his patient-focused approach and expertise in advanced cardiac therapies.",
      qualifications: ["M.D.", "D.M.", "FSCAI", "M.E."],
      status: "On-call available",
      experience: "20+ years",
      photo: "/images/doctors/rahul.jpg"
    },
    {
      name: "Dr. G. Kiran Kumar",
      designation: "Cardiologist",
      about:
        "Dr. G. Kiran Kumar specializes in comprehensive cardiac care, including diagnosis and management of acute and chronic heart diseases, interventional procedures, and preventive cardiology strategies.",
      qualifications: ["M.D.", "D.M."],
      status: "On-call available",
      experience: "15+ years",
      photo: "/images/doctors/priya.jpg"
    }
  ],

  highlights: [
    {
      title: "Flagship Cardiology Department",
      description:
        "As the main department of our hospital, we offer world-class cardiac care with advanced diagnostics and interventional treatments.",
      icon: FiStar
    },
    {
      title: "Advanced Cardiac Diagnostics",
      description:
        "State-of-the-art ECG, Echo, TMT, Holter monitoring, and cardiac imaging for precise evaluation.",
      icon: FiActivity
    },
    {
      title: "Expert Cardiologists",
      description:
        "Highly experienced specialists delivering personalized heart care and advanced interventional procedures.",
      icon: FiAward
    },
    {
      title: "Comprehensive Heart Care",
      description:
        "From preventive cardiology to emergency interventions and long-term rehabilitation, we ensure complete cardiac wellness.",
      icon: FiHeart
    }
  ]
},

  // 2. General Medicine
  {
    id: 2,
    name: "General Medicine",
    slug: "general-medicine",
    image: "/images/departments/general-medicine.jpg",

    overview:
      "Our General Medicine Department offers comprehensive adult healthcare with accurate diagnosis, preventive care, and expert treatment for acute and chronic conditions, ensuring high-quality and trusted hospital care.",
    about:
      "The General Medicine Department serves as the backbone of our hospital, providing comprehensive primary and specialized medical care for adults. Our department focuses on early diagnosis, preventive care, and effective management of both acute and chronic medical conditions, ensuring every patient receives timely and accurate treatment. From common illnesses such as fever, infections, and allergies to complex long-term conditions including diabetes, hypertension, thyroid disorders, and respiratory diseases, our experienced physicians offer thorough evaluation and personalized care plans tailored to each individual’s needs. We follow a holistic and patient-centered approach, emphasizing lifestyle modification, risk-factor assessment, and long-term disease monitoring. Supported by our hospital’s advanced laboratory services, digital X-ray, ECG, ultrasound, and emergency care facilities, our team ensures reliable and efficient diagnosis for faster recovery. With highly qualified senior physicians like Dr. (Prof) B. Prahlad and Dr. (Prof) S. Prem Sagar, along with our well-equipped medical infrastructure, the General Medicine Department stands committed to delivering trusted, accessible, and compassionate medical care for patients of all ages.",

    services: [
      "Routine health check-ups",
      "Chronic disease management",
      "Fever and infection treatment",
      "Diabetes and thyroid disorder management",
      "Blood pressure and heart-related evaluation",
      "Respiratory illness management (asthma, bronchitis)",
      "Vaccinations and immunizations",
      "Lifestyle and nutritional counseling",
      "Geriatric medical care",
      "Corporate and preventive health screenings"
    ],

    conditions: [
      "Diabetes",
      "Hypertension",
      "Thyroid disorders",
      "Asthma and respiratory infections",
      "Fever and viral illnesses",
      "Digestive disorders",
      "Headaches and migraines",
      "Liver disorders",
      "Kidney and urinary infections",
      "Joint pains and arthritis",
      "General weakness and fatigue"
    ],

    doctors: [
      {
        name: "Dr. (Prof) B. Prahlad",
        designation: "Senior General Physician",
        about:
          "Dr. (Prof) B. Prahlad is an experienced Senior Physician with expertise in diabetes management, internal medicine, and chronic disease control. Known for his patient-first approach and systematic diagnostic evaluation.",
        qualifications: ["M.D.", "D.C.H."],
        status: "On-call available",
        experience: "20+ years",
        photo: "/images/doctors/prahlad.jpg"
      },
      {
        name: "Dr. (Prof) S. Prem Sagar",
        designation: "Senior General Physician",
        about:
          "Dr. (Prof) S. Prem Sagar specializes in general medicine and diabetology with strong expertise in treating chronic and lifestyle-related disorders. He is highly regarded for his clinical precision and patient care.",
        qualifications: ["M.D."],
        status: "On-call available",
        experience: "18+ years",
        photo: "/images/doctors/premsagar.jpg"
      }
    ],

    highlights: [
      {
        title: "Comprehensive Adult Care",
        description:
          "Holistic care for a wide range of medical conditions, ensuring early detection and personalized treatment.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Diagnostics",
        description:
          "Supported by full laboratory services, imaging, ECG, and modern diagnostic technologies.",
        icon: FiActivity
      },
      {
        title: "Patient-Centered Approach",
        description:
          "Customized care plans focused on each patient’s specific medical needs and long-term well-being.",
        icon: FiHeart
      },
      {
        title: "Experienced Physicians",
        description:
          "Led by senior consultants with decades of expertise in internal medicine and diabetology.",
        icon: FiAward
      }
    ]
  },

  // 3. Diabetology
  {
    id: 3,
    name: "Diabetology",
    slug: "diabetology",
    image: "/images/departments/diabetology.jpg",

    overview:
      "Our Diabetology Department provides specialized care for all types of diabetes and metabolic disorders, offering precise diagnosis, personalized treatment plans, and long-term lifestyle management to help patients maintain stable health and prevent complications.",

    about:
      "The Diabetology Department focuses on the comprehensive management of diabetes and related metabolic disorders through advanced diagnostic evaluation, personalized treatment plans, and long-term monitoring. Our specialists manage Type 1 and Type 2 diabetes, gestational diabetes, prediabetes, and complex cases involving uncontrolled sugar levels. The department emphasizes lifestyle modification, diet counseling, medication management, and modern insulin therapy to ensure long-term glycemic control. We also address diabetes-related complications including neuropathy, retinopathy, nephropathy, cardiovascular risks, and foot-related disorders with a multidisciplinary approach involving Cardiology, Nephrology, Ophthalmology, and Nutrition. Supported by advanced laboratory facilities, continuous glucose monitoring (CGM), and regular HbA1c assessments, our Diabetology team ensures accurate diagnosis and effective, evidence-based care. With experienced consultants like Dr. (Prof) B. Prahlad and Dr. (Prof) S. Prem Sagar, the department is dedicated to providing compassionate, accessible, and long-term diabetes care for patients of all ages.",

    services: [
      "Diagnosis and treatment of Type 1 & Type 2 diabetes",
      "Prediabetes evaluation and early intervention",
      "Gestational diabetes management",
      "Insulin therapy and dosage adjustment",
      "Continuous glucose monitoring (CGM)",
      "HbA1c testing and long-term sugar control",
      "Diet and lifestyle modification counseling",
      "Obesity and metabolic syndrome management",
      "Diabetes education and self-care training",
      "Foot care screening and neuropathy assessment",
      "Heart, kidney, and eye complication screening",
      "Medication management for diabetes-related conditions"
    ],

    conditions: [
      "Type 1 diabetes",
      "Type 2 diabetes",
      "Prediabetes",
      "Gestational diabetes",
      "Diabetic neuropathy",
      "Diabetic retinopathy",
      "Diabetic nephropathy",
      "Metabolic syndrome",
      "Obesity-related diabetes",
      "Hypoglycemia and hyperglycemia episodes",
      "Insulin resistance"
    ],

    doctors: [
      {
        name: "Dr. (Prof) B. Prahlad",
        designation: "Senior Diabetologist",
        about:
          "Dr. (Prof) B. Prahlad has extensive experience in diabetes management, insulin therapy, and long-term monitoring of metabolic disorders. He ensures personalized treatment plans and advanced diabetes care tailored to each patient’s needs.",
        qualifications: ["M.D.", "D.C.H."],
        status: "On-call available",
        experience: "20+ years",
        photo: "/images/doctors/prahlad.jpg"
      },
      {
        name: "Dr. (Prof) S. Prem Sagar",
        designation: "Senior Diabetologist",
        about:
          "Dr. (Prof) S. Prem Sagar specializes in managing complex diabetes cases, lifestyle-related metabolic conditions, and multi-organ diabetic complications. He is known for his patient-centered and structured care approach.",
        qualifications: ["M.D."],
        status: "On-call available",
        experience: "18+ years",
        photo: "/images/doctors/premsagar.jpg"
      }
    ],

    highlights: [
      {
        title: "Comprehensive Diabetes Care",
        description:
          "Complete management of all types of diabetes with personalized treatment and long-term monitoring.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Diagnostic Support",
        description:
          "Continuous glucose monitoring (CGM), HbA1c testing, and metabolic assessments for accurate control.",
        icon: FiActivity
      },
      {
        title: "Lifestyle & Diet Counseling",
        description:
          "Expert guidance on nutrition, exercise, and daily habits to support long-term diabetes management.",
        icon: FiHeart
      },
      {
        title: "Experienced Diabetologists",
        description:
          "Led by senior specialists with decades of clinical experience in diabetes and metabolic medicine.",
        icon: FiAward
      }
    ]
  },

  // 4. Gastroenterology
  {
    id: 4,
    name: "Gastroenterology",
    slug: "gastroenterology",
    image: "/images/departments/gastroenterology.jpg",

    overview:
      "Our Gastroenterology Department provides expert diagnosis and treatment for stomach, liver, pancreas, and digestive system disorders, offering advanced endoscopic care and comprehensive gastrointestinal treatment.",

    about:
      "The Gastroenterology Department at our hospital specializes in the prevention, diagnosis, and treatment of all digestive system disorders with a strong focus on evidence-based and minimally invasive care. We manage a wide range of gastrointestinal issues, including acidity, gastritis, stomach pain, liver disease, jaundice, gallbladder stones, irritable bowel syndrome (IBS), and chronic digestive complaints. Our department is equipped with modern endoscopic facilities for procedures such as upper GI endoscopy, colonoscopy, and advanced GI screening, ensuring highly accurate diagnosis and safe treatment. Our approach focuses on both immediate relief and long-term digestive health improvement. We provide personalized treatment plans, lifestyle guidance, and diet counseling to ensure complete care and faster recovery. With highly experienced gastroenterologists like Dr. G. S. Sameer Kumar, supported by advanced imaging, ultrasound, laboratory tests, and emergency care, we ensure reliable, comprehensive, and patient-centered gastrointestinal treatment.",

    services: [
      "Upper GI endoscopy and colonoscopy",
      "Treatment for acidity, gastritis, and stomach ulcers",
      "Liver disease evaluation and management",
      "Pancreatitis diagnosis and treatment",
      "Gallbladder stone assessment",
      "IBS and chronic digestive disorder care",
      "Jaundice evaluation",
      "Management of fatty liver",
      "Gastrointestinal bleeding assessment",
      "Diet and lifestyle counseling for digestive health"
    ],

    conditions: [
      "Acidity and GERD",
      "Gastritis and stomach ulcers",
      "Fatty liver disease",
      "Hepatitis and jaundice",
      "Pancreatitis",
      "Gallbladder stones",
      "IBS (Irritable Bowel Syndrome)",
      "Colitis",
      "Constipation and indigestion",
      "Stomach and digestive infections",
      "Liver cirrhosis"
    ],

    doctors: [
      {
        name: "Dr. G. S. Sameer Kumar",
        designation: "Consultant Gastroenterologist",
        about:
          "Dr. G. S. Sameer Kumar is a highly experienced Gastroenterologist specializing in the diagnosis and treatment of digestive, liver, and pancreatic disorders. He is well-known for his precision in endoscopic procedures and patient-centered gastro care, offering effective treatment for both acute and chronic gastrointestinal conditions.",
        qualifications: ["D.N.B.", "D.N.B."],
        status: "Available",
        experience: "15+ years",
        photo: "/images/doctors/sameer-kumar.jpg"
      }
    ],

    highlights: [
      {
        title: "Advanced GI Endoscopy",
        description:
          "State-of-the-art endoscopic facilities for accurate diagnosis and minimally invasive treatment.",
        icon: FiActivity
      },
      {
        title: "Comprehensive Digestive Care",
        description:
          "Complete evaluation and treatment for stomach, liver, and pancreatic disorders.",
        icon: FiLayers
      },
      {
        title: "Expert Gastroenterologist",
        description:
          "Led by an experienced specialist providing precise diagnosis and effective treatment.",
        icon: FiUserCheck
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Customized diet, lifestyle guidance, and long-term digestive care for better results.",
        icon: FiHeart
      }
    ]
  },


  // 5. Pediatrics
  {
    id: 5,
    name: "Pediatrics",
    slug: "pediatrics",
    image: "/images/departments/pediatrics.jpg",

    overview:
      "Our Pediatrics Department provides compassionate medical care for infants, children, and adolescents with expert diagnosis, growth monitoring, immunizations, and treatment for childhood illnesses.",

    about:
      "The Pediatrics Department at our hospital is dedicated to providing complete medical care for newborns, infants, children, and adolescents, ensuring safe, healthy, and holistic growth. Our pediatric team focuses on early diagnosis, preventive care, immunization, nutrition guidance, and the management of both acute and chronic childhood conditions. From common illnesses such as fever, infections, cough, cold, asthma, and allergies to more complex issues involving growth, behavior, and development, our specialists offer detailed evaluation and personalized treatment plans tailored to each child's unique needs. Our hospital maintains a child-friendly environment supported by advanced diagnostic services including pediatric blood tests, digital X-rays, nebulization therapy, and 24/7 emergency pediatric care for urgent conditions. With an experienced senior pediatrician like Dr. (Prof) M.V. Murali leading the department, we ensure dependable, compassionate, and parent-focused care aimed at promoting complete well-being, timely treatment, and long-term developmental support for every child.",

    services: [
      "Newborn and child check-ups",
      "Vaccinations & immunization programs",
      "Treatment for fever, infections, and allergies",
      "Asthma and respiratory care",
      "Growth & developmental assessment",
      "Nutritional and breastfeeding counseling",
      "Pediatric emergency care",
      "Management of chronic childhood illnesses",
      "Behavioral and developmental evaluation"
    ],

    conditions: [
      "Fever and viral infections",
      "Cold, cough, and flu",
      "Asthma and allergies",
      "Nutritional deficiencies",
      "Developmental delays",
      "Gastrointestinal infections",
      "Skin infections",
      "Tonsillitis and ear infections",
      "Childhood chronic illnesses"
    ],

    doctors: [
      {
        name: "Dr. (Prof) M.V. Murali",
        designation: "Senior Pediatrician",
        about:
          "Dr. (Prof) M.V. Murali is a highly experienced pediatrician specializing in newborn care, child development, vaccinations, and management of acute and chronic childhood illnesses. Known for his patient-friendly approach and accurate clinical diagnosis.",
        qualifications: ["M.D.", "D.C.H.", "D.N.B."],
        status: "Available",
        experience: "20+ years",
        photo: "/images/doctors/murali.jpg"
      }
    ],

    highlights: [
      {
        title: "Child-Friendly Care",
        description:
          "Dedicated pediatric setup focused on comfort, safety, and gentle treatment for children.",
        icon: FiSmile
      },
      {
        title: "Complete Vaccination Support",
        description:
          "Up-to-date immunization services with expert guidance for parents.",
        icon: FiShield
      },
      {
        title: "Specialized Pediatric Diagnostics",
        description:
          "Equipped with pediatric-specific laboratory tests, digital X-rays, and emergency care.",
        icon: FiActivity
      },
      {
        title: "Experienced Pediatricians",
        description:
          "Certified child specialists offering personalized treatment and developmental guidance.",
        icon: FiAward
      }
    ]
  },

  // 6. Neurology
  {
    id: 6,
    name: "Neurology",
    slug: "neurology",
    image: "/images/departments/neurology.jpg",

    overview:
      "Our Neurology Department provides advanced diagnosis and treatment for brain, spine, and nerve disorders with expert neurologists and modern technology.",

    about:
      "The Neurology Department at our hospital delivers comprehensive and specialized care for all neurological disorders, including conditions affecting the brain, spinal cord, and peripheral nerves. Our team of expert neurologists, including Dr. B. Dinesh Kumar, focuses on early diagnosis, personalized treatment, and long-term management of acute and chronic conditions such as stroke, epilepsy, migraines, neuropathy, Parkinson’s disease, multiple sclerosis, vertigo, and nerve compression disorders. We utilize advanced diagnostic technologies including EEG, EMG, CT, MRI, and nerve conduction studies to ensure precise evaluation and accurate treatment planning. Emphasizing a patient-centered and multi-disciplinary approach, we provide rehabilitation, lifestyle guidance, and continuous monitoring to support optimal neurological health and faster recovery. With highly skilled neurologists and state-of-the-art medical infrastructure, our Neurology Department is committed to delivering trusted, effective, and compassionate care for patients of all ages.",

    services: [
      "Diagnosis of neurological disorders",
      "Stroke evaluation and management",
      "Migraine and headache treatment",
      "Epilepsy care",
      "Peripheral neuropathy management",
      "Movement disorder treatment",
      "Nerve conduction studies (NCS)",
      "EEG and neurological assessments",
      "Rehabilitation and long-term monitoring"
    ],

    conditions: [
      "Stroke",
      "Migraine and chronic headaches",
      "Epilepsy",
      "Parkinson’s disease",
      "Neuropathy",
      "Brain and spinal disorders",
      "Multiple sclerosis",
      "Vertigo and balance issues",
      "Nerve compression disorders"
    ],

    doctors: [
      {
        name: "Dr. B. Dinesh Kumar",
        designation: "Consultant Neurologist",
        about:
          "Dr. B. Dinesh Kumar is an experienced neurologist specializing in stroke care, epilepsy, migraine management, neuropathy, and complex nerve disorders. He is known for his precise diagnosis and patient-focused neurological treatment.",
        qualifications: ["M.D.", "D.M."],
        status: "On-call available",
        experience: "12+ years",
        photo: "/images/doctors/dinesh-kumar.jpg" // update to actual image name
      }
    ],

    highlights: [
      {
        title: "Advanced Neuro Diagnostics",
        description:
          "EEG, NCS, and imaging support for precise neurological evaluation.",
        icon: FiCpu
      },
      {
        title: "Comprehensive Neuro Care",
        description:
          "Complete treatment for brain, spine, and nerve-related conditions.",
        icon: FiActivity
      },
      {
        title: "Expert Neurologists",
        description:
          "Highly experienced specialists for complex and chronic neurological issues.",
        icon: FiAward
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Customized therapy and rehabilitation for long-term neurological health.",
        icon: FiHeart
      }
    ]
  },

  // 7. Pulmonology
  {
    id: 7,
    name: "Pulmonology",
    slug: "pulmonology",
    image: "/images/departments/pulmonology.jpg",

    overview:
      "Our Pulmonology Department offers specialized care for lung and respiratory disorders, providing accurate diagnosis, advanced treatment, and long-term management to ensure optimal respiratory health.",

    about:
      "The Pulmonology Department is dedicated to providing comprehensive care for patients with respiratory system disorders, serving as a vital part of our hospital’s healthcare services. Our department focuses on early diagnosis, preventive care, and effective management of both acute and chronic lung and airway conditions, ensuring timely and accurate treatment for every patient. From common respiratory issues such as asthma, infections, and chronic bronchitis to complex conditions including COPD, pneumonia, and sleep apnea, our experienced pulmonologists offer thorough evaluation and personalized care plans tailored to each patient’s needs. We follow a holistic and patient-centered approach, emphasizing lifestyle modification, pulmonary rehabilitation, and long-term monitoring for optimal lung health. Supported by our hospital’s advanced pulmonary function tests, digital imaging, sleep study facilities, and emergency respiratory care, our team ensures precise and efficient diagnosis for faster recovery. With highly skilled specialists like Dr. Mahesh Gudelli and state-of-the-art medical infrastructure, the Pulmonology Department is committed to delivering trusted, accessible, and compassionate care for patients of all ages.",

    services: [
      "Asthma management",
      "Chronic bronchitis treatment",
      "COPD care",
      "Sleep apnea diagnosis and treatment",
      "Pulmonary function tests",
      "Smoking cessation programs",
      "Emergency respiratory care",
      "Pulmonary rehabilitation"
    ],

    conditions: [
      "Asthma",
      "Chronic bronchitis",
      "COPD",
      "Pneumonia",
      "Sleep apnea",
      "Respiratory infections",
      "Breathing difficulties",
      "Pulmonary hypertension"
    ],

    doctors: [
      {
        name: "Dr. Mahesh Gudelli",
        designation: "Pulmonologist",
        about:
          "Dr. Mahesh Gudelli is a dedicated pulmonologist specializing in the management of lung and respiratory diseases. He is known for his patient-focused approach and precise diagnosis in conditions like asthma, COPD, and pneumonia.",
        qualifications: ["M.D."],
        status: "Available",
        experience: "15+ years",
        photo: "/images/doctors/mahesh-gudelli.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Pulmonologists",
        description:
          "Specialized team providing accurate diagnosis and effective respiratory care.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Respiratory Diagnostics",
        description:
          "Equipped with pulmonary function tests, imaging, and sleep study facilities.",
        icon: FiActivity
      },
      {
        title: "Patient-Centered Lung Care",
        description:
          "Personalized treatment plans focused on each patient’s respiratory health.",
        icon: FiHeart
      },
      {
        title: "Comprehensive Pulmonary Management",
        description:
          "Effective management of acute and chronic respiratory conditions with advanced therapies.",
        icon: FiAward
      }
    ]
  },

  // 8. Orthopedics
  {
    id: 8,
    name: "Orthopedics",
    slug: "orthopedics",
    image: "/images/departments/orthopedics.jpg",

    overview:
      "Our Orthopedics Department offers expert treatment for bone, joint, and spine conditions, providing advanced fracture care, joint pain management, and orthopedic surgeries.",

    about:
      "The Orthopedics Department at our hospital provides comprehensive care for musculoskeletal conditions, serving as a key pillar in our hospital’s specialized services. Our department focuses on early diagnosis, preventive care, and effective management of both acute and chronic orthopedic issues, ensuring every patient receives timely and accurate treatment. From common injuries such as fractures, joint pain, and sports-related injuries to complex conditions including arthritis, spine disorders, and bone deformities, our experienced orthopedic surgeons offer thorough evaluation and personalized care plans tailored to each patient’s needs. We follow a holistic and patient-centered approach, emphasizing rehabilitation, mobility improvement, and long-term musculoskeletal health. Supported by our hospital’s advanced imaging facilities, digital X-ray, MRI, and physiotherapy services, our team ensures precise and efficient diagnosis for faster recovery. With highly skilled specialists like Dr. K. Vinyak Santosh and state-of-the-art orthopedic infrastructure, the Orthopedics Department is committed to delivering trusted, accessible, and compassionate care for patients of all ages.",

    services: [
      "Fracture treatment and casting",
      "Joint pain and arthritis management",
      "Back and neck pain treatment",
      "Sports injury care",
      "Pediatric orthopedics",
      "Osteoporosis management",
      "Minor orthopedic surgeries",
      "Physiotherapy-guided rehabilitation",
      "Post-fracture follow-up care"
    ],

    conditions: [
      "Fractures and dislocations",
      "Arthritis and joint pain",
      "Back and spine disorders",
      "Sports injuries",
      "Osteoporosis",
      "Ligament tears",
      "Shoulder and knee pain",
      "Muscle and tendon injuries",
      "Pediatric bone disorders"
    ],

    doctors: [
      {
        name: "Dr. K. Vinyak Santosh",
        designation: "Orthopedic Surgeon",
        about:
          "Dr. K. Vinyak Santosh is an experienced orthopedic surgeon specializing in fracture management, joint disorders, sports injuries, and advanced orthopedic care. He is known for his precise diagnosis and patient-centered treatment approach.",
        qualifications: ["M.S."],
        status: "Available",
        experience: "12+ years",
        photo: "/images/doctors/vinyak-santosh.jpg" // update based on your actual image name
      }

    ],

    highlights: [
      {
        title: "Complete Bone & Joint Care",
        description:
          "Advanced orthopedic treatment for mobility improvement and pain relief.",
        icon: FiPocket
      },
      {
        title: "Advanced Diagnostics",
        description:
          "Digital X-rays, physiotherapy support, and modern evaluation tools.",
        icon: FiActivity
      },
      {
        title: "Experienced Orthopedic Specialists",
        description:
          "Skilled surgeons and orthopedic consultants for accurate diagnosis and treatment.",
        icon: FiAward
      },
      {
        title: "Rehabilitation Support",
        description:
          "Physiotherapy-guided recovery programs for better mobility and long-term results.",
        icon: FiHeart
      }
    ]
  },


  // 9. Nephrology
  {
    id: 9,
    name: "Nephrology",
    slug: "nephrology",
    image: "/images/departments/nephrology.jpg",

    overview:
      "Our Nephrology Department provides specialized care for kidney health, including diagnosis, treatment, and management of acute and chronic kidney diseases, ensuring trusted and comprehensive renal care.",

    about:
      "The Nephrology Department is dedicated to comprehensive kidney care, focusing on prevention, early diagnosis, and effective management of both acute and chronic kidney conditions. Our expert nephrologists treat a wide range of disorders including chronic kidney disease, kidney stones, hypertension, glomerulonephritis, and acute kidney injuries. We emphasize patient-centered care with personalized treatment plans, lifestyle guidance, and long-term kidney monitoring. Supported by advanced laboratory services, dialysis facilities, electrolyte monitoring, and kidney transplant support, our team ensures precise evaluation and reliable treatment. Led by highly qualified specialists like Dr. G. Sudhakar and Dr. K. Praveen, the Nephrology Department delivers trusted, accessible, and compassionate care for patients at every stage of kidney health.",

    services: [
      "Dialysis and renal replacement therapy",
      "Kidney transplant support and post-transplant care",
      "Blood pressure and electrolyte management",
      "Chronic kidney disease monitoring",
      "Acute kidney injury management",
      "Preventive kidney health programs",
      "Kidney stone evaluation and treatment",
      "Patient education and lifestyle counseling"
    ],

    conditions: [
      "Chronic kidney disease",
      "Kidney stones",
      "Hypertension-related kidney issues",
      "Glomerulonephritis",
      "Acute kidney injury",
      "Electrolyte imbalances",
      "Kidney transplant care",
      "Renal infections and complications"
    ],

    doctors: [
      {
        name: "Dr. G. Sudhakar",
        designation: "Nephrologist",
        about:
          "Dr. G. Sudhakar is an experienced nephrologist specializing in chronic kidney disease, dialysis, and renal health management. He is known for his precise diagnostic skills and patient-focused care.",
        qualifications: ["M.D.", "D.M."],
        status: "On-call available",
        experience: "15+ years",
        photo: "/images/doctors/sudhakar.jpg"
      },
      {
        name: "Dr. K. Praveen",
        designation: "Nephrologist",
        about:
          "Dr. K. Praveen specializes in kidney health, acute and chronic renal disorders, and post-transplant care. He provides personalized treatment plans for optimal kidney function and patient well-being.",
        qualifications: ["M.D.", "D.M.", "SGPGI"],
        status: "On-call available",
        experience: "12+ years",
        photo: "/images/doctors/praveen.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Kidney Care",
        description:
          "Comprehensive treatment for all kidney-related conditions by highly skilled nephrologists.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Dialysis & Treatment",
        description:
          "State-of-the-art dialysis facilities and modern renal care equipment for accurate management.",
        icon: FiActivity
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Customized kidney care programs including lifestyle guidance, preventive measures, and long-term monitoring.",
        icon: FiHeart
      },
      {
        title: "Proven Clinical Excellence",
        description:
          "Trusted nephrology care with successful outcomes and a patient-centered approach.",
        icon: FiAward
      }
    ]
  },

  // 10. General Surgery
  {
    id: 10,
    name: "General Surgery",
    slug: "general-surgery",
    image: "/images/departments/general-surgery.jpg",

    overview:
      "Our General Surgery Department provides expert surgical care, including emergency, elective, and minimally invasive procedures, ensuring precise treatment and optimal patient outcomes.",

    about:
      "The General Surgery Department offers comprehensive surgical care for a wide range of conditions, emphasizing patient safety, accurate diagnosis, and effective treatment. Our experienced surgeons specialize in laparoscopic surgeries, hernia repairs, appendectomies, gallbladder surgeries, and trauma management. We provide end-to-end care from pre-operative evaluation to post-operative monitoring, ensuring faster recovery and minimal complications. Supported by advanced operation theaters, modern surgical equipment, and skilled nursing teams, our department delivers high-quality surgical services. Led by senior surgeon Dr. G. Prashanth Kumar, with extensive expertise in both elective and emergency procedures, the General Surgery Department is committed to providing trusted, precise, and compassionate surgical care for patients of all ages.",

    services: [
      "Laparoscopic surgery",
      "Hernia repair",
      "Appendectomy",
      "Gallbladder surgery",
      "Abdominal tumor surgery",
      "Trauma and emergency surgery",
      "Post-operative care and monitoring",
      "Minimally invasive procedures"
    ],

    conditions: [
      "Hernias",
      "Gallstones",
      "Appendicitis",
      "Abdominal tumors",
      "Trauma injuries",
      "Digestive tract disorders",
      "Soft tissue surgeries",
      "Post-surgical complications"
    ],

    doctors: [
      {
        name: "Dr. G. Prashanth Kumar",
        designation: "General Surgeon",
        about:
          "Dr. G. Prashanth Kumar is an experienced general surgeon specializing in minimally invasive and complex surgical procedures. He is known for precise surgical techniques and patient-centered care.",
        qualifications: ["M.S."],
        status: "On-call available",
        experience: "15+ years",
        photo: "/images/doctors/prashanth.jpg"
      }
    ],

    highlights: [
      {
        title: "Experienced Surgeons",
        description:
          "Specialists in laparoscopic, emergency, and elective surgeries with precision and expertise.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Surgical Facilities",
        description:
          "Modern operation theaters, advanced surgical equipment, and post-operative care units.",
        icon: FiActivity
      },
      {
        title: "Patient Safety Focus",
        description:
          "Strict protocols, thorough pre-operative assessment, and personalized surgical plans.",
        icon: FiHeart
      },
      {
        title: "Proven Surgical Success",
        description:
          "High success rates for routine and complex surgeries, ensuring patient satisfaction and optimal outcomes.",
        icon: FiAward
      }
    ]
  },

  // 11. Anesthesiology
  {
    id: 11,
    name: "Anesthesiology",
    slug: "anesthesiology",
    image: "/images/departments/anesthesiology.jpg",

    overview:
      "Our Anesthesiology Department provides expert anesthesia care for surgeries and critical care, ensuring patient safety, comfort, and precise pain management throughout procedures.",

    about:
      "The Anesthesiology Department delivers comprehensive anesthesia and perioperative care for all surgical procedures and critical care needs. Our team specializes in general anesthesia, regional anesthesia, and advanced pain management to ensure patient safety and comfort before, during, and after surgery. We provide meticulous pre-operative evaluation, continuous monitoring during procedures, and post-operative pain management for optimal recovery. Supported by modern anesthesia machines, monitoring equipment, and a highly skilled critical care team, our anesthesiologists work closely with surgeons and other specialists to ensure seamless surgical outcomes. Led by Dr. B.J. Arjun Kumar, an experienced anesthesiologist with expertise in perioperative and critical care management, the department is committed to delivering trusted, precise, and compassionate anesthesia services.",

    services: [
      "General anesthesia",
      "Regional anesthesia",
      "Pain management",
      "Critical care support",
      "Pre-operative evaluation",
      "Post-operative pain management",
      "Emergency anesthesia support",
      "Sedation for diagnostic procedures"
    ],

    conditions: [
      "Surgical anesthesia",
      "Chronic pain management",
      "Post-operative pain",
      "ICU sedation",
      "Emergency anesthesia",
      "Pain related to medical procedures",
      "Sedation for high-risk surgeries"
    ],

    doctors: [
      {
        name: "Dr. B.J. Arjun Kumar",
        designation: "Anesthesiologist",
        about:
          "Dr. B.J. Arjun Kumar is an experienced anesthesiologist specializing in perioperative care, critical care management, and pain control. He is known for ensuring patient safety and comfort during all procedures.",
        qualifications: ["MBBS", "D.A."],
        status: "On-call available",
        experience: "15+ years",
        photo: "/images/doctors/arjun-kumar.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Anesthesiologists",
        description:
          "Highly skilled specialists providing precise perioperative and pain management care.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Monitoring",
        description:
          "State-of-the-art anesthesia machines and monitoring systems for safe procedures.",
        icon: FiActivity
      },
      {
        title: "Patient Safety & Comfort",
        description:
          "Ensuring smooth, pain-free, and safe anesthesia experiences for every patient.",
        icon: FiHeart
      },
      {
        title: "Proven Excellence",
        description:
          "Trusted anesthesia services with consistent high-quality outcomes and patient satisfaction.",
        icon: FiAward
      }
    ]
  },

  // 12. Pathology
  {
    id: 12,
    name: "Pathology",
    slug: "pathology",
    image: "/images/departments/pathology.jpg",

    overview:
      "Our Pathology Department provides comprehensive diagnostic services with precise testing for early disease detection, accurate treatment planning, and reliable lab support, ensuring high-quality healthcare.",

    about:
      "The Pathology Department serves as a vital part of our hospital, offering comprehensive diagnostic services to support accurate and timely medical care. Our experts specialize in blood tests, biopsies, histopathology, cytology, and microbiology to diagnose infections, blood disorders, cancers, hormonal imbalances, and genetic conditions. Using advanced laboratory technologies and modern testing methods, we deliver precise, reliable, and rapid reports that assist physicians in creating effective treatment plans. Our patient-centered approach ensures quality, accuracy, and seamless support for better health outcomes. Led by Dr. B. Beeshma, an experienced pathologist, the department combines clinical expertise with cutting-edge lab infrastructure to provide trusted and efficient diagnostic care.",

    services: [
      "Blood tests",
      "Biopsies",
      "Histopathology",
      "Cytology",
      "Microbiology tests",
      "Hormonal and metabolic testing",
      "Genetic testing",
      "Infection screening",
      "Cancer marker analysis"
    ],

    conditions: [
      "Infections",
      "Cancer detection",
      "Blood disorders",
      "Hormonal disorders",
      "Genetic conditions",
      "Chronic disease monitoring",
      "Immune system disorders"
    ],

    doctors: [
      {
        name: "Dr. B. Beeshma",
        designation: "Pathologist",
        about:
          "Dr. B. Beeshma is an experienced pathologist specializing in laboratory diagnostics and disease detection. Known for precise analysis and reliable interpretation of test results, he ensures high-quality diagnostic care.",
        qualifications: ["M.D."],
        status: "On-call available",
        experience: "12+ years",
        photo: "/images/doctors/beeshma.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Pathologists",
        description:
          "Highly qualified specialists providing precise and reliable diagnostic services.",
        icon: FiUserCheck
      },
      {
        title: "Modern Lab Facilities",
        description:
          "State-of-the-art laboratory equipment ensuring accurate and timely results.",
        icon: FiActivity
      },
      {
        title: "Reliable Reports",
        description:
          "Fast and detailed diagnostic reports to assist in effective treatment planning.",
        icon: FiHeart
      },
      {
        title: "Trusted Diagnostics",
        description:
          "High-standard pathology services supporting comprehensive patient care.",
        icon: FiAward
      }
    ]
  },

  // 13. Urology
  {
    id: 13,
    name: "Urology",
    slug: "urology",
    image: "/images/departments/urology.jpg",

    overview:
      "Our Urology Department provides comprehensive care for urinary tract and male reproductive system disorders, offering both surgical and non-surgical treatments with expert urologists and advanced technology.",

    about:
      "The Urology Department specializes in the diagnosis, treatment, and management of urinary tract and male reproductive system conditions. Our experienced urologists provide comprehensive care for kidney stones, prostate disorders, urinary incontinence, male infertility, and bladder problems. Using modern diagnostic tools and minimally invasive surgical techniques, we ensure accurate evaluation and effective treatment for both common and complex urological conditions. We follow a patient-centered approach, emphasizing early detection, preventive care, and personalized treatment plans for optimal outcomes. Led by Dr. P. Ashok Kumar, a highly qualified urologist with expertise in M.S. and M.Ch., the department combines clinical excellence with advanced infrastructure to deliver trusted and compassionate urological care.",

    services: [
      "Kidney stone treatment",
      "Prostate care",
      "Urinary incontinence management",
      "Laparoscopic urology",
      "Male infertility treatment",
      "Bladder disorder management",
      "Endourology procedures",
      "Uro-oncology support",
      "Preventive urology consultations"
    ],

    conditions: [
      "Kidney stones",
      "Prostate disorders",
      "Urinary tract infections",
      "Bladder problems",
      "Male infertility",
      "Urinary incontinence",
      "Urological cancers",
      "Obstructive uropathy"
    ],

    doctors: [
      {
        name: "Dr. P. Ashok Kumar",
        designation: "Consultant Urologist",
        about:
          "Dr. P. Ashok Kumar is an experienced urologist specializing in urinary tract disorders, prostate care, male infertility, and minimally invasive urological procedures. Known for precise diagnosis and patient-focused treatment plans.",
        qualifications: ["M.S.", "M.Ch."],
        status: "On-call available",
        experience: "15+ years",
        photo: "/images/doctors/ashok-kumar.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Urologists",
        description: "Specialized care for urinary tract and male reproductive health.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Urology Care",
        description: "Modern diagnostics and minimally invasive surgical treatments.",
        icon: FiActivity
      },
      {
        title: "Personalized Treatment Plans",
        description: "Customized care for each patient based on condition and needs.",
        icon: FiHeart
      },
      {
        title: "Proven Outcomes",
        description: "High success rates in managing complex urological conditions.",
        icon: FiAward
      }
    ]
  },

  // 14. Dermatology
  {
    id: 14,
    name: "Dermatology",
    slug: "dermatology",
    image: "/images/departments/dermatology.jpg",

    overview:
      "Our Dermatology Department provides expert medical care for skin, hair, and nail conditions, offering advanced treatments and personalized solutions for patients of all ages.",

    about:
      "The Dermatology Department specializes in diagnosing, treating, and managing a wide range of skin, hair, and nail conditions. Our experienced dermatologists provide comprehensive care for acne, pigmentation disorders, eczema, psoriasis, hair fall, fungal infections, and cosmetic concerns. Using modern diagnostic tools, dermatoscopy, and safe therapeutic procedures, we ensure accurate evaluation and effective treatments for both medical and aesthetic skin issues. We follow a patient-centered approach emphasizing long-term skincare, preventive dermatology, and lifestyle guidance to maintain healthy, radiant skin. Led by Dr. Purnaiah, a skilled dermatologist with expertise in M.D. Dermatology, the department combines clinical knowledge with advanced procedures such as chemical peels, cryotherapy, and minor dermatological surgeries to deliver trusted, high-quality skin care.",

    services: [
      "Skin, hair, and nail consultations",
      "Acne and pigmentation treatment",
      "Eczema and psoriasis management",
      "Fungal and bacterial infection treatment",
      "Hair fall and scalp disorder treatment",
      "Allergy testing and treatment",
      "Chemical peels and cosmetic procedures",
      "Wart and mole removal",
      "Anti-aging and skin rejuvenation treatments"
    ],

    conditions: [
      "Acne and scars",
      "Pigmentation disorders",
      "Eczema and dermatitis",
      "Psoriasis",
      "Hair fall and dandruff",
      "Skin allergies",
      "Fungal infections",
      "Warts and moles",
      "Sun damage and premature aging"
    ],

    doctors: [
      {
        name: "Dr. Purnaiah",
        designation: "Consultant Dermatologist",
        about:
          "Dr. Purnaiah is an experienced dermatologist specializing in acne, pigmentation, eczema, hair disorders, and cosmetic dermatology. He is known for accurate diagnosis and personalized patient care.",
        qualifications: ["M.D. Dermatology"],
        status: "Available",
        experience: "12+ years",
        photo: "/images/doctors/purnaiah.jpg"
      }
    ],

    highlights: [
      {
        title: "Advanced Skin Treatments",
        description:
          "State-of-the-art dermatology care using safe and effective procedures for medical and cosmetic skin concerns.",
        icon: FiStar
      },
      {
        title: "Comprehensive Skin Care",
        description:
          "Full-range solutions for both medical and aesthetic skin issues.",
        icon: FiLayers
      },
      {
        title: "Expert Dermatologists",
        description:
          "Qualified specialists delivering accurate diagnosis and personalized treatment plans.",
        icon: FiAward
      },
      {
        title: "Modern Diagnostic Support",
        description:
          "Equipped with dermatoscopy, allergy testing, and advanced treatment facilities for precise skin care.",
        icon: FiActivity
      }
    ]
  },


  // 15. Physiotherapy
  {
    id: 15,
    name: "Physiotherapy",
    slug: "physiotherapy",
    image: "/images/departments/physiotherapy.jpg",

    overview:
      "Our Physiotherapy Department provides expert rehabilitation and therapeutic care for injury recovery, mobility improvement, and pain management using advanced techniques and personalized treatment plans.",

    about:
      "The Physiotherapy Department is dedicated to helping patients regain mobility, reduce pain, and recover from injuries or surgeries. Our experienced physiotherapists provide comprehensive rehabilitation services including post-surgical therapy, sports injury management, exercise therapy, manual therapy, and chronic pain relief. We focus on personalized treatment plans tailored to each patient’s needs to ensure effective recovery and long-term physical wellness. Using modern equipment and evidence-based therapy techniques, our team delivers precise assessment, goal-oriented exercises, and functional rehabilitation for faster and safer recovery. Led by Dr. T. Shiva Prasad, a skilled physiotherapist with B.P.T. and M.I.A.P. qualifications, the department emphasizes patient-centered care, quality rehabilitation, and improved physical health outcomes.",

    services: [
      "Post-surgical rehabilitation",
      "Sports injury therapy",
      "Pain management",
      "Exercise therapy",
      "Manual therapy",
      "Mobility improvement programs",
      "Functional rehabilitation",
      "Postural correction",
      "Balance and coordination training"
    ],

    conditions: [
      "Back pain",
      "Joint injuries",
      "Post-surgical rehabilitation",
      "Sports injuries",
      "Mobility disorders",
      "Chronic pain",
      "Neurological rehabilitation"
    ],

    doctors: [
      {
        name: "Dr. T. Shiva Prasad",
        designation: "Physiotherapist",
        about:
          "Dr. T. Shiva Prasad is an experienced physiotherapist specializing in rehabilitation, injury recovery, and mobility improvement through personalized exercise and therapy plans.",
        qualifications: ["B.P.T.", "M.I.A.P."],
        status: "Available",
        experience: "10+ years",
        photo: "/images/doctors/sunil.jpg"
      }
    ],

    highlights: [
      {
        title: "Expert Physiotherapists",
        description:
          "Highly qualified specialists providing personalized rehabilitation and mobility improvement.",
        icon: FiUserCheck
      },
      {
        title: "Advanced Therapy Facilities",
        description:
          "State-of-the-art equipment for effective and safe physiotherapy sessions.",
        icon: FiActivity
      },
      {
        title: "Personalized Rehab Plans",
        description:
          "Customized therapy programs designed to meet individual patient needs and recovery goals.",
        icon: FiHeart
      },
      {
        title: "Proven Rehabilitation Success",
        description:
          "Effective recovery programs for faster healing and improved functional outcomes.",
        icon: FiAward
      }
    ]
  }
];

export default departmentsData;
