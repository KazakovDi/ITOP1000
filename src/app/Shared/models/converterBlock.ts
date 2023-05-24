export interface IConverterBlock {
  value: number;
  rate: number;
}

export interface IConverter {
  left: IConverterBlock;
  right: IConverterBlock;
}
