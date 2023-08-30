import Image from "next/image";

export default function ImageBg() {
    return (
        <div className="bg-cover bg-center bg-repeat">
            <Image className="-z-50 object-cover w-screen h-sreen" fill alt="background-modelo" src="https://wallpaperaccess.com/full/4624167.jpg" />
        </div>
    )
};
