function Header(){
    return <header className="flex justify-between bg-yellow-400 px-10 py-5">
        <h3>Logo</h3>

        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contract</a>
        </nav>
        <div>
            <button>Login</button>
            <button>register</button>
            

        </div>
        
    </header>
}

export default Header;