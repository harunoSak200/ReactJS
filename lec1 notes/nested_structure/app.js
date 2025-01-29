/*
<div id = parent>

    <div id = "part1">
            <h1 id = headpart1_out>This is the heading 1 of the part 1</h1>
            <p id = para1>Thsi is the para of the part 1</p>
            <div id = innerdiv1>
                <h1 id = headpart1_in>
                    "This is the head of the part 1"
                </h1>
            </div>
        </div>
        <div id = part2>
            <h1 id = headpart2_out></h1>
            <p id = para2>This is the para of the part 2 </p>
            <div id = innerdiv2>
                <h6 id = headpart2_in>
                    "This is the heading of the part 2"
                </h6>
            </div>
        </div> 
    
</div>
    
*/


const root1 = ReactDOM.createRoot(document.getElementById('root')) ; 
const root2 = ReactDOM.createRoot(document.getElementById('tophead')) ;

const parent1 = React.createElement(
    'div' ,{id:"parent"} ,
    [
        React.createElement('h1' , {id : "headpart1_out"} , "This is the heading 1 of part 1") , React.createElement('p' , {id:"para1"} , "This is the para1 of part 1"),
        React.createElement('div' , {id:"innerdiv1"} , ["This is the inner div of part1" , React.createElement('h1' , {id:"headpart1_in"} , "This is the innermost head of the part 1")]) , 

        React.createElement('h1' , {id : "headpart1_out"} , "This is the heading 1 of part 1") , React.createElement('p' , {id:"para1"} , "This is the para1 of part 1"),
        React.createElement('div' , {id:"innerdiv1"} , ["This is the inner div of part1" , React.createElement('h1' , {id:"headpart1_in"} , "This is the innermost head of the part 1")]) 

    ]

)

const parent2 = React.createElement(
    'h1' , {} , "hello this is the new technology"
)

setTimeout(() => {
    root1.render(parent1) ;
}, 5000);

setTimeout(() => {
    root2.render(parent2)
}, 8000);


/*whenever we write the root.render() it will replace the content inside the 
div tag in the index.html with the content inside the render()*/


/*library: It can work in the small piece of the code also*/
 
