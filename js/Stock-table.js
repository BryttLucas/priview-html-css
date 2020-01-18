let Symbol=[
   { Symbol:"PG",Name: "P&G", Location: "Cincinnati,OH", Current:"126.41", Paid:"125.11",Gain_Loss:"+1.30",Share:"10",Value:"1264.10" },
   { Symbol:"MSFT",Name: "Microsoft", Location: "Redmond, WA", Current:"167.10", Paid:"167.10",Gain_Loss:"+4.76",Share:"100",Value:"12710.00" },
   { Symbol:"AMZN",Name: "Amazon", Location: "Bellevue,WA", Current:"1884.72", Paid:"1888.33",Gain_Loss:"-4.21",Share:"2",Value:"3769.44" },
    ];

    function display(){
        let tableCtrl = document.getElementById("Symbol");

    function display(Symbol){
        
        for(let Symbol of Symbol){
            let tr = "<tr>";
            tr += "<td>" + Symbol.Symbol + "</td>";
            tr += "<td>" + Symbol.Location + "</td>";
            tr += "<td>" + Symbol.Current + "</td>";
            tr += "<td>" + Symbol.Paid + "</td>";
            tr += "<td>" + Symbol.Gain_Loss + "</td>";
            tr += "<td>" + Symbol.Share + "</td>";
            tr += "<td>" + Symbol.Value + "</td>";
            tr += "</tr>";
        }
    }
    function Load() {
        display();
    }
}