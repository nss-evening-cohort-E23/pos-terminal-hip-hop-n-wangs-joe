import renderToDOM from '../../utils/renderToDom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const createEditOrderForm = () => {
  const domString = `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createOrderButton">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Text input with dropdown button">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
Replace the button with the appropriate trigger element on your page. The modal will be triggered when the button is clicked. The modal content contains your provided HTML code.

`;

  renderToDOM('#createEditOrderForm', domString);

  // const createOrderButton = document.querySelector('#createOrder');
  // // eslint-disable-next-line no-undef
  // const modal = new bootstrap.Modal(document.querySelector('#myModal'));

  // createOrderButton.addEventListener('click', () => {
  //   modal.show();
  // });
};

export default createEditOrderForm;
