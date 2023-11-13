import MovieCard from '@/components/MovieCard';

async function getPopularMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=uk-US&page=1', options);

  if (!response.ok) {
    throw new Error('Не вдалось отримати дані');
  }

  return response.json();
}

export default async function PopularMovies() {
  const popularMovies = await getPopularMovies();
  const movieGenres = ['Драма', 'Історія'];

  return (
    <main>
      {popularMovies.results.map((item: { poster_path: string; title: string; id: number;}) => <MovieCard poster_path={item.poster_path} title={item.title} genres={movieGenres}/>)}
    </main>
  )
}
