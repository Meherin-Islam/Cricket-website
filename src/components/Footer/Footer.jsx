const Footer = () => {
    return (
        <div >

   

  <div className="relative py-16 mb-20">
  <img src="assets/bg-shadow.png" alt="Background" className="absolute inset-0 w-3/4 mx-auto rounded-xl h-[336px] object-cover opacity-70" />
  <div className="relative max-w-2xl mx-auto h-[190px] text-center  rounded-lg  p-10">
    <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
    <p className="text-gray-700 text-xl mb-6">Get the latest updates and news right in your inbox!</p>
    <div className="form-control">
      <div className="input-group flex mx-auto">
        <input type="email" placeholder="Enter your email" className="input input-bordered w-[360px] mr-4 " />
        <button className="btn btn-primary bg-gradient-to-r from-pink-500 to-yellow-500 text-black text-sm rounded-xl border-none">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

<footer className="bg-gray-900 text-gray-300 py-10">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
   
    <div>
      <img src="assets/logo-footer.png" alt="Cricket Logo" className="mx-auto md:mx-0 h-20 mb-4" />
      <p className="text-sm">We are a passionate team dedicated to providing the best services to our customers.</p>
    </div>
                        
  
    <div>
      <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
      <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
      <div className="form-control">
        <div className="input-group">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
          <button className="btn btn-primary bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
  
  
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
    &copy; 2024 Your Company. All Rights Reserved.
  </div>
</footer>


        </div>
    );
};

export default Footer;