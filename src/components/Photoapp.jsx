import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices/pokemon/thunks";

export const Photoapp = () => {
	const [photoList, setPhotoList] = useState([]);
	const [inc, setInc] = useState(0);

	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();

	const onInput = () => {
		dispatch(getPokemons(0));
		setPokeList(pokemons.pokemons);
		console.log(pokemons.pokemons);
	};

	return (
		<>
			<div>pokemons</div>
			<button onClick={() => onInput()}>aja</button>
			<tbody>
				{pokeList.map((pokemon, index) => (
					<tr key={index}>
						<td>{pokeList[index].name}</td>
                        <td>{pokeList[index].url}</td>
					</tr>
				))}
			</tbody>
		</>
	);
};
