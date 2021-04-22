import { makeStyles } from "@material-ui/core";
import tinycolor from "tinycolor2";

export default makeStyles(theme => ({
  layoutContainer: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    position: "relative",
  },
  layoutText: {
    color: tinycolor("#F3F5FF")
      .darken()
      .toHexString(),
  },
  layoutButtonsRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  layoutButton: {
    backgroundColor: "#F3F5FF",
    width: 125,
    height: 50,
    outline: "none",
    border: "none",
  },
  layoutButtonActive: {
    backgroundColor: tinycolor("#F3F5FF")
      .darken()
      .toHexString(),
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: theme.spacing(2),
  },
  notificationCallButton: {
    color: "white",
    marginBottom: theme.spacing(1),
    textTransform: "none",
  },
  codeContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing(2),
  },
  notificationCloseButton: {
    position: "absolute",
    right: theme.spacing(2),
  },
  toastsContainer: {
    width: 400,
    marginTop: theme.spacing(6),
    right: 0,
  },
  progress: {
    visibility: "hidden",
  },
  notification: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    boxShadow: "none",
    overflow: "visible",
  },
  notificationComponent: {
    paddingRight: theme.spacing(4),
  },
  widgetHeader: {
    paddingBottom: 8
  }
}));
