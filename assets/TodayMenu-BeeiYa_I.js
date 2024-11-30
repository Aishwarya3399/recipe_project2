import{a as g,r as a,b as j,j as e,L as o}from"./index-CM8zWmFB.js";const y=()=>{const{addToWishlist:c,removeFromWishlist:r,wishlistItems:d}=g(),[n,m]=a.useState([]),[h,u]=a.useState(!0),[l,p]=a.useState(null);a.useEffect(()=>{j.get("http://localhost:5000/api/recipe?category=todays").then(s=>{m(s.data.data)}).catch(s=>{console.error("Error fetching today’s menu:",s),p("Failed to load today’s menu. Please try again.")}).finally(()=>{u(!1)})},[]);const i=s=>d.some(t=>t.id===s),x=s=>{i(s._id)?r(s._id):c({id:s._id,name:s.RecipeName,image:s.Images})};return e.jsxs("div",{className:"container1",children:[e.jsx("div",{className:"n1",children:e.jsx("h1",{children:"Today's Menu"})}),h?e.jsx("p",{className:"loading-message",children:"Loading today’s menu, please wait..."}):l?e.jsx("p",{className:"error-message",children:l}):e.jsx("div",{className:"menu",children:n.length===0?e.jsx("p",{children:"No items available for today’s menu."}):n.map(s=>e.jsxs("div",{className:"menu-item",children:[e.jsxs(o,{to:`/recipe/${s._id}`,className:"card-link",children:[e.jsx("img",{src:s.Images,alt:s.RecipeName,className:"menu-item-img"}),e.jsx("h2",{children:s.RecipeName}),e.jsx("p",{children:s.Description})," "]}),e.jsx("div",{className:`wishlist-icon ${i(s._id)?"active":""}`,onClick:t=>{t.stopPropagation(),x(s)},children:e.jsx("i",{className:`bi ${i(s._id)?"bi-heart-fill":"bi-heart"}`})}),e.jsx(o,{to:`/recipe/${s._id}`,className:"today-menu-view-button",children:"View Recipe"})]},s._id))})]})};export{y as default};