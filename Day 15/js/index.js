/*                      ==================== Activity ====================
const postsWraper = document.querySelector('.post-wraper');


const displayPosts = (posts) => {
    let postsContainer = ''
    for (const post of posts) {
        let { id, title, body } = post;
        postsContainer += `
            <div class="card py-2 px-auto rounded-3">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-body">${body}</p>
                </div>
                <span>postID: ${id}</span>
            </div>
        `
    }
    postsWraper.innerHTML = postsContainer;
}

let asyncRequest = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (res.ok) {
        let resData = await res.json();
        displayPosts(resData);
    }
}      
    asyncRequest();
                        ==================== Activity ====================
*/



const searchInput = document.querySelector('#search-products');
const recipesContainer = document.querySelector('.cards-container');
const searchContainer = document.querySelector('.search-list');

let recipesCache = [];


const searchTerms = [
    "carrot", "broccoli", "asparagus",
    "cauliflower", "corn", "cucumber",
    "green pepper", "lettuce", "mushrooms",
    "onion", "potato", "pumpkin", "red pepper",
    "tomato", "beetroot", "brussel sprouts",
    "peas", "zucchini", "radish",
    "sweet potato", "artichoke", "leek",
    "cabbage", "celery", "chili",
    "garlic", "basil", "coriander",
    "parsley", "dill", "rosemary",
    "oregano", "cinnamon", "saffron",
    "green bean", "bean", "chickpea",
    "lentil", "apple", "apricot",
    "avocado", "banana", "blackberry",
    "blackcurrant", "blueberry", "boysenberry",
    "cherry", "coconut", "fig",
    "grape", "grapefruit", "kiwifruit",
    "lemon", "lime", "lychee",
    "mandarin", "mango", "melon",
    "nectarine", "orange", "papaya",
    "passion fruit", "peach", "pear",
    "pineapple", "plum", "pomegranate",
    "quince", "raspberry", "strawberry",
    "watermelon", "salad", "pizza",
    "pasta", "popcorn", "lobster",
    "steak", "bbq", "pudding",
    "hamburger", "pie", "cake",
    "sausage", "tacos", "kebab",
    "poutine", "seafood", "chips",
    "fries", "masala", "paella",
    "som tam", "chicken", "toast",
    "marzipan", "tofu", "ketchup",
    "hummus", "chili", "maple syrup",
    "parma ham", "fajitas", "champ",
    "lasagna", "poke", "chocolate",
    "croissant", "arepas", "bunny chow",
    "pierogi", "donuts", "rendang",
    "sushi", "ice cream", "duck",
    "curry", "beef", "goat",
    "lamb", "turkey", "pork",
    "fish", "crab", "bacon",
    "ham", "pepperoni", "salami", "ribs"
];

const reloadData = (searchTerm) => {
    return JSON.parse(localStorage.getItem(`${searchTerm}RecipesCache`));
}

const displayRecipes = (recipes) => {
    let recipesWraper = '';
    for (recipe of recipes) {
        let { image_url, title, publisher } = recipe;
        recipesWraper += `
        <div class="card py-2 px-3 w-25 d-flex flex-column justifiy-content-center align-items-center ">
            <img class="card-img-top h-50" src="${image_url}" alt="recipe"/>
            <div class="card-body text-center">
                <h2 class="card-title fs-4">${title}</h2>
                <p class="card-publisher">${publisher}</p>
            </div>
        </div>`
    }
    recipesContainer.innerHTML = recipesWraper;
    return
}

const getRecipes = async (searchTerm = 'pizza') => {
    try {
        if (localStorage.getItem(`${searchTerm}RecipesCache`) !== null) {
            recipesCache = localStorage.getItem(`${searchTerm}RecipesCache`);
            displayRecipes(JSON.parse(recipesCache));
            return
        } else {
            let jsonRes = await (await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`)).json();
            recipesCache = jsonRes.data.recipes;
            localStorage.setItem(`${searchTerm}RecipesCache`, JSON.stringify(recipesCache));
            displayRecipes(recipesCache);
            console.log('Entred else');
            return
        }
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

searchInput.addEventListener('keyup', (e) => {
    let searchedRecipes = [];
    let input = searchInput.value;
    if (!input.length) {
        searchContainer.classList.add('hidden');
        return;
    }
    searchedRecipes = searchTerms.filter((searchTerm) => {
        return searchTerm.toLowerCase().includes(input.toLowerCase());
    });

    if (e.key == 'Enter') {
        if (searchInput.value === '' || !searchTerms.includes(searchInput.value)) {
            return
        }
        searchContainer.classList.add('hidden');
        localStorage.setItem(`lastSearch`, searchInput.value);
        getRecipes(searchInput.value);
        searchInput.value = '';
        return
    }
    autoComplete(searchedRecipes);
    searchContainer.classList.remove('hidden');
})



const autoComplete = (searchedRecipes) => {
    let searchWraper = '';
    if (!(searchedRecipes.length > 0)) {
        searchContainer.innerHTML = `<p class="text-center">No result found!</p>`
        return
    }
    searchedRecipes.map((searchTerm) => {
        return searchWraper += `<li class="list-group-item " onClick="selectInput(this)">${searchTerm}</li>`;
    });
    searchContainer.innerHTML = searchWraper;
}

const selectInput = (item) => {
    searchInput.value = item.innerHTML;
    searchContainer.classList.add('hidden');
    localStorage.setItem(`lastSearch`, searchInput.value);
    getRecipes(searchInput.value);

    searchInput.value = '';
}


getRecipes(localStorage.getItem('lastSearch'));




