import { Box, Typography } from "@mui/material";
import {
  Container,
  Tasks,
  AccountButton,
  AddTaskButton,
  CenterLoader,
} from "components";
import { useSession } from "next-auth/react";

export function IndexTemplate() {
  const session = useSession();
  const loading = session.status === "loading";
  const authenticated = session.status === "authenticated";
  return (
    <>
      <Box
        sx={{
          pb: 3,
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          pr: {
            xs: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">SolarX Tasks</Typography>
          <AccountButton />
        </Box>
      </Container>
      <Container
        maxWidth="md"
        sx={{
          px: {
            xs: 1,
          },
        }}
      >
        {loading && <CenterLoader />}
        {authenticated && <Tasks />}
      </Container>
      <AddTaskButton />
    </>
  );
}
