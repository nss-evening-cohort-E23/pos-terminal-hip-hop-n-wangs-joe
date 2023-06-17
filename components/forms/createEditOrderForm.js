import renderToDOM from '../../utils/renderToDOM';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getSingleOrder } from '../../api/orderData';

const createEditOrderForm = async (obj = {}) => {
  const orderData = obj.firebaseKey ? await getSingleOrder(obj.firebaseKey) : {};

  const domString = `
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createOrderButton">Create/Edit Order</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'submit-order'}">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Order Name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${orderData.order_name || ''}">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Customer Phone</span>
                <input type="phone" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${orderData.customer_phone || ''}">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Customer Email</span>
                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${orderData.customer_email || ''}">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" value="${orderData.order_type || ''}">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" value="${orderData.order_type || ''}">Order Type</button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Online</a></li>
                  <li><a class="dropdown-item" href="#">Phone</a></li>
                  <li><a class="dropdown-item" href="#">In-Person</a></li>
                  <li><hr class="dropdown-divider"></li>
                </ul>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="submitOrder">${obj.firebaseKey ? 'Update' : 'Create'}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  renderToDOM('#form-container', domString);

  const createOrderButton = document.querySelector('#createOrderWelcome');

  createOrderButton.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    const modal = new bootstrap.Modal(document.querySelector('#myModal'));
    modal.show();

    const submitOrderForm = document.querySelector('#submitOrder');
    submitOrderForm.addEventListener('click', (event) => {
      console.warn('clicked submit');
      event.preventDefault();
      modal.hide();
    });

    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
      modal.hide();
    });
  });
};

export default createEditOrderForm;
