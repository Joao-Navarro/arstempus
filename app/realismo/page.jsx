'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/realismo1.png", texto: "'Le déjeuner sur l'herbe' é um óleo sobre tela da autoria de Édouard Manet, pintado entre 1862 e 1863, com as medidas de 208 por 264,5 centímetros." },

    { img: "/realismo2.png", texto: "'Angelus' é uma pintura do artista francês Jean-François Millet. Com 60 cm de altura e 55,85 cm de largura, a obra é datada do período de 1857-1859. Após a morte de Millet, a obra foi vendida para diversos colecionadores, até que foi recuperado pelo Estado francês, por 800 mil francos em ouro. Em 1910, Angelus tornou-se parte da coleção do Museu do Louvre, porém, em 1986, a pintura foi transferida para o Museu d'Orsay, em Paris, onde ainda permanece exposta" },

    { img: "/realismo3.png", texto: "'Mulheres Peneirando Trigo' é um exemplo do realismo do trabalho de Courbet. Ao contrário das pinturas do estilo romântico, esta pintura não tem um perfeito uso da linha e da forma. Em vez disso, ilustra as paredes sujas, o olhar entediado no rosto da mulher deitada, e o cabelo desgrenhado do menino curioso. " },

    { img: "/realismo4.png", texto: " A composição 'O Violeiro', obra do artista brasileiro Almeida Júnior, é outra obra do artista que envolve o universo caipira. A janela de madeira, aberta, incrustada no meio da parede de pau a pique, ocupa a maior parte da tela. Na parte de baixo, a pintura da parede já foi toda descascada, deixando visível o adobe e as varas entrecruzadas e amarradas com corda. Não é possível enxergar nada dentro do ambiente interno, a não ser uma parede escura." }

]

function Realismo() {

    return (

        <>


            <Header />


            <h1 className="title">Realismo</h1>

            <video controls >

                <source src="/realismo.mp4" type="video/mp4" />

            </video>

            <p className="texto">

            O Realismo foi um movimento artístico e literário do século XIX em reação ao Romantismo. Caracterizou-se pela representação objetiva da realidade, abordando a vida cotidiana, questões sociais, políticas e econômicas de forma crítica. Na pintura, focou em temas como a classe trabalhadora, pobreza e desigualdades, evitando romantização. Gustave Courbet se destacou com obras como "Os Quebradores de Pedra." Na literatura, explorou a psicologia humana e questões sociais, com autores notáveis como Gustave Flaubert e Émile Zola. O Realismo surgiu em resposta à Revolução Industrial e influenciou movimentos posteriores, moldando a cultura moderna.

            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Realismo