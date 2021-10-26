/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;

        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            glass,
            category,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
      } catch (error) {
        setCocktail(null);
        setLoading(false);
      }
    };

    getCocktail();
  }, [id]);

  if (loading) return <Loading />;

  if (!loading && !cocktail)
    return <h2 className="section-title">no cocktail to display</h2>;

  const { name, image, info, glass, category, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>

      <h2 className="section-title">{name}</h2>

      <section className="drink">
        <img src={image} alt={name} />
        <section className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>

          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map(
              (item, index) => item && <span key={index}>{item}</span>,
            )}
          </p>
        </section>
      </section>
    </section>
  );
};

export default SingleCocktail;
