import { Box } from "@mui/system"
import { useTheme } from "@emotion/react"
import Typography from '@mui/material/Typography'
import { Stack } from "@mui/material";

const Footer = () => {
const theme = useTheme();

    const sx = {
        width: "100vw",
        height: "20vh",
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    }

    const openHours = {
        textDecoration: "underline",
    }

  return (
    <Box sx={sx}>
        <Box>
            <Typography variant="h6" color="inherit" sx={openHours}>Öppetider</Typography>
            <Stack direction="row" spacing={3}>
                    <Typography variant="p" color="inherit">Måndag - Fredag</Typography>
                    <Typography variant="p" color="inherit">11:00 - 20:00</Typography>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent={"space-between"}>
                    <Typography variant="p" color="inherit">Lördag - Söndag</Typography>
                    <Typography variant="p" color="inherit">11:00 - 00:00</Typography>
            </Stack>
        </Box>
    </Box>
)
}

export default Footer