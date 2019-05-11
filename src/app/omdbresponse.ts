export interface IOMDBResponse{
    Title:string;
    Year:string;
    Poster:string;
    Genre:string;
    Release:string;
    MyReview:string;
    Ratings: IMovieRatings[];
}

export interface IMovieRatings{
    Source:string;
    Value:string;  
}
