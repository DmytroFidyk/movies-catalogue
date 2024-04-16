import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Movie } from '@/app/page';

export default function MovieCard({ id, title, poster_path }: Movie) {
    return (
        <Card sx={{width: 280, backgroundColor: '#222831', marginBottom: '14px'}}>
            <CardActionArea>
                <CardMedia component="img" height="420" image={`https://image.tmdb.org/t/p/original${poster_path}`} alt="Постер фільму"/>
                <CardContent>
                    <Typography color="#BC7FCD" gutterBottom noWrap variant="h5" component="div" sx={{fontWeight: 'bold'}}>{title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}