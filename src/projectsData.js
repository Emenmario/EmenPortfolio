import Technologies from "./Technologies";
import React from 'react'
import trackerimg from './assets/trackerImg.jpg'
import watchlistimg from './assets/watchlistImg.png'
import blogimg from './assets/blogImg.jpg'
const projectsData = [
    {
        id: 1,
        title: 'Lume Mood tracker',
        description: "a mood tracking app ",
        Technologies:"react,Plain css, supabase,postgreSQL",
        image: trackerimg,
        link: 'https://lume-nine-eta.vercel.app/',
        code:"https://github.com/Emenmario/MoodTracker_Supabase.git"},
    {
        id: 2,  
        title: 'CineTracker',
        description: "a movie tracking app",
        Technologies:"react, tailwindCss, supabase,postgreSQL",
        image: watchlistimg,
        link: 'https://cinetracker-red.vercel.app/',
        code:"https://github.com/Emenmario/watchlist.git"},
    {
        id: 3,
        title: 'personal Blog website',
        description: "a personal blog website",
        Technologies:"react,tailwindCss, expressJs,postgreSQL",
        image: blogimg,
        link: 'https://yourblogsite.com/',
        code:"https://github.com/Emenmario/personal-blog.git"},
]
export default projectsData