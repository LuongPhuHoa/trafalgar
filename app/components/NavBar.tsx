import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const NavBar = () => {
  return (
    <Container>
      {/* <ElevationScroll> */}
      <AppBar className="shadow-none p-12" color="secondary">
        <Toolbar className="flex justify-between items-center pl-32 " >
            <Stack className="flex align-middle items-center" direction="row" spacing={1.5}>
                <Avatar sx={{ bgcolor: blue[600] }}>T</Avatar>
                <h6 className="font-bold text-2xl" style={{ color: '#233348' }}>
                    Trafalgar
                </h6>
            </Stack>
          <Stack direction="row" spacing={1}>
            <Button className="normal-case text-gray-950 text-lg font-bold" variant="text" href="#">
              Home
            </Button>
            <Button className="normal-case text-gray-500 text-lg" variant="text" href="#">
              Find a doctor
            </Button>
            <Button className="normal-case text-gray-500 text-lg" variant="text" href="#">
              App
            </Button>
            <Button className="normal-case text-gray-500 text-lg" variant="text" href="#">
              Testimonials
            </Button>
            <Button className="normal-case text-gray-500 text-lg" variant="text" href="#">
              About Us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* </ElevationScroll> */}
      <Toolbar />
    </Container>
  );
};
