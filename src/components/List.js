import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1999} />
                <Item marca="Langorguini" ano_lancamento={1902} />
                <Item marca="Bugati" ano_lancamento={2000} />
                <Item marca="BYD" />
                <Item ano_lancamento={2000} />
            </ul>
        </>
    )
}

export default List