export interface IChangeConverterParams {
  target: string;
  side: 'left' | 'right';
  oppositeSide: 'left' | 'right';
}
export interface IChangeConverterDOMParams {
  target: HTMLInputElement | HTMLSelectElement;
  side: 'left' | 'right';
  oppositeSide: 'left' | 'right';
}
