import React from 'react';
import { Input } from "@progress/kendo-react-inputs";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Calendar } from "@progress/kendo-react-dateinputs";

/* eslint-disable */
const Forms = () => {
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];

  return (
    <div className="clearfix">
      <div className="formBox">
        <div className="formBoxCol3">
          <div className="group">
            <div className="k-form-field">
              <label className="k-label" htmlFor="username">
                Input:
              </label>
              <div className="k-form-field-wrap">
                <Input
                  form="input"
                  name="username"
                  id="username"
                  placeholder="Input text here"
                />
              </div>
            </div>
          </div>
          <div className="group">
            <div className="k-form-field">
              <label className="k-label" htmlFor="username">
                ComboBox:
              </label>
              <div className="k-form-field-wrap">
                <ComboBox data={sizes} />
              </div>
            </div>
          </div>
          <div className="group">
            <div className="k-form-field">
              <label className="k-label" htmlFor="username">
                Calendar:
              </label>
              <div className="k-form-field-wrap">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='https://www.telerik.com/kendo-react-ui/' target='_blank'>Visit Kendo UI React for more information.</a>
    </div>
  );
};

export default Forms;