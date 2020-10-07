let store = {
  _state: {
    abstracts: {
      content: [
        {
          id: 'abstract-1',
          link: '/abstract-1',
          title: 'Название',
          content: 'Контент'
        }
      ],
      newAbstract: {
        newAbstractValue: {
          titleValue: "",
          editorValue: "",
          updateFieldsValue(value, e) {
            this[e] = value;
            (function() {
              this._subscriber();
            }).bind(store)();
          }
        },
        addNewAbstract() {
          let editorValue = this.newAbstractValue.editorValue,
              titleValue = this.newAbstractValue.titleValue;
          (function() {
            let currentId = this._state.abstracts.content.length + 1;
            class NavLink{
              constructor(){
                this.id = currentId;
                this.link = "/abstract-" + currentId;
                this.title = titleValue;
              }
            };
            class Abstract extends NavLink{
              constructor(){
                super();
                this.content = editorValue;
              }
            };
        
            let newAbstract = new Abstract(),
                newNavLink = new NavLink();
        
            this._state.abstracts.content.push(newAbstract);
            this._state.sidebar.push(newNavLink);
            console.log(newNavLink,newAbstract);
            this._subscriber();
          }).bind(store)();
        }
      }
    },
    sidebar: [
      {
        id: 'abstract-1',
        link: '/abstract-1',
        title: 'Название'
      }
    ]
  },
  getState() {
    return this._state;
  },
  _subscriber() {
    console.log('Your App has been changed');
  },
  subscribe(value) {
    this._subscriber = value;
  }
}
window.store = store;
console.log(store);
export default store;