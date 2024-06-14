function Scores({courseName, courseResults}){
    return {
< div class="scores" >
    <h1>{couseName}</h1>
    <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
            </tr>
        </thead>
        <body>

        </body>
    </table>
    }
}
import { HTML_RESULTS } from "./data.js";
<Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>

