
import  Navbar from '../components/navbar.jsx'
import  Dashboard  from '../components/displayComponents/dashboard.jsx'
import NewNotesbutton from '../components/newNotesbutton.jsx'

function AppPage() {


  return (
    <>
      <div className='main-page'>
          <Navbar />
          <Dashboard />
          <NewNotesbutton/>
      </div>
    </>
  )
}

export default AppPage
