/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

function Card({ icon, title, data, subTitle, increase, scheme }) {
  const themeColor = useTheme();
  //this theme exists in the nivo guides themings
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
      <Paper
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          minWidth: "333px",
          p: 1.5,
        }}
      >
        <Stack gap={1}>
          {icon}
          <Typography variant="body1" color="inherit">
            {title}
          </Typography>
          <Typography variant="body1" color="inherit">
            {subTitle}
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Box width={"70px"} height={"70px"}>
            <ResponsivePie
              data={data}
              theme={themeObj}
              colors={{ scheme: scheme }}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.7}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
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
            />
          </Box>
          <Typography variant="body1" color="inherit">
            {increase}
          </Typography>
        </Stack>
      </Paper>
  );
}

export default Card;
