function myclass(){
    this.b = 3;

     function reg(){
        this.b = 6;
        this.a = 10;

        console.log("hellO "+ this.b , this.a);
     }

      let reg2 =(()=>{
        // this.a = 12;
        console.log("hellO "+ this.b , this.a);
     });

    reg();
    reg2();
     
}

// myclass();

this.value = 30;
const obj ={
     value:20,
     reg :function(){
        console.log(this.value); 
     },
     arrow :()=>{
        console.log(this.value); 
     }
}
obj.reg();
obj.arrow();
