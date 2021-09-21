/* TypeScript file generated from Belle.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// @ts-ignore: Implicit any on import
import * as BelleBS__Es6Import from './Belle.bs';
const BelleBS: any = BelleBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type Main_dataItem = { readonly value: number; readonly label?: string };

// tslint:disable-next-line:interface-over-type-literal
export type Main_dataSet = {
  readonly type?: string; 
  readonly data: Main_dataItem[]; 
  readonly fill?: boolean; 
  readonly backgroundColor?: string; 
  readonly borderColor?: string; 
  readonly pointBackgroundColor?: string; 
  readonly pointBorderColor?: string; 
  readonly pointHoverRadius?: number; 
  readonly showLine?: boolean
};

// tslint:disable-next-line:interface-over-type-literal
export type Main_chartOptions = { readonly legend: { readonly display: boolean }; readonly scales: { readonly yAxes: { readonly display: boolean } } };

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly data: Main_dataSet; 
  readonly options?: Main_chartOptions; 
  readonly xScatter?: boolean
};

export const $$default: React.ComponentType<{
  readonly data: Main_dataSet; 
  readonly options?: Main_chartOptions; 
  readonly xScatter?: boolean
}> = BelleBS.Main.default;

export default $$default;

export const Main: { default: React.ComponentType<{
  readonly data: Main_dataSet; 
  readonly options?: Main_chartOptions; 
  readonly xScatter?: boolean
}> } = BelleBS.Main
