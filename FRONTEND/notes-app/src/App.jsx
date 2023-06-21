import { useQuery } from '@apollo/client'

import { AllNotes } from './Components/All-notes'
import { CreateNote } from './Components/Create-notes';
import { UpdateNote } from './Components/Update-note';

import { ALL_NOTES } from './Queries'

import './App.css'

function App() {
  const result = useQuery(ALL_NOTES);
  const { data, loading } = result;

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className='App'>
      <AllNotes notes={data.allNotes} />
      <div className='row'>
        <CreateNote />
        <UpdateNote />
      </div>
    </div>
    
  )
}

export default App
