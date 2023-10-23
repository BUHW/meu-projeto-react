import Button from "./Button"

function Evento(){
    
    function meuEvento(){
        console.log(`Ativando primeiro evento` )
    }

    function segundoEvento(){
        console.log('Ativando segundo evento' )
    }
    
    return(
        <section>
            <p>click para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/> 
            <Button event={segundoEvento} text="Segundo Evento"/>        
        </section>
    )
}

export default Evento