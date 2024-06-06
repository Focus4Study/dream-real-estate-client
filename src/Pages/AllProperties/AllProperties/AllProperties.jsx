import useProperties from "../../../Hooks/useProperties";
import PropertyCard from "../PropertyCard/PropertyCard";


const AllProperties = () => {
    const [properties] = useProperties()
    return (
        <div className="pt-28 grid grid-cols-3 gap-10">
            {
                properties.map(property=><PropertyCard key={property._id} property={property}></PropertyCard>)
            }
        </div>
    );
};

export default AllProperties;