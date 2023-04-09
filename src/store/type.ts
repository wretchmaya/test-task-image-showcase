export interface ImageI {
    id: string;
    author: string;
    description: string;
    urls: {
        full: string;
        regular: string;
    };
}

export interface ImageShowcase {
    images: ImageI[];
    isLoading: boolean;
    selectedImageUrl: string;
}
