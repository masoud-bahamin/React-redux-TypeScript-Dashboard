import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {

  const router = useRoutes(routes)

  return (
    <>
     <div className="h-full bg-gray-100 container mx-auto">
            <div className="min-h-full overflow-hidden">
                <Header />
                <div className="py-10">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <Sidebar />
                        <div className='lg:col-span-9 xl:col-span-10'>
                            {router}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
