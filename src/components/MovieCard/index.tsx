import Link from 'next/link';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { IMovie } from '@/interfaces/IMovie';

const MovieCard = ({ id, title, poster_path }: IMovie) => {
    return (
        <Link href={{pathname: '/details', query: { movieId: id}}}>
            <Card sx={{width: 280, backgroundColor: '#222831', marginBottom: '14px'}}>
                <CardActionArea>
                    <CardMedia component="img" height="380" image={`https://image.tmdb.org/t/p/original${poster_path}`} alt="Постер фільму"/>
                    <CardContent>
                        <Typography color="#BC7FCD" gutterBottom noWrap variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MovieCard;