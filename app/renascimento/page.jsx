"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/criação-de-adão.png", texto: "'A Criação de Adão' é uma das pinturas mais famosas do artista italiano renascentista Michelangelo. A pintura retrata o momento em que Deus dá vida a Adão, o primeiro ser humano, através de um toque de seus dedos. A cena central da pintura mostra Deus como uma figura idosa e barbuda, estendendo o braço em direção a Adão, que está representado como um homem nu. O ponto focal da pintura é o toque dos dedos de Deus e de Adão, que quase se tocam, mas não se conectam completamente." },

    { img: "/Última-ceia (1).png", texto: "'A Última Ceia' é uma das pinturas mais famosas do renomado artista renascentista italiano Leonardo da Vinci. Ela foi criada entre 1495 e 1498 e representa o momento em que Jesus Cristo compartilha sua última refeição com seus apóstolos antes de sua crucificação. A pintura é conhecida por sua composição complexa, expressões faciais detalhadas e uso habilidoso da perspectiva. A Última Ceia é um dos marcos da arte ocidental e tem profundo significado religioso, sendo uma representação icônica desse evento bíblico. Ela está localizada no refeitório do Convento de Santa Maria delle Grazie, em Milão, Itália, e é considerada uma das obras-primas de Leonardo da Vinci." },

    { img: "/Escola-de-Athena.png", texto: "'A Escola de Atenas' é uma famosa pintura renascentista de autoria do artista italiano Rafael Sanzio, também conhecido como Rafael. A obra faz parte dos afrescos que decoram a Capela Sistina, no Vaticano, e foi concluída por volta de 1511. A pintura retrata uma reunião imaginária de filósofos, cientistas e pensadores da Antiguidade Clássica, destacando figuras como Platão e Aristóteles no centro da composição. Essa obra é um exemplo notável da síntese da cultura clássica e renascentista, mostrando o interesse do período pela filosofia, ciência e humanismo." },

    { img: "/nascimento-de-venus.png", texto: "'O Nascimento de Vênus' é uma famosa pintura renascentista criada pelo artista italiano Sandro Botticelli por volta de 1484-1486. A obra retrata o nascimento da deusa Vênus a partir das águas do mar, conforme a mitologia romana. Vênus é representada como uma figura nua, de beleza idealizada, surgindo de uma concha marinha, enquanto sopros de vento a direcionam para a costa. A pintura é conhecida por sua elegância, graça e simbolismo, tornando-se um ícone da arte renascentista e um exemplo notável da busca por harmonia e proporção na representação da forma humana." },



]

function Renascimento() {

    return (

        <>


            <Header />


            <h1 className="title">Renascimento</h1>

            <video controls >

                <source src="Renascentismo.mp4" type="video/mp4" />

            </video>

            <p className="texto">

                O Renascimento foi um movimento cultural, artístico e intelectual que se desenvolveu na Europa, principalmente entre os séculos XIV e XVI. Ele representou uma ruptura com a mentalidade da Idade Média e trouxe uma redescoberta e valorização das ideias da Antiguidade Clássica greco-romana. Caracterizou-se pelo ressurgimento da arte, da ciência, da filosofia e da cultura em geral. Os artistas renascentistas, como Leonardo da Vinci, Michelangelo e Rafael, criaram obras-primas que ainda hoje são admiradas, e os pensadores da época fizeram avanços significativos no campo da ciência e da filosofia. O Renascimento também promoveu o humanismo, que enfatizava o valor do indivíduo, a razão e a educação, ajudando a moldar a sociedade ocidental moderna.

            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Renascimento