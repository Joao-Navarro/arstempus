"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageGallery from "@/components/ImageGalerry"

const imageUrls = [

    { img: "/A-Ceia-de-Emaús (1).png", texto: "'A Ceia em Emaús' é uma pintura de Caravaggio, um influente pintor italiano do início do período Barroco. Concluída em 1601, a obra retrata o momento em que Jesus Cristo revela sua identidade aos discípulos em Emaús, após a sua ressurreição. A pintura é notável pela representação realista das emoções e detalhes, como as mãos e a comida na mesa. A Ceia em Emaús é uma das obras mais conhecidas de Caravaggio e é um exemplo impressionante do uso da luz e sombra (chiaroscuro) para criar drama e foco na cena." },

    { img: "/as-meninas (1).png", texto: "'As Meninas' é uma das obras-primas do pintor espanhol Diego Velázquez, concluída em 1656. Nesta pintura, Velázquez retrata a Infanta Margarida Teresa, a filha do rei Filipe IV da Espanha, juntamente com suas damas de honra e vários outros personagens da corte. A pintura é notável pela maestria técnica de Velázquez e pela maneira como ele utiliza a perspectiva e o jogo de espelhos para criar uma cena complexa e intrigante. As Meninas é um exemplo notável da pintura barroca espanhola e continua a ser uma das obras mais estudadas e admiradas na história da arte." },

    { img: "/Sagrada-familia (1).png", texto: "A obra 'Sagrada Família de Josefa' de Óbidos é uma pintura barroca produzida pela artista portuguesa Josefa de Óbidos, que viveu no século XVII. A pintura retrata a Sagrada Família, composta por Maria, José e o Menino Jesus, e é um exemplo do tema religioso que era comum na arte barroca. A obra de Josefa de Óbidos é conhecida por sua habilidade técnica e pela representação detalhada dos personagens, além de sua paleta de cores suaves. Josefa de Óbidos é uma das poucas mulheres artistas do período barroco a ganhar destaque em sua época, e suas obras são apreciadas por sua sensibilidade artística e expressão religiosa. Sagrada Família é uma representação tocante e devocional da Sagrada Família e exemplifica o estilo artístico da época em Portugal." },

    { img: "/santa-teresa (1).png", texto: "'O Êxtase de Santa Teresa' é uma das obras-primas do escultor e arquiteto italiano Gian Lorenzo Bernini, concluída em 1652. Ela representa um episódio da vida de Santa Teresa de Ávila, uma mística espanhola, que descreveu uma experiência mística em suas escritas. A escultura retrata Santa Teresa em um estado de êxtase divino, com um anjo segurando uma flecha dourada sobre ela, penetrando seu coração. A obra é conhecida por sua expressão intensa de êxtase espiritual e paixão religiosa, com um uso magistral da escultura para criar uma sensação de movimento e emoção. O Êxtase de Santa Teresa é uma das peças mais icônicas do estilo artístico conhecido como Barroco e é uma das principais atrações da Capela Cornaro, na Igreja de Santa Maria della Vittoria, em Roma." }

]

function Barroco() {

    return (

        <>


            <Header />


            <h1 className="title">Barroco</h1>

            <video controls >

                <source src="/barroco.mp4" type="video/mp4" />

            </video>

            <p className="texto">

                O Barroco foi um movimento artístico, cultural e arquitetônico que floresceu na Europa durante o século XVII. Caracterizou-se pela extravagância, teatralidade e ornamentação exuberante. Na arte, o Barroco produziu obras marcadas por contrastes de luz e sombra (chiaroscuro), representações detalhadas e emotivas, além de temas religiosos predominantes. Na música, o Barroco viu o surgimento de compositores notáveis como Johann Sebastian Bach e Antonio Vivaldi. Na arquitetura, destacam-se as igrejas barrocas ornamentadas. O Barroco é conhecido por sua busca pelo impacto emocional e espiritual, em contraste com o classicismo do Renascimento.

            </p>

            <div>

                <ImageGallery imageUrls={imageUrls} />

            </div>

            <Footer />

        </>

    )

}

export default Barroco