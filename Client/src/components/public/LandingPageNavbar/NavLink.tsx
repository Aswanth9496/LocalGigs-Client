
interface NavLinkProps{
      text:string;
      path:string
}



function NavLink({text,path}:NavLinkProps){
        return(
            <a href={path}
            className="text-gray-500 hover:text-black font-medium transition-colors duration-200"
            >
            {text}
            </a>
        )
};

export default NavLink;