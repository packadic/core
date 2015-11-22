namespace packadic { templates['grid'] = '<table class="table">    <thead>    <tr>        <th v-for="column in columns" v-on:click="sortBy(column)" v-bind:class="{ \'dropup\': reversed[column] }">            {{column | capitalize}}            <span v-bind:class="{ \'caret\': sortColumn == column }"></span>        </th>    </tr>    </thead>    <tbody>    <tr v-for="row in currentPage | orderBy sortColumn reversed[sortColumn]" transition="fadein">        <td v-for="column in columns">            {{row[column]}}        </td>    </tr>    </tbody></table>'; }