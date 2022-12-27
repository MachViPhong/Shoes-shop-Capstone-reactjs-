import { Input, Select, Space } from "antd";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import "../../assets/css/search.css";
import ProductList from "../../components/ProductList/ProductList";

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
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
        <div className="background">
          {/* <img src={backgroundCarousel} alt="..." style={{objectFit: 'cover', width: '100%', filter: grayscale(.5)}} /> */}
          <h2 className="text-white text-center title-carousel">Searching</h2>
        </div>
        <div className="row  container mt-4">
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

      <div className="container mt-4">
        <h2 className="title text-center">Related Products</h2>
        <div className="filter">
            <Select
              defaultValue="NIKE"
              style={{ width: 120 }}
              allowClear
              options={[
                {
                  value: "NIKE",
                  label: "NIKE",
                },
                {
                  value: "ADIDAS",
                  label: "ADIDAS",
                },
                {
                  value: "VANS",
                  label: "VANS",
                },
              ]}
            />
          </div>
          <ProductList />
      </div>
    </>
  );
};

export default Search;
