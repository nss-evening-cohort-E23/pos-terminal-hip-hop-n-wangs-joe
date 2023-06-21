import renderToDOM from '../../utils/renderToDOM';

const closeOrderForm = () => {
  const domString = `
  <div id="closeOrderForm">
  <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="closeOrderButton">Close Order</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Order Type</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Cash</a></li>
    <li><a class="dropdown-item" href="#">Credit Card</a></li>
    <li><a class="dropdown-item" href="#">Cripto</a></li>
    <li><hr class="dropdown-divider"></li>
  </ul>
</div>
<div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">Tip Amount</span>
              <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="closeOrder">Submit Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>`;

  renderToDOM('#form-container', domString);

  const closeOrderButton = document.querySelector('#closeOrderForm');
  closeOrderButton.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    const modal = new bootstrap.Modal(document.querySelector('#myModal'));
    modal.show();
  });

  const submitOrderForm = document.querySelector('#closeOrder');
  submitOrderForm.addEventListener('click', (event) => {
    event.preventDefault();
    const order = {
      order_status: document.querySelector('#orderStatus').value,
      customer_phone: document.querySelector('#customerPhone').value,
      customer_email: document.querySelector('#customerEmail').value,
      order_type: document.querySelector('#orderType').value,
    };
    console.warn(order);
  });
};

export default closeOrderForm;
