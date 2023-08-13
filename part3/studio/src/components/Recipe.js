const RecipeAuthor = () => {
   let authorLink = "https://www.ambitiouskitchen.com/wp-content/uploads/2019/12/blueberrycookies-2-594x594.jpg";
   let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/DSCF6949sq-582x582.jpg";
   let authorName = "Monique Volz";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'coconut oil',
      'dark brown sugar',
      'egg',
      'vanilla',
      'flour',
      'frozen blueberries'
   ];

   // map over an array to produce list items dynamically (if more items in array than list items)
   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   });

   //replace hard code of list items with {ingredientListItems}
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
           {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>White Chocolate Blueberry Oatmeal Cookies</h1>
            <p>What’s not to love about chewy blueberry oatmeal cookies bursting with juicy blueberries in between layers of coconut and sweet white chocolate chunks?</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.ambitiouskitchen.com/wp-content/uploads/2019/12/blueberrycookies-2-594x594.jpg" alt="" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}