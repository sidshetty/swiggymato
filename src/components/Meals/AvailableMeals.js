import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Missal Pav',
		description: 'Finest taak and veggies',
		price: 120
	},
	{
		id: 'm2',
		name: 'Khichdi',
		description: 'An Indian specialty!',
		price: 165
	},
	{
		id: 'm3',
		name: 'McVeggie Burger',
		description: "The NRI return who didn't forget his roots",
		price: 129
	},
	{
		id: 'm4',
		name: 'Buddha Bowl',
		description: 'Healthy...and green...',
		price: 189
	}
];

const AvailableMeals = () => {
	return (
		<section className={classes.meals}>
			<Card>
				<ul>
					{DUMMY_MEALS.map((meal) => (
						<MealItem
							id={meal.id}
							key={meal.id}
							name={meal.name}
							description={meal.description}
							price={meal.price}
						/>
					))}
				</ul>
			</Card>
		</section>
	);
};
export default AvailableMeals;
