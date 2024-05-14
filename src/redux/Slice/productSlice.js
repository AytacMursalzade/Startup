// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   products: [],
//   searchQuery: "",
  
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//     setSelectedColor: (state, action) => {
//       state.setSelectedColor = action.payload;
//     }
    
//   },
// });

// export const { setProducts, setSearchQuery,setSelectedColor } = productSlice.actions;
// export const selectFilteredProducts = (state) => {
//   const { products, searchQuery} = state.products;
//   return products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
// };
// export default productSlice.reducer;
