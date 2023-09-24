import { useEffect, useState } from "react";


const Favorites = () => {

    const [favorites, setFavorites] = useState([])
    const [notFind, setNotFind] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNotFind('no data find')
    }

    useEffect(() => {
        const favoriteItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoriteItem) {
            setFavorites(favoriteItem)
        } else {
            setNotFind('no data find')
        }
    }, [])

    return (
        <div>
            {
                notFind ?
                    <p>{notFind}</p>
                    :
                    <div>
                        <div className="flex justify-center my-12">
                            {
                                favorites.length > 0 && <button className="bg-[#7E90FE] text-xl py-2 px-4 font-medium rounded-lg text-white" onClick={handleRemove}>Delete all</button>
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {
                                showMore ?
                                    favorites.map(favorite =>
                                        <div key={favorite.id}>
                                            <div className="relative flex w-full h-80 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                                    <img
                                                        src={favorite.image}
                                                        alt="image"
                                                        className="w-72 h-72 p-6"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                                        {favorite.brand_name}
                                                    </h6>
                                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                        {favorite.phone_name}
                                                    </h4>
                                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                        Price :  {favorite.price}
                                                    </h4>
                                                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                                        {favorite.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    favorites.slice(0, 4).map(favorite =>
                                        <div key={favorite.id}>
                                            <div className="relative flex w-full h-80 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                                    <img
                                                        src={favorite.image}
                                                        alt="image"
                                                        className="w-72 h-72 p-6"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                                        {favorite.brand_name}
                                                    </h6>
                                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                        {favorite.phone_name}
                                                    </h4>
                                                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                        Price :  {favorite.price}
                                                    </h4>
                                                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                                        {favorite.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>

                        <div className="flex justify-center my-12">
                            {
                                favorites.length > 4 &&
                                <button className="bg-[#7E90FE] text-xl py-2 px-4 font-medium rounded-lg text-white" onClick={() => setShowMore(!showMore)}>{showMore ? 'show less' : 'show more'}</button>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favorites;