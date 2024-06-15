/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "react",
    label: "react",
    value: 89,
    color: "hsl(52, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 25,
    color: "hsl(244, 70%, 50%)",
  },
  {
    id: "Html",
    label: "Html",
    value: 76,
    color: "hsl(255, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 181,
    color: "hsl(68, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 121,
    color: "hsl(260, 70%, 50%)",
  },
];

function PieChart({ isDashboard = false }) {
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
        strokeWidth: 1,
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
    <Box sx={{ height: isDashboard ? "220px" : "75vh" }}>
      <ResponsivePie
        data={data}
        theme={themeObj}
        margin={
          isDashboard
            ? { top: 10, right: 0, bottom: 0, left: 10 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        startAngle={-147}
        endAngle={357}
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "category10" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={themeColor.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: themeColor.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: themeColor.palette.text.disabled,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}

export default PieChart;
