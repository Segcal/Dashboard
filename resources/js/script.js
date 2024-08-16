const dropdownButton = document.getElementById('toggle_btn');
const dropdownMenu = document.getElementById('sidebarMenu');
const toggleTheme = document.getElementById("toggle_switch");


// SIDEBAR FUNCTIONS
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});
window.addEventListener('click', (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add('hidden');
  }
});

// DARK MODE FUNCTION



// HIDE MENU ON SMALL SCREENS


// DROPDOWN FUNCTIONS
function toggleDropdown(
  dropdownButtonId,
  dropdownMenuId,
  iconClassDown,
  iconClassUp
) {
  const button = document.getElementById(dropdownButtonId);
  const menu = document.getElementById(dropdownMenuId);
  const iconElement = button.querySelector('i');

  button.addEventListener('click', () => {
    // Toggle the dropdown menu visibility
    menu.classList.toggle('hidden');

    // Toggle the icon direction
    if (iconElement.classList.contains(iconClassDown)) {
      iconElement.classList.remove(iconClassDown);
      iconElement.classList.add(iconClassUp);
    } else {
      iconElement.classList.remove(iconClassUp);
      iconElement.classList.add(iconClassDown);
    }
  });
}

// Initialize dropdowns with the toggle function
toggleDropdown(
  'dropdownButton',
  'dropdownMenu',
  'fa-chevron-down',
  'fa-chevron-right'
);
toggleDropdown(
  'dropdownButton2',
  'dropdownMenu2',
  'fa-chevron-down',
  'fa-chevron-right'
);
toggleDropdown('menu_btn', 'menu_content', 'fa-chevron-down', 'fa-chevron-right');
toggleDropdown(
  'menu_btn2',
  'menu_content2',
  'fa-chevron-down',
  'fa-chevron-right'
);
toggleDropdown(
  'menu_btn3',
  'menu_content3',
  'fa-chevron-down',
  'fa-chevron-right'
);