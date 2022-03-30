import check from './check.png';

function MyRecipesComponent({label, image, calories, ingredients}) {
    return (
        <div>
            <div className='container'>
            <h2>{label}</h2>
            </div>

            <div className='container'>
            <img src = {image} alt='img' />
            </div>

            <div className='container'>
            <p>{calories.toFixed()} calories</p>
            </div>

            <div className='container'>
            <ul className = 'List'> 
                {ingredients.map(ingredient =>  (
                    <li><img src={check} alt='check' className = 'icon'/>{ingredient}</li>
                ))}
            </ul>
            </div>

        </div>
    )
}

export default MyRecipesComponent;