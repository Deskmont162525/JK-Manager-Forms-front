import { makeStyles } from "@material-ui/core";

export const useStylesContainerGeneral = makeStyles((theme) => ({
  containerGeneral: {
    position: "relative",
    minHeight: "100vh !important",
  },
  container: {
    position: "relative",
    maxWidth: 1260,
    margin: "auto",
    padding: "20px",
  },
}));
