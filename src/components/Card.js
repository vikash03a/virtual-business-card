import Header from "./Header";
import Design from "./Design";
import Stuffed from "./Stuffed";
import Share from "./Share";
import CardPreview from "./CardPreview";
import Footer from "./Footer";

function Card(props) {
  //FUNCIONES/EVENTOS

  const handlerClickColapsibleDesign = () => {
    props.triangleDesign === ""
      ? props.setTriangleDesign("hidden")
      : props.setTriangleDesign("");
    props.arrowDesign === ""
      ? props.setArrowDesign("collapsible")
      : props.setArrowDesign("");
  };

  const handlerClickColapsibleForm = () => {
    props.triangleForm === ""
      ? props.setTriangleForm("hidden")
      : props.setTriangleForm("");
    props.arrowForm === ""
      ? props.setArrowForm("collapsible")
      : props.setArrowForm("");
  };

  const handlerClickColapsibleShare = () => {
    props.triangleShare === ""
      ? props.setTriangleShare("hidden")
      : props.setTriangleShare("");
    props.arrowShare === ""
      ? props.setArrowShare("collapsible")
      : props.setArrowShare("");
  };


  const handleClickCreateCard = (props) => {
    props.dataApi();
  };

  return (
    <div>
      <Header />
      <main className="align-design">
        {/*--PREVIEW--*/}
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
        />

        <form className="form">
          {/*--DESIGN--*/}
          <Design
            dataCard={props.dataCard}
            handlerClickColapsibleDesign={handlerClickColapsibleDesign}
            handleInput={props.handleInput}
            triangleDesign={props.triangleDesign}
            arrowDesign={props.arrowDesign}
          />

          {/*STUFFED*/}
          <Stuffed
            dataCard={props.dataCard}
            handlerClickColapsibleForm={handlerClickColapsibleForm}
            handleInput={props.handleInput}
            triangleForm={props.triangleForm}
            arrowForm={props.arrowForm}
            uploadImage={props.uploadImage}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          />

          {/*SHARE AND CARD*/}
          <Share
            dataCard={props.dataCard}
            handlerClickColapsibleShare={handlerClickColapsibleShare}
            handleInput={props.handleInput}
            triangleShare={props.triangleShare}
            arrowShare={props.arrowShare}
            handleClickCreateCard={handleClickCreateCard}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Card;
