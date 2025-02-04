import Header from "../../components/Header"
import Subscribe from "../../components/susbscribe"
import yogaimg from "../../assets/yogabg.png"
import yog from "../../assets/yog.png"
const Home = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col md:flex-row text-center md:text-left bg-linear-to-r from-purple-200 to-violet-200 items-center justify-around min-h-[90vh]  bg-fixed bg-cover p-6">
        <div className="flex flex-col justify-center items-center">
      <div className="p-4 rounded-lg">
      <h1 className="text-3xl md:flex jutify-center items-center text-white md:text-6xl font-bold mb-4">Welcome to <img src={yog} alt="" /></h1>
      <p className="text-lg text-white mb-6">Join our monthly yoga sessions to maintain a healthy lifestyle.</p>
      <div className="md:w-fit">
      <Subscribe/>
      </div> 
      </div>
      </div>
      <div>
        <img src={yogaimg} alt="" />
      </div>
    </div>
    </>
  )
}

export default Home