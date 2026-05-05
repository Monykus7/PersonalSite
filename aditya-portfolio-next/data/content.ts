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
        "Nursing shift handoffs are error-prone and unstructured — critical patient info gets lost between verbal exchanges. No tooling existed that could take a nurse's natural speech and produce a structured, flagged SBAR document instantly.",
      build:
        'Built a full-stack clinical handoff assistant: nurses speak or type freeform notes, and the app uses an LLM backend (NVIDIA NIM) to structure output into SBAR format with open-loop flags. React frontend, FastAPI backend, Supabase Postgres. Won 1st place at the Anthropic Health & Wellness Hackathon.',
      learned:
        'Prompt engineering for reliability in high-stakes domains, real-time streaming from LLM APIs to a React UI, and how to scope an ambitious product to a 24-hour build window.',
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
        "LLMs hallucinate and confirm bias when used in isolation — a single model's reasoning is hard to stress-test without an adversarial counterpart.",
      build:
        'Designed a Visionary-Critic-Judge multi-agent debate engine where three LLM agents argue a topic, challenge each other, and converge on a verdict. Features real-time SSE token streaming so users can watch the debate unfold, and users can interject mid-debate. State persists in Azure Cosmos DB.',
      learned:
        'Multi-agent orchestration patterns, SSE streaming in a React/Python stack, and the practical limits of LLM "reasoning" when forced into adversarial dialogue.',
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
        'Small-scale farmers lack access to fast, cheap crop disease diagnosis — traditional lab testing is slow and expensive.',
      build:
        'Trained a custom CNN in PyTorch on a labeled plant disease dataset, achieving 98% classification accuracy. Wrapped it in a Flask API with a JavaScript/Tailwind frontend where users upload a photo and receive an instant diagnosis. Includes user auth and encrypted data storage.',
      learned:
        'End-to-end ML deployment (training → API → UI), data augmentation strategies for small datasets, and secure handling of user-uploaded files.',
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
        "Undergraduate research position within UMD's FIRE program under Professor Shabnam Jabeen. Work runs on real IonQ quantum hardware — not simulated environments.",
      contribution:
        "Designing quantum compression algorithms that integrate IBM's Qiskit API with PyTorch. Circuits currently achieve 93% accuracy with a theoretically exponential speedup over classical counterparts. Also responsible for containerized model runs on research clusters.",
      impact:
        'First hands-on experience running actual quantum computations on trapped-ion hardware. Developing intuition for where quantum approaches genuinely outperform classical ones versus where the overhead is not worth it.',
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
        'Led the software division of a competitive high school robotics team (Portola FRC) over four years, growing from contributor to sole software lead.',
      contribution:
        'Built a WPILib-based autonomous and teleop control algorithm that improved rotational speed by 40% and battery efficiency by 30%. Trained 27 team members in Java from scratch and ran internal workshops and judge-facing presentations.',
      impact:
        'First experience leading a technical team under real competitive pressure. Learned that readable, well-documented code matters far more when 27 other people need to maintain it.',
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
        'Summer internship at Rapid Conn Inc / LumiCharge, a consumer electronics company, supporting a product launch for their flagship LED lamp.',
      contribution:
        'Built web scraping pipelines to identify and qualify vendors, increasing lead generation by 20%. Designed a go-to-market plan with a projected 10% sales uplift. Built Excel macros to automate categorization of scraped advertiser data.',
      impact:
        'First professional engineering role. Learned to translate data work into business outcomes — and that automation that saves 5 hours/week compounds fast over a summer.',
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
