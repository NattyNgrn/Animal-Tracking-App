import Row from "./row.jsx"

const header = ["First Name", "Last Name", "Email", "Species", "Animal Nickname", "Healthy?", "Date/Time Spotted", "Country", "Recorded" ];

function Animaltable({data}){
    return(
        <div>
            <table className="table-auto">
            <thead>
            <tr>
                {
                    header.map(
                        (colname) => <th className="border-4 border-black px-4 py-2">{colname}</th>
                    )
                }
            </tr>
            </thead>
            <tbody>
                {/* mapping through the list of objects from the database and putting each object as a prop for the row component. */}
                { data.map((obj) => <Row obj={obj}></Row>) }
            </tbody>
        </table>
    </div>
    )
}

export default Animaltable;