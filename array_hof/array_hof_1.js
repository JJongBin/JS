const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const render = (todos) => {
//   let htmlStrung = "";
//   todos.forEach((element) => {
//     const { id } = element;
//     const { content } = element;
//     let { completed } = element;

//     completed = completed === true ? " checked" : "";

//     htmlStrung +=
//       `<li id="${id}">\n` +
//       `\t<label><input type="checkbox"${completed}>${content}</label>\n` +
//       `</li>\n`;
//   });
//   return htmlStrung;
// };

const render = todos =>
  todos
    .map(
      todo =>
        `<li id="${todo.id}">\n` +
        `\t<label><input type="checkbox"${(completed = todo.completed === true ? ' checked' : '')}>${
          todo.content
        }</label>\n` +
        `</li>`
    )
    .join('\n');

console.log(render(todos));
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
