import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './styles.less';
import { CLASSES, IMAGE } from './constants';
import { ImageI } from '../../store/type';

interface ImageCardProps {
    image: ImageI;
    onSelectedImageClick: (id: string) => void;
}
export const ImageCard = ({
    image,
    onSelectedImageClick,
}: ImageCardProps): JSX.Element => {
    return (
        <Card onClick={() => onSelectedImageClick(image.id)} className={CLASSES.CARD_UI}>
            <CardActionArea className={CLASSES.CARD}>
                <CardMedia
                    className={CLASSES.CARD__IMAGE}
                    component={IMAGE}
                    image={image.urls.regular}
                    alt={image.description}
                />
                <CardContent>
                    <Typography className={CLASSES.CARD__AUTHOR}>
                        {image.author}
                    </Typography>
                    <Typography className={CLASSES.CARD__DESCRIPTION}>
                        {image.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
