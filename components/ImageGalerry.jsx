
import { useState } from "react"

import Image from "next/image"

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

                        <Image onClick={() => openImage(imageUrl)} src={imageUrl.img} alt={`Image $ {index}`} width={500} height={400} />

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

                    <Image src={selectedImage} alt="Selected Image" width={1500} height={900} /> 
                    
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
