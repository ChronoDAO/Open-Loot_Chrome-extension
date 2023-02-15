// this is the code which will be injected into a given page...

(function() {

    load = ()=>{

        getPurchase = (page)=>{
            return fetch('https://openloot.com/api/market/purchases?pageSize=100&page='+page)
        }

        page = 1 
        purchases = {};

        getPurchase(page).then(res=>{
            console.log('result',res)
            res.json().then((obj)=>{
                console.log('obj',obj)
                purchases = obj
                totalPage = obj.totalPages

                for (let i = 2; i <= purchases.totalPages; i++) {
                    console.log(purchases.items)
                    getPurchase(i).then(res=>{
                        console.log('result',res)
                        res.json().then((obj)=>{
                            purchases.items.push(...obj.items);
                            console.log('total page',purchases.items);
                            localStorage['purchases'] = JSON.stringify(purchases)
                        })
                    })
                }
            })
        })


            
    }

    analyse = () =>{
        purchases = JSON.parse(localStorage['purchases'])

        totalBought = 0
        purchases.items.map(i => totalBought += i.price)
        document.querySelector('main .chakra-container').textContent = 'You bought a total of ' + Math.round(totalBought) + '$ worth of Big Time NFTs'
        btnAnalyse.style.backgroundColor = 'green'
        console.log('bought for :',totalBought)
    }


    autoload = ()=> {
        console.log('scrolling')
        window.scrollTo(0,1000000000)
        setTimeout(()=>{
        document.querySelector('.css-gdp2qw').click()
        autoload()
        },800)
    }

    removeUselessInfo = ()=>{

        style = document.createElement('style')

        style.textContent = `
        .chakra-linkbox .chakra-text:nth-last-child(1),.chakra-linkbox .chakra-text:nth-last-child(3), .chakra-linkbox .chakra-text:nth-last-child(4), .chakra-linkbox .chakra-text:nth-last-child(5) {
            display: none;
        }

        .chakra-linkbox .css-1ibv8sq {
            flex-direction: row-reverse;
            align-items: center;
        }

        hr.chakra-divider {
            opacity: 0;
        }
        `;

        document.body.appendChild(style)

    }


    addButton = (text,functionName)=>{
            var btn = document.createElement('button');
            btn.onclick = functionName
        
            btn.textContent = text
            btn.style.cssText = `
            background-color: #5a5a5a;
            padding: 5px;
            border-radius: 5px;
            z-index:50;`
    
            document.querySelector('.css-1b63qzu').appendChild(btn);
     
    }

	addButton('Auto load',autoload)
	addButton('load purchase',load)
	addButton('Analyse',analyse)
	addButton('Remove useless info',removeUselessInfo)

    


})();

