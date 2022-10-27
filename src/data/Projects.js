import BankAccGif from "../images/banc-acc.gif"
import RestPostsGif from "../images/posts.gif"
import TodolistGif from "../images/todolist.gif"
import RandomGif from "../images/random.gif"
import VacManagerGif from "../images/vac-manager.gif"
import JokeGenGif from "../images/joke-gen.gif"

export const Projects = [{
    id: 1,
    title: "Classic Todo-List",
    techs: "JS, React.JS, Material UI",
    deploy: "https://todolist-sevichok.vercel.app/",
    image: TodolistGif,
    code: "https://github.com/sevichok/Project-todolist",
    overview: "JS Basics with crearing CRUD app.",
},
{
    id: 2,
    title: "Rest API",
    techs: "JS, React.JS",
    deploy: "https://api-posts-todos-users.vercel.app",
    image: RestPostsGif,
    code: "https://github.com/sevichok/Project-API-Posts-Todos-Users",
    overview: "Working with Rest API. Searching for selected parameters.",
},
{
    id: 3,
    title: "Drag&Drop Bank Account",
    techs: "JS, React.JS",
    deploy: "https://bank-acc.vercel.app/",
    image: BankAccGif,
    code: "https://github.com/sevichok/bank-account",
    overview: "Working with drag and drop logic.",
},
{
    id: 4,
    title: "Random Users API",
    techs: "JS, React.JS, Material UI",
    deploy: "https://api-random-users.vercel.app/",
    image: RandomGif,
    code: "https://github.com/sevichok/api-random-users",
    overview: `Working with axios. Searching for selected parameters.`,
},
{
    id: 5,
    title: "Vacation Manager",
    techs: "JS, React.JS, Ant Design",
    deploy: "https://project-test-liart.vercel.app/",
    image: VacManagerGif,
    code: "https://github.com/sevichok/Project-test",
    overview: `Working with Ant Design styling. Basic logic for forms.`,
},
{
    id: 6,
    title: "Jokes Generator",
    techs: "JS, React.JS, Rest API",
    deploy: "https://jokes-generator-one.vercel.app/",
    image: JokeGenGif,
    code: "https://github.com/sevichok/jokes-generator",
    overview: `Work with joke-generator-api.`,
},]