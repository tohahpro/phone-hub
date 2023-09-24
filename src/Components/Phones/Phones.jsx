import { useState } from "react";
import PhonesCard from "./PhonesCard";
import PropTypes from 'prop-types';

const Phones = ({ heading, phones }) => {

    const [isShowMore, SetIsShowMore] = useState(false)
    return (
        <div>
            <h1 className="text-5xl font-bold text-center py-4">{heading}</h1>
            <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        isShowMore ?
                            phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>) :

                            phones?.slice(0, 6).map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                    }
                </div>

                <div className="flex justify-center my-12">
                    <button className="bg-[#7E90FE] text-xl py-2 px-4 font-medium rounded-lg text-white" onClick={() => SetIsShowMore(!isShowMore)}>{isShowMore ? 'see less' : 'showMore'}</button>
                </div>
            </div>
        </div>
    );
};

Phones.propTypes = {
    heading: PropTypes.string,
    phones: PropTypes.array
};

export default Phones;