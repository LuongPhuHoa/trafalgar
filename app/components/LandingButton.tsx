import Button from "@mui/material/Button";

export const LandingButton = (props: any) => {
    return (
        <Button className="" variant="contained" color="primary">
        {props.children}
        </Button>
    );
}