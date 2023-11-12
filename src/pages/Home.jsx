import { useCollection } from '../hooks/useCollection'
import { deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/FireBaseConfig'
import addBook from '../components/addBook'

function Home() {
    const { documents: books, error } = useCollection('books')


    if (!books) {
        return <h1>Loading...</h1>
    }

    const handleDelete = (id) => {
        deleteDoc(doc(db, "cities", id))
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='flex flex-col gap-3'>
            {books && books.map((book) => {
                return (
                    <div onClick={() => handleDelete(book.id)} className='bg-base-300 p-4 
                    rounded text-xl cursor-pointer' key={book.id}>
                        <p>{book.title}</p>
                    </div>
                )
            })}
            <addBook />
        </div>
    )
}

export default Home