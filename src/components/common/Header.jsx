

const Header = ({title}) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold text-gray-100">{title}</h2>
        </div>
    </header>
  )
}

export default Header;