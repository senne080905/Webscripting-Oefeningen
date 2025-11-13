let elementen = ['A', 'B', 'C'];

function printAlleMogelijkheden(elementen){
    elementen.forEach(function(eerste){
        elementen.forEach(function(tweede){
            elementen.forEach(function(derde){
                if(eerste !== tweede && eerste !== derde && tweede !== derde){
                    console.log(eerste + tweede + derde);
                }
            });
        });
    });
}
console.log(printAlleMogelijkheden(elementen));