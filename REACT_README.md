# NOVAE - React Version

Your NOVAE project has been successfully converted to React with Vite!

## Project Structure

```
NOVAE/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Archive.jsx
│   ├── GridItem.jsx
│   └── CartSidebar.jsx
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Archive.css
│   ├── GridItem.css
│   └── CartSidebar.css
├── App.jsx
├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

✅ **Component Structure**
- `App.jsx` - Main component managing state for cart and filters
- `Header.jsx` - Navigation bar with cart toggle
- `Hero.jsx` - Hero section with background parallax
- `Archive.jsx` - Products grid with filter functionality
- `GridItem.jsx` - Individual product cards with add-to-cart
- `CartSidebar.jsx` - Shopping cart with item management

✅ **Functionality**
- Filter products by category (ALL, THRIFT, JEWELRY)
- Dynamic grid layout (asymmetrical for all items, sequential for filtered)
- Add/remove items from cart
- Real-time total calculation
- Smooth animations and transitions

✅ **State Management**
- React Hooks (useState) for cart items, cart visibility, and filter state
- Props drilling for component communication
- Proper data flow from parent to child components

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Improvements Over Vanilla JS

1. **Component Reusability** - Each component is self-contained and reusable
2. **State Management** - Centralized state in App component
3. **Performance** - React optimizes re-renders with virtual DOM
4. **Maintainability** - Cleaner code structure and easier to scale
5. **Development Experience** - Hot module replacement with Vite

## Technologies Used

- **React 18** - UI library
- **Vite** - Modern bundler and dev server
- **CSS** - Styling with CSS variables
- **Space Grotesk Font** - Custom typography

## Notes

- All original functionality has been preserved
- CSS is modular and organized by component
- The parallax hero effect still works smoothly
- Cart animations and filter transitions are maintained
