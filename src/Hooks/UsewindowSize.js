import {useEffect, useState} from "react";

const UsewindowSize = () =>{
    const [size , setSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    useEffect(() =>{
           // eslint-disable-next-line
            function handleResize(){
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    },[])

    return size;
}

export  default UsewindowSize;