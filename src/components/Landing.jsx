import { Button, Typography, styled, Stack } from '@mui/material'
import { Box } from '@mui/system'
import pizza from '../images/Banner_Pizza.jpg'
import { useTheme } from '@emotion/react'

const Landing = () => {

  const theme = useTheme()
  
    const MenuButton = styled(Button)(({theme})=>({
      backgroundColor: theme.palette.accent.main,
      height: "2.5rem",
      width: "8rem",
      fontWeight: "bold",
      '&:hover': {
        backgroundColor: theme.palette.hover.main,
      },
    }));

    const base = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${pizza})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    };

    const overlay = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
        opacity: 0.7,
        position: 'absolute',
        
    }

    const flexCenter = {
      display: "flex",
      alignItems:"center",
      flexDirection:"column",
      zIndex: 2,
    };

  return (
    <Box sx={base}>
        <Box sx={flexCenter} height={"30%"} justifyContent={"space-between"}>
          <Stack sx={flexCenter} justifyContent={"center"}>
            <Typography variant="h3" fontWeight={"bold"} sx={{fontSize: {xs: 40, sm: 50}}} color="white">Pizzeria Name</Typography>
            <Typography variant="p" color="white" mt={3}>0731234456</Typography>
          </Stack>
          <MenuButton variant="contained">Meny</MenuButton>
        </Box>
        <Box sx={overlay}>
        </Box>
    </Box>
    )
}

export default Landing