import { CardDetails } from "./card-details"

export const ncNews: CardDetails = {
    name: "NC News",
    subtitle: "Discussion Board",
    image: "../../../../assets/images/nc-news.png",
    imageAlt: "Screenshot of nc news site",
    scrollable: true,
    avatar: "../../../../assets/images/nc-news-av.png",
    description: "NorthCoders News is a discussion board. This was a project made during the Northcoders bootcamp. \n\nI was given a list of user stories to satisfy on the front end, and the back end is a RESTful API, made with full test driven development. I used React framework and a PSQL database.",
    links: [
        {
            link: "https://news-nc.netlify.app/",
            icon: "open_in_new",
            text: "Hosted site"
        },
        {
            text: "Front end code",
            link: "https://github.com/lpweston/nc-news",
            icon: "code"
        },
        {
            text: "Hosted back end",
            link: "https://news-northcoders.herokuapp.com/api",
            icon: "open_in_new"
        },
        {
            text: "Back end code",
            link: "https://github.com/lpweston/nc-news-BE/",
            icon: "code"
        }
    ]
}