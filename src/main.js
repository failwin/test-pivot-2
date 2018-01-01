(function(){
    const Pivot = window['quick-pivot'];

    const dataArray = [
        ['Dir', 'Name', 'Cost', 'Year'],
        ['A', 'Max', 12, 2016],
        ['A', 'Yura', 20, 2016],
        ['A', 'Max', 11, 2017],
        ['A', 'Yura', 15, 2017],
        ['A', 'Max', 3, 2018],
        ['A', 'Yura', 6, 2018],
        ['B', 'Ivan', 10, 2016],
        ['B', 'Pasha', 30, 2016],
        ['B', 'Ivan', 22, 2017],
        ['B', 'Pasha', 33, 2017]
    ];

    const dataArray2 = [
        ['Dir', 'Name', 'Cost', 'Year', 'Monts'],
        ['A', 'Max', 12, 2016, 1],
        ['A', 'Yura', 20, 2016, 2],
        ['A', 'Max', 11, 2017, 1],
        ['A', 'Yura', 15, 2017, 2],
        ['A', 'Max', 12, 2016, 1],
        ['A', 'Yura', 20, 2016, 3],
        ['A', 'Max', 11, 2017, 1],
        ['A', 'Yura', 15, 2017, 2],
        ['A', 'Max', 3, 2018, 1],
        ['A', 'Yura', 6, 2018, 1],
        ['B', 'Ivan', 10, 2016, 1],
        ['B', 'Pasha', 30, 2016, 1],
        ['B', 'Ivan', 22, 2017, 1],
        ['B', 'Pasha', 33, 2017, 1]
    ];

    const pivot1 = new Pivot(dataArray, ['Dir', 'Name'], ['Year'], 'Cost', 'sum');
    buildDataTable('#quickData', dataArray);
    buildPivotTable('#quickPivot', pivot1);

    console.log(pivot1.data);

    const pivot2 = new Pivot(dataArray2, ['Dir', 'Name'], ['Year', 'Monts'], 'Cost', 'sum');
    buildPivotTable('#quickPivot2', pivot2);

    function buildDataTable(selector, rows) {
        let str = '<table>';
        for (var row = 0, rowCount = rows.length; row < rowCount; row++) {
            const cols = rows[row];
            str += '<tr>';
            for (var col = 0, colCount = cols.length; col < colCount; col++) {
                const data = cols[col];
                let tagName = 'td';
                if (row === 0) {
                    tagName = 'th';
                }
                str += `<${tagName}>${data}</${tagName}>`;
            }
            str += '</tr>';
        }
        str += '</table>';

        $(selector).append(str);
    }

    function buildPivotTable(selector, pivot) {
        const rows = pivot.data.table;
        let str = '<table>';
        for (var row = 0, rowCount = rows.length; row < rowCount; row++) {
            const cols = rows[row].value;
            str += '<tr>';
            for (var col = 0, colCount = cols.length; col < colCount; col++) {
                const data = cols[col];
                let tagName = 'td';
                if (rows[row].type === 'colHeader') {
                    tagName = 'th';
                }
                str += `<${tagName}>${data}</${tagName}>`;
            }
            str += '</tr>';
        }
        str += '</table>';

        $(selector).append(str);
    }
})();
