import BankAccGif from "../images/banc-acc.gif"
import RestPostsGif from "../images/posts.gif"
import TodolistGif from "../images/todolist.gif"
import RandomGif from "../images/random.gif"
import VacManagerGif from "../images/vac-manager.gif"

export const Projects = [{
    id: 1,
    title: "Classic Todo-List",
    techs: "JS, React.JS, Material UI",
    deploy: "https://todolist-sevichok.vercel.app/",
    image: TodolistGif,
    code: "https://github.com/sevichok/Project-todolist",
    overview: "In dllum fugiat qui anim.",
},
{
    id: 2,
    title: "Rest API",
    techs: "JS, React.JS",
    deploy: "https://api-posts-todos-users.vercel.app",
    image: RestPostsGif,
    code: "https://github.com/sevichok/Project-API-Posts-Todos-Users",
    overview: "In qui anim.",
},
{
    id: 3,
    title: "Drag&Drop Bank Account",
    techs: "JS, React.JS",
    deploy: "https://bank-acc.vercel.app/",
    image: BankAccGif,
    code: "https://github.com/sevichok/bank-account",
    overview: "In fugiat qui anim.",
},
{
    id: 4,
    title: "Random Users API",
    techs: "JS, React.JS, Material UI",
    deploy: "https://api-random-users.vercel.app/",
    image: RandomGif,
    code: "https://github.com/sevichok/api-random-users",
    overview: `Проект основан на AXIOS запросе, и получении ответа в виде обьекта с интересующими нас параметрами. Из предоставленной ссылки, используя RandomUser API, мы выгружаем данные пользователей по определенным нами критериям.`,
},
{
    id: 5,
    title: "Vacation Manager",
    techs: "JS, React.JS, Ant Design",
    deploy: "https://project-test-liart.vercel.app/",
    image: VacManagerGif,
    code: "https://github.com/sevichok/Project-test",
    overview: `Формы`,
},]