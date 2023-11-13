"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/abstracionismo04.png", texto: "'Amarelo-Vermelho-Azul' é uma pintura a óleo sobre tela realizada pelo artista russo Wassily Kandinsky em 1925. É uma pintura que inclui as cores primárias, tal como triângulos, quadrados e círculos, além de elementos abstratos. " },

    { img: "/abstracionismo10.png", texto: "'Insula Dulcamara', de Paul Klee, Em 1938, o pintor suíço naturalizado alemão Paul Klee criou 'Insula Dulcamara', uma das sete pinturas horizontais marcadas pela sua técnica de carvão sobre jornal colado em estopa ou linho. A obra é notável por sua alegria e acessórios livres, sem uma forma definida, e seu título em latim, que significa 'Ilha doce e amarga'. Klee expressou a ideia de que a vida é mais apaixonante quando enfrentamos desafios, comparando a escolha entre o doce e o salgado na vida com a seleção entre pratos em uma balança, enfatizando a liberdade de escolha individual. Criada nos últimos anos de sua vida, a pintura reflete a perspectiva do artista sobre a vida e a busca por experiências diversas. " },

    { img: "/abstracionismo11.png", texto: "'Composição Suprematista', Kazimir Malevich, o pintor soviético, foi um pioneiro do Suprematismo, um movimento artístico que surgiu na Rússia entre 1915 e 1916. Semelhante a seus colegas abstracionistas, Malevich buscava negar a presença física de objetos e alcançar a pureza da 'supremacia da sensação pura'. Sua icônica obra 'Composição Suprematista', de 1916, exemplifica o estilo com seu uso de formas geométricas simples, uma paleta de cores primárias e secundárias, muitas vezes sobrepostas, em um fundo predominantemente branco, simbolizando o vazio. A obra é parte de uma coleção privada e reflete a busca por uma expressão artística livre de representações objetivas." },

    { img: "/abstracionismo08.png", texto: "'Castle and Sun' de Paul Klee é uma pintura inovadora que combina abstração com figuras geométricas, criando uma metrópole imaginária com cores vibrantes. Klee é reconhecido como um influente filósofo e teórico da arte do século XX." },


]

function Abstracionismo() {

    return (

        <>


            <Header />

            <h1 className="title">Abstracionismo</h1>

            <video controls >

                <source src="/abstracionismo.mp4" type="video/mp4" />

            </video>

            <p className="texto">

                O Abstracionismo é um movimento artístico do início do século XX que rompeu com a representação figurativa, buscando a expressão pura por meio de forma, cor e composição. Dividido em duas correntes principais, o Abstracionismo Lírico é caracterizado por formas orgânicas e expressivas que transmitem emoções, enquanto o Abstracionismo Geométrico se concentra em formas geométricas precisas e estruturas racionais. Essas abordagens refletem a resposta à industrialização e mudanças na sociedade, política e tecnologia. O movimento influenciou diversas formas de arte, como escultura, arquitetura e música, permitindo aos artistas explorar a subjetividade e a abstração, expandindo a expressão artística e influenciando gerações subsequentes.
            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Abstracionismo