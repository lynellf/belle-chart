## Belle Chart

A standard normal curve chart for React

![Standard Normal Curve Chart](/image.bmp)

### Usage

```jsx
import BelleChart from 'belle-chart'

function Main(props) {
  return <BelleChart data={props.data} />
}
```

### Props

```typescript
type DataItem = {
  value: number
  label?: string
}

// Data Prop Should match Chart.js dataset settings (as of Chart.js version ~2.8)
// The Data Array is the only exception
// https://www.chartjs.org/docs/master/general/data-structures.html
type Dataset = {
  data: Array<DataItem>
}

// Optional props

// Chart.js chart options (as of Chart.js version ~2.8)
// https://www.chartjs.org/docs/latest/general/options.html
type Options = ChartOptions

// Do we want to scatter the points along the y axis?
type xScatter = boolean
```
