import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "White Chocolate Blueberry Oatmeal Cookies";
let recipeShortDesc = "What’s not to love about chewy blueberry oatmeal cookies bursting with juicy blueberries in between layers of coconut and sweet white chocolate chunks?";

const RecipeAuthor = ( ) => {
    let authorLink = "https://www.ambitiouskitchen.com/";
    let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2019/08/DSCF6949sq-582x582.jpg";
    let authorName = "Monique Volz";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Ambitious Kitchen</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
              <h1>{recipeTitle}</h1>
              <p>{recipeShortDesc}</p>
            </div>
            <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;