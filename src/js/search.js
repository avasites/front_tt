"use strict";

import Suggest from './suggest'

export default () => {
    
    const input = document.querySelector('[data-search-teacher]');

    if(!input) return;

    input.addEventListener('input', (e)=>{
        
       const value = e.target.value;

       if(value.length < 3){
            Suggest.removeSuggest(input.parentNode);
            return;
        }

       fetch(
           'http://127.0.0.1:8232/search',
           {
               body: JSON.stringify({'name':value}),
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json;charset=utf-8'
               },
           }
       )
       .then(response => response.json())
       .then(json => Suggest.printSuggest(json, input.parentNode));
    });

}