'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/o balanço2.png", texto: "'O Balanço' é uma pintura do artista francês Jean-Honoré Fragonard, criada em 1767. A rica composição retrata uma cena típica do movimento rococó que teve seu auge durante o século XVIII. Trata-se de um óleo sobre tela (64.2 x 81 cm), localizado no Museu Wallace Collection, Londres, Reino Unido." },

    { img: "/a surpresa.png", texto: "'La Surprise', em português A Surpresa, é uma pintura de Antoine Watteau de 1718. A obra mostra um homem e uma mulher abraçados, e um músico toca um instrumento de corda." },

    { img: "/o triunfo de vênus2.png", texto: "'O Triunfo de Vênus' é uma pintura do artista francês François Boucher (1703-1770), criada em 1740. Boucher foi um dos principais pintores do estilo rococó, um movimento artístico caracterizado por seu foco na beleza, elegância e opulência. A obra retrata um tema mitológico, abordagem comum nas obras de arte da época." },

    { img: "/o embarque para cythera2.png", texto: "'O Embarque para Cytera' é uma pintura do pintor francês Jean-Antoine Watteau. Também é conhecido como Viagem a Citera e Peregrinação à Ilha de Citera. Watteau apresentou este trabalho à Royal Academy of Painting and Sculpture como sua peça de recepção em 1717. A pintura está agora no Louvre, Paris." },


]

function Rococo() {

    return (

        <>


            <Header />


            <h1 className="title">Rococó</h1>

            <video controls >

                <source src="/rococó.mp4" type="video/mp4" />

            </video>

            <p className="texto">

                ROCOCO
                O Rococó foi um estilo artístico que nasceu na Europa durante os séculos XVIII e XIX, principalmente no período pós-Barroco. Caracterizou-se por sua ênfase na graciosidade, elegância e ornamento. As principais características do Rococó incluem a utilização de cores suaves e delicadas, formas curvilíneas, motivos florais e temas pastorais.

                O rococó tem como seus principais artistas : Jean-Honoré Fragonard (1732-1806): francês; François Boucher (1703-1770): francês  e Jean-Antoine Watteau (1684-1721): francês;



            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Rococo