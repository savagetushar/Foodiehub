import SocialMedia from "./SocialMedia";
import { useEffect, useState } from "react";
import ShimmerCard from "../components/ShimmerCard";

const Profile = () => {
    const [githubProfile, setGithubProfile] = useState(null);

    useEffect(() => {
        getGithubUser();
    }, []);

    const getGithubUser = async () => {
        try {
            const response = await fetch('https://api.github.com/users/savagetushar');
            const data = await response.json();
            setGithubProfile(data);
        } catch (error) {
            console.error("Error fetching GitHub user:", error);
        }
    };

    if (!githubProfile) return <ShimmerCard />;

    return (
        <div className="flex justify-center">
            <div className="shadow w-80 h-96 m-10 p-4">
                <h1 className="text-center font-bold mb-4 text-xl">About Me</h1>
                <img 
                    src={githubProfile.avatar_url} 
                    alt={`${githubProfile.name}'s avatar`} 
                    width="110px" 
                    className="rounded-full mx-auto"
                />
                <div className="mt-4">
                    <h3 className="text-black text-center font-bold text-2xl">{githubProfile.name}</h3>
                    <p className="text-center font-semibold mt-2">{githubProfile.bio || "No bio available"}</p>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
};

export default Profile;
