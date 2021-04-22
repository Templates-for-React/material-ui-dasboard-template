import { Typography } from "../Wrappers";

import useStyles from "./styles";

export default function PageTitle(props: { children?: any; title: string }) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h2" size="sm">
        {props.title}
      </Typography>
      <div className={classes.grow}/>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}
