import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import carouselImage1 from "../../assets/img/backgroundCarousel.jpg";
import carouselImage2 from "../../assets/img/jordan-blue.jpg";
import carouselImage3 from "../../assets/img/jordan-purple.jpg";
import ProductList from "../../components/ProductList/ProductList";
import "../../assets/css/index.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { getProductCategoriesAction } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const { categories } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [categoriesComponent, setCategoriesComponent] = useState(categories);
  const handleChange = (event, newValue) => {
    setCategoriesComponent(newValue);
  };
  
  useEffect(() => {
    dispatch(getProductCategoriesAction(categoriesComponent));
  }, [categoriesComponent]);
  return (
    <>
      <Carousel autoplay className="container pt-5">
        <div className="row p-2">
          <div className="image col-7">
            <img
              src={carouselImage1}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              className="name"
              style={{ fontWeight: 600, fontSize: 45, color: "white" }}
            >
              Nike Jordan White
            </h3>
            <p className="description fs-5">
              Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám
              trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác,
              Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ
              đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương
              hiệu giày này.
            </p>
          </div>
        </div>
        <div className="row p-2">
          <div className="image col-7">
            <img
              src={carouselImage2}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              className="name"
              style={{ fontWeight: 600, fontSize: 45, color: "#0000c2" }}
            >
              Nike Jordan Blue
            </h3>
            <p className="description fs-5">
              Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám
              trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác,
              Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ
              đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương
              hiệu giày này.
            </p>
          </div>
        </div>
        <div className="row p-2" style={{ margin: 0 }}>
          <div className="image col-7">
            <img
              src={carouselImage3}
              alt="..."
              style={{ objectFit: "cover", height: 500, width: "100%" }}
              className="image-carousel"
            />
          </div>
          <div
            className="content col-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              className="name"
              style={{ fontWeight: 600, fontSize: 45, color: "#640095" }}
            >
              Nike Jordan Purple
            </h3>
            <p className="description fs-5">
              Jordan là một phiên bản giày do Nike – thương hiệu giày đình đám
              trên thế giới sản xuất. Tuy nhiên, khác với các dòng giàu khác,
              Jordan được Nike thiết kế riêng cho vua bóng rổ Michael Jordan. Từ
              đó, Nike đã lấy tên của ông hoàng bóng rổ làm tên chocủa thương
              hiệu giày này.
            </p>
          </div>
        </div>
      </Carousel>

      <div className="container ctn-index mt-5">
        <h2 className="title text-center pt-5" style={{ fontSize: 50 }}>
          Product Feature
        </h2>
        {/* <Box sx={{ width: "100%", typography: "body1", bgcolor: 'text.secondary', color: 'white.main'}}> */}
          <TabContext value={categoriesComponent}>
            <Box sx={{bgcolor: 'text.primary'}}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="primary"
                indicatorColor="primary"
                centered
              >
                <Tab label="All" value="All" />
                <Tab label="Nike" value="Nike" />
                <Tab label="Adidas" value="Adidas" />
                <Tab label="Vans" value="Vans" />
                <Tab label="Converse" value="Converse" />
                <Tab label="Others" value="Others" />
              </TabList>
            </Box>
            {/* <TabPanel value="All">All</TabPanel>
            <TabPanel value="Nike">Nike</TabPanel>
            <TabPanel value="Adidas">Adidas</TabPanel>
            <TabPanel value="Vans">Vans</TabPanel>
            <TabPanel value="Converse">Converse</TabPanel> */}
          </TabContext>
        {/* </Box> */}
        <ProductList/>
      </div>
    </>
  );
};

export default Index;
