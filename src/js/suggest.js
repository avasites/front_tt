"use strict";

export default {

    removeSuggest(node) {
        const   classParent =  node.classList[0],
                className =  classParent+'__suggest',
                blockSuggest = document.querySelector('div.'+className);

        if(!blockSuggest) return;

        blockSuggest.remove();
    },


    printSuggest (list, node) {

        this.removeSuggest(node);

        if(!node)
        {
            console.error('Не передан node');
            return;
        }

        if(typeof list !== 'object' ) return;

        const   classParent =  node.classList[0],
                className =  classParent+'__suggest',
                length = list.length;

                
        let blockSuggest = document.querySelector('div.'+className),
            listItem = "";

        if(!blockSuggest)
        {
            blockSuggest = document.createElement('div');
            blockSuggest.className = className;
            node.append(blockSuggest);
        }


        for(let i = 0; i < length; i++)
        {
            listItem += "<a>"+list[i].name+"</a>";
        }

        blockSuggest.innerHTML = listItem;

    },

}