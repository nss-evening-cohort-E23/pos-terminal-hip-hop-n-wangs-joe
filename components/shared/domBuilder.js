import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="createEditOrderForm"></div>
    <div id="createEditItemForm"></div>
    <div id="closeOrderForm"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
