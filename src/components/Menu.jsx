import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import menuPizza from "../images/Banner_Pizza_cropped.jpg";

const Menu = () => {
  const theme = useTheme();

    const base = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "fit-content",
        minHeight: {xs: "150vh", md: "100vh"},
        width: "100vw",
        margin: {xs: "50px auto", sm: "50px auto", md: "50px auto", lg: "5rem auto"},
        backgroundImage: `url(${menuPizza})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {xs:'0 0', lg:'center'},
        position: 'relative',
    }

    const grid = {
      justifyContent: "center",
      width: {xs: "100vw", sm: "80vw"},
      zIndex: 2,
      marginBottom: "2rem"
    }

    const card = {
      backgroundColor: theme.palette.primary.dark,
      padding: "15px 0",
      borderRadius: "5px",
      boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.5)",
    }

    
    const overlay = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      height: '100%',
      width: '100vw',
      backgroundColor: theme.palette.primary.main,
      opacity: 0.7,
      position: 'absolute',
      
  }


  return (
    <Box sx={base}>
          <Typography variant="h3" color="white" sx={{zIndex: 3, margin: "3rem 0"}}>Pizza</Typography>
        <Grid container spacing={4} gap={4} sx={grid}>
          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="h3" color="white" sx={{zIndex: 3, margin: "3rem 0"}}>Kebab</Typography>
        <Grid container spacing={4} gap={4} sx={grid}>
          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="h3" color="white" sx={{zIndex: 3, margin: "3rem 0"}}>A la carté</Typography>
        <Grid container spacing={4} gap={4} sx={grid}>
          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={card}>
            <Stack direction="column" spacing={1} color={"white"}>
            <Typography variant="h5" color="inherit">Pizza Klass 1 <Typography variant="p" fontSize={15} color={theme.palette.accent.main} display={"inline"}>125kr</Typography></Typography>
                <Typography variant="p" color="inherit">Vesuvio - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka</Typography></Typography>
                <Typography variant="p" color="inherit">Hawai - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost</Typography></Typography>
                <Typography variant="p" color="inherit">Capprisiosa - <Typography variant="p" color={theme.palette.accent.main} display={"inline"} fontWeight={200}>Ost, Skinka, Champinoner</Typography></Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={overlay}>
        </Box>
    </Box>
  )
}

export default Menu