import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

import { getAccounts, createAccount } from '../../actions/account';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);

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

const AppForm = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);
  const [accountData, setAccountData] = useState({ account_name: '', email: '', username: '', password: '', note: '<p>The KendoReact Editor allows you</p>' });

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(createAccount(accountData));
  }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="clearfix">
          <div className="formBox">
            <div className="formBoxCol4">
              <div className="group">
                <div className="k-form-field">
                  <label className="k-label" htmlFor="username">
                    Account Name:
                  </label>
                  <div className="k-form-field-wrap">
                    <Input
                      form="input"
                      name="account_name"
                      id="account_name"
                      placeholder=""
                      value={accountData.account_name}
                      onChange={(e) => setAccountData({ ...accountData, account_name: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formBox">
            <div className="formBoxCol4">
              <div className="group">
                <div className="k-form-field">
                  <label className="k-label" htmlFor="email">
                    Email:
                  </label>
                  <div className="k-form-field-wrap">
                    <Input
                      form="email"
                      name="email"
                      id="email"
                      placeholder=""
                      value={accountData.email}
                      onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formBox">
            <div className="formBoxCol4">
              <div className="group">
                <div className="k-form-field">
                  <label className="k-label" htmlFor="username">
                    Username:
                  </label>
                  <div className="k-form-field-wrap">
                    <Input
                      form="input"
                      name="username"
                      id="username"
                      placeholder=""
                      value={accountData.username}
                      onChange={(e) => setAccountData({ ...accountData, username: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formBox">
            <div className="formBoxCol4">
              <div className="group">
                <div className="k-form-field">
                  <label className="k-label" htmlFor="password">
                    Password:
                  </label>
                  <div className="k-form-field-wrap">
                    <Input
                      form="input"
                      name="password"
                      id="password"
                      placeholder=""
                      value={accountData.password}
                      onChange={(e) => setAccountData({ ...accountData, password: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formBox">
            <div className="formBoxCol1">
              <div className="group">
                <div className="k-form-field">
                  <label className="k-label" htmlFor="editor">
                    Note:
                  </label>
                  <div className="k-form-field-wrap">
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
            </div>
          </div>
        </div>
        <div className="formActions mt-5 clear-both">
          <Button themeColor={"primary"}>Save</Button>
        </div>
      </form>
  )
}

export default AppForm;