import { Grid, Paper, Box } from "@material-ui/core";
import SingleButton from "./SingleButton";

const Input = ({ calcInfo }) => {
  const generateColumn = (column) => {
    return (
      <Grid item xs key={column}>
        {column.map((e) => {
          return <SingleButton func={e} key={e} />;
        })}
      </Grid>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {calcInfo.map((column) => {
          return generateColumn(column);
        })}
      </Grid>
    </Box>
  );
};

export default Input;
