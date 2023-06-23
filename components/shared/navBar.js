import renderToDOM from '../../utils/renderToDOM';
import createEditOrderForm from '../forms/createEditOrderForm';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="navbar-brand title" href="#">RUN D.M.Cheese</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="viewOrders">
                View Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="createOrderNav">Create an Order</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="log-out-nav"></div>
          </span>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);

  const createOrderNav = document.querySelector('#createOrderNav');
  createOrderNav.addEventListener('click', () => {
    createEditOrderForm();
  });

  window.addEventListener('click', (e) => {
    const navBarCollapse = document.querySelector('.navbar-collapse.show');
    if (navBarCollapse && !navBarCollapse.contains(e.target)) {
      navBarCollapse.classList.remove('show');
    }
  });
};

export default navBar;
