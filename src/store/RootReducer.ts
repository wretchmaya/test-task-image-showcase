import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchImagesRequest, fetchSelectedImageRequest } from './api';
import { ImageShowcase } from './type';

const initialState: ImageShowcase = {
    images: [],
    isLoading: false,
    selectedImageUrl: '',
};

export const rootSlice = createSlice({
    name: 'imageShowcase',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchImagesRequest.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchImagesRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.images = [...action.payload];
            })
            .addCase(fetchSelectedImageRequest.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchSelectedImageRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedImageUrl = action.payload;
            });
    },
});

export const selectImages = (state: RootState) => state.mainStore.images;
export const selectIsLoading = (state: RootState) => state.mainStore.isLoading;
export const selectSelectedImageUrl = (state: RootState) =>
    state.mainStore.selectedImageUrl;

export default rootSlice.reducer;
