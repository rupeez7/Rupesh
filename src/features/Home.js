import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate();
  // const objs = [{ id: 1, name: 'ram' }, { id: 2, name: 'shyam' }];
  // const newUpdateArray = objs.map((ob) => ob.id === 1 ? { id: 1, name: 'hari' } : ob);
  // console.log(newUpdateArray);

  const { blogs } = useSelector((state) => state.dailySlice);

  return (
    <div className="grid grid-cols-3 p-2 gap-2">

      {blogs.map((blog) => {
        return <div key={blog.id} className="space-y-3">
          <h1>{blog.title}</h1>
          <img src={blog.imagePreview} alt="" />
          <div className="flex justify-end space-x-4 items-center">
            <button onClick={() => nav(`/editForm/${blog.id}`)} ><FaEdit color="green" size={20} /></button>
            <button>
              <FaTrash size={15} color=" red" />
            </button>

          </div>
        </div>
      })}


    </div>
  )
}
export default Home