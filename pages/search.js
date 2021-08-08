import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/footer";
import Header from "../components/header";
import InfoCard from "../components/infoCard";

function Search({searchResults}) {
    const router = useRouter();

    const {location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedendDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedendDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg-inline-flex mb-5 space-x-3
                        text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibilty</p>
                        <p className="button">Type of Place </p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">

                        {searchResults?.map(item => (
                            <InfoCard key={item.img} img={item.img}
                                    title={item.title} location={item.location}
                                    description= {item.description} star={item.star}
                                    price= {item.price} total= {item.total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res=>res.json());
    return {
        props: {
            searchResults,
        }
    }

}