const devices = [
    {
        device:   "TV",
        created_date : "2022-06-18",
        power_consume : 50
    }, 
    {
        device :   "Washer",
        created_date : "2022-06-19",
        power_consume : 60
    }, 
    {
        device :   "Refrigerator",
        created_date : "2022-06-20",
        power_consume : 80
    }, 
    {
        device :   "Selling Fan",
        created_date : "2022-06-21",
        power_consume : 100
    }, 
]
function addDevice(){

}

function getCurrDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    return yyyy + '-' + mm + '-' + dd;
}

function showDevices(){
    var col = [];
    for (var i = 0; i < devices.length; i++) {
        for (var key in devices[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    
    var tbody_tag = document.createElement("tbody");
    var total = 0, tr;

    for (var i = 0; i < devices.length; i++) {

        tr = tbody_tag.insertRow(-1);

        
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = devices[i].device;
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = "00:18:44:11:3A:87";
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = "127.0.0.2";
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = devices[i].created_date;
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = devices[i].power_consume;
        total += devices[i].power_consume;
    }
    console.log(tbody_tag)
    document.getElementById("table").appendChild(tbody_tag);
    document.getElementById("total_consume").innerText = total;
}

function showDevicesDashboard(){
    var devices_ec = [];
    for (var i = 0; i < devices.length; i++) {
        devices_ec.push({
            y: devices[i].power_consume,
            legendText : devices[i].device + " " + devices[i].power_consume,
            label: devices[i].device
        })
    }
    var chart = new CanvasJS.Chart("dashboard_display", {
        animationEnabled: true,
        title:{
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 0,
            //innerRadius: 60,
            indexLabelFontSize: 10,
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: devices_ec,
            showInLegend: true,
        }]
    });
    chart.render();
}