import React from 'react'



const Navbar=()=> {
  

 
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Daily-Updates</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
      <li class="nav-item"><a class="nav-link" href="/business">Business</a></li>
      <li class="nav-item"><a class="nav-link" href="/entertainment">Entertainment</a></li>
      <li class="nav-item"><a class="nav-link" href="/general">General</a></li>
      <li class="nav-item"><a class="nav-link" href="/health">Health</a></li>
      <li class="nav-item"><a class="nav-link" href="/science">Science</a></li>
      <li class="nav-item"><a class="nav-link" href="/sports">Sports</a></li>
      <li class="nav-item"><a class="nav-link" href="/technology">Technology</a></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
export default Navbar;
