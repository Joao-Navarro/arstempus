'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/neoclassicismo1.png", texto: "Quando Jacques-Louis David decidiu retratar o mito fundador de Roma, ele foi contra a corrente. Vários pintores e escultores retrataram o 'Rapto dos Sabinos' - quando os primeiros romanos começaram a colonizar a cidade sequestrando mulheres da vizinha tribo Sabina. " },

    { img: "/neoclassicismo3.png", texto: "'A Morte de Sócrates' é uma pintura de 1787 do pintor francês Jacques-Louis David. Representa a cena da morte do filósofo grego Sócrates porque ele se opôs às ideias dos atenienses e corrompeu as mentes dos jovens. Sócrates poderia escolher entre exilar-se ou ser condenado à morte. Na pintura, um dos discípulos de Sócrates está vestido de vermelho e segura um copo de veneno." },

    { img: "/neoclassicismo4.png", texto: "A pintura “A Morte de Marat” criada pelo francês Jacques-Louis David em 1793 é uma das obras representativas do período neoclássico, e suas principais características destacam melhor as características deste importante período da história do neoclassicismo. Especialmente a arte e apintura." },

    { img: "/neoclassicismo2.png", texto: "William-Adolphe Bouguereau , 'Dante e Virgílio', óleo sobre tela, 281x 225 cm, 1850. A obra Dante e Virgílio de William Bouguereau nasce primordialmente dos sentimentos de raiva e frustração do artista ao ter suas obras recusadas no Salão de Roma por dois anos consecutivos, 1848 e 1849." },




]

function Neoclassicismo() {

    return (

        <>


            <Header />





            <h1 className="title">Neoclassicismo</h1>

            <video controls >

                <source src="/neoclassicismo.mp4" type="video/mp4" />

            </video>
            
            <p className="texto">

                O neoclassicismo foi um movimento artístico e cultural que surgiu no final do século XVIII, como uma reação ao estilo rococó e ao Barroco. Ele buscava resgatar os principios esteticos da Grecia e Roma antigas, com ênfase na simplicidade, clareza e harmonia.



                As características do neoclassicismo incluem o uso de formas geométricas, temas históricos e mitológicos, equilíbrio e proporção. Este movimento influenciou a arquitetura, a pintura, a literatura e a música da época, e teve um impacto duradouro no design e na cultura ocidental.
                Grandes artistas neoclássicos incluem Jacques-Louis David, Johann Joachin, Winckelmann, Angelika Kauffmann e Jean-Auguste Dominique Ingres.


            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Neoclassicismo