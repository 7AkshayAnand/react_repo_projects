function AddTodo(props) {
  let SelectedItem;
  let SelectedDate;

  function getData(event) {
    SelectedItem = event.target.value;
  }
  function getDate(event) {
    SelectedDate = event.target.value;
  }

  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO here" onChange={getData} />
        </div>
        <div class="col-4">
          <input type="Date" onChange={getDate} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={() => props.handler(SelectedItem, SelectedDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
