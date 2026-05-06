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
        'Relay is a clinical handoff assistant I built during the Anthropic Health and Wellness Hackathon after hearing how stressful shift-change communication can be for nurses. The artifact is a full product, not just a prototype: a web app where a nurse can speak naturally, have that note structured into SBAR, and immediately see what is complete versus what still needs follow-up. I wanted the experience to feel like a calm second brain during one of the most time-pressured moments in a hospital workflow.',
      build:
        'Building Relay pushed me to grow in three specific areas: dependable full-stack delivery, human-centered AI behavior, and rapid iteration under pressure. On the engineering side, I connected a React frontend, FastAPI backend, and Supabase data layer into a coherent system that stayed responsive while processing live input. On the AI side, I practiced prompt and output design so results were structured, auditable, and easy to edit when the model got something wrong. On the product side, I learned to prioritize trust-building details, like explicit "open loops," because in healthcare UX, transparency matters as much as speed.',
      learned:
        'The biggest lesson was personal: I used to think "smart output" was the goal, but this project taught me that "trusted output" is the goal. In layperson terms, people do not care how advanced the model is if they cannot quickly check it, correct it, and move on confidently. That learning outcome travels well across fields. In finance, teams need clear risk summaries; in logistics, they need reliable handoff notes; in education, they need understandable feedback. The transferable skill is designing systems that reduce cognitive load and prevent avoidable mistakes when stakes are high.',
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
        'TerpSpark is a multi-agent debate artifact I built because I was frustrated by one-shot AI answers that sounded confident but skipped critical trade-offs. The context was a hackathon environment where I wanted to test whether structured disagreement could produce better reasoning. Instead of one model giving a monologue, the system stages a debate between multiple roles so ideas are challenged before a final recommendation is shown.',
      build:
        'Creating this artifact developed my skills in multi-agent orchestration, event-stream architecture, and conversational state management. I designed role-specific agent behavior (Visionary, Critic, Judge), built streaming with SSE so users could watch thought progression in real time, and added interruption support so people could redirect the system mid-flow without losing context. I also improved my system-design judgment by balancing three competing concerns at once: response speed, stability, and cost.',
      learned:
        'I learned that better outcomes usually come from better process, not just better models. In plain language: if one answer is allowed to go unchallenged, weak ideas slip through; when ideas are forced through critique, quality improves. This made me a more thoughtful builder because I now design "checks and balances" into AI systems from day one. Those skills transfer naturally to research peer review, security red-teaming, product decision reviews, and any job where high-quality thinking requires structured challenge.',
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
        'Floradex is an end-to-end plant disease diagnosis artifact I built to make technical ML useful for real people, especially users who cannot wait for expensive or slow lab workflows. The context was translating a model project into something a person could actually use: upload a plant image, get a fast diagnosis, and take action without needing deep technical knowledge.',
      build:
        'This project helped me develop practical ML engineering skills across the full lifecycle: cleaning and augmenting image data, training and validating a CNN in PyTorch, exposing inference through a Flask API, and building a frontend that made results readable instead of intimidating. I also learned to integrate authentication and secure storage early, which changed how I think about responsible product design. The artifact reflects not only model performance, but also the surrounding reliability and usability work that makes a tool trustworthy.',
      learned:
        'My biggest learning outcome was that ML value comes from delivery, not accuracy alone. In layperson terms, a "98% model" is not enough if users do not understand the result, cannot trust the workflow, or cannot recover from mistakes. This shaped how I now approach every AI project: build for clarity, reliability, and safety from the start. Those skills transfer directly to healthcare diagnostics, fintech risk scoring, and enterprise automation, where people need predictions they can interpret and act on with confidence.',
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
        "This artifact is my ongoing undergraduate research in UMD's FIRE program under Professor Shabnam Jabeen, focused on quantum machine learning on real IonQ hardware. The context matters deeply: unlike classroom simulation work, this environment includes noise, hardware constraints, and unpredictable behavior, so every result has to be earned through careful experimentation. Working in that setting made the research feel both humbling and exciting because theory and reality did not always agree.",
      contribution:
        "I developed skills in experimental design, hybrid model implementation (Qiskit + PyTorch), and reproducible compute workflows on containers and clusters. Beyond the technical layer, I also built the communication habit of writing concise experiment logs, documenting failed runs, and translating complex quantum findings into clear updates teammates could act on. A major part of my contribution was making the work easier to validate and continue, not just running isolated experiments.",
      impact:
        'I learned that strong research is less about proving yourself right and more about finding out what is true. In layperson language, this means being willing to say "this did not work, and here is why" with the same clarity as reporting a success. That mindset gave me transferable skills in evidence-based reasoning, uncertainty communication, and decision discipline. These are valuable in data science, product experimentation, consulting, and policy work, where choices should be guided by measurement rather than assumptions.',
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
        'This artifact is my four-year journey as software lead on a competitive robotics team, where the context was high-pressure build seasons, hard deadlines, and a constantly changing team. I was not only writing code for performance-critical systems; I was also building a culture where newer students could learn quickly, contribute confidently, and trust the process during competition stress.',
      contribution:
        'I developed skills in control-system programming, real-time performance tuning, mentorship, and team process design. I wrote and optimized WPILib code to improve robot responsiveness and battery efficiency, but I also treated onboarding as an engineering problem: structured training plans, code review habits, and shared conventions that made team output more consistent. Training 27 teammates taught me how to turn tacit knowledge into repeatable systems others could apply independently.',
      impact:
        'The most meaningful lesson was that leadership in technical spaces is measured by what the team can sustain, not what one person can build alone. In simple terms, great code is not enough if nobody else can maintain it when pressure hits. This experience strengthened transferable skills in coaching, operational planning, and communication across skill levels. Those skills are useful in any environment where long-term reliability depends on shared ownership, including startups, research labs, and enterprise teams.',
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
        'This artifact is my internship work supporting a LumiCharge product launch, where I built data and automation systems to support business strategy under real deadlines. The context was fast-moving and imperfect: decisions still had to be made even when data was messy, incomplete, or changing daily.',
      contribution:
        'I developed skills in web data collection, data cleaning, workflow automation, and translating analysis into actionable recommendations. I built scraping pipelines to identify vendors, automated categorization tasks that were previously manual, and connected those outputs to a practical go-to-market plan stakeholders could use immediately. This work strengthened my ability to combine technical execution with business communication.',
      impact:
        'I learned that technical output only matters when it changes decisions or saves real time for real people. In layperson terms, shaving even a few minutes off a repeated task can create huge value over weeks or months. That insight shaped how I scope projects now: start with the operational bottleneck, then automate with purpose. These are highly transferable skills for product, operations, consulting, finance, and any role where better data workflows lead to better outcomes.',
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
