import React from 'react';
import s from './NewAbstractPage.module.scss';

const NewAbstractPage = (props) => {
  return (
    <div className={s.newAbstractPage}>
      <h2>Добавить конспект</h2>
      <div className={s.editorWrapper}>
          <textarea 
          cols="90" rows="25"
          className={s.editor} placeholder="Конспект"/>
          <div className={s.borders}>
            <div className={s.editorBorderHorizontal}></div>
            <div className={s.editorBorderVertical}></div>
          </div>
      </div>
      <div className={s.bottomWrapper}>
        <div className={s.nameWrapper}>
            <input placeholder="Название"
            className={s.name}/>
            <div className={s.borders}>
              <div className={s.editorBorderHorizontal}></div>
              <div className={s.editorBorderVertical}></div>
            </div>
        </div>

        <button className={s.addBtn}>Добавить конспект</button>
      </div>
    </div>
  )
};

export default NewAbstractPage;