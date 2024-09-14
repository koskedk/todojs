import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { decremented, incremented, incrementedByAmount } from "./+state/counter.slice";

const Counter = () => {
    const value = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();
    
    function handleIncrement() {
        dispatch(incremented())
    }
    function handleIncrementAmount() {
        dispatch(incrementedByAmount(2))
    }
    function handleDecrement() {
        dispatch(decremented())
    }

    return (
        <div>
            <h2>Counterz {value}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleIncrementAmount}>+ 2</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter