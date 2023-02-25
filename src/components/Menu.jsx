import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";

const Menu = () => {
  const theme = useTheme();

    const base = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: "fit-content",
        minHeight: {xs: "150vh", md: "100vh"},
        width: {xs: "100vw", sm: "80vw"},
        margin: {xs: "50px auto", sm: "50px auto", md: "50px auto", lg: "0 auto"},

    }

    const card = {
      backgroundColor: theme.palette.primary.dark,
      padding: "15px 0",
      borderRadius: "5px",
      boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.5)",
    }

  return (
    <Box sx={base}>
        <Grid container spacing={4} gap={4} justifyContent={"center"} width={"100%"}>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h6" color="inherit">Pizza Klass 1 <Typography variant="p" color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>
        </Grid>
    </Box>
  )
}

export default Menu