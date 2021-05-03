function createTable(tableData, callback) {

	var table = $('table#jquery-table');

	table.empty();

	//var header_columns = ["egrn", "min_price", "start_price", "lot_n", "trade_procedure_number", "href"];
	var header_columns = [ "href", "egrn", "lot_n", "lot_square", "min_price", "start_price", "trade_procedure_number" ];

	var thead_tr = $('<tr>');
	$.each(header_columns, function(x, hcol) {
		$('<td>').text(hcol).appendTo(thead_tr);
 	});
	table.append( $('<thead>').append(thead_tr) );

	var tbody = $('<tbody>');
	$.each(tableData.data, function(x, row) {
	    var tr = $('<tr>');
	    $.each(row, function(y, col) {
	        tr.append( $('<td>').text(col) );
	    });
	    tbody.append(tr);
	});

	table.append(tbody);
	callback();
}

function TableSort() {
	$("#jquery-table").tablesorter({
		theme: 'blue',
		widthFixed: true,
		widgets: ['zebra', 'stickyHeaders', 'filter'],
		showProcessing: true,
		widgetOptions: {
			filter_formatter: {
				1: function($cell, indx) {
					console.log("1 tablesorter.filterFormatter.select2 start");
					return $.tablesorter.filterFormatter.select2($cell, indx, {
						match: false
					});
				},
				2: function($cell, indx) {
					console.log("2 tablesorter.filterFormatter.select2 start");
					return $.tablesorter.filterFormatter.select2($cell, indx, {
						match: false
					});
				},
			}
		}
	});
	console.log("tablesorter finished");
}

Papa.parse('result.csv', {
	download: true,
	header: true,
	// quoteChar: '"',
	complete: function(results) {
		// console.log(results.meta.fields);
		console.log("Parsing complete:", results.data);
		createTable(results, TableSort);
	}
});
