
export function linkedList() {
    let listHead = null;
    let listTail = null;

    const append = (value) => {
        const newNode = node();
        newNode.setValue(value);

        if (!listHead) {
            listHead = newNode;
            listTail = newNode;
        } else {
            listTail.setNextNode(newNode);
            listTail = newNode;
        }
    };

    const prepend = (value) => {
        const newNode = node();
        newNode.setValue(value);

        if (!listHead) {
            listHead = newNode;
            listTail = newNode;
        } else {
            newNode.setNextNode(listHead);
            listHead = newNode;
        }
    };

    const size = () => {
        let currentNode = listHead;
        if (currentNode === null) return 0;

        let length = 0;
        
        while (currentNode != null) {
            length++;
            currentNode = currentNode.getNextNode();
        }

        // console.log(`Length of Linked List is: ${length}`);
        return length;
    };

    const head = () => {console.log(`Head: ${listHead.getValue()}`)};

    const tail = () => {console.log(`Tail: ${listTail.getValue()}`)};

    const at = (index) => {
        let currentIndex = 0;
        let currentNode = listHead;

        while (currentIndex != index) {
            if (currentNode === null) {
                console.log("Index does not exist."); 
                return;
            };
            currentNode = currentNode.getNextNode();
            currentIndex++;
        }

        console.log (`Value at index ${index} is: ${currentNode.getValue()}`);
    };

    const pop = () => {
        let currentNode = listHead;

        for (let i = 1; i < size() - 1; i++){
            currentNode = currentNode.getNextNode();
        }

        listTail = currentNode;
        currentNode.setNextNode(null);
    };

    const contains = (value) => {
        let currentNode = listHead;
        while (currentNode != null) {
            if (currentNode.getValue() == value) {
                console.log(`List contains ${value}`);
                return;
            }
            currentNode = currentNode.getNextNode();
        }
        console.log(`List does not contain ${value}`);
    };

    const find = (value) => {
        let currentNode = listHead;
        let currentIndex = 0;

        while (currentNode != null) {
            if (currentNode.getValue() == value) {
                console.log(`The value is located at index ${currentIndex}`);
                return; 
            }
            currentIndex++;
            currentNode = currentNode.getNextNode();
        }

        console.log(`The value '${value}' is not in the list.`);
    };

    const toString = () => {
        let currentNode = listHead;
        let str = '';
        
        if (!listHead) return;

        while (currentNode != null) {
            str += `( ${currentNode.getValue()} ) => `
            currentNode = currentNode.getNextNode();
        };

        str += "null";
        console.log(str);
    };

    const insertAt = (value, index) => {
        const newNode = node();
        newNode.setValue(value);

        let currentNode = listHead;
        let previousNode = null;
        let nextNode = null;

        
        for (let currentIndex = 0; currentIndex <= index; currentIndex++) {
            if (currentIndex == index - 1) {
                previousNode = currentNode;
            } else if (currentIndex == index) {
                nextNode = currentNode;
            }
            currentNode = currentNode.getNextNode();
        }

        previousNode.setNextNode(newNode);
        newNode.setNextNode(nextNode);
    };

    const removeAt = (index) => {
        let currentNode = listHead;
        let previousNode = null;
        let nextNode = null;

        
        for (let currentIndex = 0; currentIndex <= index + 1; currentIndex++) {
            if (currentIndex == index - 1) {
                previousNode = currentNode;
            } else if (currentIndex == index + 1) {
                nextNode = currentNode;
            }
            currentNode = currentNode.getNextNode();
        }

        previousNode.setNextNode(nextNode);
    };

    return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt};
}

function node() {
    let value = null;
    let nextNode = null;

    const getValue = () => {return value};
    const setValue = (newValue) => {value = newValue};

    const getNextNode = () => {return nextNode};
    const setNextNode = (newNextNode) => {nextNode = newNextNode};

    return {getValue, setValue, getNextNode, setNextNode};
};