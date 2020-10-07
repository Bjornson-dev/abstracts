import React from 'react';
import { Route } from 'react-router-dom';
import s from './AddNewAbstract.module.scss';

const AddNewAbstract = (props) => {

  let state = props.state,
      editor = React.useRef(null),
      title = React.useRef(null),
      addNewAbstract = () => {
        state.addNewAbstract();
      },
      onEditorChange = () => {
        let editorValue = editor.current.value;
        state.newAbstractValue.updateFieldsValue(editorValue, 'editorValue');
      },
      onTitleChange = () => {
        let titleValue = title.current.value;
        state.newAbstractValue.updateFieldsValue(titleValue, 'titleValue');
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
            ref={title}
            value={state.nameValue}
            onChange={onTitleChange}
            type="text" name="title"
          />
        </form>
        <button className={s.addAbstract} onClick={addNewAbstract}>Добавить конспект</button>
      </div>
    </Route>
  )
};

export default AddNewAbstract;