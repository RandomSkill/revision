
import { GET_All_BOOK } from '../../src/Queries/Queries'
import { useQuery } from '@apollo/client'
const Books = (props) => {
  const books = useQuery(GET_All_BOOK);
  if (!props.show) {
    return null
  }

 if(books.loading) return(<div>loading...</div>)

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.data.allBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
