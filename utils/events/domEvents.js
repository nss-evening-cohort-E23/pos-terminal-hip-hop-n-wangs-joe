import createEditOrderForm from '../../components/forms/createEditOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'createOrderWelcome') {
      console.warn('clicked create order');
      createEditOrderForm();
    }
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id === 'createOrderNav') {
      console.warn('clicked create order');
      createEditOrderForm();
    }
  });
};

export default domEvents;
