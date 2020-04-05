//DATA CONTROLLER
const dataController = (function(){
    const Rooms = function(id, type, adults, children){
        this.id = id;
        this.roomType = type;
        this.adults = adults;
        this.children = children;
    }

    const data = {
        allRooms: []
    }

    return {
        addItem: function(type, adults, children){
            let ID;
            //Create new ID
            if (data.allRooms.length > 0){
                ID = data.allRooms[data.allRooms.length - 1].id + 1;

            }else{
                ID = 0;
            }

            //Create new item
            const newItem = new Rooms(ID, type, adults, children);
            data

            //Push in the array
            data.allRooms.push(newItem);

            //Return new item
            return newItem;
        },

        deleteItem: function(id){
            let ids, index;

            ids = data.allRooms.map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1){
                data.allRooms.splice(index, 1);
            }


        },

        testing: function(){
            console.log(data);
        }
    }

})();

//UI CONTROLLER
const UIController = (function(){
    const DOMstrings = {
        roomType: '#roomType',
        adults: '#guestAdult',
        children: '#guestChildren',
        addButton: '.add_room',
        roomSelections: '#room-selection'
    }

    return{
        getInput: function (){
            return{
                roomType: document.querySelector(DOMstrings.roomType).value,
                adults: document.querySelector(DOMstrings.adults).value,
                children: document.querySelector(DOMstrings.children).value,
                
            }
        },

        addListItem: function (obj){
            let html, newHtml;
            //Create HTML Strings w/ placeholder text
            html = '<div id="roomitem-%id%" class = "room-item"><p>1 x <span class ="room-type-display">%roomType%</span> with <span class = "people-display">%adults% adult(s) & %children% children</span>.</p><button class="btn"><i class="fa fa-close"></i></button></div>';

            //Replace placeholder with real data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%roomType%', obj.roomType);
            newHtml = newHtml.replace('%adults%', obj.adults);
            newHtml = newHtml.replace('%children%', obj.children);

            //Insert to UI
            document.querySelector(DOMstrings.roomSelections).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function(){
            let fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.adults + ', ' + DOMstrings.children);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

        },

        getDOMstrings: function (){
            return DOMstrings;
        }
    }
    
})();

//GLOBAL APP CONTROLLER
const controller = (function(dataCtrl, UICtrl){
    const setupEventListeners = function(){
        const DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.addButton).addEventListener('click',ctrlAddItem);

        document.querySelector(DOM.roomSelections).addEventListener('click', ctrlDeleteItem)
    };

    const ctrlAddItem = function(){
        // 1. Get data from input
        const input = UICtrl.getInput();
        // 2. Add to data
        const newItem = dataCtrl.addItem(input.roomType, input.adults, input.children);

        // 3. Display to UI
        UICtrl.addListItem(newItem);

        // 4. Clear Fields
        UICtrl.clearFields();
    };

    const ctrlDeleteItem = function(event){
        let itemID, splitID, ID;
        itemID = event.target.parentNode.parentNode.id;
        if (itemID){
            splitID = itemID.split('-');
            ID = parseInt(splitID[1]);

            dataCtrl.deleteItem(ID);
            UICtrl.deleteListItem(itemID);
        }

    };

    return{
        init: function(){
            setupEventListeners();
        }
    }
    
})(dataController, UIController);

controller.init()