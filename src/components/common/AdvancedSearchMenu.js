import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import ServiceJobsDecimalSlider from "./ServiceJobsDecimalSlider";
import GovernmentJobsDecimalSlider from "./GovernmentJobsDecimalSlider";
import ManufacturingJobsDecimalSlider from "./ManufacturingJobsDecimalSlider";
import CovidDecimalSlider from "./CovidDecimalSlider";
import CloudCoverGraduatedSlider from "./CloudCoverGraduatedSlider";
import HousingPriceGraduatedSlider from "./HousingPriceGraduatedSlider";
import WeatherRadioButtons from "./WeatherRadioButtons";
import PopRadioButtons from "./PopRadioButtons";
import IconSlider from "./IconSlider";

const { SubMenu } = Menu;

const AdvancedSearchMenu = props => {
  const { setFilters } = props;
  // submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = openKeysInput => {
    const latestOpenKey = openKeysInput.find(
      key => openKeys.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(openKeysInput);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="advanced-search-menu"
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title="Population">
        <p className="advanced-search-option-title">Choose City Size</p>
        <PopRadioButtons
          buttonNames={[
            "Small | <100K",
            "Medium | 100K - 1M",
            "Large | 1M - 2M",
            "Mega | 2M+"
          ]}
          rowFormat={false}
          setFilters={setFilters}
        />
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Weather">
        <p className="advanced-search-option-title">
          Average Summer Temperature
        </p>
        <WeatherRadioButtons
          buttonNames={["Cold", "Mild", "Hot"]}
          rowFormat={true}
          setFilters={setFilters}
        />
        <p className="advanced-search-option-title">Average UV Index (0-10)</p>
        <IconSlider
          id="uv-index-slider"
          min={0}
          max={10}
          defaultValue={[0, 10]}
          marks={{
            0: "0",
            10: "10"
          }}
          step={1.0}
          setFilters={setFilters}
        />
        <p className="advanced-search-option-title">Average Cloud Cover (%)</p>
        <CloudCoverGraduatedSlider
          id="cloud-cover-slider"
          min={0}
          max={100}
          defaultValue={[0, 100]}
          marks={{
            0: "0",
            100: "100"
          }}
          step={1.0}
          setFilters={setFilters}
        />
      </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="Job Industry">
        <p className="advanced-search-option-title">
          Minimum Number Of Service Jobs
        </p>
        <ServiceJobsDecimalSlider
          min={0}
          max={10000000}
          step={1000}
          marks={{
            0: "0",
            10000000: "10,000,000"
          }}
          setFilters={setFilters}
        />
        <p className="advanced-search-option-title">
          Minimum Number Of Government Jobs
        </p>
        <GovernmentJobsDecimalSlider
          min={0}
          max={1000000}
          step={1000}
          marks={{
            0: "0",
            1000000: "1,000,000"
          }}
          setFilters={setFilters}
        />
        <p className="advanced-search-option-title">
          Minimum Number Of Manufacturing Jobs
        </p>
        <ManufacturingJobsDecimalSlider
          min={0}
          max={1000000}
          step={1000}
          marks={{
            0: "0",
            1000000: "1,000,000"
          }}
          setFilters={setFilters}
        />
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Housing">
        <p className="advanced-search-option-title">Average 1BR Home Prices</p>
        <HousingPriceGraduatedSlider
          id="housing-slider"
          min={0}
          max={1000000}
          defaultValue={[0, 1000000]}
          marks={{
            0: "$0",
            1000000: "$1,000,000"
          }}
          step={1000}
          setFilters={setFilters}
        />
      </SubMenu>
      <SubMenu key="sub5" icon={<SettingOutlined />} title="COVID-19">
        <p className="advanced-search-option-title">
          Max Number of Positive COVID-19 Patients
        </p>
        <CovidDecimalSlider
          min={0}
          max={500000}
          step={1000}
          marks={{
            0: "0",
            500000: "500,000"
          }}
          setFilters={setFilters}
        />
      </SubMenu>
    </Menu>
  );
};

export default AdvancedSearchMenu;
