import{u as y,r as c,a as R,j as s,L as f,b as w}from"./index-CM8zWmFB.js";/* empty css                       */const E=()=>{const{dietType:a="",subDietType:m=""}=y(),[p,g]=c.useState([]),[u,t]=c.useState(!0),[h,l]=c.useState(null),{wishlistItems:v,addToWishlist:x,removeFromWishlist:N}=R();c.useEffect(()=>{(async()=>{let i=m||a;if(!i||typeof i!="string"){l("Diet type is missing."),t(!1);return}const r={vegetarian:"veg",veg:"veg",nonvegetarian:"non-veg",nonveg:"non-veg",vegan:"vegan"};if(i=i.replace(/[-\s]/g,"").toLowerCase(),!r[i]){l("Unknown dietary type"),t(!1);return}try{t(!0);const n=`meals=${r[i]}`,o=await w.get(`http://localhost:5000/api/recipe?${n}`);console.log("API Response for Recipes:",o.data),o.data&&o.data.data?g(o.data.data):(g([]),console.log("No recipes found."))}catch(n){console.error("Error fetching recipes:",n),l(n.message)}finally{t(!1)}})()},[a,m]);const d=e=>v.some(i=>i.id===e),j=e=>{d(e._id)?N(e._id):x({id:e._id,name:e.RecipeName,image:e.Images})};return u?s.jsx("div",{children:"Loading..."}):h?s.jsxs("div",{children:["Error: ",h]}):s.jsxs("div",{className:"diet-detail-page",children:[s.jsxs("h1",{className:"diet-detail-title",children:[a.charAt(0).toUpperCase()+a.slice(1)," Recipes"]}),s.jsx("div",{className:"diet-recipe-grid",children:p.length===0?s.jsx("p",{className:"no-recipes-message",children:"No recipes found"}):p.map(e=>{const i=e.RecipeName||"Unknown Recipe";return s.jsxs("div",{className:"diet-recipe-card",children:[s.jsxs(f,{to:`/recipe/${e._id}`,className:"diet-recipe-card-link",children:[e.Images?s.jsx("img",{src:e.Images,alt:i,className:"diet-recipe-image"}):s.jsx("p",{className:"diet-recipe-no-image",children:"No image available"}),s.jsx("h3",{className:"diet-recipe-title",children:i})]}),s.jsx(f,{to:`/recipe/${e._id}`,className:"diet-view-recipe-button",children:"View Recipe"}),s.jsx("div",{className:`wishlist-icon ${d(e._id)?"active":""}`,onClick:r=>{r.stopPropagation(),j(e)},children:s.jsx("i",{className:`bi ${d(e._id)?"bi-heart-fill":"bi-heart"}`})})]},e._id)})})]})};export{E as default};
