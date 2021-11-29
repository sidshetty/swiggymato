import classes from './AvailableMeals.module.css';

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
			<ul>{DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)}</ul>
		</section>
	);
};
export default AvailableMeals;
