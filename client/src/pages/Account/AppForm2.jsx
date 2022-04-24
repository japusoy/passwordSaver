import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from '@progress/kendo-react-labels';
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
const emailRegex = new RegExp(/\S+@\S+\.\S+/);

import { getAccounts, createAccount } from '../../actions/account';

const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
} = EditorTools;

const AppForm2 = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);
  const [accountData, setAccountData] = useState({ account_name: '', email: '', username: '', password: '', note: '<p>The KendoReact Editor allows you</p>' });

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);
  
  const handleSubmit = () => {
    // e.preventDefault(); 
    dispatch(createAccount(accountData));
  }

  return (
    <Form

      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement 
        style={{
          maxWidth: 650,
        }} >
          <fieldset className={"k-form-fieldset"}>
            {/* <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend> */}

            <div className="formBox">
              <div className="formBoxCol1">
                <div className="group">
                  <Field
                    name={"account_name"}
                    component={Input}
                    label={"Account Name"}
                    required={true}
                    onChange={(e) => setAccountData({ ...accountData, account_name: e.target.value })}
                  />
                </div>
              </div>
              <div className="formBoxCol1">
                <div className="group">
                  <Field
                    name={"email"}
                    type={"email"}
                    component={EmailInput}
                    label={"Email"}
                    validator={emailValidator}
                    onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="formBoxCol1">
                <div className="group">
                  <Field
                    name={"username"}
                    component={Input}
                    label={"Username"}
                    required={true}
                    onChange={(e) => setAccountData({ ...accountData, username: e.target.value })}
                  />
                </div>
              </div>
              <div className="formBoxCol1">
                <div className="group">
                  <Field
                    name={"password"}
                    component={Input}
                    label={"password"}
                    type="password"
                    required={true}
                    onChange={(e) => setAccountData({ ...accountData, password: e.target.value })}
                  />
                </div>
              </div>
              <div className="formBoxCol1">
                <div className="group">
                  <Editor
                    tools={[
                      [Bold, Italic, Underline],
                      [Undo, Redo],
                      [Link, Unlink],
                      [AlignLeft, AlignCenter, AlignRight],
                      [OrderedList, UnorderedList, Indent, Outdent],
                    ]}
                    contentStyle={{
                      height: 320,
                    }}
                    id="editor"
                    name="editor"
                    defaultContent={accountData.note}
                    // onChange={(e) => setAccountData({ ...accountData, note: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default AppForm2;