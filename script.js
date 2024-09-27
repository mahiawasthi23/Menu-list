const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/images/breakfast1.jpg",
        desc: `I'm baby woke mlkshk wolf biters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch1.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes1.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/breakfast2.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 5,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/breakfast3.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 6,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/breakfast4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 7,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/breakfast5.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 8,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/breakfast6.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },

    {
        id: 9,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch2.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 10,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch3.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 11,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch4.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 12,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch5.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 13,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/lunch6.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },

    {
        id: 14,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes2.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
        id: 15,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes3.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
        id: 16,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes4.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
        id: 17,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes5.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
        id: 18,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/shakes6.jpg",
        desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<div class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}/>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}