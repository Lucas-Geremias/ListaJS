class ArrayList{
//Além disso a ArrayList permite que elementos sejam acessados diretamente pelos métodos 
//get() e set(), e adicionados através de add() e remove().
//Todo ArrayList começa com um tamanho fixo, que vai aumentando conforme necessário, mas o 
//custo deste aumento é alto, pois é feita uma cópia do array atual para um novo array com um novo 
//tamanho
    constructor(){
        //Um construtor padrão será usado pela classe caso nenhum seja especificado. Para as classes 
        //de base o construtor padrão é:
        this.data = [];
    }

    show (separator=', '){
        return this.data.join(separator);
    }
    
    append(element){
        this.data.push(element);
    }

    insert(position, element){
        if(position>-1 && position<=this.size())
            this.data.splice(position,0,element);
    }
    
    removeAt(position){
        if (position > -1 && position < this.size())
            this.data.splice(position,1);
    }
    
    remove(element){
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    //Retorna a posição da primeira ocorrência do elemento especificado na lista.
    indexOf(element){
        for (let index = 0; index < this.data.length; index++)
            if(element===this.data[index]) 
                return index;
        return -1;
    }
    
    isEmpty(){
        return this.size()===0;
    }
    //Retorna o número de elementos da lista.
    size(){
        return this.data.length;
    }
    
    getElement(position){
        if (position >= 0 && position < this.size())
            return this.data[position];
        return null;
    }

    search(value){
        return this.data.some((n)=> n===value)
    }
}