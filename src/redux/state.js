import { rerenderEntireTree } from './../render'

let addNewAbstract = () => {
  let currentId = state.sidebar.length + 1;
  let newAbstract = {
    sidebar: {
      id: currentId,
      name: 'abstract-' + currentId,
      link: '/abstract-' + currentId,
      title: 'Abstract ' + currentId
    },
    abstract: {
      id: currentId,
      name: 'abstract-' + currentId,
      link: '/abstract-' + currentId,
      title: 'Abstract ' + currentId,
      content: 'Abstract text ' + currentId
    }
  }
  state.sidebar.push(newAbstract.sidebar);
  state.abstracts.content.push(newAbstract.abstract);
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
      addNewAbstract
    }
  }
}



export default state;