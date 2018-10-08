import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Test = (props) => (
    <div>
        <h1>จังหวัด</h1>
        <ul>
            {props.result.map((row) => (
                <li key={row.ID}>
                    <Link as={`/p/${row.ID}`} href={`/post?id=${row.ID}`}>
                        <a>{row.CityName}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

Test.getInitialProps = async function ({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(baseUrl + '/api/test')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.result.length}`)

    return {
        result: data.result
    }
}

export default Test