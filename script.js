const customerData = [
    {
        name: 'Ameen',
        time: 'Today at 4:30 PM',
        phone: '9995598212'
    },
    {
        name: 'Ameen',
        time: 'Today at 4:30 PM',
        phone: '9995598212'
    },
    {
        name: 'John Doe',
        time: 'Yesterday at 2:15 PM',
        phone: '1234567890'
    },
    {
        name: 'Jane Smith',
        time: 'September 18, 2024 at 11:00 AM',
        phone: '0987654321'
    },
    {
        name: 'Ameen',
        time: 'Today at 4:30 PM',
        phone: '9995598212'
    },
    {
        name: 'John Doe',
        time: 'Yesterday at 2:15 PM',
        phone: '1234567890'
    },
    {
        name: 'Jane Smith',
        time: 'September 18, 2024 at 11:00 AM',
        phone: '0987654321'
    },
    {
        name: 'John Doe',
        time: 'Yesterday at 2:15 PM',
        phone: '1234567890'
    },
    {
        name: 'Jane Smith',
        time: 'September 18, 2024 at 11:00 AM',
        phone: '0987654321'
    }
];

const customerCardsContainer = document.getElementById('customer-cards');

// Create a hover box that is outside of the customer cards container
const hoverBox = document.createElement('div');
hoverBox.classList.add('hover-box');
hoverBox.innerHTML = 'Additional Information Here'; // Customize as needed
hoverBox.style.display = 'none'; // Initially hidden
document.body.appendChild(hoverBox); // Append it to the body

customerData.forEach(customer => {
    const customerCard = document.createElement('div');
    customerCard.classList.add('customer-card');

    customerCard.innerHTML = `
      <div class="customer-card-content">
        <div style="display: flex; align-items: center;">
          <div>
            <div class="image-profile">
              <i class="bi bi-person-fill"></i>
            </div>
          </div>
          <div class="profile-data">
            <h2 class="profile-name">${customer.name}</h2>
            <p class="profile-time"><i class="bi bi-clock-history"></i> ${customer.time}</p>
          </div>
        </div>
        <p class="profile-contact"><i class="bi bi-telephone"></i> ${customer.phone}</p>
      </div>
    `;

    // Show the hover box on mouse enter and hide it on mouse leave
    customerCard.addEventListener('mouseenter', (event) => {
        const rect = customerCard.getBoundingClientRect();
        hoverBox.style.display = 'block'; // Show the hover box
        hoverBox.style.position = 'absolute';
        hoverBox.style.left = `${rect.right + 10}px`; // Position it outside the card
        hoverBox.style.top = `${rect.top + window.scrollY}px`; // Align vertically with the card
    });

    customerCard.addEventListener('mouseleave', () => {
        hoverBox.style.display = 'none'; // Hide the hover box
    });

    customerCardsContainer.appendChild(customerCard);
});