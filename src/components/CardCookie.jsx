const FortuneCookie = ({data}) => {

    return (
        <section>
            <p>{data.phrase}</p>
            <span>Autor: {data.author}</span>
        </section>
)
}
export default FortuneCookie