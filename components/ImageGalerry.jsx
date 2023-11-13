
import { useState } from "react"

const ImageGallery = (props) => {

    const [selectedImage, setSelectedImage] = useState(null)

    const openImage = (imageUrl) => {

        setSelectedImage(imageUrl.img)

    }

    const closeImage = () => {

        setSelectedImage(null)

    }

    const [selectedTexto, setSelectedTexto] = useState(null)

    const openTexto = (imageUrl) => {

        setSelectedTexto(imageUrl.texto)

    }

    const closeTexto = () => {

        setSelectedTexto(null)

    }

    return (

        <>

            <div className="ImageGallery">

                {props.imageUrls.map((imageUrl, index) => (

                    <div

                        key={index}

                        className="imageThumbnail"

                    >

                        <img onClick={() => openImage(imageUrl)} src={imageUrl.img} alt={`Image $ {index}`} />

                        <br />

                        <button className="veja-mais" onClick={() => openTexto(imageUrl)} >Veja Mais</button>

                    </div>

                ))}

            </div>




            {selectedImage && (

                <div

                    className="imageModal">

                    <span className="closeButton" onClick={closeImage}>

                        &times;

                    </span>

                    <img src={selectedImage} alt="Selected Image" /> 
                    
                </div>

            )}
            <br/>


            {selectedTexto && (

                <div

                    className="imageModal">

                    <span className="closeButton" onClick={closeTexto}>

                        &times;

                    </span>

                    <p>{selectedTexto} </p>

                </div>

            )}
        </>

    )

}

export default ImageGallery
