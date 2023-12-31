import { GET_ALL_AUTHORS } from '../../src/Queries/Queries'
import { useQuery } from '@apollo/client'
const Authors = (props) => {
  const res = useQuery(GET_ALL_AUTHORS);
  
  if (!props.show) {
    return null
  }

  if (res.loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {res.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors
