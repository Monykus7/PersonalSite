export type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  github: string
  highlight: boolean
  /** Longer narrative; shown in a popup when set. */
  story?: string
}

export type ExperienceItem = {
  role: string
  org: string
  location: string
  dates: string
  bullets: string[]
  /** Longer narrative; shown in a popup when set. */
  story?: string
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
  oneLiner: 'CS @ UMD · ML Researcher · Full-Stack Builder',
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
