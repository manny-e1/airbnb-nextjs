import Image from 'next/image';
import { GlobeAltIcon, SearchIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {
    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRange = {
        startDate,
        endDate,
        key: 'Selection'   
    }
    const search = () => {
        router.push(
            {
                pathname:  '/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests
                }
            }

        );
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('');
        setStartDate(new Date());
        setEndDate(new Date());
    }

    return (
        <header className="sticky top-0 z-50 
                grid grid-cols-3 bg-white
                shadow-md p-5 md:px-10">
            <div 
                onClick = {()=>router.push("/")}
                className="relative flex items-center 
                h-10 cursor-pointer my-auto">
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain" objectPosition="left"
                />
            </div>
            
            <div className="flex items-center md:border-2
                rounded-full py-2 md:shadow-sm">
                <input className="flex-grow pl-5 bg-transparent 
                    outline-none text-sm text-gray-600 placeholder-gray-400 " 
                    value={searchInput}
                    onChange={e=>setSearchInput(e.target.value)}
                    type="text" name="" placeholder={placeholder || "start your search"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 
                    text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-center space-x-2 rounded-full p-2 border-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
                
            </div>
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={noOfGuests}
                            onChange={e=>setNoOfGuests(e.target.value)}
                            min={1}
                            type="number"
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                        />
                    </div>
                    <div className="flex">
                        <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500">cancel</button>
                        <button 
                            onClick={search}
                            className="flex-grow text-red-400">search</button>
                    </div>
                </div>
            ) }

        </header>
    );
}

export default Header
