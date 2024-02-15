// Course data
var courseData = {
    "#html_css": [
      {
        title: "HTML and CSS Fundamentals",
        subtitle: "Basic HTML Tags and Elements",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 50
      },
      {
        title: "Advanced CSS Techniques",
        subtitle: "Selectors, Flexbox, Grid",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 30
      },
      {
        title: "Responsive Web Design",
        subtitle: "Media Queries and Layouts",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 70
      },
      {
        title: "CSS Animations and Transitions",
        subtitle: "Keyframes and Effects",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 40
      },
      {
        title: "SASS and SCSS Fundamentals",
        subtitle: "Syntactically Awesome Stylesheets",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 60
      },
      {
        title: "CSS Frameworks",
        subtitle: "Bootstrap, Foundation, Bulma",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 20
      },
    ],
    "#javascript": [
      {
        title: "JavaScript Basics",
        subtitle: "Variables, Data Types, Operators",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 60
      },
      {
        title: "Control Flow and Loops",
        subtitle: "Conditional Statements, Loops",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 40
      },
      {
        title: "Functions and Scope",
        subtitle: "Function Declaration, Function Expression",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 70
      },
      {
        title: "Arrays and Objects",
        subtitle: "Array Methods, Object Literals",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 50
      },
      {
        title: "DOM Manipulation",
        subtitle: "Document Object Model",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 30
      },
      {
        title: "Event Handling",
        subtitle: "Event Listeners, Event Objects",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 80
      },
    ],
    "#frontend_frameworks": [
      {
        title: "Introduction to React.js",
        subtitle: "Components, State, Props",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 70
      },
      {
        title: "Angular Basics",
        subtitle: "Modules, Components, Directives",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 50
      },
      {
        title: "Vue.js Fundamentals",
        subtitle: "Vue Instance, Templates, Components",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 60
      },
      {
        title: "React State Management",
        subtitle: "Redux, Context API",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 40
      },
      {
        title: "Angular Advanced Topics",
        subtitle: "Services, Routing, Forms",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 80
      },
      {
        title: "Vue.js Advanced Techniques",
        subtitle: "Vuex, Routing, Composition API",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 90
      },
    ],
    "#backend_development": [
      {
        title: "Introduction to Node.js",
        subtitle: "Node.js Fundamentals",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 60
      },
      {
        title: "Express.js Basics",
        subtitle: "Routing, Middleware",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 40
      },
      {
        title: "Working with MongoDB",
        subtitle: "CRUD Operations, Mongoose",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 70
      },
      {
        title: "Authentication and Authorization",
        subtitle: "Passport.js, JWT",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 50
      },
      {
        title: "RESTful API Development",
        subtitle: "API Design, Best Practices",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 80
      },
      {
        title: "Real-time Communication with Socket.io",
        subtitle: "WebSockets, Chat Applications",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 30
      },
    ],
    "#full_stack": [
      {
        title: "Full-Stack Development",
        subtitle: "Introduction to Full-Stack Development",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 15
      },
      {
        title: "Backend Development",
        subtitle: "Server-side Programming with Node.js",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 25
      },
      {
        title: "Frontend Development",
        subtitle: "Building Interactive User Interfaces with React",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 10
      },
      {
        title: "Database Management",
        subtitle: "SQL and NoSQL Databases",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 20
      },
      {
        title: "Deployment and DevOps",
        subtitle: "Continuous Integration and Deployment",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 5
      },
    ],
    "#web_design": [
      {
        title: "Web Design Principles",
        subtitle: "Introduction to Web Design",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 10
      },
      {
        title: "UI/UX Design Fundamentals",
        subtitle: "User Interface and User Experience Design",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 20
      },
      {
        title: "Color Theory and Typography",
        subtitle: "Choosing Colors and Fonts for Web Design",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 15
      },
      {
        title: "Responsive Design",
        subtitle: "Designing for Different Screen Sizes",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 5
      },
      {
        title: "Design Tools and Software",
        subtitle: "Photoshop, Sketch, Figma, etc.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        progress: 10
      },
    ]

    // Add more course categories here...
  };
  
  // Function to generate course cards
  function generateCourseCards(courseData) {
    var container = document.getElementById("course-container");
    container.innerHTML = "";
  
    courseData.forEach(function (course) {
      var card = document.createElement("div");
      card.classList.add("card", "course-card");
  
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = course.title;
  
      var subtitle = document.createElement("h6");
      subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
      subtitle.textContent = course.subtitle;
  
      var embedContainer = document.createElement("div");
      embedContainer.classList.add("embed-responsive", "embed-responsive-16by9");
  
      var embed = document.createElement("iframe");
      embed.classList.add("embed-responsive-item");
      embed.setAttribute("src", course.videoUrl);
      embed.setAttribute("allowfullscreen", "");
  
      var progressDiv = document.createElement("div");
      progressDiv.classList.add("progress", "mt-3");
  
      var progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar", "bg-success");
      progressBar.setAttribute("role", "progressbar");
      progressBar.setAttribute("style", "width: " + course.progress + "%;");
      progressBar.setAttribute("aria-valuenow", course.progress);
      progressBar.setAttribute("aria-valuemin", "0");
      progressBar.setAttribute("aria-valuemax", "100");
      progressBar.textContent = course.progress + "% Complete";
  
      progressDiv.appendChild(progressBar);
      embedContainer.appendChild(embed);
      cardBody.appendChild(title);
      cardBody.appendChild(subtitle);
      cardBody.appendChild(embedContainer);
      cardBody.appendChild(progressDiv);
      card.appendChild(cardBody);
      container.appendChild(card);
    });
  }
  
  // Function to update main content based on sidebar link clicked
  function updateMainContent(linkId) {
    var courses = courseData[linkId];
    generateCourseCards(courses);
  }
  
  // Add event listener to sidebar links
  var sidebarLinks = document.querySelectorAll("#sidebar a");
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var linkId = this.getAttribute("href");
      updateMainContent(linkId);
    });
  });
  
  // Initial content load
  updateMainContent("#html_css");
  