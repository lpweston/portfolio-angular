export interface CardDetails {
    name: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    scrollable?: boolean;
    avatar: string;
    description: string;
    links: LinkDetails[];
}

export interface LinkDetails {
    text: string;
    link: string;
    icon: string;
}