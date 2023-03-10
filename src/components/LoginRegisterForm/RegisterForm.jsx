import { Button, Form } from "antd";
import { Checkbox, Input, Spacer } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ padding: 0 }}
    >
      <Form.Item>
        <Input labelPlaceholder="Username" fullWidth="true" />
        <Spacer y={2} />
        <Input.Password
          labelPlaceholder="Password"
          initialValue=""
          fullWidth="true"
        />
        <Spacer y={2} />
        <Input.Password
          labelPlaceholder="Confirm Password"
          initialValue=""
          fullWidth="true"
        />
        <Spacer y={2} />
        <Input labelPlaceholder="Nickname" fullWidth="true" />
        <Spacer y={1} />
        <FormControl sx={{ m: 1, minWidth: 100 }} fullWidth="true">
          <InputLabel id="demo-simple-select-autowidth-label">
            Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={gender}
            onChange={handleChange}
            autoWidth
            label="Gender"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Famale"}>Famale</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Form.Item>
      <Form.Item>
        <Button
          className="w-25"
          htmlType="submit"
          size="large"
          style={{
            background: "#000",
            color: "#fff",
            fontWeight: 600,
            borderColor: "black",
          }}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
