export function createNavbar(activePage) {
  return `
  <nav class="navbar navbar-expand-lg shadow-sm py-3" style="background-color:#f8f5f0;">
    <div class="container" style="max-width:1200px;">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img 
          src="https://cdn.shopify.com/s/files/1/0593/5389/1000/files/IMG_1081_0fa1df0b-1a4b-496b-8155-78ec6ede2b00_480x480.png?v=1641290689" 
          alt="Nyara" 
          height="70" 
          class="me-2"
          style="border-radius:8px;"
        >
      </a>

      <!-- Mobile toggle -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style="border-color:#C97C5D;">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto" style="gap: 1.5rem;">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${activePage==='men'?'active':''}" href="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown"
               style="font-family:'Poppins', sans-serif; font-weight:500; color:#2c2c2c;">
              Categories
            </a>
            <ul class="dropdown-menu border-0 shadow-sm" aria-labelledby="categoryDropdown" style="border-radius:10px;">
              <li><a class="dropdown-item" href="index.html" style="color:#2c2c2c;">Men's</a></li>
              <li><a class="dropdown-item" href="womens.html" style="color:#2c2c2c;">Women's</a></li>
              <li><a class="dropdown-item" href="childrens.html" style="color:#2c2c2c;">Children's</a></li>
            </ul>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#about-us" style="font-family:'Poppins', sans-serif; font-weight:500; color:#2c2c2c;">About Us</a></li>
          <li class="nav-item">
          <a class="nav-link" href="#contact-us" style="font-family:'Poppins', sans-serif; font-weight:500; color:#2c2c2c;">Contact</a></li>
        </ul>

        <!-- Search bar -->
        <form class="d-flex align-items-center" role="search">
          <input class="form-control me-2 shadow-sm" 
                 type="search" 
                 placeholder="Search..." 
                 aria-label="Search"
                 style="border-radius:30px; border:1px solid #E0DCD3; background-color:#fff; width:200px; padding:6px 12px;">
          <button class="btn shadow-sm" type="submit" 
                  style="background-color:#C97C5D; color:#fff; border-radius:30px; padding:6px 20px; border:none;">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  `;
}
