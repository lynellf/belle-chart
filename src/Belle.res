module Main = {
  type point = {
    "x": int,
    "y": float
  }

  type dataItem = {
    "value": float,
    "label": option<string>
  }

  type dataSet = {
    "type": option<string>,
    "data": array<dataItem>,
    "fill": option<bool>,
    "backgroundColor": option<string>,
    "borderColor": option<string>,
    "pointBackgroundColor": option<string>,
    "pointBorderColor": option<string>,
    "pointHoverRadius": option<int>,
    "showLine": option<bool>
  }

  type chartOptions = {
    "legend": {
        "display": bool
    },
    "scales": {
      "yAxes": ({ "display": bool })
    }
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

  let defaultOptions = {
    "legend": {
        "display": false
    },
    "scales": {
      "yAxes": ({ "display": false })
    }
  }

  let getLabel = (tooltipItem, data) => {
    let defaultPoint = { "label": "No Label, No value", "x": 0.0, "y": 0.0, "color": "black" }
    let defaultSet = { "data": [] }
    let index = tooltipItem["index"]
    let allPoints = data["datasets"]
    let datasets = Belt.Array.get(allPoints, 3)
    let datapoints = Belt.Option.getWithDefault(datasets, defaultSet)["data"]
    let point = Belt.Array.get(datapoints, index)
    Belt.Option.getWithDefault(point, defaultPoint)["label"]
  }

  let formatDatapoints = (data, rawPoints, xScatter) => {
    let scatter = Belt.Option.getWithDefault(xScatter, false)
    let formattedPoints = Belt.Array.map(rawPoints, dataItem => {
      let x = dataItem["value"]
      let label = dataItem["label"]
      { "x": x, "y": Lookup.getY(x, scatter), "label": label }
    })
    Js.Obj.assign(data, { "data": formattedPoints })
  }

  let getDefaultOptions = (chartOptions: option<chartOptions>) => {
    Belt.Option.getWithDefault(chartOptions, defaultOptions)
  }

  @react.component
  let default = (~data: dataSet, ~options: option<chartOptions>, ~xScatter: option<bool>) => {
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

  
  
  let rawPoints =  data["data"]
  let formattedData = formatDatapoints(data, rawPoints, xScatter)
  let mergedData = Belt.Array.concat(baseDatasets, [formattedData])
  
  let chartData = {
    "datasets": mergedData
  };

  let standardOptions = {
    "legend": {
        "display": false
    },
    "scales": {
      "yAxes": ({ "display": false }, { "ticks": { "display": false }, "gridLines": { "display": false } })
    },
    "tooltips": {
      "callbacks": {
        "label": getLabel
      }
    }
 }

 let defaults = getDefaultOptions(options)
 let mergedOptions = Js.Obj.assign(defaults, standardOptions)

 module Scatter = {
    @react.component @module("react-chartjs-2")
    external make: (~data: 'a, ~options: chartOptions) => React.element = "Scatter"
  }
 <Scatter data={chartData} options={mergedOptions} />
  }
}

let default = Main.default