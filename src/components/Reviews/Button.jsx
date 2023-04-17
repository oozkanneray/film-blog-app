function Button({userName,handleCurrent}) {



    return ( 
        <button
        className="m-2"
        onClick={() => {
            handleCurrent(userName)
        }}
        >{userName}</button>
     );
}

export default Button;