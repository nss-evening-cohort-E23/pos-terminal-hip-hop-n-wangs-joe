import firebase from 'firebase';
import { createOrder } from '../../api/orderData';
import renderToDOM from '../../utils/renderToDOM';

const createEditOrderForm = (obj = {}) => {
  const domString = `
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createOrderButton"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeBtn"></button>
          </div>
          <div class="modal-body">
            <form id="${obj.firebaseKey ? `edit-order--${obj.firebaseKey}` : 'orderForm'}">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Order Name</span>
                <input type="text" class="form-control" id="order_name" name="order_name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${obj.order_name || ''}">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Customer Phone</span>
                <input type="tel" class="form-control" id="customer_phone" name="customer_phone" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${obj.customer_phone || ''}">
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Customer Email</span>
                <input type="email" class="form-control" id="customer_email" name="customer_email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value="${obj.customer_email || ''}">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Text input with dropdown button" name="order_type" id="selected_order_type">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="order_type">Order Type</button>
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
            <button type="button" class="btn btn-primary" id="submitOrder">Update Order</button>
          </div>
        </div>
      </div>
    </div>
  `;

  renderToDOM('#form-container', domString);

  // eslint-disable-next-line no-undef
  const modal = new bootstrap.Modal(document.querySelector('#myModal'));
  modal.show();

  const orderTypeDropdownItems = document.querySelectorAll('.dropdown-item');
  orderTypeDropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      const selectedOrderType = item.textContent.trim();
      document.querySelector('#selected_order_type').value = selectedOrderType;
    });
  });

  const submitOrderForm = document.querySelector('#submitOrder');
  submitOrderForm.addEventListener('click', async (e) => {
    e.preventDefault();
    const newOrderPayload = {
      order_name: document.querySelector('#order_name').value,
      customer_phone: document.querySelector('#customer_phone').value,
      customer_email: document.querySelector('#customer_email').value,
      order_type: document.querySelector('#selected_order_type').value,
      uid: firebase.auth().currentUser.uid,
      order_status: 'Open',
    };

    try {
      await createOrder(newOrderPayload);
      modal.hide();
    } catch (error) {
      console.error(error);
    }
  });

  const closeButton = document.querySelector('#closeBtn');
  closeButton.addEventListener('click', () => {
    modal.hide();
  });
};

export default createEditOrderForm;
