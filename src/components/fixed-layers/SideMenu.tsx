import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Collapse,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  LocalOffer,
  Description,
  ShoppingBag,
  StarBorder,
} from "@mui/icons-material";
import logoMenuRetracted from "../assets/menu-icons/logo-menu-retraido.png";
import logoMenuExpanded from "../assets/menu-icons/logo-menu-expandido.png";
import menuStatusIcon from "../assets/menu-icons/menu-status-icon.png";
import menuReportsIcon from "../assets/menu-icons/menu-reports-icon.png";
import menuDashboardIcon from "../assets/menu-icons/menu-dashboard-icon.png";
import menuProductsIcon from "../assets/menu-icons/menu-products-icon.png";
import menuFinanceiroIcon from "../assets/menu-icons/menu-financeiro-icon.png";
import menuSuporteIcon from "../assets/menu-icons/menu-suporte-icon.png";
import menuPerfilIcon from "../assets/menu-icons/menu-perfil-icon.png";
import menuNewsIcon from "../assets/menu-icons/menu-news-icon.png";
import menuDarkModeIcon from "../assets/menu-icons/menu-darkmode-icon.png";
import menuLogoutIcon from "../assets/menu-icons/menu-logout-icon.png";

interface MenuItem {
  icon: string;
  text: string;
  hasSubmenu?: boolean;
  submenuItems?: { icon: JSX.Element; text: string }[];
}

const MenuLateral = ({ expanded }: { expanded: boolean }) => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSubmenu = (text: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  React.useEffect(() => {
    if (!expanded) {
      setOpenSubmenus({});
    }
  }, [expanded]);

  const menuItems: (MenuItem | "separator")[] = [
    { icon: menuStatusIcon, text: "Status" },
    { icon: menuReportsIcon, text: "Reports" },
    "separator",
    { icon: menuDashboardIcon, text: "Dashboard" },
    {
      icon: menuProductsIcon,
      text: "Produtos",
      hasSubmenu: true,
      submenuItems: [
        { icon: <LocalOffer />, text: "Catálogo de Produtos" },
        { icon: <Description />, text: "Produtos Contratados" },
        { icon: <ShoppingBag />, text: "Anúncios e Promoções" },
      ],
    },
    {
      icon: menuFinanceiroIcon,
      text: "Financeiro",
      hasSubmenu: true,
      submenuItems: [
        { icon: <StarBorder />, text: "Submenu 1" },
        { icon: <StarBorder />, text: "Submenu 2" },
      ],
    },
    {
      icon: menuSuporteIcon,
      text: "Suporte",
      hasSubmenu: true,
      submenuItems: [
        { icon: <StarBorder />, text: "Submenu 1" },
        { icon: <StarBorder />, text: "Submenu 2" },
      ],
    },
    {
      icon: menuPerfilIcon,
      text: "Perfil",
      hasSubmenu: true,
      submenuItems: [
        { icon: <StarBorder />, text: "Submenu 1" },
        { icon: <StarBorder />, text: "Submenu 2" },
      ],
    },
    {
      icon: menuNewsIcon,
      text: "Notícias",
      hasSubmenu: true,
      submenuItems: [
        { icon: <StarBorder />, text: "Submenu 1" },
        { icon: <StarBorder />, text: "Submenu 2" },
      ],
    },
  ];

  const bottomItems: MenuItem[] = [
    { icon: menuDarkModeIcon, text: "Dark Mode" },
    { icon: menuLogoutIcon, text: "Log Out" },
  ];

  return (
    <Box
      sx={{
        width: expanded ? 250 : 70,
        bgcolor: "#f4f4f4",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        transition: "width 0.3s",
        position: "relative",
        borderRadius: "0 0 15px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          width: expanded ? 218 : 38,
          display: "flex",
          justifyContent: expanded ? "flex-start" : "center",
          alignItems: "center",
          transition: "width 0.3s",
          bgcolor: "#f26130",
          p: 2,
        }}
      >
        {expanded ? (
          <>
            <img
              src={logoMenuRetracted}
              alt="Logo Retraído"
              style={{ height: 30 }}
            />
            <Typography
              variant="h6"
              sx={{ ml: 2, fontWeight: "bold", color: "white" }}
            ></Typography>
            <img
              src={logoMenuExpanded}
              alt="Logo Expandido"
              style={{ height: 15 }}
            />
          </>
        ) : (
          <img
            src={logoMenuRetracted}
            alt="Logo Retraído"
            style={{ height: 30 }}
          />
        )}
      </Box>

      {/* Menu Items - Rolável */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "calc(100vh - 200px)", // Ajusta para ocupar até 100vh menos espaços fixos
          width: "100%",
        }}
      >
        <List sx={{ width: "100%" }}>
          {menuItems.map((item, index) =>
            item === "separator" ? (
              <Divider key={index} sx={{ my: 1, mx: expanded ? 2 : 0 }} />
            ) : (
              <React.Fragment key={index}>
                <ListItem
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: expanded ? "flex-start" : "center",
                    alignItems: "center",
                    padding: "8.5px 10px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                  onClick={() =>
                    item.hasSubmenu ? toggleSubmenu(item.text) : undefined
                  }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.text}
                      style={{ height: 24, width: 24 }}
                    />
                  </ListItemIcon>
                  {expanded && (
                    <>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          style: { fontWeight: "500", color: "#4a4a4a" },
                        }}
                      />
                      {item.hasSubmenu &&
                        (openSubmenus[item.text] ? (
                          <ExpandLess sx={{ color: "#4a4a4a" }} />
                        ) : (
                          <ExpandMore sx={{ color: "#4a4a4a" }} />
                        ))}
                    </>
                  )}
                </ListItem>
                {item.hasSubmenu && (
                  <Collapse
                    in={openSubmenus[item.text]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List
                      sx={{
                        pl: expanded ? 2 : 0,
                      }}
                    >
                      {item.submenuItems?.map((submenuItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          sx={{
                            display: "flex",
                            justifyContent: expanded ? "flex-start" : "center",
                            padding: "4px 8px",
                            "&:hover": {
                              backgroundColor: "#e0e0e0",
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: "40px",
                              justifyContent: "center",
                            }}
                          >
                            {submenuItem.icon}
                          </ListItemIcon>
                          {expanded && (
                            <ListItemText
                              primary={submenuItem.text}
                              primaryTypographyProps={{
                                style: { fontWeight: "400", color: "#4a4a4a" },
                              }}
                            />
                          )}
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            )
          )}
        </List>
      </Box>

      {/* Bottom Items */}
      <Divider sx={{ my: 1, mx: expanded ? 2 : 0 }} />
      <List sx={{ width: "100%" }}>
        {bottomItems.map((item, index) => (
          <ListItem
            key={index}
            component="div"
            sx={{
              display: "flex",
              justifyContent: expanded ? "flex-start" : "center",
              alignItems: "center",
              padding: "5px 10px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "40px",
                justifyContent: "center",
              }}
            >
              <img
                src={item.icon}
                alt={item.text}
                style={{ height: 24, width: 24 }}
              />
            </ListItemIcon>
            {expanded && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  style: { fontWeight: "500", color: "#4a4a4a" },
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuLateral;
