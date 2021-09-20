module Main = {
  type point = {
    "x": int,
    "y": float
  }

  type dataSet = {
    "type": string,
    "data": array<point>,
    "fill": bool,
    "backgroundColor": string,
    "borderColor": string,
    "pointBackgroundColor": string,
    "pointBorderColor": string,
    "pointHoverRadius": int,
    "showLine": bool
  }

  let belowAverageLine = [
    { "x": -3, "y": 0.00135 },
    { "x": -2, "y": 0.02275 },
    { "x": -1, "y": 0.15866 }
  ]

  let averageLine = [
    { "x": -1, "y": 0.15866 },
    { "x": 0, "y": 0.5 },
    { "x": 1, "y": 0.15866 }
  ]

  let aboveAverageLine = [
    { "x": 1, "y": 0.15866 },
    { "x": 2, "y": 0.02275 },
    { "x": 3, "y": 0.00135 }
  ]

  type chartOptions = {
    "legend": {
        "display": bool
    },
    "scales": {
      "yAxes": ({ "display": bool })
    }
  }

  @react.component
  let default = (~data: dataSet, ~options: chartOptions) => {
  let baseDatasets = [
    {
      "type": "line",
      "data": belowAverageLine,
      "fill": true,
      "backgroundColor": "rgba(246, 36, 89, 0.3)",
      "borderColor": "rgba(0, 0, 0, 0)",
      "pointBackgroundColor": "rgba(0, 0, 0, 0)",
      "pointBorderColor": "rgba(0, 0, 0, 0)",
      "pointHoverRadius": 0,
      "showLine": true
    },
    {
      "type": "line",
      "data": averageLine,
      "fill": true,
      "backgroundColor": "rgba(244, 208, 63, 0.3)",
      "borderColor": "rgba(0, 0, 0, 0)",
      "pointBackgroundColor": "rgba(0, 0, 0, 0)",
      "pointBorderColor": "rgba(0, 0, 0, 0)",
      "pointHoverRadius": 0,
      "showLine": true
    },
    {
      "type": "line",
      "data": aboveAverageLine,
      "fill": true,
      "backgroundColor": "rgba(35, 203, 167, 0.3)",
      "borderColor": "rgba(0, 0, 0, 0)",
      "pointBackgroundColor": "rgba(0, 0, 0, 0)",
      "pointBorderColor": "rgba(0, 0, 0, 0)",
      "pointHoverRadius": 0,
      "showLine": true
    }
  ]

  module Scatter = {
    @react.component @module("react-chartjs-2")
    external make: (~data: 'a, ~options: chartOptions) => React.element = "Scatter"
  }
  
  let rawPoints =  data["data"]
  
  let formattedPoints = Belt.Array.map(rawPoints, point => {
    let x = Belt.Int.toFloat(point["x"])
    { "x": x, "y": Lookup.getY(x) }
  })
  
  let formattedData = Js.Obj.assign(data, { "data": formattedPoints })
  let mergedData = Belt.Array.concat(baseDatasets, [formattedData])
  
  let chartData = {
    "datasets": mergedData
  };

  let defaultOptions = {
    "legend": {
        "display": false
    },
    "scales": {
      "yAxes": ({ "display": false })
    }
 }

 <Scatter data={chartData} options={Js.Obj.assign(defaultOptions, options)} />
  }
}

let default = Main.default