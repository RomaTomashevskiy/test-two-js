
// export default class NewApiServes {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }
//     fetchApi() {
//         console.log(this)
//         return fetch(`https://pixabay.com/api/?key=27709698-8702f3c03ebf411985e528a26&q=${this.searchQuery}&per_page=10&page=${this.page}`)
//              .then(response => response.json()).then(data => {
//                 this.incrementPage() 
//                return data.hits
//             });
//      }
    
    
//     incrementPage() {
//         this.page += 1;
//     }
//     resetPage() {
//         this.page = 1;
//     }
    
//     get query(){
//         return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }

// }

// export default class NewApiService{

//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }


//     fetchArtic() {
//         const KEY = '27709698-8702f3c03ebf411985e528a26';
//         const params = new URLSearchParams({
//             q: this.searchQuery,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//             per_page: 5,
//             page: this.page
//         });

//         return fetch(`https://pixabay.com/api/?key=${KEY}&${params}`)
//             .then(response => response.json())
//             .then(data => {
//                 this.additionPage()
//                 return data.articles;
//             });
//     }

//     additionPage() {
//         this.page += 1;
//     }

//     resetPage() {
//         this.page = 1;
//     }


//     get query() {
//         return this.searchQuery;
//     };

//     set query(newQuery) {
//         this.searchQuery = newQuery
//     }
// };

