import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
const urlImage = `/${process.env.NEXT_PUBLIC_BASE_PATH}/demo/images/notfound/axolot-cute.gif`
const NoSession = ({message}) => {
  return (
    <div className="container-redi">      
      <div style={{ paddingTop: 18 }}>
        <Grid className="grid-redi">
        <Typography className="title-redi">Vaya</Typography>
        <Typography className="subtitle-redi">
            {message}
          </Typography>
          <img className="image-redi" src={urlImage} alt="checkSucces" />        
        </Grid>
      </div>
      <Typography className="link-redi">
              Redirigiendo al DASHBOARD              
            </Typography>  
      <CircularProgress size={40} style={{ marginLeft: 5 }} />
    </div>
  );
};

export default NoSession;
