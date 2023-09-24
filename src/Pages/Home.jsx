import { useLoaderData } from "react-router-dom";
import Phones from "../Components/Phones/Phones";
import Banner from "../Components/Header/Banner/Banner";






const Home = () => {
    const phones = useLoaderData([])
    console.log(phones);


    return (
        <div>
            <Banner></Banner>
            <Phones heading={'Our Phones Collections'} phones={phones}></Phones>
        </div>
    );
};

export default Home;