import logo from "../assets/logo.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import tailwind from "../assets/tailwind.svg"
import python from "../assets/python.svg"
import git from "../assets/git.svg"
import linkedin from "../assets/linkedin.svg"
import gmail from "../assets/gmail.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"

import pokedex from "../assets/projects/pokedex.png"
import movies from "../assets/projects/movies.PNG"
import quizzical from "../assets/projects/quizzical.PNG"
import character from "../assets/projects/character.PNG"


export const data = {
    profession: [{name:'Mechatronic Engineer', date:"may 2022", school:"universidad autonoma de occidente"},{name:'React Js Developer', date:"november 2022", school:"scrimba"}],
    description: "I'm Mechatronic engineer from Universidad Autónoma de Occidente, in Cali, Colombia. Interesting in areas such as programming, especially on integration, development, and deployment of web applications, looking for awesome user experience. I look at myself as an operative person with a high capacity to work in a team or individually. I have dispositioned a lot to continuously learning new technologies to improve my knowledge",
    skillDesciption: "All my life I have been interested in software development. During my engineering, I had the opportunity to interact with different programming languages in multiple real-life applications. When I got my engineering degree I wanted to continue pursuing my dreams of becoming a developer, so I decided to dive into the world of software development, choosing the frontend path. Currently, I don't have much experience, but I have all the desire and motivation to get a great job and learn much more about the new technologies of computing.",
    interest:"I'm interested in any opportunity. If you feel right with my profile, don't hesitate to use the form.",
    mainSkill: {name:'react', img:logo},
    skills: [
        {name:'html', img: html }, 
        {name:'css', img: css}, 
        {name:'tailwind', img: tailwind},  
        {name:'javascript', img: javascript}, 
        {name:'python', img: python},
        {name:'git', img: git}
    ],
    projects: [
        { name: 'pokedex app', img: pokedex, source: "https://jhonaquejadau.github.io/pokedex-app/" },
        { name: 'movies app', img: movies, source: "https://jhonaquejadau.github.io/movies-app/"},
        { name: 'quizzical game', img: quizzical, source: "https://jhonaquejadau.github.io/quizzical-app/" },
        { name: 'character game', img: character, source: "https://jhonaquejadau.github.io/CharacterVS/" }
    ],
    gmail: {name: 'gmail', logo:gmail},
    social: [
        {name: 'linkedin', logo:linkedin, source: "https://www.linkedin.com/in/jhon-alexander-quejada-urrutia-022763230/" },
        {name: 'github', logo:github, source: "https://github.com/jhonaquejadau"},
        {name: 'twitter', logo: twitter, source: "https://twitter.com/jaqudev_"}
    ]
}