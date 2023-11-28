export default class Movie {
    title: string;
    posterPath: string;
    genreIds: number[];

    constructor(title: string, posterPath: string,  genreIds: number[]) {
        this.title = title;
        this.posterPath = posterPath;
        this.genreIds = [];

        for (let i = 0; i < genreIds.length; i++) {
            this.genreIds.push(genreIds[i]);
        }
    }

    public getGenreNames(allGenreNames: {id: number, name: string}[]): string[] {
        const genres: string[] = [];

        for (let i = 0; i < allGenreNames.length; i++) {
            for (let j = 0; j < this.genreIds.length; j++) {
                if (allGenreNames[i].id === this.genreIds[j]) {
                    genres.push(allGenreNames[i].name);
                }
            }
        }

        return genres;
    }
}