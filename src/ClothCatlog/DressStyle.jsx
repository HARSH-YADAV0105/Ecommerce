import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { itemData } from "../data";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const DressStyle = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Large screens
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg")); // Tablets

  const getCols = () => {
    if (isLargeScreen) return 4; 
    if (isMediumScreen) return 1; 
    return 1; // Mobile screens
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-w-[1440px] bg-[#F0F0F0] rounded-[40px]">
          <div className="MainContentOuterMost flex justify-center pr-[60px] pl-[60px] pt-[60px]  pb-[60px]">
            <div className="grid gap-16">
              <div className="headingbox">
                <h1 className="text-[48px] font-bold leading-[57.6px]">
                  BROWSE BY DRESS STYLE
                </h1>
              </div>
              <div className="ImgOuter w-full flex justify-center items-center">
                <div className="w-full flex flex-wrap">
                  <ImageList
                    sx={{ width: "100%", height: "100%" }}
                    variant="quilted"
                    cols={getCols()}
                    gap={12}
                    rowHeight={121}
                  >
                    {itemData.map((item) => (
                      <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                      >
                        <img
                          {...srcset(item.img, 121, item.rows, item.cols)}
                          alt={item.title}
                          loading="lazy"
                          style={{ borderRadius: "20px" }}
                        />
                        <ImageListItemBar
                          title={item.title}
                          position="top"
                          actionPosition="left"
                          sx={{
                            backgroundColor: "transparent",
                            height: "30%",
                            "& .MuiImageListItemBar-title": {
                              fontSize: "36px",
                              color: "#333",
                              fontWeight: "bold",
                              textAlign: "left",
                              height: "100%",
                              top: "25px",
                              lineHeight: "50px",
                            },
                          }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
