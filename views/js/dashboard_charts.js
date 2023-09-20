function DragOrderingOfBars(accion, startDate, finalDate, rootName, seriesName, categoryName, valueX, textRange, initialRange, finalRange){
  var data;
  fetch("../controller/dashboard_controller.php", { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({accion:accion,inicio:startDate,final:finalDate}),  
    })
    .then((response) => response.json()) 
    .then((jsondata) => {
      data = jsondata;
    }).then(() => {
      am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new(rootName);
        
        
        var myTheme = am5.Theme.new(root);
        
        myTheme.rule("Grid", ["base"]).setAll({
          strokeOpacity: 0.1
        });

      // creater exporting menu 
      var exporting = am5plugins_exporting.Exporting.new(root, {
        menu: am5plugins_exporting.ExportingMenu.new(root, {}),
        pngOptions: {
          quality: 0.8,
          maintainPixelRatio: true
        }
      });
        
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root),
          myTheme
        ]);
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "none",
            wheelY: "none",
            pinchZoomX:true
          })
        );
        
        
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
        yRenderer.grid.template.set("location", 1);
        
        var yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "nombre_ips", 
            renderer: yRenderer
          })
        );
        
        var xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            renderer: am5xy.AxisRendererX.new(root, {
              visible: true,
              strokeOpacity: 0.1
            })
          })
        );
        
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: "count", 
            sequencedInterpolation: true,
            categoryYField: "nombre_ips"
          })
        );
        
        var columnTemplate = series.columns.template;
        
        columnTemplate.setAll({
          draggable: true,
          cursorOverStyle: "pointer",
          //tooltipText: "nombre_ips",//en donde va el nombre que muestra la barra  
          cornerRadiusBR: 10,
          cornerRadiusTR: 10,
          strokeOpacity: 0
        });
        columnTemplate.adapters.add("fill", (fill, target) => {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        columnTemplate.adapters.add("stroke", (stroke, target) => {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        columnTemplate.events.on("dragstop", () => {
          sortCategoryAxis();
        });
        
        // Get series item by category
        function getSeriesItem(category) {
          for (var i = 0; i < series.dataItems.length; i++) {
            var dataItem = series.dataItems[i];
            if (dataItem.get("categoryY") == category) {
              return dataItem;
            }
          }
        }
        
        
        // Axis sorting
        function sortCategoryAxis() {
          // Sort by value
          series.dataItems.sort(function(x, y) {
            return y.get("graphics").y() - x.get("graphics").y();
          });
        
          var easing = am5.ease.out(am5.ease.cubic);
        
          // Go through each axis item
          am5.array.each(yAxis.dataItems, function(dataItem) {
            // get corresponding series item
            var seriesDataItem = getSeriesItem(dataItem.get("category"));
        
            if (seriesDataItem) {
              // get index of series data item
              var index = series.dataItems.indexOf(seriesDataItem);
        
              var column = seriesDataItem.get("graphics");
        
              // position after sorting
              var fy =
                yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
                column.height() / 2;
        
              // set index to be the same as series data item index
              if (index != dataItem.get("index")) {
                dataItem.set("index", index);
        
                // current position
                var x = column.x();
                var y = column.y();
        
                column.set("dy", -(fy - y));
                column.set("dx", x);
        
                column.animate({ key: "dy", to: 0, duration: 600, easing: easing });
                column.animate({ key: "dx", to: 0, duration: 600, easing: easing });
              } else {
                column.animate({ key: "y", to: fy, duration: 600, easing: easing });
                column.animate({ key: "x", to: 0, duration: 600, easing: easing });
              }
            }
          });
        
          // Sort axis items by index.
          // This changes the order instantly, but as dx and dy is set and animated,
          // they keep in the same places and then animate to true positions.
          yAxis.dataItems.sort(function(x, y) {
            return x.get("index") - y.get("index"); 
          });
        }
        
        // Set data
        // var data = [{
        //   country: "USA",
        //   value: 2025
        // }, {
        //   country: "China",
        //   value: 1882
        // }, {
        //   country: "Japan",
        //   value: 1809
        // }, {
        //   country: "Germany",
        //   value: 1322
        // }, {
        //   country: "UK",
        //   value: 1122
        // }];
        
        yAxis.data.setAll(data);
        series.data.setAll(data);
        
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);
        
        });
  });
}


function ColmunRotatedLabelsChart (accion, startDate, finalDate, rootName, seriesName, categoryName, valueX, textRange, initialRange, finalRange){
  var data;
  fetch("../controller/dashboard_controller.php", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({accion:accion,inicio:startDate,final:finalDate}),  
    })
    .then((response) => response.json()) 
    .then((jsondata) => {
      data = jsondata;
    }).then(() => {
      am5.ready(function() {
        
      am5.array.each(am5.registry.rootElements, function(root) {
        if(root.dom.id == rootName) {
          root.dispose();
        }
      });

      // Create root element
      var root = am5.Root.new(rootName);

      
      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // creater exporting menu
      var exporting = am5plugins_exporting.Exporting.new(root, {
        menu: am5plugins_exporting.ExportingMenu.new(root, {}),
        pngOptions: {
          quality: 0.8,
          maintainPixelRatio: true
        }
      });

      
      // Create chart
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX:true
      }));

      // add cursor
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });

      //create axis
      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: categoryName,
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));

      // Create series
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: seriesName,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: valueX,
        sequencedInterpolation: true,
        categoryXField: categoryName,
        tooltip: am5.Tooltip.new(root, {
          labelText:"{valueY}"
        })
      }));

      series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
      series.columns.template.adapters.add("fill", function(fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function(stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      xAxis.data.setAll(data);
      series.data.setAll(data);

      series.appear(1000);
      chart.appear(1000, 100);

      //create range
      function createRange(value, endValue, color) {
        var rangeDataItem = yAxis.makeDataItem({
          value: value,
          endValue: endValue
        });
        
        var range = yAxis.createAxisRange(rangeDataItem);
        
        if (endValue) {
          range.get("axisFill").setAll({
            fill: color,
            fillOpacity: 0.2,
            visible: true
          });
          
          range.get("label").setAll({
            fill: am5.color(0xffffff),
            text: textRange,
            location: 1,
            background: am5.RoundedRectangle.new(root, {
              fill: color
            })
          });
        }
        else {
          range.get("label").setAll({
            fill: am5.color(0xffffff),
            text: textRange,
            background: am5.RoundedRectangle.new(root, {
              fill: color
            })
          });
        }

        range.get("grid").setAll({
          stroke: color,
          strokeOpacity: 1,
          location: 1
        });
        
      }

      //set range
      createRange(initialRange, finalRange, am5.color(0xff621f));

      //set bullets
      series.bullets.push(function(root) {
        return am5.Bullet.new(root, {
          locationX: 0.5,
          locationY: 1,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            centerX: am5.percent(50),
            centerY: am5.percent(100),
            populateText: true
          })
        });
      });

    }); 
  });
}

function dragOrderingBarChart(accion, startDate, finalDate, rootName, categoryName, valueX, seriesName ){
  var data;
  fetch("../controller/dashboard_controller.php", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({accion:accion,inicio:startDate,final:finalDate}),  
    })
    .then((response) => response.json()) 
    .then((jsondata) => {
      data = jsondata;
    }).then(() => {
      am5.ready(function() {


        am5.array.each(am5.registry.rootElements, function(root) {
          
          console.log(root.dom.id);
          if(root.dom.id == rootName) {
            root.dispose();
          }
        });

        var root = am5.Root.new(rootName);

        root.setThemes([am5themes_Animated.new(root)]);

        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none"
          })
        );

        var yRenderer = am5xy.AxisRendererY.new(root, {
          minGridDistance: 30
        });

        var yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: categoryName,
            renderer: yRenderer
          })
        );

        var xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            renderer: am5xy.AxisRendererX.new(root, {})
          })
        );

        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: seriesName,
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: valueX,
            sequencedInterpolation: true,
            categoryYField: categoryName
          })
        );

        var columnTemplate = series.columns.template;

        columnTemplate.setAll({
          draggable: true,
          cursorOverStyle: "pointer",
          tooltipText: "drag to rearrange",
          cornerRadiusBR: 10,
          cornerRadiusTR: 10
        });
        columnTemplate.adapters.add("fill", (fill, target) => {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        columnTemplate.adapters.add("stroke", (stroke, target) => {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        columnTemplate.events.on("dragstop", () => {
          sortCategoryAxis();
        });

        function getSeriesItem(category) {
          for (var i = 0; i < series.dataItems.length; i++) {
            var dataItem = series.dataItems[i];
            if (dataItem.get("categoryY") == category) {
              return dataItem;
            }
          }
        }

        function sortCategoryAxis() {
          series.dataItems.sort(function(x, y) {
            return y.get("graphics").y() - x.get("graphics").y();
          });

          var easing = am5.ease.out(am5.ease.cubic);

          // Go through each axis item
          am5.array.each(yAxis.dataItems, function(dataItem) {
            // get corresponding series item
            var seriesDataItem = getSeriesItem(dataItem.get("category"));

            if (seriesDataItem) {
              // get index of series data item
              var index = series.dataItems.indexOf(seriesDataItem);

              var column = seriesDataItem.get("graphics");

              // position after sorting
              var fy =
                yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
                column.height() / 2;

              // set index to be the same as series data item index
              if (index != dataItem.get("index")) {
                dataItem.set("index", index);

                // current position
                var x = column.x();
                var y = column.y();

                column.set("dy", -(fy - y));
                column.set("dx", x);

                column.animate({
                  key: "dy",
                  to: 0,
                  duration: 600,
                  easing: easing
                });
                column.animate({
                  key: "dx",
                  to: 0,
                  duration: 600,
                  easing: easing
                });
              } else {
                column.animate({
                  key: "y",
                  to: fy,
                  duration: 600,
                  easing: easing
                });
                column.animate({
                  key: "x",
                  to: 0,
                  duration: 600,
                  easing: easing
                });
              }
            }
          });

          yAxis.dataItems.sort(function(x, y) {
            return x.get("index") - y.get("index");
          });
        }

        // creater exporting menu
        var exporting = am5plugins_exporting.Exporting.new(root, {
          menu: am5plugins_exporting.ExportingMenu.new(root, {}),
          pngOptions: {
            quality: 0.8,
            maintainPixelRatio: true
          }
        });

        yAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);

      }); // end am5.ready()
  })

}
  function simplePieChart(accion, startDate, finalDate, rootName, categoryName, valueX){
    var data;
  fetch("../controller/dashboard_controller.php", { 
    method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({accion:accion,inicio:startDate,final:finalDate}),  
  })
    .then((response) => response.json())
    .then((jsondata) => {
      data = jsondata;
      console.log(jsondata);
    }).then(() => {

      am5.ready(function() {
                
        am5.array.each(am5.registry.rootElements, function(root) {
          if(root.dom.id == rootName) {
            root.dispose();
          }
        });

        // Create root element
        var root = am5.Root.new(rootName);

        // Set themes
        root.setThemes([
          am5themes_Animated.new(root)
        ]);

        // Create chart
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            endAngle: 270
          })
        );

        // Create series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: valueX,
            categoryField: categoryName,
            endAngle: 270
          })
        );

        series.states.create("hidden", {
          endAngle: -90
        });

        series.data.setAll(data);

        series.appear(1000, 100);

        // creater exporting menu
        var exporting = am5plugins_exporting.Exporting.new(root, {
          menu: am5plugins_exporting.ExportingMenu.new(root, {}),
          pngOptions: {
            quality: 0.8,
            maintainPixelRatio: true
          }
        });
      }); // end am5.ready()
    });
  }

  function controlChart(){
    am5.ready(function() {

    var root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));

    var xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("forceHidden", true);
    xRenderer.labels.template.setAll({multiLocation: 0, location:0});

    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 30 },
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
      extraMin: 0.01,
      extraMax: 0.01,
      tooltipLocation: 0
    }));

    var yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("forceHidden", true);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: yRenderer
    }));

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);

    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "timestamp",
      locationX: 0,
      seriesTooltipTarget: "bullet",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.bullets.push(function() {
      var circleTemplate = am5.Template.new({
        radius: 6,
        templateField: "bulletSettings",
        fill: series.get("fill"),
        strokeWidth: 2,
        stroke: root.interfaceColors.get("background")
      })

      var circle = am5.Circle.new(root, {}, circleTemplate);

      return am5.Bullet.new(root, {
        sprite: circle,
        locationX: 0
      });
    });

    function createGuide(value, text, dashArray) {
      var guideDataItem = yAxis.makeDataItem({ value: value });
      yAxis.createAxisRange(guideDataItem);
      guideDataItem.get("grid").setAll({
        forceHidden: false,
        strokeOpacity: 0.2,
        strokeDasharray: dashArray
      });

      var label = guideDataItem.get("label");
      label.setAll({
        text: text,
        isMeasured: false,
        centerY: am5.p100
      });

      label.adapters.add("x", function(x) {
        return chart.plotContainer.width();
      })
      
      chart.events.on("boundschanged", function(){
        label.set("x", label.get("x"))
      })  
    }


    createGuide(98.8, "LCL", [2, 2]);
    createGuide(100.1, "CL");
    createGuide(101.2, "UCL", [2, 2]);


    var data = [{
      "timestamp": new Date(2020, 0, 1, 22, 30).getTime(),
      "value": 99.71
    }, {
      "timestamp": new Date(2020, 0, 1, 23, 0).getTime(),
      "value": 99.13
    }, {
      "timestamp": new Date(2020, 0, 1, 23, 30).getTime(),
      "value": 98.5
    }, {
      "timestamp": new Date(2020, 0, 2, 0, 0).getTime(),
      "value": 101
    }, {
      "timestamp": new Date(2020, 0, 2, 0, 30).getTime(),
      "value": 99.45
    }, {
      "timestamp": new Date(2020, 0, 2, 1, 0).getTime(),
      "value": 100.9
    }, {
      "timestamp": new Date(2020, 0, 2, 1, 30).getTime(),
      "value": 100.39
    }, {
      "timestamp": new Date(2020, 0, 2, 2, 0).getTime(),
      "value": 101.1
    }, {
      "timestamp": new Date(2020, 0, 2, 2, 30).getTime(),
      "value": 101.45
    }, {
      "timestamp": new Date(2020, 0, 2, 3, 0).getTime(),
      "value": 101.15
    }, {
      "timestamp": new Date(2020, 0, 2, 3, 30).getTime(),
      "value": 100.5
    }, {
      "timestamp": new Date(2020, 0, 2, 4, 0).getTime(),
      "value": 101.55,
      "bulletSettings": { fill: am5.color("#f0c803") }
    }, {
      "timestamp": new Date(2020, 0, 2, 4, 30).getTime(),
      "value": 101.7,
      "bulletSettings": { fill: am5.color("#970505") }
    }, {
      "timestamp": new Date(2020, 0, 2, 5, 0).getTime(),
      "value": 100.5,
      "bulletSettings": { fill: am5.color("#f0c803") }
    }, {
      "timestamp": new Date(2020, 0, 2, 5, 30).getTime(),
      "value": 100.92,
      "bulletSettings": { fill: am5.color("#f0c803") }
    }, {
      "timestamp": new Date(2020, 0, 2, 6, 0).getTime(),
      "value": 102.2,
      "bulletSettings": { fill: am5.color("#970505") }
    }];

    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    }); 
  }
  
  function gaugeChart(accion, startDate, finalDate, rootName){
    var data;
    fetch("../controller/dashboard_controller.php", {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({accion:accion,inicio:startDate,final:finalDate}),  
      })
      .then((response) => response.json()) 
      .then((jsondata) => {
        data = jsondata[0]['count'];
      }).then(() => {
      am5.ready(function() {

        // Create root element
        am5.array.each(am5.registry.rootElements, function(root) {
          if(root.dom.id == rootName) {
            root.dispose();
          }
        });
          
          // Create root element
          var root = am5.Root.new(rootName);

          // Set themes
          root.setThemes([
          am5themes_Animated.new(root)
          ]);

          // Create chart
          var chart = root.container.children.push(
          am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            startAngle: 180,
            endAngle: 360
          })
          );

          // Create axis and its renderer
          var axisRenderer = am5radar.AxisRendererCircular.new(root, {
          innerRadius: -10,
          strokeOpacity: 1,
          strokeWidth: 15,
          strokeGradient: am5.LinearGradient.new(root, {
            rotation: 0,
            stops: [
                { color: am5.color(0x456394) },
                { color: am5.color(0x563774) },
                { color: am5.color(0xcc607f) },
                { color: am5.color(0xdc3554) }
              ]
          })
          });

          var xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            max: 4500,
            strictMinMax: true,
            renderer: axisRenderer
          })
          );

          // Add clock hand
          var axisDataItem = xAxis.makeDataItem({});
          axisDataItem.set("value", 0);

          var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
          sprite: am5radar.ClockHand.new(root, {
            radius: am5.percent(99)
          })
          }));

          xAxis.createAxisRange(axisDataItem);

          axisDataItem.get("grid").set("visible", false);

          axisDataItem.animate({
            key: "value",
            to: data,
            duration: 800,
            easing: am5.ease.out(am5.ease.cubic)
          });

          chart.appear(1000, 100);

        });
      });
  }