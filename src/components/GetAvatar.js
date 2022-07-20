import React from "react";
import PropTypes from "prop-types";

function GetAvatar(props) {
  // creamos una propiedad de la clase que es la que vamos a usar en varios métodos para cargar la imagen
  // esto es un manejador de ficheros
  const fr = new FileReader();

  // creamos un React.createRef porque React no gestiona los <input type="file" /> por ello tenemos que gestionarlo por nuestra cuenta
  const myFileField = React.createRef();
  //  myFileField = document.querySelecto('input')

  const uploadImage = (ev) => {
   

    
    if (ev.currentTarget.files.length > 0) {
      // guardo el primer fichero en myFile
      const myFile = ev.currentTarget.files[0];
 
      fr.addEventListener("load", getImage);
 
      fr.readAsDataURL(myFile);
    }
    
  };

  const getImage = () => {
   
    const image = fr.result;

    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? "" : props.avatar;
  return (
    <div>
      <label className="stuffed-titles" htmlFor="photo">
        Profile Image
      </label>
      <div className="false-stuffed">
        <label className="false-stuffed__false-button" htmlFor="photo">
          Upload Image
          <input
            type="file"
            ref={myFileField}
            className="hiddenButton"
            onChange={uploadImage}
            name="photo"
            id="photo"
          />
        </label>
        <div
          className="false-stuffed__false-square"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
