import MovieCard from "@/components/MovieCard";

export default function PopularMovies() {
  const movieGenres = ['Драма', 'Історія'];
  return (
    <main>
      <MovieCard 
        poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uYUesph9btmjdL4kEZc1dSHCNAi.jpg"
        title="І будуть люди"
        genres={movieGenres}
      />
    </main>
  )
}
