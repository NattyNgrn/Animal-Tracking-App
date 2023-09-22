
const header = ["First Name", "Last Name", "Email", "Species", "Animal Nickname", "Healthy?", "Date/Time Spotted", "Country", "Recorded" ];
const keyNames = ["first", "last", "email", "speciesTracking", "nickname", "healthy", "spotted", "location", "recorded"];

function Row({obj}) {

    return (
        <tr>     
            { //mapping through the keynames of the object which are the columns in DB and putting the value in the row
                keyNames.map((key) => 
                    <td class="border-4 border-black px-4 py-2">
                        {key === "healthy" ? 
                            obj[key]===true ? "yes" : "no" 
                            :
                            obj[key]
                        }
                    </td>
                )
            }
        </tr>
    )
}

export default Row;