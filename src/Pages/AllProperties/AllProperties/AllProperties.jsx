import useVerifiedProperties from "../../../Hooks/useVerifiedProperties";
import PropertyCard from "../PropertyCard/PropertyCard";


const AllProperties = () => {
    const [,verifiedProperties] = useVerifiedProperties()
    console.log(verifiedProperties);
    return (
        <div className="pt-28 grid grid-cols-3 gap-10">
            {
                verifiedProperties.map(property=><PropertyCard key={property._id} property={property}></PropertyCard>)
            }
        </div>
    );
};

export default AllProperties;