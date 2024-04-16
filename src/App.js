import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./features/About";
import Contact from "./features/Contact";
import RootLayOut from "./ui/RootLayOut";
import NotFound from "./ui/NotFound";
import Home from "./features/Home";
import DailyForm from "./features/DailyBlogs/DailyForm";
import EditForm from "./features/DailyBlogs/EditForm";


const App = () => {
  // const p = { id: 1, p: 2 }
  // const person = {
  //   name: 'per',
  //   ...p
  // };




  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'dailyForm', element: <DailyForm /> },
        { path: 'editForm/:id', element: <EditForm /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    },


  ]);



  return <RouterProvider router={router} />
}
export default App