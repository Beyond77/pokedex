import { useEffect, useState } from "react"

export const useCountdown = ( time, onComplete ) => {

    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        let interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000)

        return () => {
            clearInterval(interval)
        };
    }, [])

    useEffect(() => {
        if(remainingTime === 0 && onComplete){
            onComplete();
            setRemainingTime(30);
        }

    }, [remainingTime])

    return [ remainingTime ]
}