import * as React from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const Footer = () => {
  return (
    <Container
      className="p-12 m-0 w-full max-w-full"
      sx={{
        background: "linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
      }}
    >
      <Grid className="px-36 py-32" container spacing={1.5}>
        <Grid className="flex flex-col justify-between gap-6" xs={6}>
          <Stack
            className="flex align-middle items-center"
            direction="row"
            spacing={1.5}
          >
            <Avatar sx={{ bgcolor: blue[600] }}>T</Avatar>
            <h6 className="font-bold text-2xl text-white">Trafalgar</h6>
          </Stack>
          <p className="text-white text-lg font-light line-clamp-3 w-2/3">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="text-white text-lg font-light">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </Grid>
        <Grid className="flex justify-between gap-6" xs={6}>
          <Grid className="flex flex-col gap-7" xs={4}>
            <h6 className="text-white text-xl font-bold">Company</h6>
            <Stack className="items-start" direction="column" spacing={1.5}>
              <a className="normal-case text-white text-lg font-light" href="#">About</a>
                <a className="normal-case text-white text-lg font-light" href="#">Testimonials</a>
                <a className="normal-case text-white text-lg font-light" href="#">Find a doctor</a>
                <a className="normal-case text-white text-lg font-light" href="#">Apps</a>
            </Stack>
          </Grid>
            <Grid className="flex flex-col gap-7" xs={4}>
                <h6 className="text-white text-xl font-bold">Region</h6>
                <Stack className="items-start" direction="column" spacing={1.5}>
                    <a className="normal-case text-white text-lg font-light" href="#">Indonesia</a>
                    <a className="normal-case text-white text-lg font-light" href="#">Singapore</a>
                    <a className="normal-case text-white text-lg font-light" href="#">Hongkong</a>
                    <a className="normal-case text-white text-lg font-light" href="#">Canada</a>
                </Stack>
            </Grid>
            <Grid className="flex flex-col gap-7" xs={4}>
                <h6 className="text-white text-xl font-bold">Help</h6>
                <Stack className="items-start" direction="column" spacing={1.5}>
                    <a className="normal-case text-white text-lg font-light" href="#">Help center</a>
                    <a className="normal-case text-white text-lg font-light" href="#">Contact support</a>
                    <a className="normal-case text-white text-lg font-light" href="#">Instructions</a>
                    <a className="normal-case text-white text-lg font-light" href="#">How it works</a>
                </Stack>
            </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
