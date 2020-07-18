import React, { Component } from "react";
import './Desktop.scss';
import recipes from './TestData.json';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx'

class RecipeRender extends Component {

    constructor(props) {

        super(props);

        this.state = {

            data: [],
            loaded: false,
            test_data: recipes.recipes,
            detailsRender: false,
            detailInstructions: false,
            url: 'https://api.spoonacular.com/recipes/random?limitLicense=true&type=main course&number=1&apiKey=<Your Key Here>'

        };

        this.showDetailedInstructions = this.showDetailedInstructions.bind(this);

    }

    async componentDidMount() {

     await fetch(this.state.url)
        .then(response => {

            if (response.status > 400) {

                return this.setState(() => {

                    return { placeholder: 'Something went wrong!' };

                });

            }
            return response.json();

        })
        .then(data => {

            this.setState(() => {

                return {
                    
                    data: data.recipes,
                    loaded: true

                };

            });

        })
        .catch(() => console.log('Something went wrong')); //TO DO: Error Page

    }

    showDetailedInstructions() {

        this.setState(prevState => ({

            detailInstructions: !prevState.detailInstructions

        }));

    }

    render() {

        return (

            this.state.loaded ? 
            
            <div className = 'render-div'>

                {this.state.data.map((recipe, index) => {

                    let sourceURL = recipe.sourceUrl.split('.');
                    let sourceName = sourceURL[1];

                    let removeSummaryLinks = recipe.summary.split('<a')[0].replace(/<b>/g,'').replace(/<\/b>/g,'');

                    let removeSummaryTry = removeSummaryLinks.split('Try')[0];

                    let summary = removeSummaryTry.split('If you Like this recipe')[0];

                    // Removes unwanted HTML from string
                    // TODO: Create Regex to handle cases
                    let removeListFromInstructions = recipe.instructions.replace(/<li>/g, ' ').replace(/<\/li>/g, '');
                    let removeOLFromInstructions = removeListFromInstructions.replace(/<ol>/g, '').replace(/<\/ol>/g, '');
                    let removeParagraphFromInstructions =  removeOLFromInstructions.replace(/<p>/g, '').replace(/<\/p>/g, ' ');
                    let basicInstructions = removeParagraphFromInstructions;

                    // let basicInstructions = recipe.instructions.replace(/<li>/g, ' ').replace(/<\/li>/g, '').replace(/<ol>/g, '').replace(/<\/ol>/g, '');

                    return(

                        <div key = { index }>

                            <div className = 'title'>{ recipe.title }</div>

                            <div className = 'source-link'>

                                <a href = { recipe.sourceUrl }>
                                    
                                    <button className = 'source-btn'>View on  <span className = 'source-name'> { sourceName }</span></button>
                                    
                                </a>

                            </div>

                            <div className = 'spoonacular-link'>

                                <a className = 'spoon-a' href = 'https://spoonacular.com/'>
                                    
                                    <button className = 'spoonacular-btn'>Powered by Spoonacular</button>
                                    
                                </a>

                            </div>

                            <div className = 'image-div'>

                                <img alt = { 'Picture of ' + recipe.title } src = { recipe.image } className = 'recipe-img'></img>

                            </div>

                            <div className = 'desc-div'>

                                <div className = 'desc-title title'>Spoonacular Description</div>

                                <p className = 'summary-p'>{ summary }</p>

                            </div>

                            <div className = 'details-div'>

                                <ul className = 'details-ul'>

                                    {recipe.vegetarian && <li className = 'details-li'>Vegetarian</li>}

                                    {recipe.vegan && <li className = 'details-li'>Vegan</li>}

                                    {recipe.glutenFree && <li className = 'details-li'>Gluten Free</li>}

                                    {recipe.dairyFree && <li className = 'details-li'>Dairy Free</li>}

                                    {recipe.sustainable && <li className = 'details-li'>Sustainable</li>}

                                    {recipe.cheap && <li className = 'details-li'>Cheap</li>}

                                </ul>

                            </div>

                            <div className = 'ing-div'>

                                <div className = 'title'>Ingredients</div>

                                <ul className = 'ing-ul'>

                                    {recipe.extendedIngredients.map((ing, index) => {

                                        return (

                                            <li className = 'ing-li' key = { index }>

                                                <div className = 'ing-name'>{ing.original}</div>

                                            </li>

                                        );

                                    })}

                                </ul>

                            </div>

                            <div className = 'instruction-div'>

                                <div className = 'title'>Instructions</div>

                                {!this.state.detailInstructions ? 
                                
                                <div className = 'basic-div'>

                                    <div className = 'basic-instructions'>

                                        { basicInstructions }

                                    </div>

                                    <button className = 'detail-inst-btn' onClick = {this.showDetailedInstructions}>Detailed Instructions</button>

                                </div>

                                :

                                <div className = 'detailed-div'>

                                    <button className = 'simple-inst-btn' onClick = {this.showDetailedInstructions}>Simplified Instructions</button>

                                    {recipe.analyzedInstructions.map((inst, index) => {

                                        return (

                                            <div key = { index }>

                                                <ul className = 'step-ul'>

                                                    {inst.steps.map((step, index) => {

                                                        return (

                                                            <li key = { index } className = 'step-li'>

                                                                <div className = 'step-num'>Step { step.number }</div>

                                                                <div className = 'step-desc'> { step.step }</div>

                                                                {step.equipment.length > 0 &&
                                                                
                                                                    <div className = 'equipment-div'>

                                                                        <div className = 'equipment-title'>Equipment</div>

                                                                        <ul className = 'equipment-ul'>

                                                                        {step.equipment.map((equipment, index) => {

                                                                            return (

                                                                                <li className = 'equipment-li' key = { index }>
                                                                                    
                                                                                    <div className = 'equipment-name'>{ equipment.name }</div>
                                                                                    
                                                                                </li>

                                                                            );

                                                                            })}

                                                                        </ul>

                                                                    </div>
                                                                
                                                                }

                                                                {step.ingredients.length > 0 &&
                                                                
                                                                    <div className = 'ing-map-div'>

                                                                        <div className = 'ing-map-title'>Ingredients</div>

                                                                        <ul className = 'ing-map-ul'>

                                                                            {step.ingredients.map((ing, index) => {

                                                                                return (

                                                                                    <li className = 'ing-map-li' key = { index }>

                                                                                        <div className = 'ing-map-name'>{ ing.name }</div>

                                                                                    </li>

                                                                                );

                                                                            })}

                                                                        </ul>

                                                                    </div>
                                                                
                                                                }

                                                            </li>

                                                        );

                                                    })}

                                                </ul>

                                            </div>

                                        )

                                    })}

                                </div>
                                
                                }

                            </div>

                        </div>

                    );

                })}

            </div> : <div><TailSpin></TailSpin></div>

        );   

    }

}

export default RecipeRender;