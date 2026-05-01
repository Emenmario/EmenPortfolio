import React from 'react'
import trackerimg from './assets/trackerImg.jpg'
import watchlistimg from './assets/watchlistImg.png'
import blogimg from './assets/blogImg.jpg'
import auditEth from './assets/AuditEth.jpg'
import rigelcore from './assets/rigelcore.jpg'
const projectsData = [
    {
        id: 1,
        title: 'AuditEth',
        description: "A specialized financial utility designed to automate the processing of paper-based transactions. By leveraging multimodal AI and React, AuditEth performs OCR on Ethiopic scripts to instantly extract and validate data from local receipts. It transforms physical records into actionable digital data through a high-contrast, minimalist interface.\n Top 5 Hackathon Finalist — Recognized for technical execution and local impact.",
        Technologies: "react,Gemini flash, next.js",
        image: auditEth,
        link: 'https://audit-eth.vercel.app/',
        code: "https://github.com/Emenmario/AuditEth.git"
    },
    {
        id: 2,
        title: 'Lume Mood tracker',
        description: "a mood tracking app ",
        Technologies: "react,Plain css, supabase,postgreSQL",
        image: trackerimg,
        link: 'https://lume-nine-eta.vercel.app/',
        code: "https://github.com/Emenmario/MoodTracker_Supabase.git"
    },
    {
        id: 3,
        title: 'RigelCore',
        description: "RigelCore\nAutomated Tutoring Management System\nA comprehensive B2B SaaS platform designed to digitize manual tutoring operations. RigelCore replaces fragmented Telegram workflows with a centralized system using TypeScript, React, and Appwrite. It automates the entire lifecycle—from parent requests and tutor applications to automated financial splits and real-time notifications via a custom Telegram bot.\nFinancial Precision: Built-in logic for complex commission tracking and real-time audit trails.\nAI Verification: Integrated multimodal AI to validate tutor credentials and payment screenshots automatically.\nScalable Architecture: A secure, relational database schema designed for high-volume agency management.",
        Technologies: "react,next.js,gemini flash,telegraph,typescript,appwrite",
        image: rigelcore,
        link: '/in-progress', // Matches the path you defined in your Router
        code: "https://github.com/Emenmario/rigelcore.git"
    },
    {
        id: 4,  
        title: 'CineTracker',
        description: "a movie tracking app",
        Technologies: "react, tailwindCss, supabase,postgreSQL",
        image: watchlistimg,
        link: 'https://cinetracker-red.vercel.app/',
        code: "https://github.com/Emenmario/watchlist.git"
    },
    {
        id: 5,
        title: 'personal Blog website',
        description: "a personal blog website",
        Technologies: "react,tailwindCss, expressJs,postgreSQL",
        image: blogimg,
        link: 'https://yourblogsite.com/',
        code: "https://github.com/Emenmario/personal-blog.git"
    },
]

export default projectsData;