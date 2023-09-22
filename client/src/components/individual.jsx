import "./comp.css"
import { useState } from "react";
import { newIndividual } from "../serverFuncs";


function Ind({setPageToShow}) {

    async function addIndividual(){
        await newIndividual(individual, species, dateTime, firstName, lastName);
        backToHome();
    }

    function backToHome(){
        setPageToShow("home");
    }

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [species, setSpecies] = useState("");
        const [individual, setIndividual] = useState("");
        const [dateTime, setDateTime] = useState("");

    return (
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
    <div>
        <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
            </label>
            <div className="mt-2">
                <input
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value)}}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
            </label>
            <div className="mt-2">
                <input
                onChange={(e) => {setLastName(e.target.value)}}
                value={lastName}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>


        <div className="sm:col-span-3">
            <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900">
                Species
            </label>
            <div className="mt-2">
                <select
                    value={species} onChange={(e) => {setSpecies(e.target.value)}}
                    id="species"
                    name="species"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option>Elephant</option>
                    <option>Whale Shark</option>
                    <option>Mountain Pygmy Possum</option>
                </select>
            </div>
        </div>


        <div className="col-span-full">
            <label htmlFor="individualAnimal" className="block text-sm font-medium leading-6 text-gray-900">
                Name of individual animal:
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => {setIndividual(e.target.value)}}
                    value={individual}
                    type="text"
                    name="animal-name"
                    id="animal-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>


        <div className="sm:col-span-4">
            <label htmlFor="date-time" className="block text-sm font-medium leading-6 text-gray-900">
                Date and Time recorded:
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => {setDateTime(e.target.value)}}
                    value={dateTime}
                    type="datetime-local" id="datetime" placeholder="Date and Time"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={backToHome}type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
            </button>
            <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={addIndividual}>
                Save
            </button>
        </div>
        
    </div>
    </div>
    </div>
    )
}

export default Ind;