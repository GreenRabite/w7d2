export const getTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos',
    dataType: "json"
  })
);

export const makeTodo = (todo) => (
  $.ajax({
    method: "POST",
    url: "/api/todos",
    dataType: "json",
    data: {todo: todo}
  })
);
