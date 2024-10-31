import React from 'react';

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedVenue, setSelectedVenue] = React.useState(null);
  const [countdown] = React.useState({
    days: 365,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  // Intersection Observer for scroll animations
  const observeElements = React.useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe sections
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      observer.observe(section);
    });
  }, []);

  React.useEffect(() => {
    setIsVisible(true);
    observeElements();
  }, [observeElements]);

  const venues = [
    { name: "Garden Paradise", capacity: 200, price: "\$5,000", image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Beach Resort", capacity: 150, price: "\$6,000", image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Historic Castle", capacity: 300, price: "\$8,000", image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ];

  const services = [
    { icon: "", name: "Catering", description: "Gourmet wedding menus" },
    { icon: "", name: "Floristry", description: "Custom floral arrangements" },
    { icon: "", name: "Entertainment", description: "Live bands & DJs" },
    { icon: "", name: "Photography", description: "Professional photo/video" }
  ];

  const testimonials = [
    {
      couple: "Sarah & John",
      image: "https://images.pexels.com/photos/28886580/pexels-photo-28886580/free-photo-of-young-woman-relaxing-on-park-bench-in-nigeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Our dream wedding came true!",
      rating: 5
    },
    {
      couple: "Emma & James",
      image: "https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Perfect organization and execution!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-md animate-slide-down">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif text-purple-800">Wedding Dreams</div>
            <div className="space-x-6">
              {['Home', 'Venues', 'Services', 'Packages', 'Contact'].map(item => (
                <button
                  key={item}
                  className="text-purple-600 hover:text-purple-800 transition-colors duration-300 hover:scale-110"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Countdown */}
      <header className={`pt-24 p-8 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <h1 className="text-6xl font-serif text-purple-800 mb-4 animate-bounce-in" style={{ fontFamily: 'Playfair Display, serif' }}>
          Forever Begins Here
        </h1>
        <p className="text-xl text-gray-600 italic mb-8">Create your perfect wedding day with us</p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(countdown).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-6"
            >
              <div className="text-3xl font-bold text-purple-600">{value}</div>
              <div className="text-sm text-gray-600 capitalize">{unit}</div>
            </div>
          ))}
        </div>

        {/* Heart Shape Animation */}
        <div className="heart-container">
          <div className="heart"></div>
          <div className="arrow"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Venue Carousel */}
        <section className="mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif text-purple-800 mb-8 text-center">Our Stunning Venues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                onClick={() => {
                  setSelectedVenue(venue);
                  setShowModal(true);
                }}
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-purple-800 mb-2">{venue.name}</h3>
                  <p className="text-gray-600">Capacity: {venue.capacity}</p>
                  <p className="text-purple-600 font-bold mt-2">{venue.price}</p>
                  <button
                    className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif text-purple-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map(service => (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:bg-purple-50"
              >
                <div className="text-4xl mb-4 animate-wiggle">{service.icon}</div>
                <h3 className="text-xl font-serif text-purple-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 animate-on-scroll">
          <h2 className="text-3xl font-serif text-purple-800 mb-8 text-center">Happy Couples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.couple}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.couple}
                  className="w-20 h-20 rounded-full border-4 border-purple-200 transition-transform duration-500 hover:rotate-6"
                />
                <div>
                  <div className="text-yellow-400 mb-2">{'⭐️'.repeat(testimonial.rating)}</div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <p className="text-purple-800 font-serif mt-2">{testimonial.couple}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-on-scroll">
          <h2 className="text-3xl font-serif text-purple-800 mb-6 text-center">Schedule Your Consultation</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <select className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300">
                <option>Select Venue</option>
                {venues.map(venue => (
                  <option key={venue.name}>{venue.name}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Tell us about your dream wedding"
              rows="4"
              className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            ></textarea>
            <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
              Send Request
            </button>
          </form>
        </section>
      </main>

      {/* Modal */}
      {showModal && selectedVenue && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-4 animate-pop-up" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-serif text-purple-800 mb-4">{selectedVenue.name} Details</h3>
            <img src="https://via.placeholder.com/600x400" alt="Venue" className="rounded-lg mb-4" />
            <p className="text-gray-600 mb-4">
              Experience the wedding of your dreams in our stunning {selectedVenue.name.toLowerCase()}.
              Complete with beautiful gardens, elegant interiors, and state-of-the-art facilities.
            </p>
            <button
              className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 mt-16 animate-slide-up">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <p>📞 (123) 456-7890</p>
            <p>📧 info@weddingdreams.com</p>
            <p>📍 123 Wedding Lane, Romance City</p>
          </div>
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300 transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-purple-300 transition-colors duration-300">Pinterest</a>
              <a href="#" className="hover:text-purple-300 transition-colors duration-300">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;