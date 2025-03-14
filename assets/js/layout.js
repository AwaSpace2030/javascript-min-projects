//Header section
let header = document.getElementById("header");

header.innerHTML = `
    <!-- Top Bar -->
    <section class="top-bar">
        <p id="today-time"></p>
    </section>

    <!-- Navigation -->
    <section class="nav container">
        <div class="logo">
            <a href="index.html">
                <h1>👨‍💻 Awadh Aldeabi</h1>
            </a>
        </div>

        <ul class="right-nav">
            <li><a href="index.html" class="link">Home</a></li>
            <li>
                <a href="https://github.com/AwaSpace2030/javascript-min-projects" class="link" target="_blank">GitHub</a>
                <i class="ri-github-fill"></i>
            </li>
        </ul>
    </section>
`;

//footer section
let footer = document.getElementById("footer");
footer.innerHTML = `  <p>© All rights reserved to Awadh Aldeabi</p>`;
