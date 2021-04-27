class Animal {

   constructor(name) {
     this.name = name;
   }
 
 }
 
 class Rabbit extends Animal {
   constructor(name) {
     super(name); // не хватало super()
     this.created = Date.now();
   }
 }
 
 let rabbit = new Rabbit("Белый кролик"); 
 alert(rabbit.name);