export function createFooter() {
  return `
  <footer style="background-color:#f8f5f0; color:#2c2c2c; padding:60px 0; font-family:'Poppins', sans-serif; border-top:1px solid #e0dcd3;">
    <div class="container" style="max-width:1200px;">
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:30px;">
        
        <!-- Social Links -->
        <div style="flex:1; min-width:200px;">
          <h5 style="font-weight:600; color:#C97C5D; text-transform:uppercase; margin-bottom:20px;">Social Links</h5>
          <div style="display:flex; gap:15px; align-items:center; font-size:1.3rem;">
            <a href="#" style="color:#2c2c2c; text-decoration:none;"><i class="fab fa-facebook-f"></i></a>
            <a href="#" style="color:#2c2c2c; text-decoration:none;"><i class="fab fa-instagram"></i></a>
            <a href="#" style="color:#2c2c2c; text-decoration:none;"><i class="fab fa-twitter"></i></a>
          </div>
        </div>

        <!-- About & Contact Info -->
        <div style="flex:2; min-width:250px;">
  <div id="about-us">
    <h5 style="font-weight:600; color:#C97C5D; text-transform:uppercase; margin-bottom:15px;">About Us</h5>
    <p style="margin:0 0 15px 0; line-height:1.6; color:#2c2c2c;">
      At <strong>Nyara</strong>, we curate timeless and elegant apparel for men, women, and children, combining sophistication, comfort, and quality for modern lifestyles.
    </p>
  </div>

  <div id="contact-us">
    <h5 style="font-weight:600; color:#C97C5D; text-transform:uppercase; margin:20px 0 15px 0;">Contact Us</h5>
    <p style="margin:0 0 5px 0;"><strong>Address:</strong> Mumbai, India</p>
    <p style="margin:0 0 5px 0;"><strong>Email:</strong> info@nyara.com</p>
    <p style="margin:0;"><strong>Phone:</strong> +91 98765 43210</p>
  </div>
  </div>


        <!-- Contact Form -->
        <div style="flex:2; min-width:250px;">
          <h5 style="font-weight:600; color:#C97C5D; text-transform:uppercase; margin-bottom:20px;">Contact Form</h5>
          <form style="display:flex; gap:10px; flex-wrap:wrap;">
            <input type="text" class="form-control" placeholder="Name" 
                   style="border-radius:30px; border:1px solid #e0dcd3; background-color:#fff; color:#2c2c2c; padding:10px; flex:1 1 30%;">
            <input type="email" class="form-control" placeholder="Email" 
                   style="border-radius:30px; border:1px solid #e0dcd3; background-color:#fff; color:#2c2c2c; padding:10px; flex:1 1 30%;">
            <input type="tel" class="form-control" placeholder="Phone" 
                   style="border-radius:30px; border:1px solid #e0dcd3; background-color:#fff; color:#2c2c2c; padding:10px; flex:1 1 30%;">
            <button type="submit" class="btn" 
                    style="background-color:#C97C5D; color:#fff; border-radius:30px; flex:1 1 100%; padding:12px 0; font-weight:600;">Submit</button>
          </form>
        </div>

      </div>

      <!-- Copyright -->
      <div class="text-center mt-5" style="color:#A78C6D; font-size:0.9rem;">
        &copy; ${new Date().getFullYear()} Nyara. All rights reserved.
      </div>
    </div>
  </footer>
  `;
}
