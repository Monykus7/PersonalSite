export type ProjectNarrative = {
  problem: string
  build: string
  learned: string
}

export type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  github: string
  highlight: boolean
  /** Longer narrative; legacy popup copy — kept for continuity. */
  story?: string
  slug: string
  narrative: ProjectNarrative
}

export type ExperienceNarrative = {
  context: string
  contribution: string
  impact: string
}

export type ExperienceItem = {
  role: string
  org: string
  location: string
  dates: string
  bullets: string[]
  story?: string
  slug: string
  narrative: ExperienceNarrative
}

export type EducationItem = {
  school: string
  degree: string
  minors: string
  dates: string
  coursework: string[]
}

export const personalInfo = {
  name: 'Aditya Mahesh',
  phone: '949-439-2906',
  email: 'adityamahesh16@gmail.com',
  linkedin: 'https://linkedin.com/in/YOUR_HANDLE',
  github: 'https://github.com/YOUR_HANDLE',
  tagline: 'CS @ UMD | ML | Quantum Computing | Full-Stack',
  oneLiner: '',
  currentRole: 'QML Researcher @ UMD FIRE',
}

export const about =
  'Sophomore at the University of Maryland studying Computer Science with a focus on Machine Learning. Minoring in Computational Finance as well as Robotics and Autonomous Systems. Currently conducting Quantum Machine Learning research under Professor Shabnam Jabeen in the FIRE program, running real quantum computations on IonQ hardware. I build full-stack AI applications and love working at the intersection of research and engineering.'

export const skills = {
  languages: [
    'Java',
    'Python',
    'C',
    'Bash',
    'SQL',
    'JavaScript',
    'TypeScript',
    'R',
    'MATLAB',
    'HTML',
    'CSS',
    'LaTeX',
  ],
  frameworks: [
    'React',
    'PyTorch',
    'Flask',
    'Scikit-Learn',
    'OpenCV',
    'Tailwind',
    'Bootstrap',
    'JUnit',
    'FastAPI',
    'SSE',
  ],
  tools: [
    'Git',
    'Docker',
    'AWS-CLI',
    'EC2',
    'Azure Cosmos DB',
    'Firebase',
    'pandas',
    'NumPy',
    'SciPy',
    'Matplotlib',
  ],
}

export const projects: Project[] = [
  {
    title: 'Relay',
    subtitle: 'Clinical Handoff AI | 1st Place - Anthropic Hackathon (Health & Wellness) | Apr 2026',
    description:
      'A clinical handoff documentation assistant for nursing shift changes. Nurses dictate or type handoff notes; Relay structures them into SBAR format with flags and open loops using an LLM backend. Built with React, FastAPI, NVIDIA NIM, and Supabase Postgres.',
    tags: ['React', 'FastAPI', 'Python', 'NVIDIA NIM', 'Supabase', 'Web Speech API'],
    github: 'https://github.com/Monykus7/Relay',
    highlight: true,
    story:
      'We started from clinician interviews and iterated on a handoff flow that felt natural during shift changes. I focused on making the SBAR output trustworthy: clear structure, explicit open loops, and fast corrections when the model misread dictation. The hackathon taught me how much product polish matters when the user is under time pressure.',
    slug: 'relay',
    narrative: {
      problem:
        'Relay is a clinical handoff assistant I built during the Anthropic Health and Wellness Hackathon. The artifact is a working web app that turns a nurse’s spoken or typed notes into a structured SBAR handoff so the next shift can quickly understand what happened, what still needs attention, and what risks remain.',
      build:
        'I developed skills in full-stack product delivery (React + FastAPI + database integration), prompt design for reliable medical-style formatting, and real-time interaction design so output appears quickly and stays easy to correct. These skills came from shipping a complete product under tight hackathon constraints, not just building a demo screen.',
      learned:
        'I learned that in high-stakes settings, clarity and reliability matter more than flashy AI output. In plain terms: users trust systems that are predictable, easy to verify, and fast to fix. Those lessons transfer directly to other fields like finance, logistics, and education, where people also need clear summaries, clear next actions, and tools that reduce mistakes under time pressure.',
    },
  },
  {
    title: 'TerpSpark',
    subtitle: 'Multi-Agent Debate Engine | Apr 2026',
    description:
      'A Visionary-Critic-Judge multi-agent debate engine with pluggable LLM routing for adversarial stress-testing and brainstorming. Features real-time SSE token streaming with user interjections and persistent session state in Azure Cosmos DB.',
    tags: ['Python', 'React', 'Azure Cosmos DB', 'Firebase', 'SSE'],
    github: 'https://github.com/dakhp43/TerpSpark',
    highlight: false,
    story:
      'TerpSpark grew out of wanting adversarial debate instead of a single monologue from a model. I spent a lot of time on streaming UX and session persistence so users could interrupt, steer, and resume without losing context. Balancing latency, cost, and quality across multiple agents was the hardest engineering puzzle.',
    slug: 'terpspark',
    narrative: {
      problem:
        'TerpSpark is a multi-agent debate artifact I built in a hackathon context to test ideas more rigorously than a single-chatbot response. Instead of one model answering alone, multiple agents challenge each other before producing a final recommendation.',
      build:
        'I developed specific skills in multi-agent orchestration, streaming system design (SSE), and state management for long-running conversations. I also strengthened practical software architecture skills by balancing latency, reliability, and persistence while allowing user interjections in real time.',
      learned:
        'I learned, in a way that is easy to explain to non-technical audiences, that "more AI" is not always better unless the system has structure. A debate workflow improves answer quality because each step checks the previous step. That transferable pattern applies to many jobs: peer review in research, red-team checks in security, and decision review in business operations.',
    },
  },
  {
    title: 'Floradex',
    subtitle: 'Plant Disease Analysis AI | Apr 2025',
    description:
      'Full-stack web app that classifies common crop diseases from user-uploaded images using a custom CNN in PyTorch (98% accuracy). Includes secure user authentication and encrypted data storage.',
    tags: ['PyTorch', 'Flask', 'JavaScript', 'Tailwind CSS', 'CNN'],
    github: 'https://github.com/Sceptus/first-place-winners-v2',
    highlight: false,
    story:
      'Floradex was my first end-to-end ML product: training a CNN, exposing it through a web app, and thinking about authentication and data handling. The memorable lesson was that accuracy on a validation set is only part of the story; users need confidence, clear failure modes, and a responsive interface.',
    slug: 'floradex',
    narrative: {
      problem:
        'Floradex is an end-to-end plant disease diagnosis artifact built to make crop health feedback faster for users who do not have immediate lab access. The context was creating a usable ML product where someone can upload a plant image and get a practical result quickly.',
      build:
        'I developed concrete skills in machine learning model development, API design, and secure full-stack integration. This included dataset preparation, CNN training, model serving through Flask, and building a clean upload-and-result user experience with authentication and protected data handling.',
      learned:
        'I learned that a strong model is only one part of a good solution; users also need understandable outputs, dependable performance, and safe data handling. These skills transfer broadly to healthcare, fintech, and enterprise software because every field values trustworthy predictions, secure user workflows, and clear communication of uncertainty.',
    },
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Quantum Machine Learning Researcher',
    org: 'First Year Innovation and Research Experience - UMD',
    location: 'College Park, MD',
    dates: 'Sep 2024 - Present',
    bullets: [
      'Conducting QML research under Professor Shabnam Jabeen using IonQ hardware for real quantum entanglement and computations.',
      "Designing quantum compression algorithms integrating IBM's Qiskit API with PyTorch; circuits achieved 93% accuracy with theoretically exponential speedup over classical compression.",
      'Running models on containers and clusters.',
    ],
    story:
      'Working on real IonQ hardware forced me to internalize noise, circuit depth, and reproducibility in a way simulations never did. I learned to treat each experiment like a small engineering project: hypothesis, instrumentation, results, and a honest postmortem when the hardware disagreed with the notebook.',
    slug: 'qml-researcher',
    narrative: {
      context:
        "This artifact is my ongoing undergraduate research work in UMD's FIRE program under Professor Shabnam Jabeen. The context is applied quantum machine learning on real IonQ hardware, where results must account for real device noise and hardware limits rather than ideal classroom simulations.",
      contribution:
        "I developed skills in experimental design, hybrid quantum-classical model building (Qiskit + PyTorch), and reproducible compute workflows using containers and clusters. I also built the communication skill of translating advanced quantum results into clear updates that collaborators can act on.",
      impact:
        'I learned that research value comes from disciplined testing and honest interpretation, not just exciting theory. In lay terms: you must prove when a new method helps and when it does not. These skills transfer to any evidence-driven role, including data science, product experimentation, and policy analysis, where careful measurement and clear reporting drive better decisions.',
    },
  },
  {
    role: 'Software Engineering Lead',
    org: 'Portola First Robotics Competition',
    location: 'Irvine, CA',
    dates: 'Oct 2020 - Jun 2024',
    bullets: [
      'Built a WPILib-based algorithm improving robot performance by 40% rotational speed and 30% battery efficiency.',
      'Trained 27 team members in Java programming, increasing team contribution by 60%.',
      'Hosted presentations and webinars to judges and program newcomers.',
    ],
    story:
      'FRC software leadership was less about writing the cleverest code and more about building systems other students could extend. I am proud of the training pipeline we built: newcomers could ship meaningful contributions within weeks, which changed how the team approached reliability and review culture.',
    slug: 'frc-lead',
    narrative: {
      context:
        'This artifact is my leadership and engineering work as software lead for a competitive robotics team over four years. The context was building dependable robot software while also growing newer programmers into effective contributors during fast competition cycles.',
      contribution:
        'I developed skills in control-system programming, performance tuning under hardware constraints, technical mentorship, and team process design. I wrote and optimized WPILib code while also creating training systems that helped 27 teammates contribute meaningful code safely.',
      impact:
        'I learned that scalable engineering is as much about people and documentation as code. For non-technical audiences: a system is only strong if others can understand, maintain, and improve it. Those skills transfer directly to software teams, operations groups, and cross-functional projects where long-term reliability depends on shared understanding.',
    },
  },
  {
    role: 'Quantitative Research Intern',
    org: 'Rapid Conn Inc - LumiCharge',
    location: 'Lake Forest, CA',
    dates: 'Jun 2021 - Aug 2021',
    bullets: [
      'Designed a go-to-market plan projected to increase flagship LED lamp sales by 10%.',
      'Implemented web scraping pipelines to find vendors, increasing lead generation by 20%.',
      'Configured Excel macros to categorize scraped advertiser data for the product launch.',
    ],
    story:
      'This internship was my first time connecting scrappy automation to a go-to-market timeline. I learned how to translate messy real-world data into something decision-makers could act on quickly, and how to scope work so it actually shipped before the launch window closed.',
    slug: 'quant-intern',
    narrative: {
      context:
        'This artifact is my internship work supporting a LumiCharge product launch, where I built data and automation support for market strategy. The context was a business-focused environment where decisions had to be made quickly with imperfect data.',
      contribution:
        'I developed skills in web data collection, data cleaning, lightweight automation, and converting analysis into business recommendations. I built scraping pipelines, automated categorization workflows, and translated findings into a practical go-to-market plan.',
      impact:
        'I learned that technical work creates the most value when it is connected to clear operational outcomes. In plain language: saving small amounts of time repeatedly can have large business impact. These transferable skills apply across finance, consulting, product, and operations roles where data-backed decisions and process automation improve results.',
    },
  },
]

export const education: EducationItem[] = [
  {
    school: 'University of Maryland, College Park',
    degree: 'B.S. Computer Science (Machine Learning)',
    minors: 'Minors: Computational Finance, Robotics',
    dates: 'Expected May 2028',
    coursework: [
      'Data Structures & Algorithms',
      'Systems Programming',
      'Artificial Intelligence',
      'Data Science',
      'Discrete Structures',
      'Applied Probability & Statistics',
      'Linear Algebra',
      'Calculus',
      'Differential Equations',
    ],
  },
]
