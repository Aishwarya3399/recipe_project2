import{r as t,a as u,c as f,b as v,j as e,L as R}from"./index-CM8zWmFB.js";/* empty css                             */const k=()=>{const[r,n]=t.useState([]),[d,p]=t.useState(!0),{wishlistItems:h,addToWishlist:m,removeFromWishlist:g}=u(),N=f();t.useEffect(()=>{v.get("http://localhost:5000/api/recipe").then(s=>{n(s.data.data||[])}).catch(s=>{console.error("Error fetching recipes:",s)}).finally(()=>{p(!1)})},[]);const c=s=>h.some(a=>a.id===s),x=s=>{c(s._id)?g(s._id):m({id:s._id,name:s.RecipeName,image:s.Images})},l=(()=>{const s={};return r.forEach(a=>{const i=a.RecipeName.charAt(0).toUpperCase();s[i]||(s[i]=[]),s[i].push(a)}),s})(),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),j=s=>{N(`/recipe/${s}`)};return e.jsxs("div",{className:"all-recipes-container",children:[e.jsx("h1",{className:"all-recipes-heading",children:"All Recipes "}),e.jsx("div",{className:"alphabet-nav",children:o.map(s=>e.jsx("a",{href:`#${s}`,className:"alphabet-link",children:s},s))}),e.jsx("div",{className:"recipes-list",children:d?e.jsx("p",{className:"loading-message",children:"Loading recipes, please wait..."}):o.map(s=>e.jsxs("div",{id:s,className:"recipe-group",children:[e.jsx("h2",{className:"group-title",children:s}),e.jsx("div",{className:"all-recipes-row",children:l[s]&&l[s].length>0?l[s].map(a=>e.jsx("div",{className:"all-recipes-col",children:e.jsxs("div",{className:"all-recipes-card",onClick:()=>j(a._id),style:{cursor:"pointer"},children:[e.jsx("img",{src:a.Images,alt:a.RecipeName,className:"all-recipes-card-img"}),e.jsxs("div",{className:"all-recipes-card-body",children:[e.jsx("h5",{className:"all-recipes-card-title",children:a.RecipeName}),e.jsx(R,{to:`/recipe/${a._id}`,className:"all-view-recipe-button",onClick:i=>i.stopPropagation(),children:"View Recipe"}),e.jsx("div",{className:`wishlist-icon ${c(a._id)?"active":""}`,onClick:i=>{i.stopPropagation(),x(a)},children:e.jsx("i",{className:`bi ${c(a._id)?"bi-heart-fill":"bi-heart"}`})})]})]})},a._id)):e.jsxs("p",{className:"no-recipes",children:["No recipes found for ",s]})})]},s))})]})};export{k as default};
