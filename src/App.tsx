import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import { Form1, Form2, Form3 } from './components/Form'
import { List1, List2, List3, List4 } from './components/List'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <List1 />
        <List2 />
        <List3 />
        <List4 />
        <Form1 />
        <Form2 />
        <Form3 />
    </QueryClientProvider>
  )
}

export default App
