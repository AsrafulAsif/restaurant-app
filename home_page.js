document.addEventListener("DOMContentLoaded", () => {

    const authToken = () => {
        return localStorage.getItem('authToken');
    };

    if (!authToken()) {
        // If auth token exists, redirect to the dashboard
        window.location.href = "login_page.html";
        return;  // Stop further execution of the script
    }


    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const sections = document.querySelectorAll('.section');
    let activeItem = sidebarItems[0];  
    let activeSection = sections[0];

    // Initialize by hiding all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.classList.add('hidden');  // Hide all sections except the first
        }
    });

    // Activate the first sidebar item and corresponding section by default
    activeSidebarWithContent(0);
    
    function activeSidebarWithContent(index) {
        // Remove 'active' class from the current active sidebar item and section
        activeItem.classList.remove('active');
        activeSection.classList.add('hidden');  // Hide the current active section
        
        // Add 'active' class to the new sidebar item
        sidebarItems[index].classList.add('active');
        activeItem = sidebarItems[index];

        // Show the section that corresponds to the clicked sidebar item
        const newActiveSection = sections[index];
        newActiveSection.classList.remove('hidden');  // Show the selected section
        activeSection = newActiveSection;

        // Trigger the API call based on the section
        switch (sidebarItems[index].dataset.section) {
            case 'dashboard':
                fetchDashboardData(); // API call for Dashboard
                break;
            case 'order':
                fetchOrderData(); // API call for Order
                break;
            case 'food-item':
                fetchFoodItemData(); // API call for Food Item
                break;
            case 'chef':
                fetchChefData(); // API call for Chef
                break;
            case 'waiter':
                fetchWaiterData(); // API call for Waiter
                break;
        }
    }

    // Set up click event for each sidebar item
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeSidebarWithContent(index);
        });
    });

    // API calls for each section
    function fetchDashboardData() {
        console.log("Fetching dashboard data...");
        // Add your API call for dashboard here
        // fetch('your_dashboard_api_url')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle dashboard data
        //     });
    }

    function fetchOrderData() {
        console.log("Fetching order data...");
        // Add your API call for order here
        // fetch('your_order_api_url')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle order data
        //     });
    }

    function fetchFoodItemData() {
        console.log("Fetching food item data...");
        // Add your API call for food item here
        // fetch('your_food_item_api_url')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle food item data
        //     });
    }

    function fetchChefData() {
        console.log("Fetching chef data...");
        // Add your API call for chef here
        // fetch('your_chef_api_url')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle chef data
        //     });
    }

    function fetchWaiterData() {
        console.log("Fetching waiter data...");
        // Add your API call for waiter here
        // fetch('your_waiter_api_url')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle waiter data
        //     });
    }
});
