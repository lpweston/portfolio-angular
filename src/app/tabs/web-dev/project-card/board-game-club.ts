import { CardDetails } from "./card-details"

export const boardGameClub: CardDetails = {
    name: "Board Game Club",
    subtitle: "Information site",
    image: "../../../../assets/images/board-game.png",
    scrollable: true,
    imageAlt: "Screenshot board game club site",
    avatar: "../../../../assets/images/board-game-av.png",
    description: "I made this site for my local board game club. \n\n Build using Angular framework to provide a simple site with all the information required to advertise the club.",
    links: [
        {
            link: "https://newton-board-game-club.netlify.app/",
            icon: "open_in_new",
            text: "Hosted site"
        },
        {
            text: "Code",
            link: "https://github.com/lpweston/boardGameSite",
            icon: "code"
        }
    ]
}