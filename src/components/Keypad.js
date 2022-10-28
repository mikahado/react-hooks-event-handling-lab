// Code Keypad Component Here


function Keypad (){

    function passwordMsg(){
        console.log("Entering password . . .")
        }

    return (
        <div>
            <input type="password" onChange={passwordMsg} />
        </div>
    )
}

export default Keypad;