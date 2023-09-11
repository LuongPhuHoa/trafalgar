import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { Text } from "./Text";
import { LandingButton } from "./LandingButton";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex justify-between w-full overflow-hidden m-auto">
      <Grid className="pl-44 py-32 flex justify-between" container columns={14} gap={2}>
        <Grid className="flex flex-col justify-between gap-6 pt-28" xs={5}>
          <Stack
            className="flex align-middle items-start w-full"
            direction="column"
            spacing={3}
          >
            <div className="">
                <Text>Virtual healthcare for you</Text>
            </div>
            <p className="text-gray-500 text-2xl font-light w-fit">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <LandingButton>Consult today</LandingButton>
          </Stack>
        </Grid>
        <Grid className="flex flex-row items-end self-end" xs={8}>
            <Image
                className="self-end"
                src= "/landing.png"
                width={693}
                height={600}
                alt=""
                quality={100}
            />
        </Grid>
      </Grid>
    </div>
  );
};
