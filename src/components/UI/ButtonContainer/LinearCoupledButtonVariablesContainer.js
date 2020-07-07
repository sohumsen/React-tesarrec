import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip, Menu, Paper } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { blue,yellow,pink } from '@material-ui/core/colors';

const LinearCoupledButtonVariablesContainer = (props) => {
  return (
    <Paper>
      <Tooltip title="Add Constant" placement="top" arrow>
        <span>
          <IconButton
            edge="end"
            aria-label="add"
            onClick={()=>props.onIncrementVariable("Constant")}
          >
            <AddBoxIcon style={{ color: pink[300] }}/>
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Add Independent" placement="top" arrow>
        <span>
          <IconButton
            edge="end"
            aria-label="add"
            onClick={()=>props.onIncrementVariable("Independent")}
          >
            <AddBoxIcon style={{ color: yellow[500] }}/>
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Add Dependent" placement="top" arrow>
        <span>
          <IconButton
            edge="end"
            aria-label="add"
            onClick={()=>props.onIncrementVariable("Dependent")}
          >
            <AddBoxIcon style={{ color: blue[500] }}/>
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Reset Equations" placement="top" arrow>
        <span>
          <IconButton
            edge="end"
            aria-label="Reset"
            onClick={props.resetForm}
          >
            <RestoreIcon />
          </IconButton>
        </span>
      </Tooltip>

     
    </Paper>
  );
};

export default LinearCoupledButtonVariablesContainer;
