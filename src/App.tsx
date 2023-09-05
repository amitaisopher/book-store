import './App.css'
import Layout from './components/Layout'
import Container from '@/components/ui/container'
import BooksList from './components/ui/BooksList'
import { ShopContextProvider } from './context/ShopContextProvider'


function App() {
  return (
    <>
      <ShopContextProvider>
        <Layout>
          <Container>
          <div className="space-y-10 pb-10">
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg-px-8">
              <BooksList/>
            </div>
          </div>
          </Container>
        </Layout>
      </ShopContextProvider>
    </>
  )
}

export default App
