import '../style/Navigation.css'

function Navigation() {
    return (
        <ul class='nav nav-pills flex-column'>
            <li class='nav-item'>
                <h1>scribblenotes</h1>
            </li>
            <li class='nav-item '>
                <a class='nav-link current'>Dashboard</a>
                <i class="bi bi-house-fill"></i>
            </li>
            <li class='nav-item flex-row'>
                <a class='nav-link'>Account</a>
                <i class="bi bi-person-circle"></i>
            </li>

        </ul>
    );
}

export default Navigation;