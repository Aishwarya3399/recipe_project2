import{u as f,r as a,a as v,j as e,L as R,b as C}from"./index-CM8zWmFB.js";const W=()=>{const{cuisine:t}=f(),[c,n]=a.useState([]),[d,l]=a.useState(!0),[r,m]=a.useState(null),{wishlistItems:o,addToWishlist:u,removeFromWishlist:h}=v(),p=s=>s.trim().toLowerCase().replace(/\s+/g,""),g=async()=>{try{const s=p(t),i=await C.get(`http://localhost:5000/api/recipe?cuisine=${s}`);i.data&&i.data.data?n(i.data.data):n([]),l(!1)}catch{m("Failed to load recipes. Please try again later."),l(!1)}};a.useEffect(()=>{g()},[t]);const x=s=>{o.some(j=>j.id===s._id)?h(s._id):u({id:s._id,name:s.RecipeName,image:s.Images})},N=s=>o.some(i=>i.id===s);return d?e.jsx("div",{className:"cuisine-loading",children:"Loading..."}):r?e.jsx("div",{className:"cuisine-error",children:r}):c.length===0?e.jsx("div",{className:"cuisine-no-data",children:"No recipes found for this cuisine."}):e.jsxs("div",{className:"cuisine-detail-page",children:[e.jsx("h2",{className:"cuisine-title",children:t.replace(/-/g," ").toUpperCase()}),e.jsx("div",{className:"cuisine-details",children:c.map(s=>e.jsx("div",{className:"cuisine-recipe-card",children:e.jsx(R,{to:`/recipe/${s._id}`,className:"cuisine-recipe-link",children:e.jsxs("div",{className:"cuisine-recipe-content",children:[e.jsx("img",{src:s.Images?s.Images:"/images/default-recipe.jpg",alt:s.RecipeName,className:"cuisine-recipe-image"}),e.jsx("h5",{className:"cuisine-recipe-title",children:s.RecipeName}),e.jsx("div",{className:"view-recipe-button",children:"View Recipe"}),e.jsx("div",{className:`wishlist-heart-icon1 ${N(s._id)?"red":""}`,onClick:i=>{i.stopPropagation(),x(s)},children:"♥"})]})})},s._id||s.RecipeName))})]})};export{W as default};