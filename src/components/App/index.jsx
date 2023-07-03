import { useDispatch } from "react-redux";
import TodoList from "../TodoList";
import { clear, fetchTodos } from "../../store/slice/todoSlice";
import AddTask from "../AddTask";
import UsersList from "../UsersList";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slice/usersSlice";
import AddUser from "../AddUser";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductsList from "../ProductsList";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchUsers());
      dispatch(fetchTodos());
      dispatch(fetchProducts());
  }, [dispatch])
  
  return (
    <div>
       <ProductsList />
        <AddTask />
        <TodoList />
        <button onClick={() => dispatch(clear())}>Очистить дела</button>
        <AddUser />
        <UsersList />
    </div>
  );
}

// реализовать процесс очистки дел при нажатии на кнопку


export default App;
