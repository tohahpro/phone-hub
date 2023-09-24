import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PhonesCard = ({ phone }) => {
    const { id, image, phone_name, brand_name, price } = phone || {}
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="w-80 object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {brand_name}
                        </p>
                        <div className="flex justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {phone_name}
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Price : {price}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="p-6 pt-0">

                    <Link to={`/phone/${id}`} className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

PhonesCard.propTypes = {

    phone: PropTypes.object
};

export default PhonesCard;