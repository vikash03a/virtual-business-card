import dataApi from "../services/Api";

function Share(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("paso por aqui");
    dataApi(props.dataCard).then((response) => {
      if (response.success) {
        // PIntar la response.cardURL que devuelve el servidor
      } else {
        // Poner un mensajito de error.
      }
    });
  };
  return (
    <fieldset className="design-share">
      <div
        className="share-legend js-share-container"
        onClick={props.handlerClickColapsibleShare}
      >
        <i className="fa-solid fa-square-share-nodes share-legend__icon"></i>
        <p className="share-legend__text">Share</p>
        <i className={`fa-solid fa-angle-up js-arrow3 ${props.arrowShare}`}></i>
      </div>
      <section className={`section-share-1 js-share ${props.triangleShare}`}>
        {/*componente crear tarjeta*/}
        <button className="card-button js-button-share" onClick={handleClick}>
          <i className="fa-solid fa-address-card card-button__icon"></i>
          <span className="card-button__text">create card</span>
        </button>

        <span className="section-share__line"></span>
      </section>
      <section className="share-newcard card-hidden js-section-link">
        <h3 className="share-newcard__text js-false">
        The card has been created:
        </h3>
        <a target="blank" className="share-newcard__link js-true" href="">
          {/*{props.apiData.cardUrl || 'url'}*/}
        </a>
        <button className="share-newcard__button js-btn-twitter">
          <a className="link-twitter"></a>
        </button>
        <span className="section-share__line"></span>
      </section>
    </fieldset>
  );
}

export default Share;
