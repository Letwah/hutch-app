
import Contact from './Contact'

const Home = () => {
const {home} =props;



  return (
   <>
   {home.map((item) => {
    return (
      <Contact item={item}/>
    );

   })}
   </>
  )
}

export default Home

//rafce