import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="view"></div>
    <div id="order-item-btns"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
