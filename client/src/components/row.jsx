
const header = ["First Name", "Last Name", "Email", "Species", "Animal Nickname", "Healthy?", "Column 7", "Date/Time Spotted", "Country", "Coordinates" ];
const keyNames = [];

function Row({obj}) {
    return (
        <tr>     
            { //mapping through the keynames of the object which are the columns in DB and putting the value in the row
                keyNames.map((key) => <td class="border-4 border-black px-4 py-2">{obj[key]}</td>)
            }
        </tr>
    )
}

export default Row;