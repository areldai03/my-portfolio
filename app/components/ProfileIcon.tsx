const ProfileIcon = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur-sm"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="https://areldai03.github.io/my-portfolio/images/doggy.png"
                alt="Daisuke Maekawa"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-sm" 
            />
        </div>
    );
};

export default ProfileIcon;
