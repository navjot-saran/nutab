(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7959:function(e,t,s){Promise.resolve().then(s.bind(s,8095))},8095:function(e,t,s){"use strict";let n,a,i,r;s.r(t),s.d(t,{default:function(){return M}});var o=s(7437),c=s(2265);s(8460);var l=()=>((0,c.useEffect)(()=>{let e=setTimeout(()=>{document.body.classList.add("loaded")},3e3);return()=>clearTimeout(e)},[]),(0,o.jsxs)("div",{id:"loader-wrapper",children:[(0,o.jsx)("div",{id:"loader"}),(0,o.jsx)("div",{className:"loader-section section-left"}),(0,o.jsx)("div",{className:"loader-section section-right"})]})),u=s(7776);s(5838);var d=s(9582);let m={angleX:0,angleY:0},h=!1,v=50,p={x:0,y:0},g=Array(1e4).fill(null).map(()=>({theta:Math.random()*Math.PI*2,phi:Math.acos(2*Math.random()-1)})),x=(e,t)=>{let s=!1;return function(){for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];s||(e.apply(this,a),s=!0,setTimeout(()=>{s=!1},t))}};var f=e=>{let{currentSection:t}=e,s=(0,c.useRef)(null),[l,f]=(0,c.useState)(!1),j=(0,c.useRef)(0),b=(0,c.useRef)(1),[w,N]=(0,c.useState)(!1),y=(0,c.useRef)(null),E=(0,c.useRef)(!1),k=(0,c.useRef)(t),M=(0,c.useRef)(new u.cPb(75,window.innerWidth/window.innerHeight,.1,1e3)).current,L=()=>{n=new u.xsS,(M=new u.cPb(75,window.innerWidth/window.innerHeight,.1,1e3)).position.z=l?85:50,(a=new u.CP7({canvas:s.current,alpha:!0})).setSize(window.innerWidth,window.innerHeight)},S=()=>{let e=new u.u9r,t=[],s=[];for(let e=0;e<1e4;e++){let e=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),a=30*Math.sin(n)*Math.cos(e),i=30*Math.sin(n)*Math.sin(e),r=30*Math.cos(n);t.push(a,i,r),s.push(.5,.5,.5)}e.setAttribute("position",new u.a$l(t,3)),e.setAttribute("color",new u.a$l(s,3));let a=new u.UY4({vertexColors:!0,size:.25});i=new u.woe(e,a),n.add(i)},C=e=>{h=!0,N(!0),p.x=e.clientX,p.y=e.clientY,document.addEventListener("mousemove",Y),document.addEventListener("mouseup",T)},Y=e=>{if(!h)return;let t=e.clientX-p.x,s=e.clientY-p.y;m.angleX+=.005*t,m.angleY-=.005*s,p.x=e.clientX,p.y=e.clientY},T=()=>{h=!1,N(!1),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",T)},A=e=>{if(2===t){e.deltaY,y.current&&y.current.kill(),y.current=d.p8.timeline();let t=j.current+2*b.current;t>=20?(t=20,b.current=-1):t<=0&&(t=0,b.current=1);let s=m.angleY+.4;y.current.to(j,{current:t,duration:1.5,ease:"power2.out"}).to(m,{angleY:s,duration:2.5,ease:"power2.out"},"<")}},D=e=>{1===e.touches.length&&e.touches[0].clientY},P=e=>{if(e.touches[0].clientY,2===t){y.current&&y.current.kill(),y.current=d.p8.timeline();let e=j.current+2*b.current;e>=20?(e=20,b.current=-1):e<=0&&(e=0,b.current=1);let t=m.angleY+.4;y.current.to(j,{current:e,duration:1.5,ease:"power2.out"}).to(m,{angleY:t,duration:2.5,ease:"power2.out"},"<")}},q=()=>{document.addEventListener("mousedown",C)},W=()=>{let e=i.geometry.attributes.position.array,t=i.geometry.attributes.color.array;for(let s=0;s<e.length;s+=3){let{theta:n,phi:a}=g[s/3];e[s],e[s+1],e[s+2];let i=20+5*Math.sin(j.current*a+n);e[s]=i*Math.sin(a)*Math.cos(n),e[s+1]=i*Math.sin(a)*Math.sin(n),e[s+2]=i*Math.cos(a);let r=(Math.sqrt(e[s]**2+e[s+1]**2+e[s+2]**2)- -30)/60,o=new u.Ilk;o.setHSL(.7*r,1,.4),t[s]=o.r,t[s+1]=o.g,t[s+2]=o.b}i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.color.needsUpdate=!0},I=()=>{M.position.x=v*Math.sin(m.angleX),M.position.y=v*Math.sin(m.angleY),M.position.z=v*Math.cos(m.angleX)*Math.cos(m.angleY),M.lookAt(0,0,0)},F=e=>{window.removeEventListener("resize",e),document.removeEventListener("mousedown",C),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",T),a&&a.dispose()};(0,c.useEffect)(()=>{L(),S(),q(),_()},[]),(0,c.useEffect)(()=>{r=l?2===t?170:85:1===t?29:2===t?60:50,d.p8.to({value:v},{value:r,duration:1,ease:"expo.inOut",onUpdate:function(){v=this.targets()[0].value,M.position.x=v*Math.sin(m.angleX),M.position.y=v*Math.sin(m.angleY),M.position.z=v*Math.cos(m.angleX)*Math.cos(m.angleY),M.lookAt(0,0,0)}})},[l,t]),(0,c.useEffect)(()=>{k.current=t},[t]),(0,c.useEffect)(()=>{E.current=w},[w]);let X=()=>{E.current||2==k.current?!E.current&&(m.angleX+=.002,m.angleY+=.002,j.current+=.007*b.current,(j.current>=20||j.current<=0)&&(b.current*=-1)):(m.angleX+=.0047,m.angleY+=.0047,j.current+=.02*b.current,(j.current>=20||j.current<=0)&&(b.current*=-1)),requestAnimationFrame(X)};(0,c.useEffect)(()=>{requestAnimationFrame(X)},[]),(0,c.useEffect)(()=>{let e=x(e=>{A(e)},100),s=x(e=>{D(e),P(e)},100);return 2===t&&(document.addEventListener("wheel",e),document.addEventListener("touchmove",s,{passive:!1})),()=>{document.removeEventListener("wheel",e),document.removeEventListener("touchmove",s)}},[t]),(0,c.useEffect)(()=>{window.addEventListener("resize",_);let e=()=>{requestAnimationFrame(e),W(),I(),a.render(n,M)};return e(),()=>F(_)},[]);let _=x(()=>{f(window.innerWidth<600);let e=window.innerWidth,t=window.innerHeight;a.setSize(e,t),M.aspect=e/t,M.updateProjectionMatrix()},100);return(0,o.jsx)("div",{className:"model-container",style:{transform:"translateX(".concat(l&&2==t?"-32%":l||1==t?"0%":"left"==(t%2==0?"left":"right")?"-50%":"50%",")")},children:(0,o.jsx)("canvas",{ref:s,className:"fixed inset-0 z-1 top-5"})})};s(845);var j=e=>{let{currentSection:t}=e,s=e=>"nav-link ".concat(t===e?"active":""),[n,a]=(0,c.useState)(!1),i=e=>{let t=document.getElementById(e);t&&(window.dispatchEvent(new Event("smooth-scroll-start")),t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{window.dispatchEvent(new Event("smooth-scroll-end"))},1e3))};return(0,c.useEffect)(()=>{let e=document.querySelector(".menu"),t=document.querySelector(".close"),s=document.querySelector(".mob-right-nav");if(e&&t&&s)return e.addEventListener("click",()=>a(!0)),t.addEventListener("click",()=>a(!1)),()=>{e.removeEventListener("click",()=>a(!0)),t.removeEventListener("click",()=>a(!1))}},[]),(0,o.jsxs)("header",{className:"header",children:[(0,o.jsxs)("div",{className:"header-container",children:[(0,o.jsx)("div",{className:"logo",children:(0,o.jsxs)("a",{onClick:()=>i("tagline"),children:[(0,o.jsx)("img",{src:"/icons/logo-light.svg",alt:"New Tab Digital Light Logo",className:"logo-light"}),(0,o.jsx)("img",{src:"/icons/logo-dark.svg",alt:"New Tab Digital Dark Logo",className:"logo-dark"})]})}),(0,o.jsxs)("nav",{className:"nav-links",children:[(0,o.jsx)("button",{className:s(1),onClick:()=>i("about"),children:"About"}),(0,o.jsx)("button",{className:s(2),onClick:()=>i("services"),children:"Services"}),(0,o.jsx)("button",{className:s(3),onClick:()=>i("team"),children:"Our Team"}),(0,o.jsx)("button",{className:"start-project-btn",onClick:()=>i("contact"),children:"Start a Project"})]}),(0,o.jsx)("img",{src:"../icons/menu.svg",className:"menu",alt:"menu"})]}),(0,o.jsxs)("nav",{className:"mob-right-nav ".concat(n?"open-nav":""),children:[(0,o.jsx)("img",{src:"../icons/close.svg",className:"close",alt:"close"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#about",onClick:e=>{e.preventDefault(),i("about")},children:"About"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#services",onClick:e=>{e.preventDefault(),i("services")},children:"Services"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#team",onClick:e=>{e.preventDefault(),i("team")},children:"Our Team"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"start-project-li",href:"#contact",onClick:e=>{e.preventDefault(),i("contact")},children:"Start A Project"})})]})]})]})};s(4149);var b=()=>{let e=e=>{let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})};return(0,o.jsx)("section",{className:"tagline-section",children:(0,o.jsxs)("div",{className:"tagline-container",children:[(0,o.jsxs)("h2",{className:"tagline-title",children:["Open New Possibilities with NuTab",(0,o.jsx)("sup",{children:"+"})]}),(0,o.jsx)("p",{className:"tagline-description",children:"Empowering businesses with innovative software solutions that drive growth and transform ideas into reality. From web development to digital transformation, we build the tools that shape the future. Evolving with you—because your ideas deserve dynamic, scalable solutions."}),(0,o.jsx)("div",{className:"tag-buttons",children:(0,o.jsx)("button",{className:"learn-more-button",onClick:()=>e("about"),children:"Learn More"})})]})})};s(9313);var w=e=>{let{currentSection:t}=e,s=()=>{window.dispatchEvent(new CustomEvent("about-hover",{detail:{isHovering:!0}}))},n=()=>{window.dispatchEvent(new CustomEvent("about-hover",{detail:{isHovering:!1}}))};return(0,o.jsx)("section",{className:"about-section",children:(0,o.jsxs)("div",{className:"about-container",children:[(0,o.jsxs)("p",{onMouseEnter:s,onMouseLeave:n,className:"about-description",children:["At ",(0,o.jsx)("strong",{children:"NuTab"}),(0,o.jsx)("sup",{children:"+"}),", we see every project as an opportunity to innovate and exceed expectations"]}),(0,o.jsx)("p",{onMouseEnter:s,onMouseLeave:n,className:"about-description",children:"High-quality software that drives client success through expertise, reliability, and efficiency"}),(0,o.jsx)("p",{onMouseEnter:s,onMouseLeave:n,className:"about-description",children:"Custom solutions that connect businesses with technology designed to grow with them"})]})})};s(8850);var N=()=>(0,o.jsx)("div",{className:"services-container",children:[{label:"Software",title:"Custom Software, Made Simple",className:"software",text:"Need a smarter way to get things done? We create personalized software that solves your problems and makes your work easier. Whether it’s automating tasks or creating tools to fit your unique needs, we’ll deliver a solution that’s built just for you. Let’s build software that truly works for you!",iconPath:"/icons/softdev.svg"},{label:"Web",title:"Web & App Development, Built for You",className:"web",text:"Bring your ideas to life with a custom website or web app designed just for you. We craft modern, responsive platforms that are easy to use and built to make an impact. Whether it’s a website or a web app, let’s create something that works beautifully and stands out!",iconPath:"/icons/webdev.svg"},{label:"Mobile",title:"Mobile Apps That Work for You",className:"mobile",text:"Turn your ideas into powerful mobile apps that connect with your users. We create sleek, easy-to-use apps designed to fit your needs perfectly. Let’s build an app that makes life simpler and delivers real results!",iconPath:"/icons/mobiledev.svg"},{label:"Cloud",title:"Cloud Development, Scalable & Secure",className:"cloud",text:"Take your business to the next level with cloud solutions that grow with you. We build secure, flexible cloud applications that are easy to scale and manage. Let’s create a system that supports your future growth!",iconPath:"/icons/clouddev.svg"}].map((e,t)=>(0,o.jsx)("div",{className:"service-card ".concat(e.className),children:(0,o.jsxs)("div",{className:"card-rows",children:[(0,o.jsx)("h1",{className:"service-title",children:e.title}),(0,o.jsx)("img",{src:e.iconPath,alt:"".concat(e.label," Icon"),className:"service-icon"}),(0,o.jsx)("p",{className:"service-text",children:e.text})]})},t))});s(4714);var y=e=>{let{currentSection:t}=e;return(0,o.jsxs)("section",{className:"team-section",children:[(0,o.jsx)("h2",{className:"team-header",children:"Our Team"}),(0,o.jsxs)("div",{className:"grid-container",children:[(0,o.jsxs)("div",{className:"team-member",children:[(0,o.jsx)("div",{className:"photo",style:{backgroundImage:'url("/photos/nav-headshot.png")'}}),(0,o.jsx)("p",{className:"team-name",children:"Navjot Saran"}),(0,o.jsx)("p",{className:"team-role",children:(0,o.jsx)("strong",{children:"Co-Founder"})}),(0,o.jsx)("p",{className:"team-description",children:"Software Developer"}),(0,o.jsx)("p",{className:"team-description",children:"University of Calgary Computer Science"})]}),(0,o.jsxs)("div",{className:"team-member",children:[(0,o.jsx)("div",{className:"photo",style:{backgroundImage:'url("/photos/fysal-headshot.png")'}}),(0,o.jsx)("p",{className:"team-name",children:"Fysal Beauferris"}),(0,o.jsx)("p",{className:"team-role",children:(0,o.jsx)("strong",{children:"Co-Founder"})}),(0,o.jsx)("p",{className:"team-description",children:"Software Developer"}),(0,o.jsx)("p",{className:"team-description",children:"University of Calgary Computer Science"})]})]})]})};s(101);var E=()=>(0,o.jsxs)("section",{className:"contact-container",children:[(0,o.jsx)("h2",{children:"Contact Us"}),(0,o.jsxs)("form",{action:"https://formsubmit.co/7757f614a3d5884564ea3b58f465f7b1",method:"POST",className:"contact-form",children:[(0,o.jsx)("input",{type:"text",name:"_honey",style:{display:"none"}}),(0,o.jsx)("input",{type:"hidden",name:"_captcha",value:"true"}),(0,o.jsx)("input",{type:"hidden",name:"_autoresponse",value:"Hello,  Thank you for reaching out to Nutab Digital! We’ve received your message and are excited to connect with you. One of our team members will review your inquiry and get back to you within 1-2 business days.  If you have any urgent questions, please don’t hesitate to reach out at nutabdigital@gmail.com.  Best regards, The Nutab Digital Team Nutab Digital"}),(0,o.jsx)("input",{type:"hidden",name:"_subject",value:"New submission!"}),(0,o.jsx)("input",{type:"hidden",name:"_template",value:"table"}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,o.jsx)("input",{type:"text",name:"name",id:"name",required:!0})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,o.jsx)("input",{type:"email",name:"email",id:"email",required:!0})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,o.jsx)("textarea",{name:"message",id:"message",required:!0})]}),(0,o.jsx)("button",{type:"submit",className:"submit-button",children:"Send"})]})]});s(1467);var k=()=>(0,o.jsx)("footer",{className:"footer-container",children:(0,o.jsx)("div",{className:"footer-content",children:(0,o.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," NuTab Digital. All rights reserved."]})})});s(7072);var M=()=>{let[e,t]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let e=document.querySelectorAll(".page-section"),s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(t(parseInt(e.target.getAttribute("data-section")||"0")),e.target.classList.add("visible")):e.target.classList.remove("visible")})},{threshold:.2});return e.forEach(e=>s.observe(e)),()=>s.disconnect()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{currentSection:e}),(0,o.jsx)(l,{}),(0,o.jsx)("div",{className:"background-cloudy"}),(0,o.jsxs)("main",{className:"home-page",children:[(0,o.jsx)(f,{currentSection:e}),(0,o.jsxs)("div",{className:"content-wrapper",children:[(0,o.jsx)("section",{id:"tagline",className:"page-section fade-section align-right","data-section":"0",children:(0,o.jsx)(b,{})}),(0,o.jsx)("section",{id:"about",className:"page-section fade-section align-left","data-section":"1",children:(0,o.jsx)(w,{currentSection:e})}),(0,o.jsx)("section",{id:"services",className:"page-section fade-section","data-section":"2",children:(0,o.jsx)(N,{})}),(0,o.jsx)("section",{id:"team",className:"page-section fade-section align-left","data-section":"3",children:(0,o.jsx)(y,{currentSection:e})}),(0,o.jsx)("section",{id:"contact",className:"page-section fade-section align-right","data-section":"4",children:(0,o.jsx)(E,{})})]}),(0,o.jsx)(k,{})]})]})}},9313:function(){},5838:function(){},101:function(){},1467:function(){},845:function(){},8460:function(){},8850:function(){},4149:function(){},4714:function(){},7072:function(){}},function(e){e.O(0,[925,689,922,582,971,23,744],function(){return e(e.s=7959)}),_N_E=e.O()}]);