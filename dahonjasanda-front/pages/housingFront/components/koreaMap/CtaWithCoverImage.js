/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Container from "components/Container";

const CtaWithCoverImage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const HeadlineCta = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
          청약지도
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          오늘의 청약정보를 지도를 통해 한눈에 확인해보세요!
        </Typography>
        <Typography component="p">
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella,
          PBR 3 wolf moon beard Helvetica.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "stretched", sm: "flex-start" }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          Apply to exhibit
        </Button>
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Apply to attend
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          position={"relative"}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <HeadlineCta />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "auto", md: 1 },
                      "& img": {
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src={
                        "https://assets.maccarianagency.com/backgrounds/img19.jpg"
                      }
                      height={{ xs: "auto", md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaWithCoverImage;
