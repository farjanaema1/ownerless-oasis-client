import Anotherbanner from "./AnotherBanner/anotherBanner";
import Banner from "./Banner/banner";
import GetTouch from "./GetTouch/gettouch";
import Service from "./Service/service";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Service></Service>
           <Anotherbanner></Anotherbanner>
           <GetTouch></GetTouch>
   
        </div>
    )
}
export default Home;