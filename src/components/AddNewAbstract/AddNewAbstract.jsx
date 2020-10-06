import React from 'react';
import { Route } from 'react-router-dom';
import s from './AddNewAbstract.module.scss';

const AddNewAbstract = (props) => {

  let state = props.state,
      editor = React.useRef(null),
      name = React.useRef(null),
      addNewAbstract = () => {
        state.addNewAbstract();
      },
      onEditorChange = () => {
        let editorValue = editor.current.value;
        state.updateFieldsValue(editorValue, 'editorValue');
      },
      onNameChange = () => {
        let nameValue = name.current.value;
        state.updateFieldsValue(nameValue, 'nameValue');
      };

  return (
    <Route exact path={props.link}>
      <div className={s.addNewAbstract}>
        <h2>Добавить конспект</h2>
        <form action="">
          <textarea
            className={s.abstractEditor}
            ref={editor}
            value={state.editorValue}
            onChange={onEditorChange}
            cols="90" rows="25"
          />
          <input
            ref={name}
            value={state.nameValue}
            onChange={onNameChange}
            type="text" name="name"
          />
        </form>
        <button className={s.addAbstract} onClick={addNewAbstract}>Добавить конспект</button>
      </div>
    </Route>
  )
};

export default AddNewAbstract;