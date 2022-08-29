$(document).ready(function () {
    $.ajax({
        url: 'Admin.aspx/GetMineData',
        method: 'post',
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            repFunc(data,'#myMineTable')
        }
    });
    $.ajax({
        url: 'Admin.aspx/GetSpaceData',
        method: 'post',
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            repFunc(data,'#mySpaceTable')
        }
    });
    $.ajax({
        url: 'Admin.aspx/GetWhacData',
        method: 'post',
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            repFunc(data,'#myWhacTable')
        }
    });
})

function repFunc(data,tablename) {
    $(tablename).DataTable({
        data: JSON.parse(data.d),
        columns: [
            {
                title: 'id',
                data: null,
                render: (data, type, row, meta) => meta.row+1
            },
            { "data": "Name" },
            { "data": "Rating" }
            // {
            //     'data': 'Rating',
            //     "render": function (data, type, row, meta) {
            //         var detailButton = `<button type="button" id="editBtn" data-toggle="modal" data-target="#userModal" class="btn action-btn btn-success btn-sm edit-btn mr-1" onclick="getDetails(${data})">Details</button>`;
            //         return detailButton;
            //     },
            //     "sortable": false,
            //     "searchable": false,
            //     "visible": true
            // }
        ],
        order: [[2, 'desc']],
    });
}