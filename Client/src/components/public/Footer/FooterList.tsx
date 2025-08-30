
interface FooterListProps{
    text:string;
    link:string;
}

function FooterList({link,text}:FooterListProps){
    return(
       <li><a href={link} className="hover:text-white transition-colors duration-200">{text}</a></li>
    )
};

export default FooterList;