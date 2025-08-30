
interface HeroSectionProps{
    text:string;
    colour:string;
    width:string;

};


function HeroSectionButton({text,colour,width}:HeroSectionProps){

    return(
        <button className={`${colour} text-white ${width} font-semibold py-3 px-6 shadow-md hover:shadow-lg transition rounded-2xl`}>
            {text}
        </button>
    )
};



export default HeroSectionButton