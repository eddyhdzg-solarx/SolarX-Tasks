import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Menu,
  ListItemIcon,
  IconButton,
  Tooltip,
  menuClasses,
  Skeleton,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { LinkMenuItem } from "components";

export function AccountButton() {
  const session = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const image = session?.data?.user?.image;
  const authenticated = session.status === "authenticated";
  const href = authenticated ? "/api/auth/signout" : "/api/auth/signin";
  const text = authenticated ? "Sign Out" : "Sign In";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (session.status === "loading") {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  return (
    <>
      <Tooltip
        title="My Account"
        children={
          <IconButton onClick={handleClick}>
            <Avatar alt="avatar" src={image} />
          </IconButton>
        }
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={(theme) => ({
          [`& .${menuClasses.paper}`]: {
            mt: 1.5,
            minWidth: theme.spacing(25),
          },
        })}
      >
        <LinkMenuItem href={href}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          {text}
        </LinkMenuItem>
      </Menu>
    </>
  );
}
