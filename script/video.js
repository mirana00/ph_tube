console.log('viidd');
//1- fetch, load and how categories on html

//create load categories
const loadCategories =()=>{
   // fetch the data
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   .then((res) => res.json())
   .then((data) => displayCategories(data.categories))
   .catch((error) => console.log(error));
};
// {
//     "category_id": "1001",
//     "category": "Music"
// }

// create display categories
const displayCategories =(categories)=>{
 const categoryContainer = document.getElementById("categories");

    categories.forEach((item) =>{
    console.log(item);
    //create a btn
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    //ad btn category container 
    categoryContainer.append(button);
  });

};


loadCategories();