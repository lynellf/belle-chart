import React from 'react'
import ReactDOM from 'react-dom'
import Belle from './lib/js/src/Belle.bs'

function App() {
  const data = [
    {
      value: 1.42,
      label: 'Point 1.42'
    },
    {
      value: 1.81,
      label: 'Point 1.81'
    },
    {
      value: -0.18,
      label: 'Point -0.18'
    },
    {
      value: 0.78,
      label: 'Point 0.78'
    },
    {
      value: 0.44,
      label: 'Point 0.44'
    },
    {
      value: 1.78,
      label: 'Point 1.78'
    },
    {
      value: -0.65,
      label: 'Point -0.65'
    },
    {
      value: 0.1,
      label: 'Point 0.1'
    },
    {
      value: 0.0499999999999998,
      label: 'Point 0.0499999999999998'
    },
    {
      value: -0.97,
      label: 'Point -0.97'
    },
    {
      value: -0.17,
      label: 'Point -0.17'
    },
    {
      value: -0.66,
      label: 'Point -0.66'
    },
    {
      value: 0.0699999999999998,
      label: 'Point 0.0699999999999998'
    },
    {
      value: -0.42,
      label: 'Point -0.42'
    },
    {
      value: -0.86,
      label: 'Point -0.86'
    },
    {
      value: 0.0800000000000001,
      label: 'Point 0.0800000000000001'
    },
    {
      value: -0.68,
      label: 'Point -0.68'
    },
    {
      value: -0.27,
      label: 'Point -0.27'
    },
    {
      value: -1.89,
      label: 'Point -1.89'
    },
    {
      value: 0.16,
      label: 'Point 0.16'
    },
    {
      value: 0.24,
      label: 'Point 0.24'
    },
    {
      value: -0.77,
      label: 'Point -0.77'
    },
    {
      value: -0.04,
      label: 'Point -0.04'
    },
    {
      value: -0.79,
      label: 'Point -0.79'
    },
    {
      value: -1.48,
      label: 'Point -1.48'
    },
    {
      value: -0.13,
      label: 'Point -0.13'
    },
    {
      value: 0.17,
      label: 'Point 0.17'
    },
    {
      value: 1.62,
      label: 'Point 1.62'
    },
    {
      value: -0.0800000000000001,
      label: 'Point -0.0800000000000001'
    },
    {
      value: 2.4,
      label: 'Point 2.4'
    },
    {
      value: -0.29,
      label: 'Point -0.29'
    },
    {
      value: -0.27,
      label: 'Point -0.27'
    },
    {
      value: -0.72,
      label: 'Point -0.72'
    },
    {
      value: -1.5,
      label: 'Point -1.5'
    },
    {
      value: -0.54,
      label: 'Point -0.54'
    },
    {
      value: 0.67,
      label: 'Point 0.67'
    },
    {
      value: 1.31,
      label: 'Point 1.31'
    },
    {
      value: 0.4,
      label: 'Point 0.4'
    },
    {
      value: 0.16,
      label: 'Point 0.16'
    },
    {
      value: -0.66,
      label: 'Point -0.66'
    },
    {
      value: -1.25,
      label: 'Point -1.25'
    },
    {
      value: -0.84,
      label: 'Point -0.84'
    },
    {
      value: -0.59,
      label: 'Point -0.59'
    },
    {
      value: 2.85,
      label: 'Point 2.85'
    },
    {
      value: -1.16,
      label: 'Point -1.16'
    },
    {
      value: 2.38,
      label: 'Point 2.38'
    },
    {
      value: 0.12,
      label: 'Point 0.12'
    },
    {
      value: 1.12,
      label: 'Point 1.12'
    },
    {
      value: 0.19,
      label: 'Point 0.19'
    },
    {
      value: -0.02,
      label: 'Point -0.02'
    },
    {
      value: 1.46,
      label: 'Point 1.46'
    },
    {
      value: -1.43,
      label: 'Point -1.43'
    },
    {
      value: 1.92,
      label: 'Point 1.92'
    },
    {
      value: -0.04,
      label: 'Point -0.04'
    },
    {
      value: 0.85,
      label: 'Point 0.85'
    },
    {
      value: -0.27,
      label: 'Point -0.27'
    },
    {
      value: 0.33,
      label: 'Point 0.33'
    },
    {
      value: 1.28,
      label: 'Point 1.28'
    },
    {
      value: -0.77,
      label: 'Point -0.77'
    },
    {
      value: -0.72,
      label: 'Point -0.72'
    },
    {
      value: -0.36,
      label: 'Point -0.36'
    },
    {
      value: -2.16,
      label: 'Point -2.16'
    },
    {
      value: -0.49,
      label: 'Point -0.49'
    },
    {
      value: 0.92,
      label: 'Point 0.92'
    },
    {
      value: 0.71,
      label: 'Point 0.71'
    },
    {
      value: 0.33,
      label: 'Point 0.33'
    },
    {
      value: 1.9,
      label: 'Point 1.9'
    },
    {
      value: -0.63,
      label: 'Point -0.63'
    },
    {
      value: -0.04,
      label: 'Point -0.04'
    },
    {
      value: 0.1,
      label: 'Point 0.1'
    },
    {
      value: 0.87,
      label: 'Point 0.87'
    },
    {
      value: -0.24,
      label: 'Point -0.24'
    },
    {
      value: -0.52,
      label: 'Point -0.52'
    },
    {
      value: 0.35,
      label: 'Point 0.35'
    },
    {
      value: -0.5,
      label: 'Point -0.5'
    },
    {
      value: -0.0800000000000001,
      label: 'Point -0.0800000000000001'
    },
    {
      value: 0.23,
      label: 'Point 0.23'
    },
    {
      value: -0.72,
      label: 'Point -0.72'
    },
    {
      value: 3.24,
      label: 'Point 3.24'
    },
    {
      value: 0.12,
      label: 'Point 0.12'
    },
    {
      value: -0.18,
      label: 'Point -0.18'
    },
    {
      value: 0.23,
      label: 'Point 0.23'
    },
    {
      value: 0.32,
      label: 'Point 0.32'
    },
    {
      value: 0.23,
      label: 'Point 0.23'
    },
    {
      value: -0.75,
      label: 'Point -0.75'
    },
    {
      value: -0.72,
      label: 'Point -0.72'
    },
    {
      value: -0.4,
      label: 'Point -0.4'
    },
    {
      value: 0.16,
      label: 'Point 0.16'
    },
    {
      value: -1.27,
      label: 'Point -1.27'
    },
    {
      value: -0.0800000000000001,
      label: 'Point -0.0800000000000001'
    },
    {
      value: -0.47,
      label: 'Point -0.47'
    },
    {
      value: 1.03,
      label: 'Point 1.03'
    },
    {
      value: 0.44,
      label: 'Point 0.44'
    },
    {
      value: 0.17,
      label: 'Point 0.17'
    },
    {
      value: -0.24,
      label: 'Point -0.24'
    },
    {
      value: 0.0800000000000001,
      label: 'Point 0.0800000000000001'
    },
    {
      value: 0.6,
      label: 'Point 0.6'
    },
    {
      value: -0.7,
      label: 'Point -0.7'
    },
    {
      value: 2.04,
      label: 'Point 2.04'
    },
    {
      value: -1.27,
      label: 'Point -1.27'
    },
    {
      value: -2.23,
      label: 'Point -2.23'
    },
    {
      value: -1.36,
      label: 'Point -1.36'
    },
    {
      value: 2.03,
      label: 'Point 2.03'
    },
    {
      value: 0.26,
      label: 'Point 0.26'
    },
    {
      value: -1.09,
      label: 'Point -1.09'
    },
    {
      value: -0.18,
      label: 'Point -0.18'
    },
    {
      value: 1.85,
      label: 'Point 1.85'
    },
    {
      value: 1.4,
      label: 'Point 1.4'
    },
    {
      value: -0.7,
      label: 'Point -0.7'
    },
    {
      value: -0.24,
      label: 'Point -0.24'
    },
    {
      value: 1.62,
      label: 'Point 1.62'
    },
    {
      value: -0.42,
      label: 'Point -0.42'
    },
    {
      value: -0.0600000000000001,
      label: 'Point -0.0600000000000001'
    },
    {
      value: -0.54,
      label: 'Point -0.54'
    },
    {
      value: 0.23,
      label: 'Point 0.23'
    },
    {
      value: -0.45,
      label: 'Point -0.45'
    },
    {
      value: -0.86,
      label: 'Point -0.86'
    },
    {
      value: 2.13,
      label: 'Point 2.13'
    },
    {
      value: -0.04,
      label: 'Point -0.04'
    },
    {
      value: -0.93,
      label: 'Point -0.93'
    },
    {
      value: 1.38,
      label: 'Point 1.38'
    },
    {
      value: 1.54,
      label: 'Point 1.54'
    },
    {
      value: -0.5,
      label: 'Point -0.5'
    },
    {
      value: -1.23,
      label: 'Point -1.23'
    },
    {
      value: -0.86,
      label: 'Point -0.86'
    },
    {
      value: -0.38,
      label: 'Point -0.38'
    },
    {
      value: 0.005,
      label: 'Point 0.005'
    },
    {
      value: 0.005,
      label: 'Point 0.005'
    },
    {
      value: -0.79,
      label: 'Point -0.79'
    },
    {
      value: 0.0699999999999998,
      label: 'Point 0.0699999999999998'
    },
    {
      value: -0.58,
      label: 'Point -0.58'
    },
    {
      value: -0.25,
      label: 'Point -0.25'
    },
    {
      value: -0.22,
      label: 'Point -0.22'
    },
    {
      value: -0.47,
      label: 'Point -0.47'
    },
    {
      value: -0.49,
      label: 'Point -0.49'
    },
    {
      value: -0.36,
      label: 'Point -0.36'
    },
    {
      value: -0.0800000000000001,
      label: 'Point -0.0800000000000001'
    },
    {
      value: -0.11,
      label: 'Point -0.11'
    },
    {
      value: 0.24,
      label: 'Point 0.24'
    },
    {
      value: -2.37,
      label: 'Point -2.37'
    },
    {
      value: 0.005,
      label: 'Point 0.005'
    },
    {
      value: -0.65,
      label: 'Point -0.65'
    },
    {
      value: 0.85,
      label: 'Point 0.85'
    },
    {
      value: 0.73,
      label: 'Point 0.73'
    },
    {
      value: -0.49,
      label: 'Point -0.49'
    },
    {
      value: 2.81,
      label: 'Point 2.81'
    },
    {
      value: -0.58,
      label: 'Point -0.58'
    },
    {
      value: 1.22,
      label: 'Point 1.22'
    },
    {
      value: 0.96,
      label: 'Point 0.96'
    },
    {
      value: -0.11,
      label: 'Point -0.11'
    },
    {
      value: -0.15,
      label: 'Point -0.15'
    },
    {
      value: 1.49,
      label: 'Point 1.49'
    },
    {
      value: 0.67,
      label: 'Point 0.67'
    },
    {
      value: -1.06,
      label: 'Point -1.06'
    },
    {
      value: 0.76,
      label: 'Point 0.76'
    },
    {
      value: -0.2,
      label: 'Point -0.2'
    },
    {
      value: -0.91,
      label: 'Point -0.91'
    },
    {
      value: -0.11,
      label: 'Point -0.11'
    },
    {
      value: 0.4,
      label: 'Point 0.4'
    },
    {
      value: 0.0800000000000001,
      label: 'Point 0.0800000000000001'
    },
    {
      value: 0.33,
      label: 'Point 0.33'
    },
    {
      value: 0.53,
      label: 'Point 0.53'
    },
    {
      value: 0.67,
      label: 'Point 0.67'
    },
    {
      value: -0.86,
      label: 'Point -0.86'
    },
    {
      value: 0.46,
      label: 'Point 0.46'
    },
    {
      value: 0.97,
      label: 'Point 0.97'
    },
    {
      value: -1.11,
      label: 'Point -1.11'
    },
    {
      value: -0.91,
      label: 'Point -0.91'
    },
    {
      value: -2.21,
      label: 'Point -2.21'
    },
    {
      value: -0.0899999999999999,
      label: 'Point -0.0899999999999999'
    },
    {
      value: -1.36,
      label: 'Point -1.36'
    },
    {
      value: -0.91,
      label: 'Point -0.91'
    },
    {
      value: -1.11,
      label: 'Point -1.11'
    },
    {
      value: 0.56,
      label: 'Point 0.56'
    },
    {
      value: -0.11,
      label: 'Point -0.11'
    },
    {
      value: -1.29,
      label: 'Point -1.29'
    },
    {
      value: -0.24,
      label: 'Point -0.24'
    },
    {
      value: 0.69,
      label: 'Point 0.69'
    },
    {
      value: 2.19,
      label: 'Point 2.19'
    },
    {
      value: -0.45,
      label: 'Point -0.45'
    },
    {
      value: -0.82,
      label: 'Point -0.82'
    },
    {
      value: 0.26,
      label: 'Point 0.26'
    },
    {
      value: -2.02,
      label: 'Point -2.02'
    },
    {
      value: 1.83,
      label: 'Point 1.83'
    },
    {
      value: -0.9,
      label: 'Point -0.9'
    },
    {
      value: 0.74,
      label: 'Point 0.74'
    },
    {
      value: -0.0899999999999999,
      label: 'Point -0.0899999999999999'
    },
    {
      value: -1.27,
      label: 'Point -1.27'
    },
    {
      value: 0.76,
      label: 'Point 0.76'
    },
    {
      value: -1.23,
      label: 'Point -1.23'
    },
    {
      value: -0.54,
      label: 'Point -0.54'
    },
    {
      value: 1.05,
      label: 'Point 1.05'
    },
    {
      value: -1.31,
      label: 'Point -1.31'
    },
    {
      value: 0.32,
      label: 'Point 0.32'
    },
    {
      value: 0.21,
      label: 'Point 0.21'
    },
    {
      value: -0.58,
      label: 'Point -0.58'
    },
    {
      value: -0.11,
      label: 'Point -0.11'
    }
  ]

  const dataset = {
    data,
    fill: true,
    borderColor: 'black'
  }

  return (
    <>
      <h1>Belle.js</h1>
      <Belle data={dataset} xScatter={false} />
    </>
  )
}

function main() {
  ReactDOM.render(<App />, document.getElementById('app'))
}

main()
