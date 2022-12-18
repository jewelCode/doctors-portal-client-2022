import { useEffect, useState } from "react"

const useTokens = user => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://doctors-portal-server-2022.vercel.app/user/${email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("data inside use token", data);
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken)
                })
        }
    }, [user]);
    return [token]
}

export default useTokens;