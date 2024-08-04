import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import theme from "../../theme"
import { SpaceBar } from "@mui/icons-material"

const  NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-around"

  }))
  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          </StyledToobar>
      </AppBar>
    </>
  )
}

export default NavBar