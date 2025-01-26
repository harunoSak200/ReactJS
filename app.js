const  heading = React.createElement("h1" , {
    id : "heading"} ,
     "first heading from the react ."
) ; 

       
const root = ReactDOM.createRoot(document.getElementById('root')) ; 

console.log(heading) // this will print the object.



root.render(heading) ;// it's job is to take the  heading object convert it into the heading object and put it inside the root element i.e  div tag here.

root.render(typeof 'hello world from the react without the tag') ;