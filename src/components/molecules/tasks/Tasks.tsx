import { Task } from "components";
import { Box, List } from "@mui/material";

export const tasks = [
  {
    id: "1",
    favorite: false,
    isComplete: true,
    text: "Connect to mongodb",
  },
  {
    id: "2",
    favorite: true,
    isComplete: false,
    text: "Finish tutorial",
  },
];

export function Tasks() {
  return (
    <Box>
      <List>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </List>
    </Box>
  );
}
