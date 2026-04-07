# Zavyo-Style SaaS Hero Section Specification

## Project Overview
- **Project name**: Zavyo SaaS Hero
- **Type**: Single-page hero section (HTML/CSS/JS)
- **Core functionality**: Modern dark-themed hero section with glassmorphism, neon accents, and animated elements
- **Target users**: SaaS landing pages targeting WhatsApp business solutions

## UI/UX Specification

### Layout Structure
- **Container**: Full-width, min-height 100vh
- **Grid**: 2-column on desktop (50/50 split), stacked on mobile
- **Responsive breakpoints**:
  - Mobile: < 768px (single column, stacked)
  - Tablet: 768px - 1024px (adjusted spacing)
  - Desktop: > 1024px (full 2-column)

### Visual Design

#### Color Palette
- **Background**: 
  - Primary: `#0a0a0a` (deep black)
  - Secondary: `#0d0d0d` (slightly lighter black)
  - Gradient: radial from `#0a0a0a` to `#050505`
- **Accent**:
  - Neon green: `#00ff88` (primary)
  - Green glow: `rgba(0, 255, 136, 0.3)`
  - Green dark: `#00cc6a`
- **Text**:
  - Heading: `#ffffff`
  - Subheading: `#a0a0a0` (soft gray)
  - Muted: `#666666`
- **Glass**: 
  - Background: `rgba(255, 255, 255, 0.03)`
  - Border: `rgba(255, 255, 255, 0.08)`
  - Blur: 20px

#### Typography
- **Font family**: "Outfit" (Google Fonts) - modern geometric sans-serif
- **Badge**: 12px, uppercase, letter-spacing 2px
- **Heading**: 
  - Desktop: 56px, font-weight 700
  - Mobile: 36px
  - Line-height: 1.1
- **Subheading**: 18px, font-weight 400, line-height 1.6

#### Spacing System
- **Section padding**: 80px horizontal (desktop), 24px (mobile)
- **Content gap**: 48px
- **Button gap**: 16px

### Components

#### Left Column
1. **Badge**
   - Text: "VERSION 1.0 LIVE"
   - Background: rgba(0, 255, 136, 0.1)
   - Border: 1px solid rgba(0, 255, 136, 0.3)
   - Padding: 8px 16px
   - Border-radius: 20px
   - Green glow effect (box-shadow)

2. **Heading**
   - Text: "Turn WhatsApp Into Your Primary High-ROI Revenue Channel"
   - "WhatsApp" and "High-ROI" highlighted with neon green gradient
   - Gradient: linear-gradient(90deg, #00ff88, #00cc6a)

3. **Subheading**
   - Text: "Automate conversations, boost response rates, and close more deals — all from one powerful dashboard built for modern businesses."
   - Color: #a0a0a0

4. **CTA Buttons**
   - Primary button:
     - Text: "Start Free Trial"
     - Background: linear-gradient(135deg, #00ff88, #00cc6a)
     - Color: #0a0a0a
     - Padding: 16px 32px
     - Border-radius: 12px
     - Glow effect on hover
     - Hover: scale(1.02), enhanced glow
   - Secondary button:
     - Text: "View Demo"
     - Background: transparent
     - Border: 1px solid rgba(255, 255, 255, 0.2)
     - Color: #ffffff
     - Padding: 16px 32px
     - Border-radius: 12px
     - Glassmorphism effect
     - Hover: border color changes to #00ff88

#### Right Column
1. **Glassmorphism Card**
   - Background: rgba(255, 255, 255, 0.03)
   - Border: 1px solid rgba(255, 255, 255, 0.08)
   - Border-radius: 24px
   - Padding: 32px
   - Backdrop-filter: blur(20px)
   - Box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5)

2. **Dashboard Elements** (inside card)
   - Chat bubbles:
     - Multiple rounded rectangles
     - Gradient backgrounds (green tint)
     - Different sizes for depth
   - Analytics graph:
     - Simple line/bar visualization
     - Green accent colors
   - Metric cards:
     - Small floating boxes showing "98%" response rate, "$12K+ revenue", etc.
   - Floating elements:
     - Small badge with "Live" indicator
     - Circular notification dots
     - Mini action buttons

3. **Visual Effects**
   - Light streaks: diagonal green gradients
   - Soft shadows beneath elements
   - Floating animation: translateY oscillation
   - Glow effects on interactive elements

### Animations

#### Background
- Subtle grid pattern (CSS)
- Floating particles (CSS pseudo-elements)
- Gradient orbs moving slowly

#### Elements
- Badge: subtle pulse glow
- Buttons: scale on hover (1.02), glow enhancement
- Right card: floating animation (3s infinite)
- Chat bubbles: staggered fade-in
- Metrics: count-up animation on load

#### Transitions
- All hover effects: 0.3s ease
- Page load: staggered fade-in (0.5s delay between elements)

## Functionality Specification

### Core Features
- Fully responsive design
- Pure CSS animations (no heavy libraries)
- Interactive hover states on buttons
- Smooth entrance animations

### User Interactions
- Button hover: visual feedback with glow/scale
- Card hover: slight lift effect
- All elements respond to cursor

## Acceptance Criteria
1. ✓ Full-width hero with no navbar
2. ✓ Dark background with green neon accents
3. ✓ 2-column layout on desktop, stacked on mobile
4. ✓ Badge with green glow at top left
5. ✓ Heading with neon green highlights on key words
6. ✓ Soft gray subheading
7. ✓ Two CTA buttons (primary green, secondary glass)
8. ✓ Glassmorphism card on right with dashboard elements
9. ✓ Animated background (grid/particles)
10. ✓ Floating animations
11. ✓ Responsive on mobile
12. ✓ Clean, premium SaaS feel