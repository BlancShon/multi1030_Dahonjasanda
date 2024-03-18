import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import { NavItem } from "./components";
import axios from "axios";



const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    finance: financePages,
    realEstate: realEstatePages,
    animalPlant: animalPlantPages,
    party: partyPages,
    shopping: shoppingPages,
  } = pages;


  const [loginInfo, setLoginInfo] = useState(null);
  const [loginName, setLoginName] = useState(null);

  useEffect(() => {
      getLoginInfo();
  },[]);

  // async : 비동기식 키워드, 
  const getLoginInfo = async () => {
      try {
          var response = await axios.get('http://localhost/memberRest/loginInfo', 
                                                          { withCredentials: true });
          console.log(response)
          if (response.data.result === true) {
              setLoginInfo(response.data.member);
              setLoginName(response.data.member.name)
          } else {
              setLoginName('false');
          }
      } catch (e) {
          console.log(e);
      }
  }


  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        color={'primary.dark'}
        component="a"
        href="/"
        title="다혼자산다"
        width={{ xs: 100, md: 120 }}
        sx={{ textDecoration: 'none' }} // Add this line to remove underline
      >
        <Box
          component={"img"}
          src={
            mode === "light" && !colorInvert
              ? "/favicon/logo.png"
              : "/favicon/logo.png"
          }
          height={0.5}
          width={0.5}
        />
        <Typography fontWeight={700} marginLeft={1} sx={{ whiteSpace: 'nowrap', fontSize: '1.5rem', color: 'black' }}>
          다혼자산다
        </Typography>
      </Box>


      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginLeft={4}>
          <NavItem
            title={"금융"}
            id={"finance-pages"}
            items={financePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"부동산"}
            id={"realEstate-pages"}
            items={realEstatePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"동식물"}
            id={"animalPlant-pages"}
            items={animalPlantPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"파티원"}
            id={"party-pages"}
            items={partyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"쇼핑몰"}
            id={"shopping-pages"}
            items={shoppingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            로그인
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
