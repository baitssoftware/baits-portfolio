export interface SlideData {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface SliderProps {
  slides: SlideData[];
}
