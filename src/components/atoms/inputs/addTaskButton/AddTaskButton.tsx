import { Fab, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useSession } from "next-auth/react";

export function AddTaskButton() {
  const theme = useTheme();
  const session = useSession();
  const authenticated = session.status === "authenticated";

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  return (
    <Zoom
      in={authenticated}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${authenticated ? transitionDuration.exit : 0}ms`,
      }}
      unmountOnExit
    >
      <Fab
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        aria-label="Add task"
        color="primary"
      >
        <AddIcon />
      </Fab>
    </Zoom>
  );
}
