import { useEffect } from 'react';
import { fetchImagesRequest } from '../../store/api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectImages, selectIsLoading } from '../../store/RootReducer';
import { ImageCard } from '../ImageCard/ImageCard';
import './styles.less';
import { useNavigate } from 'react-router-dom';
import { Preloader } from '../Preloader/Preloader';
import { ROUTES } from '../../routes/routes';
import { CLASSES } from './constants';

export const ImageList = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const images = useAppSelector(selectImages);
    const navigate = useNavigate();
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchImagesRequest());
    }, []);

    const handleSelectedImage = (id: string) => {
        navigate(ROUTES.SELECTED_IMAGE.replace(':id', id));
    };

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className={CLASSES.IMAGE_LIST_UI}>
                    {images.map(image => {
                        return (
                            <ImageCard
                                image={image}
                                onSelectedImageClick={handleSelectedImage}
                                key={image.id}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};
