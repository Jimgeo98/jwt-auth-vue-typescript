import{a as l,b as _,c as m,n as o,p as u,m as p,h as a,o as x,e as h,f as e,t as g,q as f,l as n}from"./index.690d361d.js";const y={key:0,class:"mt-28 animate__animated animate__zoomIn"},v={class:"flex items-center justify-center"},b={class:"bg-slate-700 rounded-xl m-16 border"},k={class:"flex flex-col p-10 px-16 space-y-6 items-center text-center"},B={class:"font-light md:text-6xl text-5xl text-white tracking-wide"},I=n(" Welcome "),w=n(" !! "),N=e("p",{class:"text-gray-400 md:text-2xl text-xl px-18"}," You are logged In !! Only Logged Users can watch this page. ",-1),T={setup(V){const c=l("You are not logged in!"),s=_(),r=m(),i=o(()=>s.isLoggedIn),d=o(()=>s.userInfo);return u(()=>{p.get("/dashboard").then(t=>{c.value=t.data.message}).catch(t=>{console.log(t),r.error(`${t.response.data.message}`,{timeout:3e3,position:"top-center",icon:!0})})}),(t,L)=>a(i)?(x(),h("div",y,[e("div",v,[e("div",b,[e("div",k,[e("h1",B,[I,e("span",null,g(a(d).name),1),w]),N])])])])):f("",!0)}};export{T as default};
