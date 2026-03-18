import project1_img from '../assets/email.png'
import project2_img from '../assets/bmw.png'
import project3_img from '../assets/movies.png'
import project4_img from '../assets/shoping.png'
import project5_img from '../assets/zenviax.png'
import project6_img from '../assets/gig_engine.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Bank Loan Website",
        w_img:project6_img,
        w_desc:"A responsive banking web application that allows users to apply for loans online. Includes EMI calculator, eligibility check, and dynamic form validation. Built using HTML, CSS, JavaScript, and backend integration for handling user data securely.",
        w_tech:"HTML, CSS, JavaScript, Python/Flask, MySQL",
        w_features:[
            "Loan eligibility checker",
            "EMI calculator",
            "User-friendly UI",
            "Secure data handling"
        ]
    },
    {
        w_no:2,
        w_name:"Real-time Chat App",
        w_img:project5_img,
        w_desc:"A real-time messaging application that allows users to communicate instantly. Supports multiple users, live message updates, and responsive UI design.",
        w_tech:"JavaScript, Socket.io, Node.js / Flask-SocketIO",
        w_features:[
            "Real-time messaging",
            "Multiple users support",
            "Live updates without refresh",
            "Responsive design"
        ]
    },
    {
        w_no:3,
        w_name:"Shopping Site",
        w_img:project4_img,
        w_desc:"An e-commerce website with product listings, cart functionality, and checkout system. Designed with a modern UI and smooth navigation.",
        w_tech:"HTML, CSS, JavaScript",
        w_features:[
            "Add to cart functionality",
            "Product filtering",
            "Responsive layout",
            "User-friendly navigation"
        ]
    },
    {
        w_no:4,
        w_name:"Movies Website",
        w_img:project3_img,
        w_desc:"A movie browsing platform that displays trending movies, ratings, and details using external APIs. Provides an engaging UI for movie lovers.",
        w_tech:"JavaScript, API Integration, HTML, CSS",
        w_features:[
            "Fetch movies from API",
            "Search functionality",
            "Movie details view",
            "Responsive UI"
        ]
    },
    {
        w_no:5,
        w_name:"BMW Website Clone",
        w_img:project2_img,
        w_desc:"A pixel-perfect clone of the BMW official website focusing on UI/UX design, animations, and responsiveness.",
        w_tech:"HTML, CSS, JavaScript",
        w_features:[
            "Modern UI design",
            "Smooth animations",
            "Fully responsive",
            "Landing page clone"
        ]
    },
    {
        w_no:6,
        w_name:"Ethical Email Tracker",
        w_img:project1_img,
        w_desc:"A tracking system that monitors email opens and interactions for ethical marketing insights. Helps understand user engagement while maintaining privacy guidelines.",
        w_tech:"Python, Flask, SMTP, Tracking Pixel",
        w_features:[
            "Email open tracking",
            "Analytics dashboard",
            "Secure implementation",
            "Privacy-focused design"
        ]
    },
]

export default mywork_data;