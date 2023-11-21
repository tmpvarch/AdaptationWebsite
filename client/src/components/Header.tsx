import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg={'dark'} expand={'lg'} collapseOnSelect>
            <Container>
                <Navbar.Collapse id={'basic-navbar-nav'}>
                    <Nav className={'ms-auto'}>
                        <Nav.Link href={"/home"}>Главная страница </Nav.Link>
                        <Nav.Link href={"/home/myprofile"}>Профиль </Nav.Link>
                        <Nav.Link href={"/home/tasks"}>Задачи </Nav.Link>
                        <Nav.Link href={"/home/welcomepage"}>Все обо всем </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header