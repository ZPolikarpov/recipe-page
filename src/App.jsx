function App() {
	return (
		<>
			<header>
				<div className="container bg-neutral-000">
					<img src="./image-omelette.jpeg" alt="An image of an omelette filled with greens and vegetables" />
				</div>
			</header>

			<main>
				<div className="container flow bg-neutral-000">

					<div className="flow">
						<h1 className="heading-1">Simple Omelette Recipe</h1>
						<p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
					</div>

					<div className="prep-time | flow">
						<h3 className="heading-3">Preparation time</h3>
						<ul className="list">
							<li>
								<div>
									<strong>Total:</strong> Approximately 10 minutes
								</div>
							</li>
							<li>
								<div>
									<strong>Preparation:</strong> 5 minutes
								</div>
							</li>
							<li>
								<div>
									<strong>Cooking:</strong> 5 minutes
								</div>
							</li>
						</ul>
					</div>

					<div className="flow">
						<h2 className="heading-2">Ingredients</h2>
						<ul className="list">
							<li>
								<div>
									2-3 large eggs
								</div>
							</li>
							<li>
								<div>
									Salt, to taste
								</div>
							</li>
							<li>
								<div>
									Pepper, to taste
								</div>
							</li>
							<li>
								<div>
									1 tablespoon of butter or oil
								</div>
							</li>
							<li>
								<div>
									Optional fillings: cheese, diced vegetables, cooked meats, herbs
								</div>
							</li>
						</ul>
					</div>

					<div className="flow decoration" data-decoration="top">
						<h2 className="heading-2">Instructions</h2>
						<ol className="list">
							<li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
							<li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
							<li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
							<li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
							<li><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
							<li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
						</ol>
					</div>

					<div className="flow decoration" data-decoration="top">
						<h2 className="heading-2">Nutrition</h2>
						<p>The table below shows nutritional values per serving without the additional fillings.</p>
						<table className="table__nutrients">
							<tr>
								<td>Calories</td>
								<td><strong>277kcal</strong></td>
							</tr>
							<tr>
								<td>Carbs</td>
								<td><strong>0g</strong></td>
							</tr>
							<tr>
								<td>Protein</td>
								<td><strong>20g</strong></td>
							</tr>
							<tr>
								<td>Fat</td>
								<td><strong>22g</strong></td>
							</tr>
						</table>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
