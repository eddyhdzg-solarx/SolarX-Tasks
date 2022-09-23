import {
  Typography,
  TypographyProps,
  styled,
  experimental_sx as sx,
} from "@mui/material";

interface ITypography extends TypographyProps {
  component?: React.ElementType<any>;
}

export const PageTitle = styled(Typography)(({ theme }) =>
  sx({
    // mt: theme.spacing(1),
    mb: 2,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("md")]: {
      // mt: theme.spacing(2),
      mb: 3,
    },
  })
) as React.FC<ITypography>;

PageTitle.defaultProps = {
  component: "h1",
  variant: "h3",
};
