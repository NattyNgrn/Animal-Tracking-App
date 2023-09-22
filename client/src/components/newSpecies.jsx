import { useState } from "react";

function NewSpecies({setPageToShow}){

    function backToHome(){
        setPageToShow("home");
    }

    const [commonName, setCommonName] = useState("");
        const [scientificName, setScientificName] = useState("");
        const [numAnimals, setNumAnimals] = useState();
        const [statusCode, setStatusCode] = useState("");
        const [dateTime, setDateTime] = useState();

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
            <label htmlFor="common-name" className="block text-sm font-medium leading-6 text-gray-900">
                Common name
            </label>
            <div className="mt-2">
                <input
                value={commonName}
                onChange={(e) => {setCommonName(e.target.value)}}
                type="text"
                name="common-name"
                id="common-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="scientific-name" className="block text-sm font-medium leading-6 text-gray-900">
                Scientific name
            </label>
            <div className="mt-2">
                <input
                onChange={(e) => {setScientificName(e.target.value)}}
                value={scientificName}
                type="text"
                name="scientific-name"
                id="scientific-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>


        <div className="sm:col-span-3">
            <label htmlFor="numAnimals" className="block text-sm font-medium leading-6 text-gray-900">
                Number of animals in the wild
            </label>
            <div className="mt-2">
                <input
                onChange={(e) => {setNumAnimals(e.target.value)}}
                value={numAnimals}
                type="text"
                name="numAnimals"
                id="numAnimals"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>


        <div className="col-span-full">
            <label htmlFor="statusCode" className="block text-sm font-medium leading-6 text-gray-900">
                Status Code
            </label>
            <div className="mt-2">
                <input
                    onChange={(e) => {setStatusCode(e.target.value)}}
                    value={statusCode}
                    type="text"
                    name="statusCode"
                    id="statusCode"
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
                onClick={backToHome}>
                Save
            </button>
        </div>
        
    </div>
    </div>
    </div>
    )
}

export default NewSpecies;