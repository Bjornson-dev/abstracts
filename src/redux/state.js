import { rerenderEntireTree } from './../render'

let addNewAbstract = () => {
  let currentId = state.sidebar.length + 1,
      nameValue = state.abstracts.addNew.nameValue,
      editorValue = state.abstracts.addNew.editorValue,
      newAbstract = {
    sidebar: {
      id: currentId,
      name: 'abstract-' + currentId,
      link: '/abstract-' + currentId,
      title: nameValue
    },
    abstract: {
      id: currentId,
      name: 'abstract-' + currentId,
      link: '/abstract-' + currentId,
      title: nameValue,
      content: editorValue
    }
  };
  state.sidebar.push(newAbstract.sidebar);
  state.abstracts.content.push(newAbstract.abstract);
  state.abstracts.addNew.nameValue = '';
  state.abstracts.addNew.editorValue = '';
  rerenderEntireTree(state);
}
let updateFieldsValue = (value, e) => {
  state.abstracts.addNew[e] = value;
  rerenderEntireTree(state);
}

let state = {
  sidebar: [
    {
      id: 1,
      name: 'test',
      link: '/test',
      title: 'Test One'
    },
    {
      id: 2,
      name: 'test2',
      link: '/test2',
      title: 'Test Two'
    },
    {
      id: 3,
      name: 'test3',
      link: '/test3',
      title: 'Test Three'
    }
  ],
  abstracts: {
    content: [
      {
        id: 1,
        name: 'test',
        link: '/test',
        title: 'Test One'
      },
      {
        id: 2,
        name: 'test2',
        link: '/test2',
        title: 'Test Two'
      },
      {
        id: 3,
        name: 'test3',
        link: '/test3',
        title: 'Test Three'
      }
    ],
    addNew: {
      editorValue: "",
      nameValue: "",
      addNewAbstract,
      updateFieldsValue
    }
  }
}



export default state;