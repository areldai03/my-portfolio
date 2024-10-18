import Image from "next/image";

const ProfileIcon = () => {
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100">
            <Image
                src="/images/doggy.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl" 
            />
            <h2 className="mt-4 text-xl md:text-2xl font-semibold">Daisuke Maekawa</h2>
            <p className="text-gray-600 text-sm md:text-base">B4 Ehime Univ</p>
        </div>
    );
};

export default ProfileIcon;
