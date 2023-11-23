import { useContext } from 'react';
import ToDoContext from '../ToDoContext';

const Home = () => {
    const { lists } = useContext(ToDoContext);


    return (
        <div>
            <h2>All Lists</h2>
            {lists.map((list, index) => (
                <div key={index}>
                    <h3>{list.title}</h3>
                    <ul>
                        {list.list.map((todo) => (
                            <li key={todo.id}><p>{todo.content}</p></li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    );
};

export default Home;


  

  
  