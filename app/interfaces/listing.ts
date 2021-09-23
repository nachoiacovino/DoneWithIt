export default interface Listing {
  id: number;
  title: string;
  description: string;
  images: {
    url: string;
    thumbnailUrl: string;
  }[];
  price: number;
  categoryId: number;
  userId: number;
  location?: {
    latitude: number;
    longitude: number;
  };
}