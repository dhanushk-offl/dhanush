interface User {
    name: string
    nameWithoutSuffix: string
    role: string
    nickname: string
    ed: string
    about: string
    orgs: Organization[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    experience: Experience[]
    contact_links: ContactLink[]
}

interface Organization {
    name: string
    role: string
    logo: string
    href: string
}

interface Education {
    name: string
    href: string
    school: string
    timespan: string
}

interface Skill {
    name: string
    icon: string
    site: string
}

interface Experience {
    role: string
    timespan: string
    href: string
    external_links: ExternalLink[]
    description: string
}

interface Project {
    role: string
    timespan: string
    href: string
    short_description: string
    external_links: ExternalLink[]
    tags: string[]
    description: string
}

interface ExternalLink {
    label: string
    url: string
}

interface ContactLink {
    title: string
    text: string
    href: string
    ctaText: string
    icon: string
}

let baseIconsURL = 'https://cdn.simpleicons.org';


export let user: User = {
    name: "Dhanush K",
    nameWithoutSuffix: "Dhanush",
    role: "AI Engineer, Researcher, Technologist, Writer, Technologist & Community Enthusiast",
    nickname: "Dhanu",
    ed: "Technologist, AI Engineer, Writer, Podcaster, Student",
    about: "Hey there! 👋 I'm a Developer Technology Intern at Nvidia, passionate about innovation, and an AI and Computer Ethics Research Fellow at Cambridge University, exploring the ethical dimensions of technology. With experience at Google and now mentoring at Naan Mudhalvan through the Government of Tamil Nadu, India, I also serve as the Technical Regional Leader for UN Youth Volunteers in India, driving impactful change in tech. As the Podcast Host of Idunammatechu, I blend expertise and passion to amplify voices and ideas. With degrees in IT from Anna University and Data Science from MITx, I'm always ready for new adventures, whether it's tech, food, cars, or travel. 🍵💻",
    orgs: [
        {
            name: "Nvidia Corporation",
            role: "Developer Technologist - Intern",
            logo: `${baseIconsURL}/nvidia`,
            href: "https://nvidia.com"
        },
        {
            name: "Google Developers Group - Chennai",
            role: "Community Volunteer",
            logo: "https://res.cloudinary.com/dwir71gi2/image/upload/v1721160573/gdglogo.0229df09_fiz3vu.png",
            href: "https://gdgchennai.in"
        },
        {
            name: "Chennai React.Js (React Community)",
            role: "Organizer",
            logo: "https://res.cloudinary.com/dwir71gi2/image/upload/v1721161270/Untitled_design_6_x9kppn.png",
            href: "https://lu.ma/chennai-react"
        },
    ],
    education: [
        {
            name: "Bachelor of Technology (Information Technology)",
            href: "https://annauniv.edu/",
            school: "Anna University",
            timespan: "November 2022 - Present"
        },
        {
            name: "MicroMasters (Statistics & Data Science)",
            href: "https://micromasters.mit.edu/",
            school: "Massachusetts Institute of Technology",
            timespan: "August 2023 - Present"
        }
    ],
    skills: [
        {
            name: 'Python',
            icon: `${baseIconsURL}/python`,
            site: 'https://python.org'
        },
        {
            name: 'Svelte',
            icon: `${baseIconsURL}/svelte`,
            site: 'https://svelte.dev'
        },
        {
            name: 'Kotlin',
            icon: `${baseIconsURL}/kotlin`,
            site: 'https://kotlinlang.org'
        },
        {
            name: 'Javascript',
            icon: `${baseIconsURL}/javascript`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'PHP',
            icon: `${baseIconsURL}/php`,
            site: 'https://www.php.net'
        },
        {
            name: 'MySQL',
            icon: `${baseIconsURL}/mysql`,
            site: 'https://www.mysql.com'
        },
        {
            name: 'React',
            icon: `${baseIconsURL}/react`,
            site: 'https://www.react.dev'
        },
        {
            name: 'Version Control (Git)',
            icon: `${baseIconsURL}/git`,
            site: 'https://git-scm.com/'
        },
        {
            name: 'GCP',
            icon: `${baseIconsURL}/googlecloud`,
            site: 'https://www.cloud.google.com'
        },
        {
            name: 'Node',
            icon: `${baseIconsURL}/npm`,
            site: 'https://www.npmjs.com/'
        },
        {
            name: 'Figma',
            icon: `${baseIconsURL}/figma`,
            site: 'https://www.figma.com/about/'
        }
    ],
    projects: [
        {
            role: "Creator/ Developer",
            href: "https://github.com/dhanushk-offl/revibe-event",
            timespan: "April 2024",
            short_description: "Svelte Web Applications for Community Event Management",
            external_links: [
                {
                    url: 'https://github.com/dhanushk-offl/revibe-event',
                    label: 'Repo Link'
                },
                {
                    url: 'https://revibe.in.net',
                    label: 'Revibe 2024'
                }
            ],
            tags: ['Svelte', 'Tailwindcss', 'UI Design', 'PHP', 'MySQL'],
            description: "Created a Complete Event Management web applications links named <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://revibe.in.net'>Revibe Event</a> for a College Event with efficient web client and server optimization using several frameworks packages",
        },
        {
            role: "Creator",
            href: "",
            timespan: "Febuary 2023 - Present",
            short_description: " Yours Yoga Assistant - Wear OS",
            external_links: [],
            tags: ['IoT', 'Wear OS', 'AI', 'App Dev'],
            description: "Creating an app for suggesting the Yoga exercises based on upon their live health conditions like BP Level, Blood Oxygen Level, Breathing Speed, etc.  Based on the numbers recorded by the sensors, the fine dataset from expert doctors will suggest the Yoga exercises to get protected from various diseases. ",
        },
        {
            role: "Desginer/ Developer",
            href: "https://itsdhanu.me",
            timespan: "August 2024",
            short_description: "Personal Portfolio",
            external_links: [
                {
                    url: 'https://github.com/dhanushk-offl/dhanush',
                    label: 'Repo Link'
                },
                {
                    url: 'https://itsdhanu.me',
                    label: 'Dhanush Kandhan Portfolio'
                }
            ],
            tags: ['Svelte', 'TailwindCSS', 'Cloudfare', 'Web'],
            description: "Designed and Developed a responsive portfolio using sveltekit framework, for fast and reliable performance and well experienced UI",
        }
    ],
    experience: [
                {
            role: "Software Engineer Intern @Talentship.io",
            href: "https://talentship.io/en/",
            timespan: " Aug. 2024 - Present",
            external_links: [
                {
                    url: 'https://talentship.io/en/',
                    label: 'Website'
                },
            ],
            description: `
                • Working With Front-ends Projects using React Framework for Smart Company Goals Management System <br > <br >
                • Designing the aspect applications to ensure the proper acquirements of web apps!`
        },
        {
            role: "Research Fellow - AI @Cambridge University",
            href: "https://www.cambridge.org",
            timespan: " Jan. 2024 - Present",
            external_links: [
                {
                    url: 'https://www.cambridge.org/engage/coe/article-details/655373de2c3c11ed715fa8bd',
                    label: 'Website'
                },
            ],
            description: `
                • Developed and authored a research paper on Artificial Intelligence for Image
 Processing utilizing Advanced Image Pixel Matrices <br > <br >
                • Fine-tuned diffusion models like Stable Diffusion for image generation on custom datasets. <br > <br >
                • Working in Cambridge University’s Intel Lab for development of secured AI
                Models against deep fakes images and videos generation as an AI Researcher <br > <br >
                • And planning to work on more researches in the future!`
        },
        {
            role: "Developer Technology Intern @Nvidia",
            href: "https://nvidia.com",
            timespan: "May 2024 - July 2024",
            external_links: [
                {
                    url: 'https://nvidia.com',
                    label: 'Website'
                },
                {
                    label: 'GitHub',
                    url: 'https://github.com/NVIDIA/tensorflow'
                }
            ],
            description: `• Developed and implemented AI algorithms using deep learning
 (CNNs, RNNs) for image and frame prediction to optimize game
 performance, successfully reducing GPU workload and improving
 frame rates. <br > <br >
            •  Collaborated with game developers, GPU architects, and software
 engineers to integrate AI solutions into existing game frameworks,
 ensuring alignment with hardware capabilities. <br > <br >
            • Developer Technology Intern in Nvidia handling Complex AI model to analysis it's functional architecture with Game Frames Optimization. <br > <br >
                    •  Utilized programming languages (Python, C++), machine learning
 frameworks (TensorFlow, PyTorch), and tools (NVIDIA CUDA,
 cuDNN), contributing to the enhancement of Nvidia's AI-driven
 game optimization tools and improving the gaming experience.`,
        },
        {
            role: "Software Engineering Intern @Google",
            href: "https://profile.google.com/c4iyilwc",
            timespan: " Aug. 2023 - Jan. 2024",
            external_links: [
                {
                    url: 'https://idx.dev/',
                    label: 'Website'
                },
            ],
            description: `
                • Worked with Google's IDE <a href='https://idx.dev/' target='_blank'> <u>Project IDX</u></a> <br > <br >
                • Fine-tuned diffusion models like Stable Diffusion for image generation on custom datasets. <br > <br >
                • Developed a custom dataset and AI Algorithms for fast devolopment and deployments of applications. <br > <br >
                • And planning to work on more researches in the future!`
        },
        {
            role: "Data Scientist Intern @Yellow.ai",
            href: "https://yellow.ai",
            timespan: " Dec. 2022 - May 2023",
            external_links: [
                {
                    url: 'https://yellow.ai',
                    label: 'Website'
                },
            ],
            description: `
                • Worked for established comprehensive datasets for individual clients to
 enhance CRM chat box assistance.  <br > <br >
                • Resolved a critical software infrastructure issue within the backend Web Server
 software.`
        }
    ],
    contact_links: [
        {
            title: "Mail",
            text: "connect@itsdhanush.tech\ndhanushkandhan75@gmail.com",
            href: "mailto:dhanushkandhan75@gmail.com",
            ctaText: "Contact",
            icon: "<svg class='h-11 w-11 text-gray-900 dark:text-gray-300' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' stroke-linecap='round' stroke-linejoin='round' /> </svg>"
        },
        {
            title: "X",
            text: "x.com/itzmedhanu",
            href: "https://x.com/itzmedhanu",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-twitter text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "LinkedIn",
            text: "in.linkedin.com/dhanushkandhan",
            href: "https://www.linkedin.com/in/dhanushkandhan/",
            ctaText: "Connect!",
            icon: "<i class='text-5xl fa-brands fa-linkedin text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Instagram",
            text: "instagram.com/itsmedhanusk_",
            href: "https://www.instagram.com/itsmedhanushk_",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-instagram text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "GitHub",
            text: "github.com/dhanushk-offl",
            href: "https://github.com/dhanushk-offl",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Medium",
            text: "medium.com/dhanushkandhan",
            href: "https://itzmedhanu.medium.com/",
            ctaText: "Read Now!",
            icon: "<i class='text-5xl fa-brands fa-medium text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Discord",
            text: "@itzdhanu",
            href: "https://discord.com/users/1177670709208694944",
            ctaText: "Message",
            icon: "<i class='text-5xl fa-brands fa-discord text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Telegram",
            text: "t.me/itzdhanush",
            href: "https://t.me/itzdhanush",
            ctaText: "Message",
            icon: "<i class='text-5xl fa-brands fa-telegram text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Google",
            text: "g.dev/itzdhanu",
            href: "https://g.dev/itzdhanu",
            ctaText: "Visit",
            icon: "<i class='text-5xl fa-brands fa-google text-gray-900 dark:text-gray-300' />"
        },

    ]

}
