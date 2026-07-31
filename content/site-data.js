/*
  MAIN CONTENT FILE

  Most website text is edited here. The layout is in index.html and the
  visual design is in assets/styles.css.

  Privacy note: the public website intentionally does not publish the UAS
  registration number or QR code from the uploaded certificate.
*/

window.SITE_DATA = {
  profile: {
    name: "Khandoker Tanjim Ahammad",
    shortName: "Tanjim Ahammad",
    role: "Doctoral Researcher in Agricultural Engineering",
    affiliation: "University of Hohenheim",
    location: "Stuttgart, Germany",
    email: "khandoker.ahammad@uni-hohenheim.de",
    headline:
      "Imaging, computer vision, robotics, and intelligent sensing for agricultural systems.",
    introduction:
      "I develop reproducible imaging, robotics, and automation methods for agricultural research. My work combines drone-based thermal and RGB sensing, depth and hyperspectral imaging, computer vision, deep learning, ROS 2-based robotic systems, and modular phenotyping platforms to convert complex sensor data into reliable biological and engineering measurements.",
    availability:
      "Open to scientific collaboration and applied research partnerships.",
    links: {
      github: "https://github.com/Khandoker09",
      linkedin: "https://www.linkedin.com/in/khandokerahammad/",
      scholar:
        "https://scholar.google.com/citations?hl=en&user=GxGxFgcAAAAJ",
      researchgate:
        "https://www.researchgate.net/profile/Khandoker_Tanjim_Ahammad"
    }
  },

  researchFocus: [
    {
      title: "UAV thermal & RGB imaging",
      text:
        "Drone-based image acquisition and analysis for crop monitoring, canopy temperature assessment, spatial variability, and field-scale phenotyping."
    },
    {
      title: "Computer vision & deep learning",
      text:
        "Segmentation, detection, reconstruction, measurement, and classification methods for extracting repeatable traits from scientific images."
    },
    {
      title: "Robotics & autonomous phenotyping",
      text:
        "ROS 2-based integration of cameras, sensors, robot models, and motion systems for repeatable plant measurements. This work includes robot visualization in RViz, motion-planning workflows with MoveIt 2, and modular phenotyping-platform development."
    },
    {
      title: "Multimodal plant sensing",
      text:
        "RGB, thermal, depth, multispectral, and hyperspectral data analysis for non-destructive assessment of plant structure, stress, and nutrient response."
    }
  ],

  currentWork: [
    {
      area: "UAV sensing",
      title: "Thermal and RGB crop imaging",
      description:
        "Developing end-to-end workflows that connect flight planning and image acquisition with radiometric calibration, image processing, segmentation, spatial analysis, and field-scale trait extraction."
    },
    {
      area: "3D phenotyping",
      title: "Depth-sensor measurement of maize morphology",
      description:
        "Reconstructing maize cobs as 3D point clouds and using alignment, cross-sectional profiling, and geometric analysis to estimate length, diameter, surface area, and volume more reliably than simplified 2D methods."
    },
    {
      area: "Spectral imaging",
      title: "Early detection of phosphorus deficiency",
      description:
        "Investigating hyperspectral reflectance and absorbance signatures, preprocessing methods, and statistical learning for non-destructive assessment of phosphorus status in maize leaves."
    },
    {
      area: "Robotics & automation",
      title: "ROS 2-enabled robotic phenotyping platforms",
      description:
        "Developing modular robotic workflows for agricultural imaging and phenotyping using ROS 2. The work combines camera and sensor integration, robot-model visualization in RViz, motion-planning workflows with MoveIt 2, automated data acquisition, and repeatable experimental operation."
    },
    {
      area: "Agri-PV systems",
      title: "Particle-size-aware modelling of photovoltaic soiling",
      description:
        "Developing semi-empirical models that relate dust mass and particle size to photovoltaic output loss, supporting condition-based cleaning and more water-efficient maintenance decisions."
    }
  ],

  credentials: [
    {
      enabled: true,
      type: "UAS qualification",
      name: "EU Open Category A1/A3 Online Training",
      issuer: "Luxembourg civil aviation authority (DAC)",
      scope: "Open subcategory A1/A3",
      validUntil: "21 August 2029",
      identifier: "Not published for privacy",
      note:
        "The registration number and certificate QR code are intentionally omitted from the public website.",
      verificationUrl: ""
    }
  ],

  posters: [
    {
      year: "2026",
      title:
        "Benchmarking Depth-Sensor 3D Phenotyping of Maize Cobs Against 2D Image and Geometric Methods",
      event: "CIGR EurAgEng World Congress 2026, Torino",
      authors: "Khandoker Tanjim Ahammad, Joachim Müller",
      summary:
        "A low-cost RGB-depth pipeline reconstructs maize cobs as 3D point clouds and extracts ring-wise diameter profiles. In the reported benchmark, the 3D approach achieved a mean error of 4.6%, compared with 27.3% for the 2D method, while better representing tapered and irregular cob shapes.",
      image:
        "assets/posters/maize-cob-3d-depth-phenotyping-cigr-2026.jpg",
      pdf:
        "assets/posters/maize-cob-3d-depth-phenotyping-cigr-2026.pdf",
      external: ""
    },
    {
      year: "2026",
      title:
        "Semi-empirical prediction of dust soiling effects on Agri-PV output power: Particle size effect and implications for adaptive maintenance",
      event: "ACRIUC 2026 research poster",
      authors:
        "Khandoker Tanjim Ahammad, Janvier Ntwali, Wiomou Joévin Bonzi, Joachim Müller",
      summary:
        "The study models photovoltaic power loss under controlled dust deposition and shows that particle size strongly affects attenuation. The semi-empirical approach supports particle-size-dependent prediction and condition-based cleaning decisions for Agri-PV systems.",
      image: "assets/posters/agri-pv-dust-soiling-acriuc-2026.jpg",
      pdf: "assets/posters/agri-pv-dust-soiling-acriuc-2026.pdf",
      external: ""
    },
    {
      year: "2025",
      title:
        "Detecting phosphorus deficiency in maize plant leaves using hyperspectral imaging",
      event: "Tropentag 2025 - Digital Innovations poster session",
      authors:
        "Khandoker Tanjim Ahammad, Leon Hinrich Oehme, Alice-Jacqueline Reineke, Zeeshan, Saike Jiang, Joachim Müller",
      summary:
        "Hyperspectral imaging from 500-900 nm was used to assess phosphorus treatment and leaf developmental stage. The poster reports strong separation of Low-P and High-P treatments using PLS-DA, with R² = 0.96, and identifies the visible and red-edge regions as the most informative for phosphorus response.",
      image:
        "assets/posters/phosphorus-deficiency-maize-hyperspectral-2025.jpg",
      pdf:
        "assets/posters/phosphorus-deficiency-maize-hyperspectral-2025.pdf",
      external:
        "https://www.tropentag.de/2025/abstracts/abstracts.php?showtime=0&noID=422"
    }
  ],

  conferenceContributions: [
    {
      year: "2026",
      title:
        "Automated morphometric quantification of maize cob kernels via lightweight RGB image analysis and Cellpose-based deep learning segmentation",
      venue: "Tropentag 2026 conference contribution",
      url:
        "https://www.tropentag.de/submission/abstractlist/abstract_list.php?Name=Khandoker+Tanjim+Ahammad&personID=434&upload=poster"
    }
  ],

  publications: [
    {
      year: "2017",
      type: "Conference paper",
      title:
        "A new approach of brain MRI analysis for identifying Creutzfeldt-Jakob disease (CJD)",
      venue:
        "3rd IEEE International Conference on Electrical Information and Communication Technology",
      url: "https://ieeexplore.ieee.org/document/8275191"
    },
    {
      year: "2017",
      type: "Conference paper",
      title:
        "Design, kinematic and performance evaluation of a dual-arm bomb disposal robot",
      venue:
        "3rd IEEE International Conference on Electrical Information and Communication Technology",
      url: "https://ieeexplore.ieee.org/document/8275193"
    },
    {
      year: "2017",
      type: "Conference paper",
      title:
        "A miniaturized on-body matched antenna design and its performance evaluation at ISM band",
      venue:
        "3rd IEEE International Conference on Electrical Information and Communication Technology",
      url: "https://ieeexplore.ieee.org/document/8275170"
    },
    {
      year: "2017",
      type: "Journal article",
      title:
        "Mapping of mammalian Purkinje network on an electrically equivalent circuit",
      venue: "International Journal of Innovation and Scientific Research",
      url: ""
    },
    {
      year: "2017",
      type: "Journal article",
      title:
        "Hand gesture detection using Haar classifier with appropriate skin color, kernel sizing and automatic thresholding",
      venue: "International Journal of Scientific & Engineering Research",
      url: ""
    },
    {
      year: "2017",
      type: "Journal article",
      title:
        "Design and simulation of active and reactive power control of double-fed induction generator for wind energy conversion",
      venue: "International Journal of Scientific & Engineering Research",
      url: ""
    }
  ],

  projects: [
    {
      title: "ROS 2 robotic phenotyping platform",
      description:
        "A modular robotics workflow for integrating cameras, sensors, robot-state visualization, motion planning, and automated plant-measurement procedures.",
      technologies: [
        "ROS 2",
        "RViz",
        "MoveIt 2",
        "Computer vision",
        "Sensor integration"
      ],
      url: ""
    },
    {
      title: "SaVeD - self-service data analysis",
      description:
        "A Streamlit application for exploring, checking, summarising, and visualising CSV and Excel datasets.",
      technologies: ["Python", "Pandas", "Streamlit"],
      url: "https://github.com/Khandoker09/SaVeDv0.1"
    },
    {
      title: "DaZ - interactive dataset editor",
      description:
        "A browser-based dashboard for filtering, editing, cleaning, and exporting tabular data.",
      technologies: ["Python", "Dash", "Plotly"],
      url: "https://github.com/Khandoker09/daZ-v0.2"
    },
    {
      title: "Parking-space monitor",
      description:
        "An OpenCV prototype that analyses video to count occupied and available parking spaces.",
      technologies: ["Python", "OpenCV", "Video analysis"],
      url: "https://github.com/Khandoker09/Parkspacemonitor"
    }
  ],

  education: [
    {
      year: "2024-present",
      degree: "Doctoral Researcher",
      institution: "University of Hohenheim",
      detail:
        "Agricultural engineering research focused on imaging, robotics, automation, and plant phenotyping."
    },
    {
      year: "2024",
      degree: "MSc, Microsystems and Microelectronics",
      institution: "Hamburg University of Technology (TUHH)",
      detail:
        "Master's thesis on deep-learning-based noise detection in high-density point-cloud measurements from white-light interferometry."
    },
    {
      year: "2016",
      degree: "BSc, Electrical and Electronic Engineering",
      institution: "American International University-Bangladesh",
      detail:
        "Electrical engineering, electronics, image data, biomedical systems, and robotics."
    }
  ],

  skills: {
    "Imaging & sensing": [
      "UAV thermal imaging",
      "RGB imaging",
      "Depth sensing",
      "Hyperspectral imaging",
      "Point-cloud processing",
      "Image calibration"
    ],

    "AI & computer vision": [
      "Image segmentation",
      "Object detection",
      "Classification",
      "Deep learning",
      "3D reconstruction",
      "Feature extraction"
    ],

    "Robotics & automation": [
      "ROS 2",
      "RViz",
      "MoveIt 2",
      "Robot visualization",
      "Motion planning",
      "Sensor integration",
      "Automated data acquisition",
      "Modular phenotyping platforms"
    ],

    "Agricultural engineering": [
      "Plant phenotyping",
      "UAV-based crop sensing",
      "Agri-PV systems",
      "Experimental workflows",
      "Multimodal sensing",
      "Research data pipelines"
    ],

    "Software & development": [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "Git"
    ]
  }
};
