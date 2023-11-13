
import styles from '@/app/sobrenos/page.module.css'

function Integrante(props) {

    return (
        <>
            {props.ImageUrls.map((imageUrl, index) => (
                <div className={styles.card}>
                    <div
                        key={index}
                        className={styles.imgBx}
                    >
                        <img src={imageUrl.img} alt={`Integrante ${index}`}  />
                    </div>
                    <div className={styles.content}>
                        <h3>Nome: {imageUrl.nome}</h3><br />
                        <h3>Idade: {imageUrl.idade}</h3><br />
                        <h3>Posição: {imageUrl.posicao}</h3>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Integrante