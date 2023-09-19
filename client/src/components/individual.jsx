function Ind() {

    return (
        <div>
        <form>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Scientist Name:</label>
                <input type="text" id="name" placeholder="Name" class="bg-gray-200 text-gray-800 rounded-full py-3 px-6"/>
                </div>
                <div class="mb-4">
                <label  class="block text-gray-700 text-sm font-bold mb-2">Animal Name:</label>
                <input type="text" id="animalname" placeholder="animal name" class="bg-gray-200 text-gray-800 rounded-full py-3 px-6"/>
                </div>
                <div class="mb-4">
                <label for="datetime" class="block text-gray-700 text-sm font-bold mb-2">Date and Time</label>
                <input type="datetime-local" id="datetime" placeholder="Date and Time" class="bg-gray-200 text-gray-800 rounded-full py-3 px-6"/>
                </div>
            <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full">
            Get started
            </button>
        </form>
        </div>
    )
}

export default Ind;