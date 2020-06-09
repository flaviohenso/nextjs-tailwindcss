import Menu from '../menu'

const Header = () => {
    return (
        <>
            <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
                <img src="/logo.png" width={150} className="p-2 hidden md:inline-block" />
                <img src="/codar.png" width={50} className="p-2 md:hidden" />
                <Menu/>
            </div>
            
        </>
    )
}

export default Header