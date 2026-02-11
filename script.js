/**
 * NOVAE ARCHIVE - INTERACTION SCRIPT
 * Focus: Restrained, intentional motion.
 */

// Cart data store
let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ARCHIVAL REVEAL (Intersection Observer)
    // Ensures items feel "discovered" as the user scrolls.
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adds a class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Once revealed, we stop observing for a cleaner performance
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Target all archive grid items
    const archiveItems = document.querySelectorAll('.grid-item');
    archiveItems.forEach(item => {
        revealOnScroll.observe(item);
    });


    // 2. HERO PARALLAX (Subtle Depth)
    // Creates a "cosmic" sense of scale without heavy animation.
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            const bgImages = document.querySelectorAll('.bg-image');
            
            bgImages.forEach(img => {
                // Move images slightly slower than the scroll for depth
                img.style.transform = `translateY(${scrollValue * 0.15}px) scale(1.1)`;
            });
        });
    }


    // 3. SMOOTH ENTRY TRANSITIONS
    // Communicates confidence through a calm start
    const body = document.querySelector('body');
    window.addEventListener('load', () => {
        body.style.opacity = '1';
    });


    // 4. INTENTIONAL HOVER (Metadata Update)
    // Enhances the "archival" feel by treating items as entries.
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Logic for a custom cursor or status bar could go here
            console.log("Inspecting Artifact..."); 
        });
    });


    // 5. FILTER FUNCTIONALITY
    const filterBtns = document.querySelectorAll('.filter-btn');
    const gridItems_filter = document.querySelectorAll('.grid-item');
    const archiveGrid = document.querySelector('.archive-grid');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update grid layout
            if (filterValue === 'all') {
                archiveGrid.classList.remove('sequential-grid');
                archiveGrid.classList.add('unorganised');
            } else {
                archiveGrid.classList.remove('unorganised');
                archiveGrid.classList.add('sequential-grid');
            }

            // Filter items with animation
            gridItems_filter.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    // Show item
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 0);
                } else {
                    // Hide item
                    item.classList.remove('visible');
                    item.classList.add('hidden');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 350);
                }
            });
        });
    });


    // 6. ADD TO CART FUNCTIONALITY
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get item details
            const gridItem = btn.closest('.grid-item');
            const itemName = gridItem.querySelector('.item-info span:first-child').textContent;
            const itemPrice = gridItem.querySelector('.item-info span:last-child').textContent;
            const priceValue = parseFloat(itemPrice.replace('$', ''));

            // Create unique ID
            const itemId = Date.now();

            // Add to cart
            const cartItem = {
                id: itemId,
                name: itemName,
                price: priceValue,
                displayPrice: itemPrice
            };

            cartItems.push(cartItem);
            updateCart();

            // Animation feedback
            btn.textContent = 'Added!';
            btn.style.background = '#4CAF50';
            
            setTimeout(() => {
                btn.textContent = 'Add to Cart';
                btn.style.background = '';
            }, 1500);
        });
    });


    // 7. CART SIDEBAR TOGGLE
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');

    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
    });

    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
    });


    // 8. UPDATE CART DISPLAY
    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPrice = document.getElementById('total-price');

        // Update count
        cartCount.textContent = cartItems.length;

        // Clear previous items
        cartItemsContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">No items yet</p>';
            totalPrice.textContent = '$0';
            return;
        }

        // Add items to sidebar
        let total = 0;
        cartItems.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.displayPrice}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">×</button>
            `;

            cartItemsContainer.appendChild(cartItemEl);
            total += item.price;

            // Add remove functionality
            const removeBtn = cartItemEl.querySelector('.cart-item-remove');
            removeBtn.addEventListener('click', () => {
                removeFromCart(item.id);
            });
        });

        // Update total
        totalPrice.textContent = '$' + total.toFixed(2);
    }


    // 9. REMOVE FROM CART
    function removeFromCart(itemId) {
        cartItems = cartItems.filter(item => item.id !== itemId);
        updateCart();
    }
});