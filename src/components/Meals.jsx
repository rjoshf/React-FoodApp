
import MealItem from './MealItem.jsx';
import Error from './Error.jsx'
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

const Meals = () => {
    const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, [])

    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        return <Error title="Failed to fetch meals" message={error}></Error>
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal}></MealItem>)}
        </ul>
    )

}

export default Meals;