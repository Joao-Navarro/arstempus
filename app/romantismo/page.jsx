'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/romantismo1.png", texto: "'O 3 de maio de 1808 em Madri', Francisco de Goya. É uma importante obra na pintura francesa do século 19, geralmente, considerada um ícone do Romantismo. " },

    { img: "/romantismo2.png", texto: "'A balsa da meduza', Théodore Géricault. Esse quadro se inspira no trágico naufrágio, do verão de 1816, da fragata francesa chamada Medusa dirigida a Senegal, cujos sobreviventes vagaram pelo oceano sobre uma balsa. Géricault capta na tela o momento em que alguns náufragos avistam uma vela no horizonte e parece como se na balsa de horror e morte ocorresse uma palpitação de vida e esperança." },

    { img: "/romantismo3.png", texto: "O quadro 'A liberdade guiando o povo', de Eugène Delacroix (1789-1863), é uma pintura que retrata a Revolução de 1830, importante acontecimento histórico ocorrido na França no mesmo ano em que a obra foi realizada." },

    { img: "/romantismo4.png", texto: "'Independência ou Morte' é uma pintura do artista brasileiro Pedro Américo. É considerada a representação mais consagrada e difundida do momento da independência do Brasil, sendo o gesto oficial da fundação do Brasil. Seu nome vem da exclamação de D." }

]

function Romantismo() {

    return (

        <>


            <Header />


            <h1 className="title">Romantismo</h1>

            <video controls >

                <source src="/romantismo.mp4" type="video/mp4" />

            </video>

            <p className="texto">

                O Romantismo foi um movimento cultural, artístico e literário que se desenvolveu principalmente no final do século XVIII e durante o século XIX. Ele enfatizou a expressão das emoções, a individualidade e a conexão com a natureza.


                Escritores notáveis do Romantismo incluem Goethe, Victor Hugo, Lord Byron e Edgar Allan Poe.
                Na pintura, artistas como Caspar David Friedrich, Francisco de Goya, William Turner e Eugene Delacroix se destacaram. O movimento romântico teve um impacto duradouro nas artes e na cultura, moldando a maneira como as pessoas percebem e expressam suas emoções e influenciando diversas formas de arte e literatura ate os dias atuais.

            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Romantismo