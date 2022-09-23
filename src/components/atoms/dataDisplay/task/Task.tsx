import { useState } from "react";
import { ListItem, IconButton, InputBase } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface TaskProps {
  id?: string;
  favorite?: boolean;
  isComplete?: boolean;
  text?: string;
}

export function Task(props: TaskProps) {
  const [text, setText] = useState(props.text);
  const [favorite, setFavorite] = useState(props.favorite);
  const [isComplete, setIsComplete] = useState(props.isComplete);

  const FavoriteIcon = favorite ? StarIcon : StarBorderIcon;
  const IsCompleteIcon = isComplete
    ? CheckCircleIcon
    : RadioButtonUncheckedIcon;

  function handleChangeText(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setText(e.target.value);
  }

  function handleToggleFavorite() {
    setFavorite(!favorite);
  }

  function handleToggleIsComplete() {
    setIsComplete(!isComplete);
  }

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton size="large" onClick={handleToggleFavorite}>
          <FavoriteIcon />
        </IconButton>
      }
    >
      <IconButton size="large" onClick={handleToggleIsComplete}>
        <IsCompleteIcon />
      </IconButton>
      <InputBase
        defaultValue={text}
        onChange={handleChangeText}
        sx={{
          display: "flex",
          flex: 1,
          mx: 1,
        }}
      />
    </ListItem>
  );
}
