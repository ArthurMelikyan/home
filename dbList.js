 
 var frsNode = {
    data : 12, 
    next : null,
    previus : null
}; 
var secNode = {
    data : 99, 
    previus : frsNode,
    next : null
};
frsNode.next  = secNode;

function DbLinkedList() {
    this.len = 0;
    this.head = null;  // առաջին <գլխամասային> էլեմենտ
    this.tail = null;  // վերջին էլեմետը պոչը <հանգույց>
  } 

// DbLinkedList կոնստրուկտորի մեթոդները add ու remove

DbLinkedList.prototype.add =  function (data) {
  
        var node = {
            data : data,
            next : null,
            previus : null
        };

        if (this.len === 0) { 
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            node.previus = this.tail;
            this.tail = node;
        }
        this.len++;
      
}

DbLinkedList.prototype.remove = function (item) {
     
         if (item > -1 && item < this.len){

            var currentPosition = this.head, i = 0; 
            if (item === 0){
                this.head = currentPosition.next;
                if (!this.head){
                    this.tail = null;
                } else {
                    this.head.previus = null;
                } 
            } else if (item === this.len -1){
                currentPosition = this.tail;
                this.tail = currentPosition.previus;
                this.tail.next = null;
            } else { 
                while(i++ < item){
                    currentPosition = currentPosition.next;
                }
         currentPosition.previus.next = currentPosition.next;
            }
 
            this.len--; 
            return currentPosition.data;            

        } else {    
            return null;
        }
 
     
};

var list = new DbLinkedList();  
list.add(44);   
list.add(1);   
list.add(10);   
console.log("add methodic heto listi parunakutyunn e " , list);
var newObject = new DbLinkedList();
newObject.add(10);
console.log("newObj-i parunakutyune ->" , newObject);
// newObject.remove(newObject);
// console.log("newObject-e jnjeluc heto parunakutyune -> "  , newObject);
list.add("hello");
console.log(list);
var removeTest2 = new DbLinkedList();
removeTest2.add("sa jnjvelu e" , removeTest2);
console.log(".... -> " , removeTest2);
removeTest2.remove(removeTest2);