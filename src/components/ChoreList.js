
 function ChoreList(){
    const List=[

        {name:'Empty Dishwasher'},
        {name:'Complete LunchCode prep work'},
        {name:'Buy groceries'}
    ];
    return (
        <div style={{"background-color": "", "float": "right", "width":"30%"}}>
            <h3>Today's Chores</h3>
       {List.map(data=>(

    <li style={{"textAlign":"left"}}>{data.name}</li>              
       )
        )}
      
        </div>
    )
 }
export default ChoreList

