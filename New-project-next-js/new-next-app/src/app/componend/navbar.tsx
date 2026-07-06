export default function Navbar(){
    return (
        <nav className="flex w-full justify-between items-center py-3 px-5 bg-linear-90 from-blue-500 via-purple-500 to-pink-700">
            <h1>Logo</h1>
            <div>
                <a  href="/about">About</a>
                <a  href="/servics">Servics</a>
                <a  href="/contact">Contact</a>
            </div>
        </nav>
    )
}