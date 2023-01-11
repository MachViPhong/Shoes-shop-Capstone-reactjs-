import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import "../../assets/css/search.css";
import ProductList from "../../components/ProductList/ProductList";
import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategoriesAction } from "../../redux/reducers/productReducer";

const Search = () => {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "gray",
      }}
    />
  );
  const { categories } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [categoriesComponent, setCategoriesComponent] = useState(categories);
  const handleChange = (event, newValue) => {
    setCategoriesComponent(newValue);
  };
  
  useEffect(() => {
    dispatch(getProductCategoriesAction(categoriesComponent));
  }, [categoriesComponent]);
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
        <div className="background-search">
          <h2 className="text-white text-center title-carousel">Searching</h2>
        </div>
        <div className="row container mt-4">
          <Space direction="vertical" style={{marginLeft: 100}}>
            <Search
              placeholder="input search text"
              // enterButton={<i class="fa fa-search"></i>}
              size="large"
              suffix={suffix}
              onSearch={onSearch}
              style={{
                width: "30%",
              }}
            />
          </Space>
         
        </div>
      </div>

      <div className="container ctn-search mt-4">
        <h1 className="title text-center">Related Products</h1>
          <TabContext value={categories}>
            <Box sx={{bgcolor: 'text.primary'}}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="secondary"
                indicatorColor="secondary"
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
          </TabContext>
          <ProductList />
      </div>
    </>
  );
};

export default Search;
