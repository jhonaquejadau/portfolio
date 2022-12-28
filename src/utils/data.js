import logo from "../assets/logo.svg"

import react from "../assets/icons/react.svg"
import reactWhite from "../assets/icons/react-white.svg"

import html from "../assets/icons/html.svg"
import htmlWhite from "../assets/icons/html-white.svg"

import css from "../assets/icons/css.svg"
import cssWhite from "../assets/icons/css-white.svg"

import python from "../assets/icons/python.svg"
import pythonWhite from "../assets/icons/python-white.svg"

import javascript from "../assets/icons/javascript.svg"
import javascriptWhite from "../assets/icons/javascript-white.svg"

import git from "../assets/icons/git.svg"
import gitWhite from "../assets/icons/git-white.svg"

import nodejs from "../assets/icons/nodejs.svg"
import nodejsWhite from "../assets/icons/nodejs-white.svg"

import mongodb from "../assets/icons/mongodb.svg"
import mongodbWhite from "../assets/icons/mongodb-white.svg"

import tailwind from "../assets/icons/tailwind.svg"
import tailwindWhite from "../assets/icons/tailwind-white.svg"

import windows from "../assets/icons/windows.svg"
import windowsWhite from "../assets/icons/windows-white.svg"

import vscode from "../assets/icons/vscode.svg"
import vscodeWhite from "../assets/icons/vscode-white.svg"

import figma from "../assets/icons/figma.svg"
import figmaWhite from "../assets/icons/figma-white.svg"

import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"

import pokedex from "../assets/projects/pokedex.png"
import movies from "../assets/projects/movies.PNG"
import quizzical from "../assets/projects/quizzical.PNG"
import character from "../assets/projects/character.PNG"


export const data = {
    profession: [{name:'Mechatronic Engineer', date:"may 2022", school:"universidad autonoma de occidente"},{name:'the fronted developer career path', date:"november 2022", school:"scrimba"}],
    description: "I'm Mechatronic engineer from Universidad Autónoma de Occidente, in Cali, Colombia. Interesting in areas such as programming, especially on integration, development, and deployment of web applications, looking for awesome user experience. I look at myself as an operative person with a high capacity to work in a team or individually. I have dispositioned a lot to continuously learning new technologies to improve my knowledge",
    skillDesciption: "All my life I have been interested in software development. During my engineering, I had the opportunity to interact with different programming languages in multiple real-life applications. When I got my engineering degree I wanted to continue pursuing my dreams of becoming a developer, so I decided to dive into the world of software development, choosing the frontend path. Currently, I don't have much experience, but I have all the desire and motivation to get a great job and learn much more about the new technologies of computing.",
    interest:"I'm interested in any opportunity. If you feel right with my profile, don't hesitate to use the form.",
    mainSkill: {name:'react', img:logo},
    skills: [
        {name:'javascript', img: javascript, imgWhite: javascriptWhite},
        {name:'python', img: python, imgWhite: pythonWhite},
        {name:'nodejs', img: nodejs, imgWhite: nodejsWhite},
        {name:'react', img: react, imgWhite: reactWhite},
        {name:'mongoDB', img: mongodb, imgWhite: mongodbWhite},
        {name:'git', img: git, imgWhite: gitWhite},
        {name:'tailwind', img: tailwind, imgWhite: tailwindWhite},
        {name:'html', img: html, imgWhite: htmlWhite},
        {name:'css', img: css, imgWhite: cssWhite}

    ],
    tools:[
        {name:'windows', img: windows, imgWhite:windowsWhite},
        {name:'vscode', img: vscode, imgWhite:vscodeWhite},
        {name:'figma', img: figma, imgWhite:figmaWhite}
    ],
    projects: [
        { name: 'pokedex app', img: pokedex, source: "https://jhonaquejadau.github.io/pokedex-app/", description:"Fan version pokedex, where you can find information about a lot of pokemons with stats, abilities, evolutions, and more.", url:"https://jhonaquejadau.github.io/pokedex-app/", technologies:['Html', 'Css', 'JavaScript', 'React Js', 'Tailwind', 'Context API'], api:{name:"PokeApi", url:"https://pokeapi.co/"} },
        { name: 'movies app', img: movies, source: "https://jhonaquejadau.github.io/movies-app/", description:"Movies information app, where you can find information about a bunch of movies and series, with credits, similar movises, recommendations, trialer videos, and more.", url:"https://jhonaquejadau.github.io/movies-app/", technologies:['Html', 'Css', 'JavaScript', 'React Js', 'Tailwind'], api:{name:"The Movie Database Api (TMDB)", url:"https://www.themoviedb.org/documentation/api"}},
        { name: 'quizzical game', img: quizzical, source: "https://jhonaquejadau.github.io/quizzical-app/", description:"Quiz game to test your brain, where you can select categories of the questions, and get a result once you end the game.", url:"https://jhonaquejadau.github.io/quizzical-app/", technologies:['Html', 'Css', 'JavaScript', 'Tailwind'], api:{name:"Open Trivia Api", url:"https://opentdb.com/"} },
        { name: 'character game', img: character, source: "https://jhonaquejadau.github.io/CharacterVS/", description:"Wizzard vs Orc game where you can roll a dice to get damage number to attack your oponent. Be the wizzard you always wold be and win the game!!", url:"https://jhonaquejadau.github.io/CharacterVS/", technologies:['Html', 'Css', 'JavaScript', 'Tailwind'], api:{name:"Scrimba Project", url:"https://scrimba.com/learn/frontend"} }
    ],
    gmail: {name: 'gmail', logo:gmail},
    social: [
        {name: 'linkedin', logo:linkedin, source: "https://www.linkedin.com/in/jhon-alexander-quejada-urrutia-022763230/" },
        {name: 'github', logo:github, source: "https://github.com/jhonaquejadau"},
        {name: 'twitter', logo: twitter, source: "https://twitter.com/jaqudev_"}
    ]
}