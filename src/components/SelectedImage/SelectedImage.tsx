import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSelectedImageRequest } from '../../store/api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectIsLoading, selectSelectedImageUrl } from '../../store/RootReducer';
import { Preloader } from '../Preloader/Preloader';
import { CLASSES } from './contants';
import './styles.less';

export const SelectedImage = (): JSX.Element => {
    const { id } = useParams();
    const selectedImageUrl = useAppSelector(selectSelectedImageUrl);
    const isLoading = useAppSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchSelectedImageRequest(id));
        }
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <img className={CLASSES.SELECTED_IMAGE_UI} src={selectedImageUrl} />
            )}
        </div>
    );
};
