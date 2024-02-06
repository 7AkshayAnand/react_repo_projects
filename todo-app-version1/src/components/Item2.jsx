function Item2() {
  let todoname = "Go to College";
  let todoDate = "4/102022";
  return (
    <div className="container ">
      <div class="row kg-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item2;
