import React from 'react';

const Footer = () => {
  return (
    <div className='container mt-2'>
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
          <div style={{ flex: '0 0 23%', marginBottom: '1.5rem' }}>
            <h6 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>About Us</h6>
            <hr style={{ backgroundColor: '#ffc107', height: '2px', width: '60px', margin: '0.5rem auto' }} />
            <p style={{ marginTop: '1rem' }}>
              We are a passionate team dedicated to bringing you the best books across genres. Visit our store for a wide selection and excellent customer service.
            </p>
          </div>

          <div style={{ flex: '0 0 23%', marginBottom: '1.5rem' }}>
            <h6 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Customer Service</h6>
            <hr style={{ backgroundColor: '#ffc107', height: '2px', width: '60px', margin: '0.5rem auto' }} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Contact Us</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Order Tracking</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Return Policy</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Shipping Info</a></li>
            </ul>
          </div>

          <div style={{ flex: '0 0 23%', marginBottom: '1.5rem' }}>
            <h6 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Quick Links</h6>
            <hr style={{ backgroundColor: '#ffc107', height: '2px', width: '60px', margin: '0.5rem auto' }} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Best Sellers</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>New Arrivals</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Upcoming Releases</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Special Offers</a></li>
            </ul>
          </div>

          <div style={{ flex: '0 0 23%', marginBottom: '1.5rem' }}>
            <h6 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Follow Us</h6>
            <hr style={{ backgroundColor: '#ffc107', height: '2px', width: '60px', margin: '0.5rem auto' }} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Facebook</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Twitter</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>Instagram</a></li>
              <li style={{ margin: '0.5rem 0' }}><a href="#!" style={{ color: '#ffc107', textDecoration: 'none' }}>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Your Bookstore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
