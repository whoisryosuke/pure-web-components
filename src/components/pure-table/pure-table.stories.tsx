import { storiesOf } from "@storybook/html";

storiesOf("Pure Table", module)
  .add(
    "Default",
    () => `
    <pure-table>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Checking alignment",
    () => `
    <pure-table bordered>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                </tr>
                <tr>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                </tr>
                <tr>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                    <td><s class="box" /></td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Bordered table",
    () => `
    <pure-table bordered>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Bordered Table with rowspan",
    () => `
  <pure-table bordered>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3">1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Bordered Table with colspan",
    () => `
    <pure-table bordered>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td colspan="3">[ redacted ]</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Table with Horizontal Borders",
    () => `
    <pure-table horizontal>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Striped Table",
    () => `
    <pure-table>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr class="pure-table-odd">
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ford</td>
                    <td>Focus</td>
                    <td>2008</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>5</td>
                    <td>Nissan</td>
                    <td>Sentra</td>
                    <td>2011</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>2009</td>
                </tr>
                <tr class="pure-table-odd">
                    <td>7</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Kia</td>
                    <td>Soul</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Nth Child Selector Styling",
    () => `
    <pure-table striped>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>2012</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ford</td>
                    <td>Focus</td>
                    <td>2008</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nissan</td>
                    <td>Sentra</td>
                    <td>2011</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Kia</td>
                    <td>Soul</td>
                    <td>2010</td>
                </tr>
            </tbody>
        </table>
    </pure-table>
`
  )
  .add(
    "Nested Table",
    () => `
      <pure-table bordered>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Accord</td>
                    <td>
                        <pure-table bordered>
                            <thead>
                                <tr>
                                    <th>Fuel</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diesel</td>
                                    <td>2009</td>
                                </tr>
                                <tr>
                                    <td>Petrol</td>
                                    <td>2009</td>
                                </tr>
                            </tbody>
                        </ptable>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Toyota</td>
                    <td>Camry</td>
                    <td>
                        <pure-table class="pure-table pure-table-bordered">
                            <thead>
                                <tr>
                                    <th>Fuel</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diesel</td>
                                    <td>2012</td>
                                </tr>
                                <tr>
                                    <td>Petrol</td>
                                    <td>2012</td>
                                </tr>
                            </tbody>
                        </pure-table>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Hyundai</td>
                    <td>Elantra</td>
                    <td>
                        <table class="pure-table pure-table-bordered">
                            <thead>
                                <tr>
                                    <th>Fuel</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diesel</td>
                                    <td>2010</td>
                                </tr>
                                <tr>
                                    <td>Petrol</td>
                                    <td>2010</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </pure-table>
  `
  );
