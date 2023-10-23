import styles from './Frase.module.css'

function Frase(){
    return (
        <section className={styles.fraseConteiner}>
            <p className={styles.fraseContent}>este é um componente</p>
        </section>
    )
}

export default Frase