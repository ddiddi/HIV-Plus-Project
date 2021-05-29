import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title="Dashboard" />
      <Grid container spacing={4}>
      
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="secondary"
            width="600px"
            href="https://dhruvdiddi.typeform.com/c/rBYEf5Ud"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              DENVER Risk Assessment
          </Button>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="secondary"
            width="600px"
            href="https://dhruvdiddi.typeform.com/c/Nl8LANUU"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              HIV Testing Kit Delivery
          </Button>
          </Widget>
        </Grid>

        <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="primary"
            width="600px"
            href="https://dhruvdiddi.typeform.com/c/Nl8LANUU"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              Contraceptive Delivery
          </Button>
            
          </Widget>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="primary"
            width="600px"
            href="https://dhruvdiddi.typeform.com/c/Nl8LANUU"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              PrEP Kit Delivery
          </Button>
            
          </Widget>
        </Grid>


        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="primary"
            width="600px"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              Physician Connect
          </Button>
            
          </Widget>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="primary"
            width="600px"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              Medication Scheduling
          </Button>
            
          </Widget>
        </Grid>
        
        </Grid>
        
        
        <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="tertiary"
            width="600px"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              Latest Reports
          </Button>
            
          </Widget>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            
                  <Button
            variant="contained"
            size="large"
            color="tertiary"
            width="600px"
            style={{maxWidth: '300px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}
          >
              Health Check In Survey
          </Button>
            
          </Widget>
        </Grid>

        </Grid>
        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  Health Charts
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      CD4 Count
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      CD4+ Count
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="secondary" />
                    <Typography className={classes.mainChartLegentElement}>
                      HIV RNA Count
                    </Typography>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="weekly">Monthly</MenuItem>
                  <MenuItem value="monthly">Yearly</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        
        <Grid item xs={12}>
          <Widget
            title="Current Medications"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
