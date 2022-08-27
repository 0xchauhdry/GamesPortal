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
            { "data": "Name" },
            { "data": "GameName" },
            { "data": "Time" },
            { "data": "score" }
        ]
    });
}