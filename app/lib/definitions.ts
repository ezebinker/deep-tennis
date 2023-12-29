export type Video = {
    id: number;
    title: string;
    youtube_id: string;
}

export type TennisPlayer = {
    id: number;
    name: string;
    age: number;
    country: string;
    countryCode: string;
    image: string;
    forehand: string;
    videos?: Video[];
}