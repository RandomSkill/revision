import {
    ApolloClient,
    ApolloProvider,  InMemoryCache,
  } from '@apollo/client'
import App from "./App"
  
const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  })

const AppLoader = ()=>{
return(
    <ApolloProvider client={client}> 
    <App/>
    </ApolloProvider>
    )
}
export default AppLoader