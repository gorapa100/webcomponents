

(() => {
    
    document.addEventListener("readystatechange", (event) => {
                
        if(event.target.readyState === "interactive")               
        {            
            console.log('readystatechange : interactive', '----------------------------');
    
            const comps = document.querySelectorAll('[is^="ra-"]');
            
            const uniqueArr = [];

            comps.forEach((comp)=>{
    
                let compName = comp.getAttribute('is');
                
                if(!uniqueArr.includes(compName)){
                    
                    uniqueArr.push(compName);
                    
                    import(`./${compName}.js`).then(()=>{    
                        console.log('import ----------------------------', compName);                        
                    });    
                }
    
            });                        
        }         
        
    }); 
       
})();
