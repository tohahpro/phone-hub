import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {


    const [phone, setPhone] = useState()

    const phones = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === idInt)
        setPhone(findPhone);
    }, [phones, idInt])

    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;