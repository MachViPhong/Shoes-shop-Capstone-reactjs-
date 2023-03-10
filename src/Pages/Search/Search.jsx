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
    // <AudioOutlined
    //   style={{
    //     fontSize: 16,
    //     color: "gray",
    //   }}
    // />
    <i class="fa fa-backspace text-secondary" onClick={()=>{console.log('icon backspace')}}></i>
  );
  const onSearch = (value) => {
    console.log(value);
  }

  const { categories } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const [categoriesComponent, setCategoriesComponent] = useState(categories);
  const handleChange = (event, newValue) => {
    setCategoriesComponent(newValue);
  };
  
  useEffect(() => {
    dispatch(getProductCategoriesAction(categoriesComponent));
  }, [categoriesComponent]);

  const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str.trim().toLowerCase();
  };
  return (
    <>
      <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
        <div className="background-search">
          <h2 className="text-white text-center title-carousel">Searching</h2>
        </div>
        <div className="row container mt-4">
          <Space direction="vertical" style={{marginLeft: 100}}>
            <Search
              placeholder="input search text..."
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
          </TabContext>
          <ProductList />
      </div>
    </>
  );
};

export default Search;
