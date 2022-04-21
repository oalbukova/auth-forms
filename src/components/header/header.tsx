// react redux
import React from "react";
import {
  useHistory,
} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hooks";

// services
import {deleteUser} from "../../services/actions/user";

// ui-components
import {
  Typography, AppBar, Box, Toolbar, IconButton, Menu, Container, Avatar, Tooltip, MenuItem, Link,
} from "@mui/material";

// utils
import {THistoryState} from "../../utils/types";


const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory<THistoryState>();
  const {token} = useSelector((state) => state.userReducer);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    if (token.refresh) {
      dispatch(deleteUser(token))
      history.push("/pre-login");
    }
  };

  return (<AppBar position="static">
    <Container>
      <Toolbar
        disableGutters
        sx={{justifyContent: {xs: "center", md: "space-between"}}}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{mr: 2, display: {xs: "none", md: "flex"}}}
        >
          LOGO
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
        >
          LOGO
        </Typography>

        <Box sx={{flexGrow: 0}}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: "45px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top", horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top", horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={handleCloseUserMenu}
            >
              <Link href="/registration" underline="hover">
                Регистрация
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleCloseUserMenu}
            >
              <Link href="/pre-login" underline="hover">
                Вход
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleCloseUserMenu}
            >
              <Link href='/pre-login' underline="hover" onClick={logout}>
                Выход
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>);
};
export default Header;
