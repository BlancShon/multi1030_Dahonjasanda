import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";

const mock = [
  {
    image: "https://cdn.aitimes.com/news/photo/201907/74431_30539_1043.jpg",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    title: "Eiusmod tempor incididunt",
  },
  {
    image: "https://assets.maccarianagency.com/backgrounds/img13.jpg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus",
    title: "Sed ut perspiciatis",
  },
];

const PopularArticles = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={"h6"} gutterBottom>
            여기는 청약 지도 넣을 예정
          </Typography>
          <Typography color={"text.secondary"}>
            오늘의 청약 뉴스 확인해보세요!
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item>
            <Box
              component={"a"}
              href={""}
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundImage: "none" }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: "relative",
                  }}
                >
                  <Box
                    component={"svg"}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: "scale(2)",
                      height: "auto",
                      width: 1,
                      transformOrigin: "top center",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={"relative"}>
                  <Typography variant={"h6"} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={"flex"} flexDirection={"column"}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularArticles;
