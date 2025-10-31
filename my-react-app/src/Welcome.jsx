import { useEffect } from "react";

const Welcome = () => {
    useEffect(
        () => {
            document.title = "大傻逼";
        }
    )

    return (
        <div>
            <h1>Welcome to my website!</h1>
        
        </div>
    );
}

export default Welcome;