function Ind({setIsShown2}) {
    function save(){
        setIsShown2(false);
    }

    return (
        <div>
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
        <option>Elephant</option>
        <option>Whale Shark</option>
        <option>Mountain Pygmy Possum</option>
    </select>
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
    )
}

export default Ind;