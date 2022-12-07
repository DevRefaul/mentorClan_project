import axios from "axios";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
import { addData } from "./Actions/actions";
import store from "./store";
import "./App.css"
import Loading from "./Components/Loading/Loading";


function App() {

  const [loading, setLoading] = useState(false)

  // fetching data using axios
  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dev.mentorclan.com/api/mentors")
      .then((res) => {
        //  giving data to redux store
        store.dispatch(addData(res.data.data))
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.messge)
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <Loading />
  }


  return (
    <div className="bg-gray-50 min-h-screen overflow-scroll">
      <h2 className="text-center text-4xl font-bold py-4">List of Sellers</h2>
      <Home />
    </div>
  );
}

export default App;
