 var i;

 for(i=0; i<3;){
    let name = prompt("Lütfen isminizi giriniz: ")
    if(name.length < 3) {
        i=0;
    }
    else{
        for(i=0; i<7;){
            const number = prompt("Lütfen 7 haneli numaranızı giriniz: ")
            if(number.length < 7) {
                i=0;
            }
            else{
                 myName = document.querySelector("#myName")
                myName.innerHTML = `${number} Numaralı ${name}`
                 break;
            }
        }
         break;
    }
}


    function showTime(){
        const today = new Date();
        
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = editTime(m);
        s = editTime(s);
        
        document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s;
        setTimeout(showTime, 1000);
    }

    function editTime(i){
        if(i < 10) {
            i = "0" + i
        };
            return i;
    }

    showTime();
