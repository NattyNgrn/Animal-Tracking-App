import "./comp.css"
import { useState } from "react";

function Sightings({setPageToShow}) {

    function backToHome(){
        setPageToShow("home");
    }

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [species, setSpecies] = useState("");
        const [individual, setIndividual] = useState("");
        const [health, setHealth] = useState("");
        const [healthEx, setHealthEx] = useState("");
        const [dateTime, setDateTime] = useState();
        const [country, setCountry] = useState("");
        const [coordinates, setCoordinates] = useState("");


    return(
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>

    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
    }}>
        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Sighting Information</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
                <label htmlFor="first-name" >
                    First name
                </label>
                <div className="mt-2">
                    <input
                    value={firstName}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={(e) => {setFirstName(e.target.value)}}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="last-name" >
                    Last name
                </label>
                <div className="mt-2">
                    <input
                    value={lastName}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    onChange={(e) => {setLastName(e.target.value)}}
                    />
                </div>
            </div>

        <div className="sm:col-span-4">
            <label htmlFor="email">
                Email address
            </label>
            <div className="mt-2">
                <input
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="species" >
                Species
            </label>
            <div className="mt-2">
                <select
                    id="species"
                    name="species"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value={species} onChange={(e) => {setSpecies(e.target.value)}}>Elephant</option>
                    <option value={species} onChange={(e) => {setSpecies(e.target.value)}}>Whale Shark</option>
                    <option value={species} onChange={(e) => {setSpecies(e.target.value)}}>Mountain Pygmy Possum</option>
                </select>
            </div>
        </div>

        <div className="col-span-full">
            <label htmlFor="individual" >
            Name of animal sighted:
            </label>
            <div className="mt-2">
                <input
                    value={individual}
                    type="text"
                    name="animal-name"
                    id="animal-name"
                    onChange={(e) => {setIndividual(e.target.value)}}
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="health" >
                Appears healthy?
            </label>
            <div className="mt-2">
                <select
                    id="healthy"
                    name="healthy"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value={health} onChange={(e) => {setHealth(true)}}>Yes</option>
                    <option value={health} onChange={(e) => {setHealth(false)}}>No</option>
                </select>
            </div>
        </div>

        <div className="col-span-full">
            <label htmlFor="healthEx" >
                Explanation of health:
            </label>
            <div className="mt-2">
                <textarea
                    value={healthEx}
                    id="explanation-health"
                    name="explanation-health"
                    rows={3}
                    defaultValue={''}
                    onChange={(e) => {setHealthEx(e.target.value)}}
                />
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="date-time" >
                Date and Time spotted:
            </label>
            <div className="mt-2">
                <input
                    value={dateTime}
                    type="datetime-local" 
                    id="datetime" 
                    placeholder="Date and Time"
                    onChange={(e) => {setDateTime(e.target.value)}}
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="country" >
                Country
            </label>
            <div className="mt-2">
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value={country} onChange={(e) => {setCountry(e.target.value)}}>United States</option>
                    <option value={country} onChange={(e) => {setCountry(e.target.value)}}>Canada</option>
                    <option value={country} onChange={(e) => {setCountry(e.target.value)}}>Mexico</option>
                </select>
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="coordinates" >
                Coordinates:
            </label>
            <div className="mt-2">
                <input
                value={coordinates}
                    id="coordinates"
                    name="coordinates"
                    type="text"
                    onChange={(e) => {setCoordinates(e.target.value)}}
                    
                />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                onClick={backToHome}
                type="button" 
                className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>


                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={backToHome}>
                    Save
                </button>


            </div>
        </div>

        </div>
        </div>
    
    </div>
    </div>
    )
}

export default Sightings;