
function Sightings({setIsShown}) {

    function save(){

    }
    return(
    <div>
    <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900">Sighting Information</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600"></p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2">
                    <input
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
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

    <div className="sm:col-span-4">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    Email address
    </label>
    <div className="mt-2">
    <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>

    <div className="sm:col-span-3">
    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
    Species
    </label>
    <div className="mt-2">
    <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
        <option>Elephant</option>
        <option>Whale Shark</option>
        <option>Mountain Pygmy Possum</option>
    </select>
    </div>
    </div>

    <div className="col-span-full">
    <label htmlFor="sighting" className="block text-sm font-medium leading-6 text-gray-900">
    Name of animal sighted:
    </label>
    <div className="mt-2">
    <input
        type="text"
        name="animal-name"
        id="animal-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>

    <div className="sm:col-span-3">
    <label htmlFor="health" className="block text-sm font-medium leading-6 text-gray-900">
    Appears healthy?
    </label>
    <div className="mt-2">
    <select
        id="healthy"
        name="healthy"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
        <option>Yes</option>
        <option>No</option>
    </select>
    </div>
    </div>

    <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
            Explanation of health:
            </label>
            <div className="mt-2">
            <textarea
                id="explanation-health"
                name="explanation-health"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
            />
            </div>
        </div>

    <div className="sm:col-span-4">
    <label htmlFor="date-time" className="block text-sm font-medium leading-6 text-gray-900">
    Date and Time spotted:
    </label>
    <div className="mt-2">
    <input
        type="datetime-local" id="datetime" placeholder="Date and Time"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>

    <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Country
            </label>
            <div className="mt-2">
            <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
            </div>
        </div>
        <div className="sm:col-span-4">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    Coordinates:
    </label>
    <div className="mt-2">
    <input
        id="coordinates"
        name="coordinates"
        type="text"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
    </button>
    <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={}>
        Save
    </button>
    </div>

    </div>

    </div>
    </div>
    </div>
    )
}

export default Sightings;