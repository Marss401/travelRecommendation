const members = [
    {
        id: "1",
        name: "John Doe",
        description: "John is responsible for...",
        role: "CEO"
    },
    {
        id: "2",
        name: "Celina Thomas",
        description: "Celina is responsible for...",
        role: "Team Lead"
    },
    {
        id: "3",
        name: "Mike Tyson",
        description: "Mike is responsible for...",
        role: "Delivery Head"
    }
]

const teamMember = document.querySelector(".about_members");
members.forEach((member) => {
    teamMember.innerHTML += `
    <div class="about_member">
      <div class="about_icon">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="about_details">
        <h3 class="user_name">${member.name}</h3>
        <p class="user_description">${member.description}</p>
        <button type="button" class="user_role">${member.role}</button>
      </div>
    </div>`
})