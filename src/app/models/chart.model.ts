import { ChartType } from 'angular-google-charts';

export interface Chart {
  title: string;
  type: ChartType;
  options: Object;
  data: number[][];
  dynamicResize: boolean;
}
