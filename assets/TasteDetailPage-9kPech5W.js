import{u as p,r as l,a as w,j as e,L as o}from"./index-CM8zWmFB.js";const R=()=>{const{tasteName:i}=p(),[r,d]=l.useState([]),[c,n]=l.useState(null),[m,h]=l.useState(!0),{addToWishlist:u,removeFromWishlist:g,wishlistItems:t}=w(),N=async()=>{try{const s=await fetch(`http://localhost:5000/api/recipe?taste=${i}`),a=await s.json();s.ok?d(a.data):n(a.message)}catch(s){console.error(s),n("An error occurred while fetching recipes")}finally{h(!1)}};l.useEffect(()=>{N()},[i]);const f=s=>{t&&t.some(j=>j.id===s._id)?g(s._id):u({id:s._id,name:s.RecipeName,image:s.Images})},x=s=>t&&Array.isArray(t)&&t.some(a=>a.id===s);return m?e.jsx("div",{className:"loading",children:"Loading..."}):e.jsxs("div",{className:"taste-details-container",children:[e.jsx("h2",{className:"taste-details-heading",children:i.charAt(0).toUpperCase()+i.slice(1)}),c&&e.jsx("p",{className:"error-message",children:c}),e.jsx("div",{className:"taste-details-row",children:r.length>0?r.map(s=>e.jsxs("div",{className:"taste-details-card",children:[e.jsxs(o,{to:`/recipe/${s._id}`,className:"taste-details-link",children:[e.jsx("img",{src:s.Images,alt:s.RecipeName,className:"taste-details-card-img"}),e.jsx("h5",{className:"taste-details-card-title",children:s.RecipeName})]}),e.jsx(o,{to:`/recipe/${s._id}`,className:"taste-view-recipe-button",children:"View Recipe"}),e.jsx("button",{className:"wishlist-button",onClick:a=>{a.preventDefault(),f(s)},children:e.jsx("i",{className:`fas fa-heart ${x(s._id)?"red":""}`})})]},s._id)):e.jsx("p",{className:"no-recipes-message",children:"No recipes found for this taste."})})]})};export{R as default};