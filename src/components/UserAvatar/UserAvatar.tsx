import React, {useMemo} from "react";
import {useTheme} from "@material-ui/core";
import {Typography} from "../Wrappers";
import {Color} from "../../types/Color";
import useStyles from "./styles";

export default function UserAvatar(props: UserAvatarProps) {

  const {color = 'primary', name = ""} = props;

  let classes = useStyles();
  let theme = useTheme();

  const letters = useMemo(() => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("");
  }, [name])

  return (
    <div
      className={classes.avatar}
      style={{backgroundColor: theme.palette[color].main}}
    >
      <Typography className={classes.text}>
        {letters}
      </Typography>
    </div>
  );
}

interface UserAvatarProps {
  color?: Color;
  name?: string;
  [item: string]: any;
}