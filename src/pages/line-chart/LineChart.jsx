/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material"
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(131, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 226
      },
      {
        "x": "helicopter",
        "y": 131
      },
      {
        "x": "boat",
        "y": 85
      },
      {
        "x": "train",
        "y": 111
      },
      {
        "x": "subway",
        "y": 181
      },
      {
        "x": "bus",
        "y": 82
      },
      {
        "x": "car",
        "y": 141
      },
      {
        "x": "moto",
        "y": 33
      },
      {
        "x": "bicycle",
        "y": 77
      },
      {
        "x": "horse",
        "y": 17
      },
      {
        "x": "skateboard",
        "y": 262
      },
      {
        "x": "others",
        "y": 204
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(301, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 59
      },
      {
        "x": "helicopter",
        "y": 251
      },
      {
        "x": "boat",
        "y": 179
      },
      {
        "x": "train",
        "y": 253
      },
      {
        "x": "subway",
        "y": 61
      },
      {
        "x": "bus",
        "y": 273
      },
      {
        "x": "car",
        "y": 260
      },
      {
        "x": "moto",
        "y": 170
      },
      {
        "x": "bicycle",
        "y": 2
      },
      {
        "x": "horse",
        "y": 234
      },
      {
        "x": "skateboard",
        "y": 72
      },
      {
        "x": "others",
        "y": 148
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(135, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 92
      },
      {
        "x": "helicopter",
        "y": 263
      },
      {
        "x": "boat",
        "y": 54
      },
      {
        "x": "train",
        "y": 81
      },
      {
        "x": "subway",
        "y": 21
      },
      {
        "x": "bus",
        "y": 86
      },
      {
        "x": "car",
        "y": 138
      },
      {
        "x": "moto",
        "y": 228
      },
      {
        "x": "bicycle",
        "y": 159
      },
      {
        "x": "horse",
        "y": 246
      },
      {
        "x": "skateboard",
        "y": 168
      },
      {
        "x": "others",
        "y": 95
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(124, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 34
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 78
      },
      {
        "x": "train",
        "y": 65
      },
      {
        "x": "subway",
        "y": 151
      },
      {
        "x": "bus",
        "y": 210
      },
      {
        "x": "car",
        "y": 152
      },
      {
        "x": "moto",
        "y": 295
      },
      {
        "x": "bicycle",
        "y": 43
      },
      {
        "x": "horse",
        "y": 98
      },
      {
        "x": "skateboard",
        "y": 95
      },
      {
        "x": "others",
        "y": 71
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(162, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 57
      },
      {
        "x": "helicopter",
        "y": 190
      },
      {
        "x": "boat",
        "y": 212
      },
      {
        "x": "train",
        "y": 67
      },
      {
        "x": "subway",
        "y": 207
      },
      {
        "x": "bus",
        "y": 275
      },
      {
        "x": "car",
        "y": 147
      },
      {
        "x": "moto",
        "y": 43
      },
      {
        "x": "bicycle",
        "y": 153
      },
      {
        "x": "horse",
        "y": 94
      },
      {
        "x": "skateboard",
        "y": 219
      },
      {
        "x": "others",
        "y": 282
      }
    ]
  }
]

function LineChart({isDashboard = false}) {
    const themeColor = useTheme();
    const themeObj = {
      text: {
        fontSize: 11,
        fill: themeColor.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      axis: {
        domain: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 16,
            fill: themeColor.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        ticks: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
          text: {
            fontSize: 11,
            fill: themeColor.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      grid: {
        line: {
          stroke: "#dddddd",
          strokeWidth: 0,
        },
      },
      legends: {
        title: {
          text: {
            fontSize: 11,
            fill: themeColor.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
        text: {
          fontSize: 11,
          fill: themeColor.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        ticks: {
          line: {},
          text: {
            fontSize: 10,
            fill: themeColor.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      annotations: {
        text: {
          fontSize: 13,
          fill: themeColor.palette.text.primary,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        link: {
          stroke: "#000000",
          strokeWidth: 1,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        outline: {
          stroke: "#000000",
          strokeWidth: 2,
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
        symbol: {
          fill: "#000000",
          outlineWidth: 2,
          outlineColor: "#ffffff",
          outlineOpacity: 1,
        },
      },
      tooltip: {
        wrapper: {},
        container: {
          background: themeColor.palette.background.paper,
          color: themeColor.palette.text.primary,
          fontSize: 12,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
      },
    };
  return (
    <div>
    <Box sx={{height: isDashboard ? '280px' :'75vh'}}>
        <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={themeObj}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? null :'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
    </div>
  )
}

export default LineChart
