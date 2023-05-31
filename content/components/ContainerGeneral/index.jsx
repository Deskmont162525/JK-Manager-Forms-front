import { Typography } from "@material-ui/core";
import React from "react";
import { useStylesContainerGeneral } from "./ContainerGeneral.style";

export const ContainerGeneral = ({ children }) => {
  const classes = useStylesContainerGeneral();

  return <div className={classes.containerGeneral}>{children}</div>;
};

export const Container = ({ children }) => {
  const classes = useStylesContainerGeneral();
  return <div className={classes.container}>{children}</div>;
};
