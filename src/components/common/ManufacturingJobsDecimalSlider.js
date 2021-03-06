import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

const ManufacturingJobsDecimalSlider = props => {
  const { min, max, step, marks, setFilters } = props;
  const [inputValue, setInputValue] = useState(0);

  const onChange = value => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Row>
      <Col span={16} className="slider-wrapper">
        <Slider
          min={min}
          max={max}
          // onChange={onChange}
          onChange={value => {
            onChange(value);
            setFilters(prev => ({
              ...prev,
              manufacturingJobsFilter: value
            }));
          }}
          value={typeof inputValue === "number" ? inputValue : 0}
          step={step}
          marks={marks}
        />
      </Col>
      <Col span={8}>
        <div className="advanced-search-input">
          <InputNumber
            min={min}
            max={max}
            step={step}
            value={inputValue}
            onChange={onChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ManufacturingJobsDecimalSlider;
