import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from '@progress/kendo-react-labels';
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
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

const AppForm2 = ({currentId, setFormVisible, mode}) => {
  const [accountData, setAccountData] = useState({ account_name: '', email: '', username: '', password: '', note: '' });
  const account = useSelector((state) => (currentId ? state.accounts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const editor = React.createRef();

  useEffect(() => {
    dispatch(getAccounts());
    if (account) setAccountData(account);
  }, [dispatch]);

  const onChangeEditor = (e) => {
    if (editor.current) {
      const view = editor.current.view;
      if (view) {
        setAccountData({...accountData, note: EditorUtils.getHtml(view.state) })
      }
    }
  }

  const clear = () => {
    setAccountData({account_name: '', email: '', username: '', password: '', note: '' });
  }
  
  const handleSubmit = () => {
    dispatch(createAccount(accountData));
    setFormVisible(false);
  }

  return (
    <Form
      initialValues={account}
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
                    // defaultValue={accountData.email}
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
                    // defaultValue={accountData.username}
                  />
                </div>
              </div>
              <div className="formBoxCol1">
                <div className="group">
                  <Field
                    name={"password"}
                    component={Input}
                    label={"Password"}
                    type="password"
                    required={true}
                    onChange={(e) => setAccountData({ ...accountData, password: e.target.value })}
                    // defaultValue={accountData.password}
                  />
                </div>
              </div>
              <div className="formBoxCol1 mt-4">
                <div className="group k-floating-label-container">
                  <label htmlFor="editor" className="k-label">Note</label>
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
                    ref={editor}
                    onChange={onChangeEditor}
                    // defaultValue={accountData.note}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <Button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled= {mode === 'ADD' ? !formRenderProps.allowSubmit : mode === 'VIEW' ? true : !formRenderProps.allowSubmit}
              iconClass="fas fa-check"
            >
              {mode === 'ADD' ? 'Submit' : mode === 'VIEW' ? 'VIEW' : ''}
              
            </Button>

            <Button
              className="buttons-container-button"
              iconClass="fas fa-ban"
              onClick={clear}
              type="button"
            >
              Cancel
            </Button>

          </div>
        </FormElement>
      )}
    />
  )
}

export default AppForm2;