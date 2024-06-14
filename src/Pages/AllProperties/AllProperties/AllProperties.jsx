import { useState } from "react";
import useVerifiedProperties from "../../../Hooks/useVerifiedProperties";
import PropertyCard from "../PropertyCard/PropertyCard";


const AllProperties = () => {
    const [, verifiedProperties] = useVerifiedProperties()
    const [query, setQuery] = useState('')


    const handleSort = (e)=>{
        e.preventDefault()
        const sort = e.target.value
        setQuery(sort)
    }
    const handleSearch = (query, items) => {
        if (!query) {
            return items
        }
        else if (query === "Low to High") {
            return items.sort((a, b) => a.min_price_range - b.max_price_range)
        }
        else if (query === "High to Low") {
            return items.sort((a, b) => a.max_price_range - b.min_price_range)
        }
        return items.filter((property) => property.property_title.toLowerCase().includes(query))
    }

    const filteredProperties = handleSearch(query, verifiedProperties)
    // const sortedByPriceLowToHigh = offers.sort((a, b) => a.offer - b.offer)
    // const sortedByPriceHighToLow = offers.sort((a, b) => b.offer - a.offer)

    const handleQuery = (e) => {
        e.preventDefault()
        const title = e.target.search.value.toLowerCase()
        setQuery(title)
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/pw1QDMj/2150799695.jpg')] bg-center pt-36 pb-24 mb-10">
                <form onSubmit={(e) => handleQuery(e)} className="w-1/2 mx-auto md:mb-10 relative">
                    <input className="input input-bordered w-full mt-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" type="search" name="search" id="" />
                    <input className="absolute top-3 right-0 px-7 btn bg-gray-900 text-white" type="submit" value="Search" />
                </form>
                <div className="flex justify-end pt-10 mr-10">
                    <select onChange={(e)=>handleSort(e)} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Sort</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 container mx-auto">
                {
                    filteredProperties.map(property => <PropertyCard key={property._id} property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;