import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '24px 0',
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="section-container" style={{ padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--brand-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>Z</div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}>Zavyo</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Features</a>
          <a href="#integrations" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Integrations</a>
          <a href="#security" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Security</a>
          <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Book Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
