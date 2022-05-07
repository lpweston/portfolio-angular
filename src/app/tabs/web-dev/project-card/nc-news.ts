import { CardDetails } from "./card-details"

export const ncNews: CardDetails = {
    name: "NC News",
    subtitle: "Discussion Board",
    image: "../../../../assets/images/nc-news.png",
    avatar: "../../../../assets/images/nc-news-av.png",
    description: "NorthCoders News is a discussion board. This was a project made during the Northcoders bootcamp. I was given a list of user stories to satisfy on the front end, and the back end is a RESTful API, made with full test driven development.",
    links: [
        {
            text: "FrontEnd:",
            link: "https://news-nc.netlify.app/",
            icon: "open_in_new"
        },
        {
            link: "https://github.com/lpweston/nc-news",
            icon: "code"
        },
        {
            text: "Backend:",
            link: "https://news-northcoders.herokuapp.com/api",
            icon: "open_in_new"
        },
        {
            link: "https://github.com/lpweston/nc-news-BE/",
            icon: "code"
        }
    ]
}