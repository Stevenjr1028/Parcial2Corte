import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import counterSlice from "../store/counterSlice";

export function Counter() {

	const counter = useSelector((state) => state.value);
	const dispatch = useDispatch();
	console.log(counter.value);

	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{counter.value}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
