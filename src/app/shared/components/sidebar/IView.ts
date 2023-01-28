export interface ViewInterface {
    icon: string;
    name: string;
    views: Array<viewChild>;
}

interface viewChild {
    icon: string;
    name: string;
    href: string;
}