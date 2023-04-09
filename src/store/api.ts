import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImagesRequest = createAsyncThunk(
    'imageShowcase/fetchImagesRequest',
    async () => {
        const { data } = await axios.get(
            'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
        );

        const sorted = data.map((obj: any) => ({
            id: obj.id,
            urls: obj.urls,
            description: obj.description || obj.alt_description,
            author: obj.user.name,
        }));

        return sorted;
    }
);

export const fetchSelectedImageRequest = createAsyncThunk(
    'imageShowcase/fetchSelectedImageRequest',
    async (photoId: string) => {
        const response = await axios.get(
            `https://api.unsplash.com/photos/${photoId}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`
        );

        return response.data.urls.full;
    }
);
