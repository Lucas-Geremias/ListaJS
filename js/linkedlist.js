class LinkedList{
    
    constructor(){
        this.head=null;
        this.length=0;
    }
//Uma string vazia tem um comprimento de 0.
//Para uma string vazia, s == "" é verdade, mas s == null é falso.
    isEmpty() {
        return this.head === null;
    }
    
    append(element){
        let node = new Node(element),
            current = this.head;
        if(this.isEmpty()){
            this.head = node;
        }else{
            while(current.next)
                current= current.next;
            current.next = node;
        }
        this.length++;
    }

    show(separator = ', ') {}

    insert(position, element){
    }
    
    removeAt(position){
    }
    
    remove(element){
    }
    
    indexOf(element){
    }
    
    
    size(){
    }
    
    getElement(position){
    }

    search(value){
    }

}