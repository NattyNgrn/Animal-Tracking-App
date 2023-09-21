import "./comp.css"
function Ind({setPageToShow}) {
    function save(){
        setPageToShow("home");
    }

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
                    id="species"
                    name="species"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value={species}>Elephant</option>
                    <option value={species}>Whale Shark</option>
                    <option value={species}>Mountain Pygmy Possum</option>
                </select>
            </div>
        </div>


        <div className="col-span-full">
            <label htmlFor="sighting" className="block text-sm font-medium leading-6 text-gray-900">
                Name of individual animal:
            </label>
            <div className="mt-2">
                <input
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
                    value={dateTime}
                    type="datetime-local" id="datetime" placeholder="Date and Time"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
            </button>
            <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={save}>
                Save
            </button>
        </div>
        
    </div>
    </div>
    </div>
    )
}

export default Ind;