'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [


    { img: "/o almoço dos barqueiros.png", texto: "'O Almoço dos Barqueiros' é uma pintura a óleo sobre tela do pintor impressionista francês Pierre-Auguste Renoir realizada entre 1880 e 1881. Incluída na 7ª Exibição Impressionista em 1882, foi apontada como a melhor pintura na exposição por três críticos. " },

    { img: "/La Grenouillère.png", texto: "'La Grenouillère' é um óleo sobre tela de 1869 de Pierre-Auguste Renoir, agora no Nationalmuseum em Estocolmo" },

    { img: "/aula de dança.png", texto: "'The Ballet Class' é uma pintura de Edgar Degas, que foi pintada entre 1871 e 1874. Faz parte da coleção do Musée d'Orsay, Paris, França. Foi encomendado por Jean-Baptiste Faure. Degas abandonou temporariamente o trabalho nesta pintura e entregou uma obra de nome semelhante a Faure.  " },

    { img: "/a lagoa de lirios d' agua2.png", texto: "'Ponte Sobre Uma Lagoa de Lírios de Água' talvez seja a tela mais representativa do período impressionista. Pintada em 1899 pelo francês Claude Monet, um dos principais nomes deste gêneros e mundialmente conhecido por suas telas, a maior parte delas, pintadas ao ar livre." }

]

function Impressionismo() {

    return (

        <>


            <Header />


            <h1 className="title">Impressionismo</h1>

            <video controls >

                <source src="/Impressionismo (2).mp4" type="video/mp4" />

            </video>

            <p className="texto">


                O Impressionismo foi um movimento artístico do final do século XIX que se destacou pela ênfase na captura de impressões momentâneas de luz e cor na pintura. Os impressionistas usavam pinceladas soltas, enfatizavam a luz natural e frequentemente retratavam cenas cotidianas. Eles buscavam a observação direta da realidade e desafiavam as técnicas tradicionais de representação. Os artistas abandonaram regras tradicionais para retratar as coisas da maneira como as viam, de acordo com suas impressões.

                Artistas famosos do Impressionismo incluem Monet(1840-1926), Renoir (1841-1919)e Degas(1834-1917) esse movimento teve um impacto duradouro nas artes visuais, influenciando o desenvolvimento da arte moderna.

            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Impressionismo