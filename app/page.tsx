import MovieCard from '@/components/MovieCard';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

async function getPopularMovies(options: {method: string, headers: {accept: string, Authorization: string}}) {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=uk-US&page=1', options);

  if (!response.ok) {
    throw new Error('Не вдалось отримати дані');
  }

  return response.json();
}

async function getGenres(options: {method: string, headers: {accept: string, Authorization: string}}) {
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=uk', options);

  if (!response.ok) {
    throw new Error('Не вдалось отримати дані');
  }

  return response.json();
}

export default async function PopularMovies() {
  const popularMovies = await getPopularMovies(options);
  const genreNames = await getGenres(options);

  return (
    <main>
      {popularMovies.results.map((item: { poster_path: string; title: string; genre_ids: number[]; genre_names: {id: number, name: string}[]}) => <MovieCard posterPath={item.poster_path} title={item.title} genreIds={item.genre_ids} genreNames={genreNames.genres}/>)}
    </main>
  )
}
