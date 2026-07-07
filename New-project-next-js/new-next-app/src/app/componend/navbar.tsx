export default function Navbar(){
    return (
        <nav className="flex gap-4 w-full justify-between items-center py-4 px-5 bg-linear-90 from-blue-800 via-purple-700 to-pink-700">
            <h1>Logo</h1>
            <div className="flex gap-4">
                <a  href="/about">About</a>
                <a  href="/servics">Servics</a>
                <a  href="/contact">Contact</a>
            </div>
        </nav>
    )
}